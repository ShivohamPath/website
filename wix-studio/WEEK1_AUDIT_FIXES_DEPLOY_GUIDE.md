# ShivohamPath · Week 1 Audit Fixes — Deploy Guide

This covers the "Week 1 — Quick Wins" items from the July 2026 website audit.
Like the other deploy guides in this repo, nothing here goes live automatically —
these are the master copies you paste into Wix Studio.

---

## 1. Hero blank-load fix

**The problem:** On first visit, the hero showed a blank/gray area for
several seconds. Root cause: `embeds/home-hero.html` loaded its Google
Fonts stylesheet with a normal render-blocking `<link>` tag. Nothing in
that iframe can paint until its `<head>` finishes loading — on a slow
mobile connection, that stylesheet fetch *is* the blank gap.

**What changed in `embeds/home-hero.html`:**
- The fonts `<link>` is now loaded with the preload-and-swap pattern, so
  the browser paints immediately with the fallback serif and swaps to
  the real fonts once they arrive (no blocking).
- `html { background: #0a0a0f; }` is set inline so the iframe is dark
  from the very first frame, instead of flashing white before any CSS
  runs.

**Deploy steps:**
1. Re-paste the full contents of `wix-studio/embeds/home-hero.html` into
   the Home page's hero HTML embed.
2. **Important — also set the Wix strip background directly:** select the
   hero Strip in the editor (not just the embed) and set its background
   color to `#0a0a0f`. The iframe itself now paints dark instantly, but
   Wix still needs a moment to load the iframe element at all — if the
   strip underneath is white/default, you'll still see a flash before the
   iframe mounts. Setting the strip's own background removes that.
3. Publish, then hard-refresh on a throttled mobile connection (Chrome
   DevTools → Network → "Slow 4G") to confirm the gray gap is gone.

---

## 2. Testimonials section (new)

**New file:** `wix-studio/embeds/testimonials-section.html`

Contains 3 testimonial cards matching your existing design system.
**The quotes are placeholders** — swap them for real client testimonials
before publishing (first-name + city is enough per the audit's privacy note).

**Deploy steps:**
1. On the Home page, add a new Strip between the Pull Quote section and
   the Blog Preview section (this is "Section 5" per `BUILD_GUIDE.md`'s
   original spec — it was designed but never built).
2. Add → Embed → HTML iFrame, paste the file contents, set width 100% /
   height auto (~500px).
3. Replace the three placeholder quotes/names/locations with real ones.
4. Publish.

---

## 3. Newsletter signup (footer + new standalone embed)

**The problem:** No email capture existed anywhere on the site.

**What changed in `velo/footer-embed.html`:**
Added a newsletter row ("Receive cosmic insights") above the main footer
grid, wired to the same Vercel `/api/subscribe` endpoint the contact form
already uses (`dashboard/api/subscribe.js` → MailerLite).

**New file:** `wix-studio/embeds/newsletter-signup.html` — a standalone,
larger version of the same form for use **below blog post content**
(Wix Blog's Post Page template applies to every post, so you only add
this once).

**Deploy steps:**
1. Re-paste `velo/footer-embed.html` into the footer HTML embed. Publish.
2. On the Blog **Post Page** template (not an individual post — the shared
   template), add a Strip below the article body, add an HTML iFrame, and
   paste `embeds/newsletter-signup.html`. Width 100%, height auto (~320px).
3. Confirm both forms actually submit — check your MailerLite
   `EMAIL_SUBSCRIBERS` group (`183427858702534273`) for a test signup.

---

## 4. Schema.org structured data (new)

**New folder:** `wix-studio/seo/`

- `organization-person-schema.json` — Organization + Person (Veena)
- `service-schema.json` — all 6 readings as `Service` items, with real
  prices/URLs pulled from `readings-grid.html` and `readings-featured.html`

**Before deploying `organization-person-schema.json`:**
- Replace `"logo": "https://www.shivohampath.com/logo.png"` with the real
  logo URL from your Wix Media Manager (right-click the uploaded logo →
  Copy Image URL).
- The `image` field for Veena already points at the real portrait URL
  used in `home-about.html` — leave as-is unless you've replaced that photo.

**Deploy steps (Wix Studio → Settings → SEO Tools):**
1. Go to the **Home page's** SEO panel → **Structured Data** (Advanced
   SEO tab) → paste the contents of `organization-person-schema.json`.
2. Go to the **Readings page's** SEO panel → Structured Data → paste
   `service-schema.json`.
3. Publish, then validate both pages with Google's Rich Results Test
   (search.google.com/test/rich-results) using your live URLs.

**Note on BlogPosting schema:** Wix Blog on Business/Premium plans
auto-generates basic Article/BlogPosting structured data for each post —
verify this is present on a live post URL with the Rich Results Test
before hand-writing per-post JSON-LD. If it's missing, that requires Velo
code on the dynamic Blog Post Page (not a simple paste-in file) — flag it
back to me and I'll build that separately.

---

## 5. Meta descriptions & Open Graph (manual, per page)

These live in Wix's per-page **SEO panel** (Settings icon on each page →
SEO), not in code — Wix generates the actual `<meta>` tags from what you
enter there. Suggested copy (all under 160 characters):

| Page | Suggested Meta Description |
|------|------------------------------|
| Home | "Esoteric astrology and Vedic Jyotish readings with Veena Maheshwari. Karmic Knots readings, D60 Shashtiamsha charts, and Shaivite teaching for serious seekers." |
| Readings | "Six karmic astrology readings — from a focused Specific Question session to the full D1+D9+D60 Karmic Knots audit. Book online." |
| About | "Meet Veena Maheshwari — Kashmiri Shaivism practitioner, Shaktipat-initiated, and Vedic astrologer reading karma through the D60 Shashtiamsha." |
| Courses | "Live and on-demand courses in esoteric astrology and Shaivite spirituality, taught by Veena Maheshwari of Shivoham Path." |
| Blog | "Essays on Jyotish, karma, mythology, and Kashmiri Shaivism from Shivoham Path." |
| Contact | "Get in touch with Shivoham Path — booking questions, clarity sessions, or course inquiries. Response within 2–3 days." |

Each page's SEO panel also has a **Social Share Image** field — set this
to a branded 1200×630px image (gold-on-dark, matching your aesthetic) so
links look right when shared. Without it, Wix falls back to a random page
screenshot, which is likely why shares currently look broken per the audit.

---

## 6. Alt text — status

Checked every image in the `wix-studio/embeds/` HTML files: all already
have descriptive `alt` attributes (`home-about.html`, `lalleshwari-section.html`).
**The gap is in Wix Media Manager** — blog post images and any images
placed directly via the Wix Editor (not through these HTML embeds) need
alt text set individually: click the image → Settings → Alt Text. This
can't be fixed from code; it needs to be done per-image in the editor.

---

## Quick checklist

- [ ] Re-paste `embeds/home-hero.html`; set hero Strip background to `#0a0a0f`
- [ ] Add new Strip for `embeds/testimonials-section.html`; replace placeholder quotes
- [ ] Re-paste `velo/footer-embed.html`; test newsletter signup
- [ ] Add `embeds/newsletter-signup.html` to Blog Post Page template
- [ ] Paste `seo/organization-person-schema.json` into Home page Structured Data (fix logo URL first)
- [ ] Paste `seo/service-schema.json` into Readings page Structured Data
- [ ] Verify BlogPosting schema via Rich Results Test on a live blog post
- [ ] Set meta descriptions per page (table above)
- [ ] Set a Social Share Image per page
- [ ] Sweep Wix Media Manager images for missing alt text
- [ ] Publish, then re-run PageSpeed Insights on mobile to confirm the hero fix helped LCP

---

## One thing worth flagging (not fixed here)

`wix-studio/wix-embed-homepage.html` and `wix-studio/velo/pages/home.js`
appear to be leftovers from an earlier single-iframe homepage design
(everything — hero through footer CTA — in one giant embed, wired to a
`shivoham-height` message that `home.js` listens for). Since you confirmed
the *modular* per-section embeds are what's actually live, these two files
are stale and not part of the deploy path. Worth deleting them from the
repo at some point so nobody pastes the old monolithic version by mistake
— let me know if you'd like me to remove them.
