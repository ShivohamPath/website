# ShivohamPath · Homepage v2: Wix Setup

The new homepage is **three separate pieces**, each pasted into its own
"Embed HTML" element:

| Piece | File | Where it goes in Wix |
|---|---|---|
| Header | `embeds/header-v2.html` | Inside the Wix **Header** (shows on every page) |
| Homepage body | `embeds/home-v2.html` | On the **Home** page, between header and footer |
| Footer | `embeds/footer-v2.html` | Inside the Wix **Footer** (shows on every page) |

Your photo is already built into `home-v2.html`, so there's nothing to upload.

> Don't paste `mockups/homepage-v2.html` into Wix. That file is only the
> design preview: it has its own header and footer, and its links don't
> work inside Wix.

---

## Exact sizes

Set these in each embed's **size panel**, separately for each breakpoint
(switch breakpoints at the top of the editor). Width is always **100%
(stretched)**, with no side margins.

| Embed | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header | 64px | 64px | 100px |
| Homepage body | **6200px** | **5960px** | **8420px** |
| Footer | 300px | 300px | 540px |

The body page fills whatever height it's given and spreads any spare height
evenly between its sections, so there's no empty band at the bottom.

---

## Step 1: Header (every page)

1. Open the site **Header**. Delete what's in it now: logo, menu, "Book a
   Reading" button, the `header-login.html` embed and the
   `mobile-nav-member.html` embed. (Take a screenshot first if you like.)
2. Add → Embed Code → **Embed HTML**, inside the header.
3. Paste all of `embeds/header-v2.html`.
4. Size it as in the table above, set the header background to `#0a0a0f`,
   and keep the header **sticky (frozen)**.

On phones, the links sit in a row under the logo instead of a dropdown menu,
because a menu can't open past the edge of an embed.

## Step 2: Footer (every page)

1. Open the site **Footer**. Delete the old footer embed (`footer-embed.html`,
   ID `footerEmbed`) and anything else in it.
2. Add an **Embed HTML** inside the footer, paste all of `embeds/footer-v2.html`,
   and size it as in the table. Set the footer background to `#0a0a0f`.

> The old footer had a newsletter form. The new homepage has its own free
> guide signup, which uses the same MailerLite list.

## Step 3: Homepage body

1. On the **Home** page, delete the old sections and embeds: hero, about,
   offerings, testimonials, quote, and any Instagram feed or blog widget.
   **Keep** the thin Instagram banner strip at the very top
   (`inapp-browser-banner.html`, ID `browserBanner`).
2. Below the banner, add one section with background `#0a0a0f`, no padding.
3. Add an **Embed HTML** to it and paste all of `embeds/home-v2.html`.
4. Size: stretched to 100% width, heights as in the table.
5. Right-click the embed → Properties → set the **ID** to `homeEmbed`.
6. Dev Mode → Pages → **Home** → replace the code with
   `velo/pages/home.js`. This makes "Find Your Reading" and "Start with the
   free guide" scroll down the page.

## Step 4: Publish and check

- [ ] No double header or footer on the homepage
- [ ] No large empty space anywhere, on desktop and on your phone
- [ ] Your photo shows in the About section
- [ ] "Find Your Reading" scrolls down to the readings
- [ ] Booking buttons open the booking page in the same tab, not inside the box
- [ ] Free guide form: enter your email and check the PDF email arrives
- [ ] Other pages: the new header and footer appear and every link works
- [ ] Open the site from an Instagram DM and check that it loads and the banner shows

If the bottom of the homepage gets cut off on some phone, raise the
**Mobile** body height by 200px. If you see too much space between
sections, lower it by 200px.

---

## Afterwards (optional tidy-up)

`velo/masterPage.js` still contains code for the old header login, mobile
nav and footer embeds. It safely skips them once they're deleted, so
nothing needs to change now.

## Why three embeds and not one?

Wix's header and footer are shared by every page, so they have to live in
Wix's header and footer areas. The homepage body changes per page. Three
embeds instead of the old ten or so is a large speed improvement. The very
fastest option is building the body from native Wix elements; we can do
that later if you want the last bit of speed.
