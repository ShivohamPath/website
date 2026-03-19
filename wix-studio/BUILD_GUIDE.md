# ShivohamPath · Wix Studio Complete Build Guide

## Before You Start — Install These Apps

Go to **Dashboard → Add Apps** and install all of these first:

| App | Purpose |
|-----|---------|
| Wix Bookings | Readings / session booking |
| Wix Stores | PDF books (digital products) |
| Wix Blog | Blog / archive |
| Wix Events | Live course sessions |
| Wix Pricing Plans | Course enrollment |
| Wix Members Area | Gated course content |
| Instagram Feed by Wix | Instagram on homepage |

---

## Step 1 — Create New Site in Wix Studio

1. Dashboard → **Create New Site**
2. Choose **Blank Template** (not a themed one — we're bringing our own design)
3. Name it "ShivohamPath"
4. Open in **Wix Studio Editor**

---

## Step 2 — Set Up Global CSS

1. In the editor top bar → click **Dev Mode** (turns blue when on)
2. Left sidebar → click **</>** (Code icon)
3. Click **CSS** → **global.css**
4. Select all existing content and delete it
5. Paste the entire contents of `wix-studio/global.css` from this repo
6. Press **Ctrl+S** to save

---

## Step 3 — Set Fonts in Design Panel

1. Left sidebar → **Design** (paint palette icon)
2. Click **Text Themes**
3. Set each level:
   - **Heading 1–4** → Cormorant Garamond, Weight 300
   - **Body / Paragraph** → EB Garamond, Regular
   - **Small / Label** → Cinzel, Regular
4. Click **Save**

---

## Step 4 — Set Color Palette

1. Still in **Design** → click **Site Colors**
2. Replace the 6 main swatches with:

| Slot | Color | Hex |
|------|-------|-----|
| Color 1 (Background) | Deep Black | `#0a0a0f` |
| Color 2 (Surface) | Dark Purple-Black | `#0f0a1a` |
| Color 3 (Primary) | Gold | `#C9A84C` |
| Color 4 (Text) | Warm White | `#e8e0d0` |
| Color 5 (Accent 1) | Purple | `#8B6FBF` |
| Color 6 (Accent 2) | Rust | `#BF6F6F` |

---

## Step 5 — Upload Logo

1. Left sidebar → **Media**
2. Upload `ShivohamPath-logo.png` (the gold Shiva face on black)
3. Place it in the **Header** as your nav logo
4. Set size to approx 120px wide
5. Link the logo to the Home page

---

## Step 6 — Build the Header (applies site-wide)

**Layout:**
```
[Logo]        About · Readings · Courses · Blog        [Book a Reading]
```

1. Add a **Header** strip
2. Background: `#0a0a0f` at 85% opacity
3. Enable **Blur backdrop** effect
4. Bottom border: `rgba(201,168,76,0.25)` 1px
5. Add logo image (left)
6. Add nav links (center) — EB Garamond, 14px, `rgba(232,224,208,0.65)`
7. Add "Book a Reading" button (right) — apply class `btn-ghost`
8. Set header to **Sticky** (stays on scroll)

---

## Step 7 — Build the Footer (applies site-wide)

**Layout:** 4 columns — Brand | Readings | Courses | Explore

1. Add a **Footer** strip
2. Background: `#0a0a0f`
3. Top border: `rgba(232,224,208,0.07)`
4. **Column 1 — Brand:**
   - Logo
   - Tagline: "Esoteric astrology for souls who came here with unfinished business."
   - Social icons: Instagram, YouTube (36×36px boxes with gold border)
5. **Column 2 — Readings:** list all 6 services
6. **Column 3 — Courses:** Esoteric Astrology Course, Live Sessions, Books & PDFs
7. **Column 4 — Explore:** Blog, About Veena, Testimonials, Instagram, Contact
8. Bottom strip: Copyright text in Cinzel 9px

---

## Step 8 — Build Each Page

### HOME PAGE

**Section 1 — Hero**
- Full viewport height strip
- Background: use `hero-section` class for the radial gradient
- Add rotating mandala SVG as HTML embed (code in reference file)
- Center content:
  - Pill tag: "Astrologist · Psychic · Mystic" — Cinzel 10px, gold border
  - H1: "Your Chart Is A Karmic Map" — Cormorant Garamond 88px, weight 300
  - "A Karmic Map" in italic gold
  - Subtitle (italic, EB Garamond 18px, secondary text color)
  - Two buttons: `btn-primary` "Book a Reading" + `btn-ghost` "Explore the Path"
- Stats bar below buttons (4 columns, subtle top/bottom border):
  - 2.3M · Monthly Reach
  - 99K+ · Walking The Path
  - D60 · Soul Chart Readings
  - ∞ · Lifetimes Decoded
- Scroll indicator (thin line + "SCROLL" text) at bottom

**Section 2 — About (teaser)**
- Two-column: image left, text right
- Image: 3:4 portrait frame with gold border + corner accents
- Floating name tag: "VEENA MAHESHWARI · Mystic · Misfit · Astrologer"
- Text: eyebrow "The Guide" → H2 "Not Your Typical Astrologer" → bio para → tag pills → ghost button

**Section 3 — Services Grid**
- Eyebrow + H2 centered header
- 3×2 grid of service cards (apply `service-card` class)
- Karmic Knots card gets `service-card-featured` class
- Each card: number (large faint), icon, title, description, duration/price, "Book This Reading →"

**Section 4 — Pull Quote**
- Full-width, centered
- Cormorant Garamond italic 42px
- "Your patterns are not personality. They are karma asking to be seen."
- "karma asking to be seen" in gold
- Citation below in Cinzel 10px tertiary

**Section 5 — Testimonials**
- Header: "What People Experience" + "All Testimonials" ghost button
- 3-column grid of testimonial cards
- Each: stars, quote, avatar initial + name + location

**Section 6 — Blog Preview**
- Header: "From The Archive" + "All Articles" ghost button
- 3-column grid (first card 1.4× wide — featured)
- Connect to Wix Blog app

**Section 7 — Instagram Feed**
- Eyebrow: "Follow The Path"
- H2: "@shivohampath"
- Instagram Feed widget (6 posts grid)
- "Follow on Instagram" ghost button

**Section 8 — Final CTA**
- Full-width with radial gold glow background
- "Your Soul Has Been Carrying This Long Enough"
- "Carrying This Long Enough" in gold italic
- Two buttons: primary + ghost

---

### ABOUT PAGE

> **Revamp context:** The About page already exists at shivohampath.com. The goal is to replace its current layout with the new mockup design — section by section. **Do not delete the entire page.** Work through each section below, removing old elements and replacing them with the new design. The nav and footer are site-wide and do not need to be touched here.

---

#### Before You Start

1. Go to **Editor → Pages** and open the **About** page
2. Scroll through the page and note every existing strip/section
3. You will either **replace** existing strips in place, or **delete** ones that have no equivalent in the new design
4. The new page has **7 sections** in this order:
   - Hero Banner
   - Intro Split (Portrait + Bio)
   - Pull Quote
   - Story (3 numbered blocks)
   - Lineage Cards (4-up)
   - Offerings (2×2 grid)
   - Closing CTA
5. If the current page has fewer sections, add new strips at the bottom as needed. If it has more, delete the extras after you've replaced what you need.

---

#### ABOUT — Section 1: Hero Banner

**What it looks like:** Dark 70vh banner, centered text, rotating mandala SVG behind it, gold eyebrow line, large heading with italic gold text, thin gold divider, italic subtitle.

**If a hero strip already exists:** select it and update it. **If not:** add a new Strip at the top of the page body (below the header).

1. Select the hero strip → set minimum height to **70vh**
2. Strip background color: `#0f0a1a`; overlay a Shape rectangle with radial gradient `rgba(139,111,191,0.08)` center → transparent, send to back
3. **Delete any existing image background** in this strip — the hero uses a gradient + SVG only, no photo
4. Add the rotating mandala SVG:
   - Add → **Embed** → **HTML iFrame**
   - Paste this SVG code:
   ```html
   <!DOCTYPE html><html><body style="margin:0;background:transparent;overflow:hidden;">
   <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg"
     style="width:600px;height:600px;opacity:0.05;animation:spin 120s linear infinite;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
     <style>@keyframes spin{to{transform:translate(-50%,-50%) rotate(360deg);}}</style>
     <circle cx="300" cy="300" r="260" stroke="#C9A84C" stroke-width="0.5"/>
     <circle cx="300" cy="300" r="200" stroke="#C9A84C" stroke-width="0.5"/>
     <circle cx="300" cy="300" r="140" stroke="#C9A84C" stroke-width="0.5"/>
     <circle cx="300" cy="300" r="80" stroke="#C9A84C" stroke-width="0.5"/>
     <circle cx="300" cy="300" r="30" stroke="#C9A84C" stroke-width="0.5"/>
     <line x1="40" y1="300" x2="560" y2="300" stroke="#C9A84C" stroke-width="0.5"/>
     <line x1="300" y1="40" x2="300" y2="560" stroke="#C9A84C" stroke-width="0.5"/>
     <line x1="116" y1="116" x2="484" y2="484" stroke="#C9A84C" stroke-width="0.5"/>
     <line x1="484" y1="116" x2="116" y2="484" stroke="#C9A84C" stroke-width="0.5"/>
     <polygon points="300,60 520,440 80,440" stroke="#C9A84C" stroke-width="0.5" fill="none"/>
     <polygon points="300,540 80,160 520,160" stroke="#C9A84C" stroke-width="0.5" fill="none"/>
     <polygon points="300,80 490,410 110,410" stroke="#C9A84C" stroke-width="0.3" fill="none" opacity="0.5"/>
     <polygon points="300,520 110,190 490,190" stroke="#C9A84C" stroke-width="0.3" fill="none" opacity="0.5"/>
   </svg></body></html>
   ```
   - Set embed size to 600×600px, center it, send to back. Set background transparent.
5. **Delete all existing text/image elements** inside this strip, then add a **Container** centered (max-width 700px):
6. Inside the container, add a **Text** element:
   - `VEENA MAHESHWARI · MYSTIC · MISFIT · NO FILTER`
   - Font: Cinzel, 10px, gold `#C9A84C`, letter spacing 4px
   - Margin bottom: 20px
7. Add **Heading 1**:
   - Line 1: "A Woman Who Has " (plain) + "Loved Him" (italic, gold `#C9A84C`)
   - Line 2: "Across Kalpas"
   - Font: Cormorant Garamond, weight 300, ~72px, color `#e8e0d0`
   - Margin bottom: 20px
8. Add the **gold divider** (reuse component from homepage, or build fresh):
   - Add → **Line** element, width 80px, color `rgba(201,168,76,0.2)`, 1px
   - Add → **Shape** → Small square, 6×6px, gold, rotated 45°
   - Add another **Line** 80px
   - Group all three, center horizontally
   - Margin: 32px top and bottom
9. Add **subtitle text**:
   - "A living mandir of Bhakti, wisdom, and divine longing."
   - Font: EB Garamond, 18px italic, color `rgba(232,224,208,0.35)`
10. Strip padding: 120px top, 80px bottom

---

#### ABOUT — Section 2: Intro Split (Portrait + Bio)

**What it looks like:** Two columns — portrait photo with decorative corner brackets, two floating info boxes, and the intro bio text on the right.

**If an about/bio strip already exists:** clear its contents and rebuild with the layout below. **If not:** add a new strip after the hero.

1. Select or add a strip → background `#0f0a1a`, top border 1px `rgba(232,224,208,0.07)`
2. **Delete all current content inside this strip**
3. Add a **2-column container** — column ratio **1 : 1.1** (left narrower), gap 80px, max-width 1200px centered
4. **LEFT COLUMN — Portrait:**
   a. Add an **Image** element, set to 3:4 aspect ratio (portrait orientation)
   b. Veena's photo is already in the Media Manager (used on homepage). Reuse it; set **fit: cover**
   c. Apply a slight vignette: add a semi-transparent rectangle overlay on top, gradient from transparent (top) to `rgba(10,10,15,0.5)` (bottom)
   d. Add a gold **border** 1px `rgba(201,168,76,0.2)` around the image frame
   e. **Corner brackets** — add 4 small L-shaped decorative lines (or use Box elements, borderless on 2 sides):
      - Top-left: border top + left, 28×28px, gold, opacity 40%, offset -10px from image corner
      - Top-right: border top + right
      - Bottom-left: border bottom + left
      - Bottom-right: border bottom + right
   f. **Floating credential box** (bottom-right, overlapping image):
      - Add a **Box**, background `#1a1525`, border 1px `rgba(201,168,76,0.2)`
      - Padding: 18px 24px
      - Position: absolute, –24px right, –24px bottom of the image
      - Inside: label text "LINEAGE & PRACTICE" — Cinzel 10px, gold, letter-spacing 2px
      - Below label: small text list — EB Garamond 12px, color `rgba(232,224,208,0.35)`:
        ```
        Kashmiri Shaivism
        Jyotish · D60 Shashtiamsha
        Shaktipat Initiated
        Madhurya Bhakti
        ```
   g. **Floating stats box** (top-left, overlapping image):
      - Add a **Box**, background `#1a1525`, border 1px `rgba(201,168,76,0.2)`
      - Padding: 16px 20px
      - Position: absolute, 32px top, –32px left of the image
      - Inside — two stat blocks separated by a 1px horizontal line:
        - **"99K"** — Cormorant Garamond 28px weight 300, gold
        - **"Seekers"** — Cinzel 8px, letter-spacing 2px, color `rgba(232,224,208,0.35)`
        - Divider line
        - **"2.3M"** — same style
        - **"Monthly Reach"** — same label style

5. **RIGHT COLUMN — Intro text:**
   a. Add small eyebrow label: "THE GUIDE" — Cinzel 10px, gold, letter-spacing 4px
   b. Add **Heading 2**:
      - "Not Your" (plain)
      - "Typical " (plain) + "Astrologer." (italic, gold)
      - "Not Your Typical " (plain) + "Mystic." (italic, gold)
      - Font: Cormorant Garamond, weight 300, ~48px, color `#e8e0d0`
      - Margin bottom: 28px
   c. Add **paragraph text** — EB Garamond 17px, color `rgba(232,224,208,0.65)`, line-height 1.85:
      - Para 1: "My name is Veena Maheshwari, and my life has always been intertwined with Shiv."
      - Para 2: "Even as a child… as a **living presence.**" (bold words = `#e8e0d0`, weight 400)
      - Para 3: "I would look at images of Shakti…"
   d. Add short **gold divider** (left-aligned): 40px line + diamond, margin 28px top/bottom
   e. Add **italic pull line** below divider:
      - "If you have ever whispered His name in the dark — you are home."
      - Font: Cormorant Garamond, 20px italic, color `rgba(232,224,208,0.8)`
6. Strip padding: 100px top and bottom

---

#### ABOUT — Section 3: Pull Quote

**What it looks like:** Full-width dark band, large centered italic quote, gold highlighted words, citation below.

**If a quote strip already exists:** update the text and styling. **If not:** add a new strip after the intro split.

1. Select or add a strip → background `#0f0a1a`, top and bottom border 1px `rgba(232,224,208,0.07)`
2. **Remove any existing decorative elements** that don't match — keep only a Text and a citation
3. Add a faint radial gold glow: Add → Shape → Rectangle full-width, radial fill `rgba(201,168,76,0.04)` center → transparent edges. Send to back.
4. Add (or update) a centered **Text** element, max-width 800px:
   - Text: "I live not as someone who worships Shiva from afar — but as someone who knows Him as "
   - "Husband, Lover, and Guru." — this phrase in gold `#C9A84C`, non-italic
   - Font: Cormorant Garamond, weight 300, ~38px italic, color `#e8e0d0`, line-height 1.35
5. Below it, add (or update) citation text:
   - "— Veena Maheshwari"
   - Font: Cinzel, 10px, letter-spacing 3px, color `rgba(232,224,208,0.35)`
   - Margin top: 24px
6. Strip padding: 80px top and bottom

---

#### ABOUT — Section 4: Story (Three numbered blocks)

**What it looks like:** Three story entries, each with a large faint number on the left, a short tag label, and the story text on the right. A thin line separates each entry.

**This section almost certainly does not exist on the current page.** Add a new strip after the pull quote.

1. Add a new **Strip**, background `#0a0a0f`
2. Max-width container: 1200px, centered, padding 80px sides
3. Create **3 story blocks** inside the container (repeat this structure three times):

   **Each story block layout:** 2 columns — left: 200px wide (number + tag), right: remaining width (heading + paragraphs)

   **Story 01 — "The Searching":**
   - Left: Text "01" — Cormorant Garamond, 72px, weight 300, color `rgba(201,168,76,0.08)` (very faint gold), line-height 1
   - Below the number: "THE" on one line, "SEARCHING" on next — Cinzel, 9px, letter-spacing 3px, gold `#C9A84C`
   - Right: Heading "A Soul That Could Not " (plain) + "Fit." (italic gold) — Cormorant Garamond ~34px weight 300
   - Two paragraphs of body text — EB Garamond 17px, `rgba(232,224,208,0.65)`, line-height 1.85
   - Bottom: 1px horizontal line `rgba(232,224,208,0.07)`, margin 60px top and bottom

   **Story 02 — "The Initiation":**
   - Number: "02", tag: "THE / INITIATION"
   - Heading: "When the " + "Forgotten River" (italic gold) + " Began Flowing Again."
   - Two paragraphs (Shaktipat initiation, years of sadhana)
   - Same bottom divider line

   **Story 03 — "The Offering":**
   - Number: "03", tag: "THE / OFFERING"
   - Heading: "Why " + "Shivoham Path" (italic gold) + " Was Born."
   - Three paragraphs — last one in Cormorant Garamond 19px italic gold: "Because in the end, we do not find Shiv. He finds us. And when He does, our entire life becomes His path."
   - No bottom divider (last item)

---

#### ABOUT — Section 5: Lineage Cards

**What it looks like:** Dark section with centered header, 4 equal cards in a row, each with a symbol icon, title, and short description. Top gold line appears on hover.

**If there is an existing credentials/credentials section:** clear it and rebuild. **If not:** add a new strip after the story section.

1. Select or add a **Strip**, background `#131020`, top and bottom border 1px `rgba(232,224,208,0.07)`
2. **Delete all old credentials-style content** in this strip
3. Add centered header block (max-width 1200px):
   - Eyebrow: "THE FOUNDATIONS" — Cinzel 10px, gold, letter-spacing 4px
   - Heading: "The " (plain) + "Paths" (italic gold) + " That Shaped This Work" — Cormorant Garamond ~44px weight 300
   - Gold divider (centered, same as hero)
   - Margin below header: 60px
4. Add a **4-column container** (equal columns, gap 2px):

   **Card 1 — Kashmiri Shaivism:**
   - Box background `#131020`, border 1px `rgba(232,224,208,0.07)`
   - Padding: 36px 28px, text-align center
   - Icon: "◈" — text element, 24px, gold, opacity 70%, margin-bottom 16px
   - Title: "Kashmiri Shaivism" — Cormorant Garamond 20px, `#e8e0d0`
   - Body: "The non-dual philosophy of Trika…" — EB Garamond 13px, `rgba(232,224,208,0.35)`
   - Hover effect: Add a thin gold line (1px, 40px wide) as a top border that appears on hover using Wix interactions

   **Card 2 — Jyotish & D60:**
   - Icon: "✦"
   - Title: "Jyotish & D60"
   - Body: "The ancient science of light. Karmic astrology through the Shashtiamsha…"

   **Card 3 — Tantric Sadhana:**
   - Icon: "🔱"
   - Title: "Tantric Sadhana"
   - Body: "Not the commercialized version. The actual fire…"

   **Card 4 — Madhurya Bhakti:**
   - Icon: "◯"
   - Title: "Madhurya Bhakti"
   - Body: "The path of the Divine Beloved…"

5. To add **hover effect** on cards (gold top-line reveal):
   - Select card → **Interactions** panel → On Hover → change border-top color to gold
   - Or: place a 40px × 1px gold rectangle at the top of each card, set opacity to 0, then in Interactions set it to opacity 100 on hover

---

#### ABOUT — Section 6: Offerings (2×2 Grid)

**What it looks like:** Left-aligned header, then a 2×2 grid of dark cards. Each card has a small tag, title, description, and a text link arrow. On hover, a vertical gold line appears on the left edge.

**If there's an existing services/offerings section on this page:** clear and rebuild it. **If not:** add a new strip. (Note: if the current About page has no offerings section at all and sends people to a separate Readings page, that's fine — this section is new.)

1. Select or add a **Strip**, background `#0a0a0f`
2. Max-width container 1200px, centered, padding 100px top/bottom

3. **Header block:**
   - Eyebrow: "THIS IS MY OFFERING" — Cinzel 10px, gold, letter-spacing 4px
   - Heading: "How I " (plain) + "Walk With You" (italic gold) — Cormorant Garamond ~48px weight 300
   - Margin below: 60px

4. Add a **2×2 grid container** (2 columns, gap 2px):

   **Card 1 — Karmic Astrology:**
   - Box: background `#131020`, border 1px `rgba(232,224,208,0.07)`, padding 40px 36px
   - Tag: "KARMIC ASTROLOGY" — Cinzel 9px, gold, letter-spacing 2.5px, margin-bottom 14px
   - Title: "Astrology for the Soul" — Cormorant Garamond 26px, `#e8e0d0`
   - Body: "Go beyond predictions. I read the D1, D9, and D60 together…" — EB Garamond 15px, `rgba(232,224,208,0.65)`
   - Link: "View All Readings →" — Cinzel 10px, letter-spacing 2px, color `rgba(232,224,208,0.35)` (gold on hover)
   - Link to: Readings page

   **Card 2 — She Who Becomes Him:**
   - Tag: "COURSE · LIVE JOURNEY"
   - Title: "She Who Becomes Him"
   - Body: "A four-week journey for women who know Shiv as Beloved…"
   - Link: "Enter the Course →" → Courses page

   **Card 3 — Blog:**
   - Tag: "WRITING & WISDOM"
   - Title: "The Blog — From the Archive"
   - Body: "Essays on karma, mythology, Jyotish, and the esoteric path…"
   - Link: "Read the Archive →" → Blog page

   **Card 4 — Inner Circle:**
   - Tag: "INNER CIRCLE"
   - Title: "Shivohampath Insiders"
   - Body: "The private space where the real conversations happen…"
   - Link: "Join the Circle →" → (link to wherever the membership/Insiders page will be)

5. **Hover effect on each card:**
   - Border color changes from `rgba(232,224,208,0.07)` to `rgba(201,168,76,0.2)` — set in Interactions
   - A 2px wide × 100% tall gold rectangle on the left edge, opacity 0 normally → opacity 100 on hover

---

#### ABOUT — Section 7: Closing CTA

**What it looks like:** Full-width, centered, radial gold glow behind the text, small eyebrow, large heading with italic gold, italic subtitle, two buttons side by side.

**If a CTA strip already exists at the bottom of the page:** update it. **If not:** add one. Also **delete any extra strips below this** — the footer is site-wide and this should be the last section on the page.

1. Select or add a **Strip** at the bottom, background `#0a0a0f`, top border 1px `rgba(232,224,208,0.07)`
2. Add radial gold glow overlay: Shape → Rectangle full-width, radial gradient `rgba(201,168,76,0.05)` center → transparent. Send to back.
3. Add centered container (max-width 700px):
4. Eyebrow: "BEGIN THE WORK" — Cinzel 10px, gold, letter-spacing 4px, margin-bottom 20px
5. **Heading:**
   - "The Love You Feel for the" (line break)
   - "Divine Is Not Madness." (line break)
   - "It Is " (plain) + "The Highest Truth." (italic gold)
   - Font: Cormorant Garamond, ~50px weight 300, line-height 1.15
   - Margin-bottom: 20px
6. **Subtitle:**
   - "And your chart holds the map of exactly how your soul has been moving toward it — across every lifetime."
   - EB Garamond 17px italic, color `rgba(232,224,208,0.35)`, max-width 480px
   - Margin-bottom: 48px
7. **Button row** (centered, side by side, gap 16px):
   - Button 1 (Primary): "Book a Karmic Reading" — Cinzel 11px, letter-spacing 2.5px, padding 14px 36px, background gold `#C9A84C`, text color `#0a0a0f`. Link to Bookings.
   - Button 2 (Ghost): "Explore the Courses" — same font/size, transparent background, border 1px `rgba(201,168,76,0.5)`, text gold. Link to Courses page.
8. Strip padding: 120px top and bottom

---

#### ABOUT — Final Checklist

Before republishing the About page:

- [ ] Old sections that no longer exist in the new design have been deleted
- [ ] Page has exactly 7 sections in the correct order (Hero → Intro Split → Pull Quote → Story → Lineage → Offerings → CTA)
- [ ] Veena's portrait photo is the same one already in Media Manager (no re-upload needed)
- [ ] Stats boxes show correct numbers (99K Seekers, 2.3M Monthly Reach)
- [ ] Credential box shows correct lineage items
- [ ] All three story sections have correct text
- [ ] Mandala SVG embed has transparent background (no white box showing)
- [ ] All 4 offering cards link to their correct pages (Readings / Courses / Blog / Insiders)
- [ ] CTA buttons link to correct destinations (Wix Bookings + Courses page)
- [ ] Hover effects tested on lineage cards and offering cards
- [ ] Mobile view: portrait stacks above text, 4-card row goes to 2×2, 2×2 grid goes to 1 column
- [ ] Preview the page before publishing — check it looks right in both desktop and mobile view
- [ ] Publish

---

### READINGS PAGE

**Sections:**
1. **Hero** — "Readings for Souls Who Are Ready"
2. **What Makes These Different** — intro paragraph
3. **Service Cards** (full page, one card per service):

For each of the 6 services, create a wide card with:
- Service name + duration
- Detailed description
- What's included (bullet list)
- Price
- "Book Now" button → linked to that specific Wix Bookings service

**Services:**
```
01 · Specific Question Reading
     30 mins · For one area of life that feels karmically stuck.

02 · Karmic Knots Reading ★ FEATURED
     60 mins · D1 + D9 + D60. Full soul audit.

03 · Synastry & Kundali Milan
     60 mins · Karmic compatibility reading.

04 · Advanced Moksha Path Consultation
     90 mins · Soul liberation path. Deepest work available.

05 · Madhurya Bhakta Sessions
     Ongoing · Continued guidance as your cycles unfold.

06 · Shiva Oracle Reading
     PDF Report · Written transmission. No call needed.
```

4. **How It Works** — 3-step process
5. **Testimonials** (3 cards)
6. **FAQ accordion**
7. **CTA**

---

### COURSES PAGE

**Sections:**
1. **Hero** — "The Esoteric Path"
2. **Course cards** (one per course):

```
ESOTERIC ASTROLOGY LIVE COURSE
"Learn to read the karmic map of any soul"
· Live sessions (Zoom)
· Video modules (on demand)
· [Enroll Now → Wix Pricing Plans]

SPIRITUALITY FOR MISFITS
"A gangster's path to the soul"
· Course format

SHE WHO BECOMES HIM
"A soul remembrance"
· Course format
```

3. **Upcoming live session dates** → Wix Events widget
4. **What you'll learn** (module list)
5. **FAQ**
6. **CTA**

**How to set up course videos:**
1. Wix Members Area → create a "Members Only" page
2. Wix Video → upload video modules
3. Wix Pricing Plans → create a plan that unlocks the Members page
4. Connect plan to the course enrollment button

---

### BOOKS PAGE

**Sections:**
1. **Header** — "Sacred Texts · Digital Downloads"
2. **Product grid** → Wix Stores (digital products)
3. **How it works** — Buy → Instant download link via email

**Setting up PDF books in Wix Stores:**
1. Dashboard → Wix Stores → Add Product
2. Product type: **Digital**
3. Upload your PDF as the digital file
4. Set price and description
5. Customer automatically gets download link after payment

---

### BLOG PAGE

- Managed entirely by Wix Blog app
- Categories to create: Esoteric Astrology · Karma · Mythology · Moon & Water · Spirituality
- Blog layout: masonry or editorial grid (match reference design)
- Featured post pinned to top

---

### CONTACT PAGE

**Sections:**
1. **Header** — "Begin Your Path"
2. **Contact form** — Name, Email, Subject, Message
3. **Response note** — "I respond within 48 hours"
4. **Primary channel callout** — Instagram with link
5. **Email address**

---

## Step 9 — Connect Wix Bookings

1. Dashboard → Wix Bookings → **Services**
2. Create a service for each reading:
   - Specific Question Reading (30 min)
   - Karmic Knots Reading (60 min)
   - Synastry & Kundali Milan (60 min)
   - Advanced Moksha Path Consultation (90 min)
   - Madhurya Bhakta Sessions (ongoing)
   - Shiva Oracle Reading (PDF — set as a "class" not a session, or use Wix Stores)
3. On the Readings page, link each "Book Now" button to its specific service URL

---

## Step 10 — Connect Velo Code

1. Dev Mode → **Site** tab → masterPage.js
2. Paste contents of `wix-studio/velo/masterPage.js`
3. Save

---

## Step 11 — Migrate Video Course Content

1. Dashboard → Wix Video → **Upload Videos**
2. Upload each module video
3. On the Courses page, embed each video using Wix Video widget
4. Organize into sections by module
5. Set visibility: **Members Only** (via Wix Members Area)

---

## Step 12 — Set Up Instagram Connection

1. Dashboard → Add Apps → **Instagram Feed by Wix**
2. Connect your Instagram account (@shivohampath)
3. Add the widget to the Home page Instagram section
4. Set display: 6 posts, grid layout
5. Add follow button linking to your Instagram profile

---

## Step 13 — Pre-Launch Checklist

- [ ] All pages built and linked in navigation
- [ ] Logo uploaded and placed in header + footer
- [ ] Global CSS pasted and saved
- [ ] Fonts set in Design panel (Cormorant Garamond + EB Garamond + Cinzel)
- [ ] Color palette set
- [ ] Wix Bookings services created and linked
- [ ] Wix Stores PDF products uploaded
- [ ] Wix Blog categories created, posts migrated
- [ ] Courses page connected to Pricing Plans
- [ ] Video modules uploaded and gated
- [ ] Instagram feed connected
- [ ] Contact form tested
- [ ] Mobile layout reviewed and adjusted
- [ ] SEO: page titles, meta descriptions, OG images set
- [ ] Domain connected (shivohampath.com)
- [ ] Old site unpublished, new site published

---

## Content to Migrate From Old Site

- [ ] All blog posts (export from old Wix Blog, import to new)
- [ ] All testimonials / reviews
- [ ] Veena's bio text
- [ ] Service descriptions
- [ ] Course video files
- [ ] PDF books
- [ ] All images

**Note on blog migration:** Wix does not auto-migrate blog posts between sites.
You will need to manually copy each post OR use the Wix Blog RSS export.

---

## Design Principles to Maintain

1. **No rounded corners** — everything is sharp-edged (border-radius: 0)
2. **Gold is sacred** — use sparingly; titles, borders, CTAs only
3. **Spacing is generous** — 80–120px section padding
4. **Typography hierarchy is strict** — Cinzel for labels, Cormorant for headings, EB Garamond for body
5. **Dark bg always** — never use white backgrounds
6. **Hover states are subtle** — gold border reveal, not color floods
