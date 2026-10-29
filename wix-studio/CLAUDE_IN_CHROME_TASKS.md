# Tasks for Claude in Chrome · shivohampath.com on Wix

You are helping Veena Maheshwari apply finished website changes in her Wix
Studio editor. She is signed in to Wix, GitHub and Semrush in this Chrome.
All the code is already written; your job is to put it into Wix, set sizes,
publish and check.

**Ground rules**
- Never type, ask for or store passwords. If a sign-in page appears, stop and
  ask Veena to sign in herself.
- Before deleting anything on a live page, take a screenshot so it can be
  rebuilt if needed.
- Work one page at a time: change → publish → check on desktop and on a
  phone-width preview → move on. Tell Veena briefly after each page.
- Ask Veena before anything not listed here, or if something on screen
  doesn't match these notes.
- Her spiritual path (madhurya bhava toward Shiva as Vishwanath, her husband)
  is sacred to her. Don't reword any of her text.

## Where the files are

Every file is on GitHub in the repository `ShivohamPath/website`, branch
`claude/loving-hamilton-dgcv4q`, folder `wix-studio/`. File page:

`https://github.com/ShivohamPath/website/blob/claude/loving-hamilton-dgcv4q/wix-studio/<path>`

To copy a file: open its GitHub page, click the **Copy raw file** button
(the two-squares icon above the code), then paste with Ctrl+V / Cmd+V into
the Wix **Embed HTML → Enter code** box. Several files are large (images are
built in), so paste rather than type.

## Breakpoints (set up once)

The site needs four breakpoints: Desktop 1001px+, Tablet 751–1000px,
Phones 390–750px, Small phones 320–389px. If there is no breakpoint at
389px yet: editor top bar → breakpoints menu → **Manage breakpoints** → add
**389px**.

For every embed below: **stretched to 100% width, no side margins**; the
section holding it has background `#0a0a0f` and **top/bottom padding 0**.

## Step 1 · Header (every page)

Detailed steps: `HOMEPAGE_V2_BUILD_GUIDE.md`, Step 1. In short: menu shows only
Readings, Courses, About, Blog; delete the embeds `headerLoginEmbed` and
`mobileNavEmbed` if present; add a text link "Log in" → `/account/my-account`;
keep the logo and the "Book a Reading" button (→ `/readings`); background
`#0a0a0f`, sticky.

## Step 2 · Footer (every page)

Veena says this is already done. Just check the footer embed contains
`embeds/footer-v2.html` and its heights are 300 / 300 / 540 / 540px
(Desktop / Tablet / Phones / Small phones). The old embed `footerEmbed` should
be gone.

## Step 3 · Homepage

Veena already pasted `embeds/home-v2.html` and `velo/pages/home.js`, but the
file has changed since (new Vishwanath Oracle and prices), so **re-paste
`embeds/home-v2.html`** into the existing embed (ID `homeEmbed`). Heights:

| Desktop | Tablet | Phones | Small phones |
|---|---|---|---|
| 6260px | 6020px | 6510px | 6740px |

## Step 4 · Readings page

Follow `READINGS_V2_GUIDE.md`:
1. Wix Bookings: rename and reprice the services (table in Step 1 of the
   guide). After renaming, open each service's booking page and note its
   address. If an address changed, tell Veena: the Book links in
   `readings-v2.html` need that new address (Claude Code can update the file).
2. Readings page: delete the old section embeds (`readings-hero`,
   `readings-featured`, `readings-grid`, `readings-how`, `readings-cta`), add
   one Embed HTML with `embeds/readings-v2.html`, ID `readingsEmbed`.
3. Dev Mode → Readings page code → replace with `velo/pages/readings.js`.
4. Heights: 3440 / 3360 / 4410 / 4540px.
5. Readings page → SEO settings → Advanced SEO → Structured data → replace
   with `seo/service-schema.json`.

## Step 5 · Five more pages, one embed each

Follow `PAGES_V2_GUIDE.md`, Part 1. **Before deleting the old embeds on each
page, note the order the sections appear in on the live page** and compare
with the guide's table. If the order differs, stop and tell Veena (the file
needs rebuilding first).

| Page | File | Desktop | Tablet | Phones | Small phones |
|---|---|---|---|---|---|
| About | `embeds/about-v2.html` | 14690 | 17370 | 22190 | 23460 |
| Courses | `embeds/courses-v2.html` | 4130 | 4130 | 4700 | 4840 |
| Foundations of Jyotish | `embeds/jyotish-v2.html` | 5410 | 6830 | 7950 | 8310 |
| She Who Becomes Him | `embeds/swbh-v2.html` | 3440 | 4900 | 6100 | 6340 |
| Karmic Knots | `embeds/karmic-knots-v2.html` | 4710 | 5310 | 6400 | 6570 |

Keep the thin Instagram banner embed (`browserBanner`) at the top of a page if
it has one.

## Step 6 · Height check (all rebuilt pages)

After publishing, open each page on the live site at desktop width and at
phone width. If the bottom of the embed is cut off, raise that breakpoint's
height by 100px; if there's empty space under it, lower it by 100px.
Note any changed heights for Veena.

## Step 7 · Semrush issues (audit of 29 Oct 2026)

Open Semrush → Site Audit → shivohampath.com. For each issue, open it to see
the exact URLs, then fix in Wix as described in `PAGES_V2_GUIDE.md`, Part 2:
- **Pages that couldn't be crawled / 5XX errors:** if the page no longer
  exists, add a 301 redirect (Wix Settings → SEO → URL Redirect Manager) to
  the page that replaced it, usually `/readings` or `/courses`. Members and
  checkout pages need nothing.
- **Incorrect pages in sitemap.xml:** that page's SEO settings → turn off
  "Let search engines index this page" (for example test pages like "Home
  v2"). Ask Veena before deleting any page.
- **Broken external links (14):** open the blog post or page Semrush names,
  fix or remove the link, republish. If you're unsure what the right link is,
  list it for Veena.
- **Renamed booking services:** add a 301 redirect from each old booking
  address to its new one.
- Then in Semrush click **Rerun campaign**.

## Step 8 · Small extras

- Home page → SEO settings → Structured data: paste
  `seo/organization-person-schema.json`, but first replace
  `https://www.shivohampath.com/logo.png` with the real logo address (Wix
  Media → right-click the logo → Copy URL).
- Make sure "Home v2" and any other test pages are not indexed.

## At the end

Give Veena a short list: what was done, any heights you changed, any booking
addresses that changed, and anything you skipped and why.
