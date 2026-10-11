# ShivohamPath · Homepage v2 Build Guide (Wix Studio)

This turns the approved mockup (`mockups/homepage-v2.html`) into your real
homepage. Open the mockup in a browser beside the Wix editor while you work.

**The key change:** the new homepage is built from **native Wix elements**
(text, buttons, images, containers) instead of HTML embeds. Every embed is a
separate web page loading its own fonts, and that is what makes the site lag
and break in Instagram's browser. Native elements are rendered by Wix's
servers and load fast.

**Safe approach:** you build the new homepage on a **new hidden page**, test
it, and only then make it your homepage. The current homepage keeps working
the whole time.

---

## Before you start (10 min)

### Files to upload (Media → Upload)
- `wix-studio/assets/veena-portrait.jpg`: your About photo, already cropped.
- `wix-studio/assets/hero-yantra.svg`: the yantra line drawing for the hero.
  Upload it as **Vector Art** so it stays crisp.

### Code to paste (Dev Mode on)
1. **CSS → global.css**: replace everything with the latest
   `wix-studio/global.css`. The new classes are at the bottom under
   "HOMEPAGE V2".
2. **Backend → add file `subscribe.web.js`**: paste
   `wix-studio/velo/backend/subscribe.web.js`. It uses your existing
   `backend/mailerlite.js` and the `MAILERLITE_API_KEY` secret you already have.

### Create the page
1. Pages → **+ Add Page** → Blank. Name it `Home v2`.
2. Page settings → **hide from menu**, and under SEO set it to **not indexed**
   while you build.
3. Set the page background to `#0a0a0f`.

### Colours and fonts used below
| Name | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page and most sections |
| Raised | `#17121f` | Highlighted boxes |
| Gold | `#C9A84C` | Accents, prices, buttons |
| Text | `#e8e0d0` | Headings and main text |
| Soft text | `#e8e0d0` at 70% | Paragraphs |
| Faint text | `#e8e0d0` at 45% | Small labels |

- **Headings:** Cormorant Garamond, Light (300). Gold words in italic.
- **Paragraphs:** EB Garamond, Regular, 18px desktop / 17px mobile.
- **Small labels:** Cinzel, 11px, letter spacing 3, UPPERCASE, gold.
  Apply class `eyebrow`.

### Rules for every section
- **No entrance animations** (no fade-in or slide-in on scroll). They hide
  content until it's scrolled to and cost speed on phones.
- Section padding: **110px top and bottom on desktop, 72px on mobile**.
- Content width: **1080px max**, centred. Mobile side margins **20px**.
- A 1px line between sections: colour `#e8e0d0` at 9%.

---

## Header (site-wide, 15 min)

The header is shared by all pages, so this improves the whole site.

1. **Links:** keep only **Readings · Courses · About · Blog**. Move Contact,
   Books and anything else to the footer.
2. **Remove the `header-login.html` embed** (ID `headerLoginEmbed`).
   Replace it with a plain **Text link: "Log in"**, linking to your account
   page (`/account/my-account`). Soft text colour, 16px.
   A normal link works inside Instagram, while the embed's popup login does not.
3. Keep the **"Book a Reading"** button (class `btn-primary`), linking to
   `/readings`.
4. **Mobile:** use Wix's own hamburger menu with the same 4 links plus
   "Contact" and "Log in / My account". **Remove the `mobile-nav-member.html`
   embed** (ID `mobileNavEmbed`).
5. Header stays **sticky**, background `#0a0a0f` at 90%.

> `masterPage.js` doesn't need changing. Its code for those two embeds
> silently skips them once they're gone.

---

## Section 1: Hero

**Section settings:** ID `heroSection` (needed by the code). Background
`#0a0a0f`. Height **fit to content** (not full screen). Padding 120px top /
90px bottom on desktop, 72px / 56px on mobile. Everything centred.

| Element | Content | Style |
|---|---|---|
| Image | `hero-yantra.svg` | 640×640 desktop / 360×360 mobile, centred behind the text, **opacity 7%**, no animation. Send to back. |
| Text | ASTROLOGER · PSYCHIC · MYSTIC | class `hero-tag` |
| Heading (H1) | Your Chart Is / *A Karmic Map* | 88px desktop / 48px mobile, line break after "Is", second line italic gold |
| Paragraph | Esoteric astrology for souls who came here with unfinished business. No sugarcoating. Just the truth your chart holds. | italic, soft text, 20px / 18px, max width 560px |
| Button | FIND YOUR READING | class `btn-primary`, links to the **Readings section** on this page (anchor) |
| Text link | New here? Start with the free guide ↓ | Cinzel 11px gold, underlined, links to the **Guide section** anchor |
| Text | **2.3M** monthly reach   **99K+** walking the path | Numbers: Cormorant 22px gold. Labels: Cinzel 11px faint. One row, centred |

---

## Section 2: Three doors

Padding as standard. Background `#0a0a0f`. Add **anchor** `begin`.

**Heading block (left-aligned):**
- Label: WHERE WOULD YOU LIKE TO BEGIN? (class `eyebrow`)
- Heading (H2): Three ways *to walk with me*, 50px / 34px

**Three containers in a row** (stack on mobile), equal width, gap 0:

| | Card 1 (class `door-card-primary`) | Card 2 (class `door-card`) | Card 3 (class `door-card`) |
|---|---|---|---|
| Heading (H3, 30px) | Get a Reading (gold) | Study the Path | Read for Free |
| Paragraph (17px) | A live Jyotish consultation on your birth chart, or a written Shiva oracle card reading for one question. | Live courses: *Foundations of Jyotish*, and *She Who Becomes Him* for women who know Shiv as Beloved. | Essays on karma, mythology, Jyotish and Kashmir Shaivism from the archive. |
| Bottom row (above a thin line) | FROM ₹1,499 · SEE READINGS → | LIVE COURSES · VIEW COURSES → | FREE · OPEN THE ARCHIVE → |
| Whole card links to | Readings section anchor | `/courses` | `/blog` |

Card padding 36px. Bottom row: Cinzel 11px. The left label is faint and the
right one ("See readings →") is gold.

---

## Section 3: Readings

Add **anchor** `readings`. Padding as standard.

**Heading block:**
- Label: READINGS
- H2: Choose by the question *you're carrying*
- Paragraph: Two different methods. **Jyotish** is a live consultation that
  reads your birth chart. **Oracle** answers one question through Shiva
  oracle cards, in writing.

**Jyotish sub-heading row** (thin gold line underneath, gold at 28%):
- Left: JYOTISH · BIRTH CHART CONSULTATIONS (class `eyebrow`)
- Right: *Live and online. Every consultation is followed by a written
  report: a summary of everything we covered, to look back on.* (italic,
  faint, 16px)

### 3a. Karmic Knots (two columns, stack on mobile, tiles go below)

**Left column:** three stacked containers, each class `chart-tile`, 22px padding:

| Big text (Cormorant 42px gold) | Label (Cinzel 11px) | Italic line (16px soft) |
|---|---|---|
| D1 | RASHI | This lifetime |
| D9 | NAVAMSHA | Your soul's dharma |
| D60 | SHASHTIAMSHA | The karmic record |

**Right column:**
- Label: SIGNATURE CONSULTATION
- H2: Karmic Knots, 52px / 36px
- Text (class `ask-line`, 22px): "I want to understand my whole chart and why my life keeps repeating."
- Paragraph: Your comprehensive Jyotish consultation. I read your D1, D9 and
  D60 together and explain clearly what I see in your prarabdha, your
  recurring patterns, your relationships and the larger direction of your life.
- Bulleted list (gold diamond bullets if your theme allows, otherwise plain):
  - The karma beneath the patterns that keep returning
  - How your relationships and life direction show up in the chart
  - What this lifetime is asking you to work through
- Thin line, then a row with:
  - Text (class `price-text`, 40px): ₹6,500
  - Text below it (Cinzel 11px faint): 60 MINUTES · ONLINE · WRITTEN REPORT
  - Button (class `btn-primary`): BOOK KARMIC KNOTS, linking to the Karmic
    Knots booking page

### 3b. The other four consultations

Four containers stacked, each class `inquiry-row`, 28px top/bottom padding.
Each row has **three columns** on desktop. On mobile the description drops
below and the price moves to the top right.

| Column 1: small label / name (H3 28px) / question (class `ask-line`, 19px) | Column 2: description (17px soft) | Column 3: length (Cinzel 11px faint) / price (class `price-text`, 26px) |
|---|---|---|
| FOCUSED / **The Specific Question** / "I need clarity on one thing." | One concern, one clearly defined area of your chart: a relationship, your work, a decision. For when you don't need a full chart examination. | 30 MIN / ₹2,499 |
| SPIRITUAL / **The Spiritual Path** / "What does my chart say about my spiritual life?" | A focused reading of the spiritual horoscope: the D20, Karakamsa, Ishta Devata indications and the nature of your spiritual inclinations. | 90 MIN / ₹8,500 |
| TWO CHARTS / **Relationships & Marriage** / "What is happening between us?" | Synastry and Kundali Milan. How two horoscopes interact, compatibility, and the patterns each of you brings into a marriage. | 90 MIN / ₹9,400 |
| SPECIALTY · WOMEN ONLY / **Madhurya Bhakta** / "I love Shiv as Beloved." | For women who love Shiv not as a distant deity, but as Beloved. We look at your chart and talk openly about your devotional life and your longing. | 2 HOURS / ₹6,499 |

Each whole row links to that consultation's booking page.

> **Wix Bookings:** rename the services to match (The Spiritual Path replaces
> Advanced Moksha Consultation; Relationships & Marriage replaces Synastry &
> Kundali Milan). Update their descriptions with the text above, so the
> booking pages say the same thing as the homepage.

### 3c. Oracle (separate box)

One container, class `oracle-box`, 36px padding, 70px gap above it. Two
columns that stack on mobile:
- **Left:** label ORACLE · A DIFFERENT METHOD (class `oracle-label`) →
  H3 "Shiva Oracle Reading" (30px) → paragraph "One question, answered
  through a Shiva oracle card reading and sent to you as a written PDF. No
  birth chart is used, and there's no call."
- **Right:** price ₹1,499 (class `price-text`, but colour `#e8e0d0`), small
  label WRITTEN PDF below it, and a button ASK THE ORACLE (class
  `btn-oracle`) linking to the Oracle product or booking page.

---

## Section 4: About

Two columns: photo 340px wide on the left, text on the right, vertically
centred. On mobile, stack with the photo max 300px wide.

- **Image:** `veena-portrait.jpg`, **3:4**, fill/crop, focal point on the
  face, class `portrait-frame`. Alt text: *Veena Maheshwari in a teal silk
  sari and red embroidered shawl*.
- Label: THE GUIDE
- H2: Not your typical *astrologer*
- Paragraph: I don't read charts to tell you what you want to hear. I read
  them to show you what your soul has been carrying, across this lifetime
  and every one before it.
- Paragraph: My work comes from years of sadhana in Kashmir Shaivism,
  Shaktipat initiation, and Jyotish read through the D60.
- Text (Cinzel 11px faint, gold diamonds between): TRIKA SHAIVISM ◆
  LALLESHWARI ◆ SHAKTIPAT ◆ **MADHURYA BHAKTI** (the last one in gold)
- Text link: READ MY STORY → linking to `/about`

---

## Section 5: Quote

Centred. Faint gold glow background optional (or plain `#0a0a0f`).

- Text (class `pullquote`, max width 820px): *Your patterns are not
  personality. They are* **karma asking to be seen.** The last five words
  are gold and not italic.

---

## Section 6: Testimonials

**Heading block:** label WHAT PEOPLE EXPERIENCE → H2 From those who *have
sat with me* → paragraph "Verified reviews from Trustpilot, in clients' own words."

**Three columns** (stack on mobile), each a container with class
`voice-card`, 22px top padding:
- Stars ★★★★★ (gold, 14px)
- Quote (EB Garamond **italic**, 20px, text colour)
- Name (Cinzel 11px gold) and below it INDIA · VERIFIED ON TRUSTPILOT (Cinzel 11px faint)

Use the exact quotes below. Don't reword them.

1. **Lavanya:** "I was going through a very confusing phase and felt like I
   was losing myself, but her guidance brought me immense clarity and
   reassurance. … One of the best parts of the reading was the detailed PDF
   report, where she explained every recommendation thoroughly along with
   the chart placements supporting her insights."
2. **Sachin:** "Veena beautifully explained the Karmic knots perspective and
   dived deep into the details. She gave a real view on the purpose of this
   life basis the queries I had and provided great clarity."
3. **Anonymous:** "In the world of social media hype around vedic astro,
   dosha fear psychosis & money induced marketing remedies if you need a
   sane voice then don't think twice about Veena at Shivohampath."

Below the columns, two text links:
- READ ALL REVIEWS ON TRUSTPILOT → linking to `https://www.trustpilot.com/review/shivohampath.com`
- HAD A READING? LEAVE A REVIEW → linking to `https://www.trustpilot.com/evaluate/shivohampath.com`

Don't use Trustpilot's embedded widget. It's another slow embed.

---

## Section 7: Free guide signup

Add **anchor** `guide`. One container, class `guide-box`, 56px padding.
Two columns that stack on mobile.

**Left:**
- Label: FREE GUIDE
- H2 (46px / 32px): Your Chart Is Not *a Prediction Grid*
- Paragraph: A short guide on the three karmas (Sanchita, Prarabdha and
  Kriyamana), why Jyotish was never built to predict, and a chart prompt you
  can try today.

**Right**, using native **Text Input** elements, not a Wix Form:
| Element | ID | Settings |
|---|---|---|
| Text Input, label "First name", placeholder "Your first name" | `guideName` | Optional |
| Text Input, label "Email", placeholder "you@example.com" | `guideEmail` | Type: **Email**, Required |
| Button "SEND ME THE GUIDE" | `guideButton` | class `btn-primary`, full width |
| Text (14px faint) | `guideMessage` | The code fills this in |

Then paste `wix-studio/velo/pages/home.js` into **Dev Mode → Pages → Home v2**.
Signups join your existing EMAIL_SUBSCRIBERS group in MailerLite, so your
existing PDF email goes out automatically.

---

## Footer

Keep your current footer for now. It's site-wide, and simplifying it is a
separate step.

---

## Mobile booking bar (mobile breakpoint only)

1. Switch the editor to the **Mobile** breakpoint.
2. Add a container, full width, about 68px tall, class `mobile-dock`.
   Right-click → **Pin to screen** → bottom.
3. Inside it: on the left, text "**Find your reading**" (Cormorant 18px) over
   "Jyotish from ₹2,499 · Oracle ₹1,499" (15px soft). On the right, a button
   "READINGS" (class `btn-primary`) linking to the Readings anchor.
4. Set the container ID to `mobileDock` and tick **Hidden on load**.
5. Hide this container on the Desktop and Tablet breakpoints.

The page code slides it up once the hero scrolls away and hides it again
near the top.

---

## Instagram banner

Keep the existing in-app browser banner strip (`inapp-browser-banner.html`,
ID `browserBanner`) at the top of the new page, directly under the header,
exactly as on the current homepage, with the same settings. It's the one embed
worth keeping, because it's tiny and only shows its message inside Instagram,
Facebook or TikTok.

---

## Test, then go live

### Test on the hidden page first (Preview, then publish and open `/home-v2`)
- [ ] Everything shows immediately with no blank areas while scrolling
- [ ] "Find Your Reading" scrolls to Readings, and "free guide" scrolls to the form
- [ ] Every booking button opens the right booking page
- [ ] Free guide form: submit your own email and check the PDF email arrives
- [ ] Phone: the booking bar appears after scrolling past the hero
- [ ] **Instagram:** send yourself the `/home-v2` link in an Instagram DM,
      open it, and check that it loads quickly, the banner appears, and
      "Copy link" works
- [ ] PageSpeed Insights (pagespeed.web.dev), mobile, on `/home-v2`. Compare
      with your current homepage.

### Make it the homepage
1. Pages → `Home v2` → ⋯ → **Set as Homepage**.
2. Turn indexing back **on** for it (SEO settings), and paste the Home meta
   description and structured data from `WEEK1_AUDIT_FIXES_DEPLOY_GUIDE.md`
   into its SEO panel.
3. Rename the old homepage to `Home (old)`, hide it and set it to not indexed.
   Keep it for a couple of weeks in case you want anything from it, then delete it.
4. Publish.

### What the old homepage had that the new one deliberately drops
- The separate HTML embeds (hero, about, offerings, testimonials): replaced by native elements
- The four-stat bar: now two stats in the hero
- The spinning mandala animation: now a still yantra
- Instagram Feed and Blog preview widgets, if present: both heavy. The
  "Read for Free" door links to the blog instead.
