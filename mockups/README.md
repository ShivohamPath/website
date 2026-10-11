# Homepage v2 mockup

`homepage-v2.html` is a standalone design mockup for the homepage revamp.
Open it in any browser. Tap **Show what changed** (bottom right) to see a note
under each section and preview the Instagram banner.

Nothing here is live. It's a proposal to review before we build it in Wix.

## What it fixes

**Lag.** The current homepage is built from about 8–10 separate HTML iFrames
(hero, about, offerings, testimonials, banner, header login, mobile nav,
footer). Each one is a whole web page that downloads Google Fonts again and
talks to the main page through `postMessage`. That all comes on top of Wix's
own scripts. The mockup is one document: one font request, no iFrames, under
2 KB of script, no running animations, and the photo is lazy-loaded at the size
it's displayed.

**Instagram browser.** Instagram's in-app browser struggles with many iFrames
and blocks Wix's popup login. In the mockup:
- The "open in your browser" banner is part of the page instead of an iFrame,
  so it appears instantly. On Android it opens Chrome directly. On iPhone it
  shows the ••• → Open in browser hint plus a Copy link button.
- "Log in" is a normal link to the account page, not a popup.
- The mobile menu uses a native `<details>` element and needs no script.

**User flow.** The hero has one next step, followed by three doors (Get a
Reading, Study the Path, Read for Free). Then come the readings (see below), a
short About, the quote, testimonials, and the free guide signup. On phones, a booking bar slides
up once the hero scrolls away. The deep Shaktipat, Lalleshwari and lineage
content moves entirely to the About page.

## Reading collection (v2)

The readings now split into two clearly separate methods.

**Jyotish: live birth-chart consultations**, ordered by the question the client
brings, not by price:

| Consultation | Replaces | Length | Price |
|---|---|---|---|
| The Specific Question | Specific Question Reading | 30 min | ₹2,499 |
| Karmic Knots (signature) | Karmic Knots | 60 min | ₹6,500 |
| The Spiritual Path | Advanced Moksha Consultation | 90 min | ₹8,500 * |
| Relationships & Marriage | Synastry & Kundali Milan | 90 min | ₹9,400 |
| Madhurya Bhakta (women only) | Madhurya Bhakta Sessions | 2 hrs | ₹6,499 |

\* Carried over from Advanced Moksha. Review once the new scope is settled.

**Oracle: a different method.** The Shiva Oracle Reading (₹1,499, written PDF)
gets its own visually separate box.

Not on the public menu: Returning Seeker (existing clients only), Varshaphala
and Muhurta (still to decide). No copy promises sadhana prescriptions, remedies
or ritual guidance.

**Decisions (confirmed by Veena)**
- The Oracle uses Shiva oracle cards only, never the birth chart. Copy says so.
- Every Jyotish consultation is followed by a written PDF report (summary and
  reference). Shown under the Jyotish heading.
- Madhurya Bhakta is strictly for women. Labelled "Women only".
- Keep a general entry point (The Specific Question) alongside the karmic and
  spiritual signature work.

## Before building

- Testimonials are three real, verified Trustpilot reviews (Lavanya, Sachin,
  Anonymous), quoted word for word as plain text, not a Trustpilot widget,
  which would add another slow iFrame. New reviews come in through
  Trustpilot's free BCC invitation, sent with each reading report.
- This file is the design preview only. Do not paste it into Wix. The
  Wix-ready versions are `wix-studio/embeds/header-v2.html`, `home-v2.html` and
  `footer-v2.html`. Setup and exact heights are in
  `wix-studio/HOMEPAGE_V2_BUILD_GUIDE.md`.
