# ShivohamPath · Homepage v2: Wix Setup

The new homepage uses **Wix's own header** (tidied up) plus **two embeds**:

| Piece | File | Where it goes in Wix |
|---|---|---|
| Header | none: Wix's own header | Edit the existing header (Step 1) |
| Homepage body | `embeds/home-v2.html` | On the **Home** page, between header and footer |
| Footer | `embeds/footer-v2.html` | Inside the Wix **Footer** (shows on every page) |

Your photo is already built into `home-v2.html`, so there's nothing to upload.

> Don't paste `mockups/homepage-v2.html` into Wix. That file is only the
> design preview: it has its own header and footer, and its links don't
> work inside Wix.

---

## Exact sizes

Wix gives an embed one fixed height per **breakpoint**, so each breakpoint
needs the height that matches the page. The phone layout is the same height on
every phone 390px and wider. Smaller phones need a separate height, so
**add one extra breakpoint** first:

1. At the top of the editor, open the **breakpoints** menu (the desktop /
   tablet / mobile icons) → **Manage breakpoints** (or **Add breakpoint**).
2. Add a breakpoint at **389px**. Mobile is now split into two:
   **Small phones (320–389px)** and **Phones (390–750px)**.

Then set the homepage embed's height on each breakpoint. Width is always
**100% (stretched)**, with no side margins.

| Breakpoint | Screen widths | Homepage body height | Footer height |
|---|---|---|---|
| Desktop | 1001px and up | **6240px** | 300px |
| Tablet | 751–1000px | **5960px** | 300px |
| Phones | 390–750px | **6420px** | 540px |
| Small phones | 320–389px | **6660px** | 540px |

**Also check the section that holds the embed:** its top and bottom
padding must be **0**, and its height set to fit the embed. Any padding there
adds empty space above the headline.

## Step 1: Header (every page)

Keep Wix's own header. It already works on every page and has a proper
mobile menu. Just tidy it:

1. **Menu:** Site Menu → keep only **Readings, Courses, About, Blog**. Move
   Contact, Books and anything else out (they're in the new footer).
2. **Remove** the `header-login.html` embed (ID `headerLoginEmbed`) and the
   `mobile-nav-member.html` embed (ID `mobileNavEmbed`), if they're in the header.
3. **Add a "Log in" link:** Add → Text → type `Log in` → link it to the page
   `/account/my-account`. Place it next to the menu. A plain link works inside
   Instagram, where the old popup login doesn't.
4. Keep your logo and the **Book a Reading** button (linking to `/readings`).
5. Header background `#0a0a0f`, set to **sticky / freeze**.

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
- [ ] Other pages: the tidied header and new footer appear and every link works
- [ ] Open the site from an Instagram DM and check that it loads and the banner shows

If the free guide box at the bottom gets cut off on a phone, raise that
breakpoint's height by 100px. If there's empty space below the free guide box,
lower it by 100px. The space between sections never changes.

---

## Afterwards (optional tidy-up)

`velo/masterPage.js` still contains code for the old header login, mobile
nav and footer embeds. It safely skips them once they're deleted, so
nothing needs to change now.

## Why separate pieces?

Wix's header and footer are shared by every page, so they live in Wix's
header and footer areas. The homepage body changes per page. Two embeds
instead of the old ten or so is a large speed improvement. The very
fastest option is building the body from native Wix elements; we can do
that later if you want the last bit of speed.
