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
Reading, Study the Path, Read for Free). Then come the signature Karmic Knots
reading with its price, a price list of the other readings, a short About, the
quote, testimonials, and the free guide signup. On phones, a booking bar slides
up once the hero scrolls away. The deep Shaktipat, Lalleshwari and lineage
content moves entirely to the About page.

## Before building

- Testimonials are still the placeholders from `embeds/testimonials-section.html`.
- The one-line descriptions under the other readings are placeholders.
- The email form only shows a confirmation. In production it should post to
  `dashboard/api/subscribe.js`.
- To get the full speed gain in Wix, build these sections with native Wix
  Studio elements (or at most one embed), not one iFrame per section.
