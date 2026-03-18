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

**Sections:**
1. **Hero** — full-width portrait image with name overlay
2. **Story** — long-form bio, Veena's path, how she found esoteric astrology
3. **Philosophy** — "Why Vedic + Esoteric?" — 3 principle blocks
4. **What a Session Looks Like** — step-by-step process
5. **Credentials / Background** — tag pills
6. **CTA** — "Book a Reading"

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
