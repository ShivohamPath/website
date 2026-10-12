# ShivohamPath · Readings Page v2: Wix Setup

Same approach as the homepage: Wix's own header, the footer embed you
already added, and **one embed** for the page body.

| Piece | File |
|---|---|
| Page body (embed) | `embeds/readings-v2.html` |
| Page code | `velo/pages/readings.js` |

---

## Before you paste: two things to fill in

Open `readings-v2.html` in a text editor and search for:

1. **`PRICE_TBD`**: the Vishwanath Oracle Reading price. Replace
   `₹PRICE_TBD` with the new price, for example `₹2,100`. **Don't publish
   without this.**
2. **`CARD_IMAGE`** (optional): the three cards in the fan currently show
   simple line designs. To show your real cards, upload three card images
   to Wix Media, copy each image's URL, and replace each `<svg>…</svg>`
   line under that comment with `<img src="PASTE-URL-HERE" alt="">`.
   Portrait images (2:3) look best. Or send me the images and I'll do it.

## Step 1: Rename the booking services (Wix Bookings)

So the booking pages match the new Readings page:

| Current service | New name | Price |
|---|---|---|
| Advanced Moksha Path Consultation | The Spiritual Path | ₹8,500 (unchanged) |
| Synastry & Kundali Milan | Relationships & Marriage | ₹9,400 (unchanged) |
| Shiva Oracle Reading (PDF report only) | Vishwanath Oracle Reading | **your new price** |
| Madhurya Bhakta Sessions | Madhurya Bhakta (women only) | ₹6,499 (unchanged) |

Update each description with the text from the Readings page.

> **Check the booking links after renaming.** The "Book" buttons use your
> current booking addresses, for example
> `/booking-calendar/advanced-moksha-path-consultation`. If Wix changes a
> service's address when you rename it, open that service's booking page,
> copy its new address, and replace the old one in `readings-v2.html`
> (search for `booking-calendar`).

## Step 2: The page

1. Open the **Readings** page. Delete the old sections and embeds (hero,
   featured card, readings grid, how-it-works, CTA). Keep the Instagram
   banner strip at the top if it's there.
2. Add one section, background `#0a0a0f`, **top and bottom padding 0**.
3. Add an **Embed HTML**, paste all of `readings-v2.html`, and stretch it to
   100% width with no side margins.
4. Right-click → Properties → set the **ID** to `readingsEmbed`.
5. Dev Mode → Pages → **Readings** → paste `velo/pages/readings.js`.
   It makes the two jump buttons at the top scroll down the page.

## Step 3: Heights

The 389px breakpoint you added for the homepage applies here too.

| Breakpoint | Screen widths | Readings body height |
|---|---|---|
| Desktop | 1001px and up | **3380px** |
| Tablet | 751–1000px | **3270px** |
| Phones | 390–750px | **4310px** |
| Small phones | 320–389px | **4440px** |

If the bottom ("Not sure which to choose?") is cut off, raise that
breakpoint by 100px. If there's empty space under it, lower it by 100px.

## Step 4: Publish and check on your phone

- [ ] No empty space above the heading or between sections
- [ ] The two buttons at the top jump to Jyotish and to the Vishwanath Oracle
- [ ] Every "Book" button opens the right booking page
- [ ] The Oracle price shows a real price, not PRICE_TBD
- [ ] "Ask me first" and "Let me know" open your Contact page

## Homepage follow-up

The homepage still mentions the "Shiva Oracle Reading" at ₹1,499. Once
you've set the new price, tell me and I'll update the homepage embed to
the Vishwanath Oracle to match.
