# ShivohamPath · Readings Page v2: Wix Setup

> **Classic Wix editor:** your site uses the classic editor (Desktop and Mobile views only, no breakpoints). Use the sizes in `CLAUDE_IN_CHROME_TASKS.md` instead of the breakpoint heights below.

Same approach as the homepage: Wix's own header, the footer embed you
already added, and **one embed** for the page body.

| Piece | File |
|---|---|
| Page body (embed) | `embeds/readings-v2.html` |
| Page code | `velo/pages/readings.js` |

---

## Step 1: Rename the booking services (Wix Bookings)

So the booking pages match the new Readings page:

| Current service | New name | Price |
|---|---|---|
| Advanced Moksha Path Consultation | The Spiritual Path | ₹8,500 (unchanged) |
| Synastry & Kundali Milan | Relationships & Marriage | ₹9,400 (unchanged) |
| Shiva Oracle Reading (PDF report only) | Vishwanath Oracle Reading | **₹1,699** |
| Madhurya Bhakta Sessions | Madhurya Bhakta (women only) | ₹6,499 (unchanged) |
| Specific Question Reading | The Specific Question | **₹3,499** |

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
| Desktop | 1001px and up | **3440px** |
| Tablet | 751–1000px | **3360px** |
| Phones | 390–750px | **4410px** |
| Small phones | 320–389px | **4540px** |

If the bottom ("Not sure which to choose?") is cut off, raise that
breakpoint by 100px. If there's empty space under it, lower it by 100px.

## Step 4: Update the search data (SEO)

Google reads your services and prices from the Readings page's structured
data. Readings page → **SEO settings** → **Advanced SEO / Structured Data**
→ replace what's there with the contents of `seo/service-schema.json`. It
now has the new names and prices. If any booking address changed in Step 1,
update the matching `"url"` in that file too.

## Step 5: Publish and check on your phone

- [ ] No empty space above the heading or between sections
- [ ] The two buttons at the top jump to Jyotish and to the Vishwanath Oracle
- [ ] Every "Book" button opens the right booking page
- [ ] The Oracle reading shows ₹1,699
- [ ] "Ask me first" and "Let me know" open your Contact page

## Wix Bookings note for the Oracle reading

Your Oracle PDF is sent during the client's booked slot, so keep it as a
bookable service with time slots. In the service description, mention:
five-card spread, written as if Vishwanath is speaking to them, sent during
their slot, and one follow-up question by email.
