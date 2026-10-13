# ShivohamPath · Which file goes where

These are the master copies of everything pasted into Wix. Nothing here goes
live by itself: a change only reaches the site when it is pasted into Wix and
published.

## Current (use these)

| Page / area | File(s) | Guide |
|---|---|---|
| Header | Wix's own header (tidied) | `HOMEPAGE_V2_BUILD_GUIDE.md`, Step 1 |
| Footer (every page) | `embeds/footer-v2.html` | `HOMEPAGE_V2_BUILD_GUIDE.md` |
| Homepage | `embeds/home-v2.html` + `velo/pages/home.js` | `HOMEPAGE_V2_BUILD_GUIDE.md` |
| Readings | `embeds/readings-v2.html` + `velo/pages/readings.js` | `READINGS_V2_GUIDE.md` |
| Instagram banner (top of pages) | `embeds/inapp-browser-banner.html` | `FIXES_DEPLOY_GUIDE.md` |
| Site code (every page) | `velo/masterPage.js` | `FIXES_DEPLOY_GUIDE.md` |
| Search data | `seo/organization-person-schema.json` (Home), `seo/service-schema.json` (Readings) | `WEEK1_AUDIT_FIXES_DEPLOY_GUIDE.md`, `READINGS_V2_GUIDE.md` |
| Emails (MailerLite) | `emails/*.html` | — |
| Backend | `velo/backend/*.js`, and the Vercel forms in `/dashboard/api` | — |

**Not yet rebuilt** (still one embed per section, so still slower): About,
Courses, Foundations of Jyotish, She Who Becomes Him, Karmic Knots, Contact.
Their section files are in `embeds/` (`about-hero`, `story-section`,
`lineage-*`, `lalleshwari-section`, `shaktipat-section`, `offerings-section`,
`courses-*`, `jyotish-*`, `swbh-*`, `karmic-knots-*`, `contact-form`,
`newsletter-signup`).

## Retired (don't paste these any more)

| File | Replaced by |
|---|---|
| `embeds/home-hero.html`, `home-about.html`, `testimonials-section.html` | `embeds/home-v2.html` |
| `embeds/readings-hero.html`, `readings-featured.html`, `readings-grid.html`, `readings-how.html`, `readings-cta.html` | `embeds/readings-v2.html` |
| `embeds/header-login.html`, `embeds/mobile-nav-member.html` | Wix's own header with a "Log in" link |
| `velo/footer-embed.html` | `embeds/footer-v2.html` |
| `wix-embed-homepage.html` | `embeds/home-v2.html` (old single-embed homepage) |
| `BUILD_GUIDE.md` HOME PAGE and READINGS sections | the v2 guides above |
| `mockups/homepage-v2.html` | design preview only, never paste into Wix |
