"""Combine per-section Wix embed files into one embed per page.

Run:  python3 wix-studio/tools/merge_pages.py   (rewrites embeds/*-v2.html)

Each section keeps its own CSS inside a declarative shadow root, so section
styles can't collide. Fonts load once for the whole page.
"""
import re, sys, pathlib

EMB = pathlib.Path(__file__).resolve().parent.parent / 'embeds'
FONTS = ('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400'
         '&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;500&display=swap')

PAGES = {
  'about-v2':        ('About', ['about-hero','story-section','lineage-section','lineage-thread-section','lalleshwari-section','shaktipat-section','offerings-section']),
  'courses-v2':      ('Courses', ['courses-hero','courses-philosophy','courses-current','courses-coming','courses-cta']),
  'jyotish-v2':      ('Foundations of Jyotish', ['jyotish-hero','jyotish-what','jyotish-pillars','jyotish-for-who','jyotish-notify']),
  'swbh-v2':         ('She Who Becomes Him', ['swbh-hero','swbh-for-who','swbh-modules','swbh-testimonials','swbh-cta']),
  'karmic-knots-v2': ('Karmic Knots', ['karmic-knots-hero','karmic-knots-what','karmic-knots-process','karmic-knots-details','karmic-knots-cta']),
}


def block_end(css, i):
    """Index just past the matching close brace of the block opening at css[i] == '{'."""
    depth = 0
    for j in range(i, len(css)):
        if css[j] == '{': depth += 1
        elif css[j] == '}':
            depth -= 1
            if depth == 0: return j + 1
    return len(css)

def container_aware(css):
    """Make width-based layout follow the page column instead of the screen.

    Each width media query gets a container-query twin, and every vw length
    gets a cqw twin declared after it. Browsers without container queries
    ignore the twins and keep today's behaviour; in browsers with them the
    column is never wider than the screen, so the container rules win.
    """
    out, i = [], 0
    for m in re.finditer(r'@media\s*\(([^)]*(?:max|min)-width[^)]*)\)\s*\{', css):
        if m.start() < i: continue
        end = block_end(css, m.end() - 1)
        block = css[m.start():end]
        inner = block[block.index('{'):]
        out.append(css[i:end])
        out.append('\n@container (' + m.group(1) + ') ' + inner)
        i = end
    out.append(css[i:])
    css = ''.join(out)
    def twin(d):
        decl = d.group(0)
        return decl + ' ' + re.sub(r'(\d+(?:\.\d+)?)vw', r'\1cqw', decl)
    return re.sub(r'[a-z-]+\s*:[^;{}]*\d+(?:\.\d+)?vw[^;{}]*;', twin, css)

def scope_css(css):
    # page-level selectors become the shadow host
    def fix_selectors(m):
        sel = m.group(1)
        sel = re.sub(r'(^|[\s,>+~])(html|body)(?=[\s,.:#\[>+~{]|$)', lambda x: x.group(1) + ':host', sel)
        sel = sel.replace(':root', ':host')
        sel = re.sub(r':host(\s*,\s*:host)+', ':host', sel)
        return sel + '{'
    css = re.sub(r'([^{}@][^{}]*?)\{', fix_selectors, css)
    # vh inside a tall fixed-height iframe would explode; pin to an 820px viewport
    css = re.sub(r'(\d+(?:\.\d+)?)vh', lambda m: f'{round(float(m.group(1)) * 8.2)}px', css)
    css = re.sub(r'@import url\([^)]*\);?', '', css)
    return container_aware(css)

def section(name):
    s = (EMB / f'{name}.html').read_text()
    assert '<script' not in s, name
    css = '\n'.join(re.findall(r'<style[^>]*>(.*?)</style>', s, flags=re.S))
    m = re.search(r'<body[^>]*>(.*)</body>', s, flags=re.S)
    body = m.group(1) if m else s
    body = re.sub(r'<style[^>]*>.*?</style>', '', body, flags=re.S)
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S).strip()
    # host defaults: block, dark, fonts inherited from the page
    host = ':host { display: block; isolation: isolate; background: #0a0a0f; }\n'
    return (f'<div class="sec" data-section="{name}"><template shadowrootmode="open">'
            f'<style>{host}{scope_css(css)}</style>{body}</template></div>')

def build(slug, title, names):
    parts = '\n'.join(section(n) for n in names)
    html = f'''<!DOCTYPE html>
<!--
  SHIVOHAMPATH · {title.upper()} PAGE BODY (v2)
  ONE "Embed HTML" element for the whole page (it replaces the separate
  section embeds: {", ".join(names)}).
  Setup and exact heights: wix-studio/PAGES_V2_GUIDE.md
  Built from those section files by combining them; edit the section files,
  then rebuild, rather than editing this file by hand.
-->
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shivoham Path · {title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="{FONTS}" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{FONTS}"></noscript>
<style>
  html, body {{ margin: 0; padding: 0; background: #0a0a0f; }}
  .sec {{ display: block; container-type: inline-size; }}
  /* One fixed column width per Wix breakpoint, so one embed height fits every
     screen in it: screens under 980px get a 750px column, phones 390px and up a 390px one. */
  @media (max-width: 979px) {{ .page {{ max-width: 750px; margin: 0 auto; }} }}
  @media (max-width: 750px) {{ .page {{ max-width: 390px; }} }}
</style>
</head>
<body>
<main class="page">
{parts}
</main>
<script>
  // Older browsers without declarative shadow DOM: attach the sections by hand.
  if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRootMode')) {{
    document.querySelectorAll('template[shadowrootmode]').forEach(function (t) {{
      var host = t.parentNode;
      host.attachShadow({{ mode: 'open' }}).appendChild(t.content);
      t.remove();
    }});
  }}
</script>
</body>
</html>
'''
    out = EMB / f'{slug}.html'
    out.write_text(html)
    print(f'{slug}: {len(names)} sections, {len(html)//1024} KB')

for slug, (title, names) in PAGES.items():
    build(slug, title, names)
