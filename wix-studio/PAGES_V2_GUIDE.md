# ShivohamPath · Remaining Pages v2 + Semrush Fixes

> **Classic Wix editor:** your site uses the classic editor (Desktop and Mobile views only, no breakpoints). Use the sizes in `CLAUDE_IN_CHROME_TASKS.md` instead of the breakpoint heights below.

This covers the five pages that were still built from many separate embeds,
plus the Wix-side steps for the Semrush Site Audit of 29 October 2026
(health 74%, 64 errors, 144 warnings).

---

## Part 1: One embed per page (fixes the "slow load speed" errors)

Each of these pages loaded 5 to 7 separate embeds, and each embed is a small
website of its own that downloads its own fonts. Each page is now **one
embed**. The sections look exactly as before (checked side by side at
desktop and phone width).

| Page | New file | Replaces these embeds |
|---|---|---|
| About | `embeds/about-v2.html` | about-hero, story-section, lineage-section, lineage-thread-section, lalleshwari-section, shaktipat-section, offerings-section |
| Courses | `embeds/courses-v2.html` | courses-hero, courses-philosophy, courses-current, courses-coming, courses-cta |
| Foundations of Jyotish | `embeds/jyotish-v2.html` | jyotish-hero, jyotish-what, jyotish-pillars, jyotish-for-who, jyotish-notify |
| She Who Becomes Him | `embeds/swbh-v2.html` | swbh-hero, swbh-for-who, swbh-modules, swbh-testimonials, swbh-cta |
| Karmic Knots | `embeds/karmic-knots-v2.html` | karmic-knots-hero, karmic-knots-what, karmic-knots-process, karmic-knots-details, karmic-knots-cta |

> **Check the section order.** The order above is my best reading of your
> files. If a page on your live site shows its sections in a different
> order, tell me and I'll rebuild that page (it takes a minute).

### For each page

1. Open the page in Wix. Note where the old section embeds are, then
   **delete all of them** (keep the Instagram banner strip at the top, if any).
2. Add one section, background `#0a0a0f`, **top and bottom padding 0**.
3. Add an **Embed HTML**, paste the whole new file, stretch it to **100%
   width** with no side margins.
4. Set its height on each breakpoint from the table below.
5. Publish, then check the page on your phone.

No page code is needed for these pages.

### Heights

The 389px "Small phones" breakpoint you added for the homepage applies here too.

| Page | Desktop (1001px+) | Tablet (751–1000px) | Phones (390–750px) | Small phones (320–389px) |
|---|---|---|---|---|
| About | **14690px** | **17370px** | **22190px** | **23460px** |
| Courses | **4130px** | **4130px** | **4700px** | **4840px** |
| Foundations of Jyotish | **5410px** | **6830px** | **7950px** | **8310px** |
| She Who Becomes Him | **3440px** | **4900px** | **6100px** | **6340px** |
| Karmic Knots | **4710px** | **5310px** | **6400px** | **6570px** |

If the bottom of a page is cut off on some screen, raise that breakpoint's
height by 100px. If there's empty space at the bottom, lower it by 100px.

### Editing these pages later

The section files are still the source. To change a section, edit its file
in `embeds/`, then run `python3 wix-studio/tools/merge_pages.py` (or ask
Claude) to rebuild the page files.

---

## Part 2: The other Semrush issues (Wix-side)

These problems live in Wix settings, blog posts, or URLs, not in the page
files, so they're fixed in the Wix dashboard. In Semrush, click each issue
to see the exact pages it affects.

### 10 pages couldn't be crawled · 3 pages returned 5XX errors
These are usually pages that no longer exist or that block crawlers:
deleted or renamed booking services (`/service-page/…`,
`/booking-calendar/…`), old course or challenge pages, or members pages.
1. In Semrush, open each issue and copy the URLs.
2. Open each URL yourself. If it's a page that no longer exists, add a
   **301 redirect** in Wix: **Settings → SEO → URL Redirect Manager →
   New redirect**, from the old address to the page that replaces it
   (usually `/readings` or `/courses`).
3. If it's a members/checkout page, nothing is needed.

### 2 incorrect pages in sitemap.xml
Wix builds the sitemap from every page that allows indexing. Common culprits
are hidden or test pages (for example `Home v2` from the homepage build, or an
old homepage you kept). For each page Semrush lists: open its **SEO settings**
in Wix and turn **"Let search engines index this page"** off, or delete the
page if it's no longer needed.

### 14 broken external links
None of these are in the page files (those only link to your Instagram and
YouTube). They're in **blog posts or text typed directly in Wix**. Semrush shows
the page each broken link sits on: open that post, fix or remove the link, and
republish.

### 27 pages with slow load speed
- **Rebuilt pages:** Home, Readings and the five pages above now load as one embed each.
- **Blog posts:** avoid embedding videos or HTML boxes in posts. Use images
  under about 1600px wide; Wix compresses images uploaded through its own
  image tool.
- **Old widgets:** remove any Instagram Feed or other third-party widgets
  you no longer use. They're heavy.

### 15 pages blocked from search engines
Wix hides members, account, checkout and booking-form pages from search
engines on purpose. That's expected. Only act if Semrush lists a page you
want people to find on Google, such as a blog post or a main page. Then check
that page's SEO settings for "Let search engines index this page".

### Renaming booking services: add redirects
When you rename services (The Spiritual Path, Relationships & Marriage,
Vishwanath Oracle Reading), Wix may change their addresses. Add a 301 redirect
from each old address to its new one, so old links and Google results still
work.
