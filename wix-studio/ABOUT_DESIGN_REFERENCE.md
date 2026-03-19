# About Page — Design Reference

Quick-look table for every element on the About page. Use this while working in the editor — no need to dig through the mockup HTML.

---

## Color Tokens

| Token | Hex / Value | Used For |
|-------|-------------|----------|
| `--bg` | `#0a0a0f` | Page background, story section strip |
| `--bg2` | `#0f0a1a` | Intro split strip, pull quote strip |
| `--bg3` | `#131020` | Card backgrounds, lineage section strip |
| `--bg4` | `#1a1525` | Floating boxes (credential, stats), card hover state |
| `--gold` | `#C9A84C` | Headings em, icons, eyebrows, CTAs |
| `--gold2` | `rgba(201,168,76,0.5)` | Nav CTA border |
| `--gold3` | `rgba(201,168,76,0.15)` | Button hover fill |
| `--line` | `rgba(232,224,208,0.07)` | Section divider lines, card borders |
| `--line2` | `rgba(201,168,76,0.2)` | Gold borders on cards and floating boxes |
| `--text` | `#e8e0d0` | Primary text, bold words, headings |
| `--text2` | `rgba(232,224,208,0.65)` | Body paragraphs |
| `--text3` | `rgba(232,224,208,0.35)` | Subtitles, captions, card body, links |
| `--text4` | `rgba(232,224,208,0.15)` | Footer copyright |

---

## Typography Tokens

| Role | Font Family | Size | Weight | Style | Color |
|------|-------------|------|--------|-------|-------|
| Page body default | EB Garamond | 17px | 400 | normal | `--text2` |
| H1 (hero) | Cormorant Garamond | clamp(42px → 76px) | 300 | normal | `--text` |
| H2 (section headings) | Cormorant Garamond | clamp(32px → 52px) | 300 | normal | `--text` |
| H3 (story headings) | Cormorant Garamond | clamp(26px → 36px) | 300 | normal | `--text` |
| H4 (card titles) | Cormorant Garamond | 20px | 400 | normal | `--text` |
| Gold italic accent | Cormorant Garamond | (inherits) | 300 | italic | `--gold` |
| Eyebrow labels | Cinzel | 10px | 400 | normal | `--gold` |
| Small tags (offering/story) | Cinzel | 9px | 400 | normal | `--gold` |
| Nav links | EB Garamond | 14px | 400 | normal | `--text3` |
| Nav logo | Cinzel | 14px | 400 | normal | `--gold` |
| Buttons | Cinzel | 10–11px | 400 | normal | see buttons section |
| Link text ("Read more →") | Cinzel | 10px | 400 | normal | `--text3` (hover: `--gold`) |
| Stats number | Cormorant Garamond | 28px | 300 | normal | `--gold` |
| Stats label | Cinzel | 8px | 400 | normal | `--text3` |
| Footer text | Cinzel | 9px | 400 | normal | `--text4` |

---

## Letter Spacing Reference

| Element | Letter Spacing |
|---------|---------------|
| Nav logo | 3px |
| Nav links | 1px |
| Eyebrow labels | 4px |
| Story tags | 3px |
| Offering tags | 2.5px |
| Pull quote citation | 3px |
| Stats label | 2px |
| Credential title | 2px |
| Button text | 2–2.5px |
| Offering link | 2px |
| Footer | 2px |

---

## Section-by-Section Element Reference

### Hero Banner

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#0f0a1a` | min-height 70vh; padding 120px top, 80px bottom |
| Eyebrow text | Cinzel | 10px | 400 | `#C9A84C` | Letter-spacing 4px; margin-bottom 20px |
| H1 line 1–2 | Cormorant Garamond | 72px (clamp) | 300 | `#e8e0d0` | "Loved Him" = italic gold |
| H1 italic em | Cormorant Garamond | (same) | 300 | `#C9A84C` | italic |
| Divider line | — | 1px × 80px | — | `rgba(201,168,76,0.2)` | Flanks a 6×6px gold diamond |
| Divider diamond | — | 6×6px | — | `#C9A84C` | Rotated 45°, opacity 70% |
| Subtitle | EB Garamond | 18px | 400 | `rgba(232,224,208,0.35)` | Italic; letter-spacing 0.5px |
| Mandala SVG | — | 600×600px | — | `#C9A84C` | Opacity 5%; spins 120s; send to back |

---

### Intro Split (Portrait + Bio)

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#0f0a1a` | Padding 100px top/bottom; top border `--line` |
| Portrait frame | — | 3:4 ratio | — | border `rgba(201,168,76,0.2)` | object-fit: cover |
| Corner brackets | — | 28×28px | — | `#C9A84C` | Opacity 40%; offset –10px from image corners |
| Vignette overlay | — | full image | — | transparent → `rgba(10,10,15,0.5)` | Gradient top→bottom |
| Credential box bg | — | — | — | `#1a1525` | Border `rgba(201,168,76,0.2)`; padding 18px 24px; bottom-right of image, offset –24px |
| Credential title | Cinzel | 10px | 400 | `#C9A84C` | Letter-spacing 2px |
| Credential items | EB Garamond | 12px | 400 | `rgba(232,224,208,0.35)` | Line-height 1.8 |
| Stats box bg | — | — | — | `#1a1525` | Border `rgba(201,168,76,0.2)`; padding 16px 20px; top-left of image, offset –32px |
| Stats number | Cormorant Garamond | 28px | 300 | `#C9A84C` | Line-height 1 |
| Stats label | Cinzel | 8px | 400 | `rgba(232,224,208,0.35)` | Letter-spacing 2px |
| Stats divider | — | 1px | — | `rgba(232,224,208,0.07)` | Full-width inside box |
| Eyebrow "THE GUIDE" | Cinzel | 10px | 400 | `#C9A84C` | Letter-spacing 4px |
| H2 | Cormorant Garamond | 48px (clamp) | 300 | `#e8e0d0` | "Astrologer." and "Mystic." = italic gold |
| H2 italic em | Cormorant Garamond | (same) | 300 | `#C9A84C` | italic |
| Body paragraphs | EB Garamond | 17px | 400 | `rgba(232,224,208,0.65)` | Line-height 1.85 |
| Bold within body | EB Garamond | 17px | 400 | `#e8e0d0` | (not bold weight, just brighter color) |
| Short left divider | — | 40px line | — | `rgba(201,168,76,0.2)` | Left-aligned + diamond |
| Italic pull line | Cormorant Garamond | 20px | 300 | `rgba(232,224,208,0.8)` | Italic |

---

### Pull Quote

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#0f0a1a` | Padding 80px top/bottom; top + bottom border `--line` |
| Quote text | Cormorant Garamond | 38px (clamp) | 300 | `#e8e0d0` | Italic; max-width 800px; line-height 1.35 |
| Quote em (gold phrase) | Cormorant Garamond | (same) | 300 | `#C9A84C` | Non-italic — override italic parent |
| Citation | Cinzel | 10px | 400 | `rgba(232,224,208,0.35)` | Letter-spacing 3px; margin-top 24px |

---

### Story Section (×3 blocks)

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#0a0a0f` | Padding 80px top/bottom |
| Story number (01 / 02 / 03) | Cormorant Garamond | 72px | 300 | `rgba(201,168,76,0.08)` | Very faint; line-height 1 |
| Story tag (e.g. "THE / SEARCHING") | Cinzel | 9px | 400 | `#C9A84C` | Letter-spacing 3px; line-height 1.6 |
| Story H3 | Cormorant Garamond | 34px (clamp) | 300 | `#e8e0d0` | "Fit." / "Forgotten River" / "Shivoham Path" = italic gold |
| Story H3 italic em | Cormorant Garamond | (same) | 300 | `#C9A84C` | italic |
| Story body | EB Garamond | 17px | 400 | `rgba(232,224,208,0.65)` | Line-height 1.85 |
| Story 03 closing line | Cormorant Garamond | 19px | 300 | `#C9A84C` | Italic; margin-top 8px |
| Block separator | — | 1px | — | `rgba(232,224,208,0.07)` | Margin 60px top + bottom; omit after last block |

---

### Lineage Cards (4-up)

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#131020` | Padding 80px top/bottom; top + bottom border `--line` |
| Section eyebrow | Cinzel | 10px | 400 | `#C9A84C` | Letter-spacing 4px |
| Section H2 | Cormorant Garamond | 44px (clamp) | 300 | `#e8e0d0` | "Paths" = italic gold |
| Card background | — | — | — | `#131020` | Border `rgba(232,224,208,0.07)`; padding 36px 28px; text-align center |
| Card hover border | — | — | — | `rgba(201,168,76,0.2)` | Via Interactions: on hover |
| Card hover top line | — | 1px × 40px | — | `#C9A84C` | Opacity 0 → 100 on hover; centered top |
| Card icon | (text/emoji) | 24px | 400 | `#C9A84C` | Opacity 70%; margin-bottom 16px |
| Card H4 | Cormorant Garamond | 20px | 400 | `#e8e0d0` | Margin-bottom 10px; line-height 1.2 |
| Card body | EB Garamond | 13px | 400 | `rgba(232,224,208,0.35)` | Line-height 1.7 |

---

### Offerings Grid (2×2)

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#0a0a0f` | Padding 100px top/bottom |
| Section eyebrow | Cinzel | 10px | 400 | `#C9A84C` | Letter-spacing 4px |
| Section H2 | Cormorant Garamond | 48px (clamp) | 300 | `#e8e0d0` | "Walk With You" = italic gold |
| Card background | — | — | — | `#131020` | Border `rgba(232,224,208,0.07)`; padding 40px 36px |
| Card hover background | — | — | — | `#1a1525` | Via Interactions: on hover |
| Card hover border | — | — | — | `rgba(201,168,76,0.2)` | Via Interactions: on hover |
| Card left edge line | — | 2px wide × 100% tall | — | `#C9A84C` | Opacity 0 → 100 on hover; left edge |
| Card tag | Cinzel | 9px | 400 | `#C9A84C` | Letter-spacing 2.5px; margin-bottom 14px |
| Card H3 | Cormorant Garamond | 26px | 400 | `#e8e0d0` | Margin-bottom 12px; line-height 1.2 |
| Card body | EB Garamond | 15px | 400 | `rgba(232,224,208,0.65)` | Line-height 1.75; margin-bottom 24px |
| Card link | Cinzel | 10px | 400 | `rgba(232,224,208,0.35)` | Letter-spacing 2px; hover = `#C9A84C`; append "→" |

---

### Closing CTA

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Strip background | — | — | — | `#0a0a0f` | Padding 120px top/bottom; top border `--line` |
| Eyebrow | Cinzel | 10px | 400 | `#C9A84C` | Letter-spacing 4px; margin-bottom 20px |
| H2 | Cormorant Garamond | 50px (clamp) | 300 | `#e8e0d0` | "The Highest Truth." = italic gold; max-width 700px; line-height 1.15 |
| H2 italic em | Cormorant Garamond | (same) | 300 | `#C9A84C` | italic |
| Subtitle | EB Garamond | 17px | 400 | `rgba(232,224,208,0.35)` | Italic; max-width 480px; margin-bottom 48px |
| Primary button | Cinzel | 11px | 400 | text: `#0a0a0f` | Background `#C9A84C`; letter-spacing 2.5px; padding 14px 36px; no border-radius |
| Primary button hover | — | — | — | background: `#a8893a` | Slightly darker gold |
| Ghost button | Cinzel | 11px | 400 | `#C9A84C` | Background transparent; border 1px `rgba(201,168,76,0.5)`; padding 13px 36px; no border-radius |
| Ghost button hover | — | — | — | background: `rgba(201,168,76,0.15)` | Via Interactions |

---

## Borders & Spacing Quick Reference

| Context | Value |
|---------|-------|
| Section top/bottom divider | 1px solid `rgba(232,224,208,0.07)` |
| Gold border (cards, floating boxes) | 1px solid `rgba(201,168,76,0.2)` |
| Card grid gap | 2px |
| Two-column content gap | 80px |
| Standard section padding | 80–100px top/bottom |
| Hero / CTA section padding | 120px top, 80–120px bottom |
| Max content width | 1200px |
| Max centered text width | 700–800px |
| Border radius everywhere | 0 (none) |
