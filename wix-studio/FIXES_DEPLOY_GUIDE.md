# ShivohamPath · Fixes Deploy Guide

This round fixes three problems: **Instagram in-app browser**, **slow loading**,
and **hard-to-find login**. Below is exactly what changed and how to push each
change live in Wix Studio. Nothing here goes live automatically — these repo
files are the master copies you paste into Wix.

---

## 1. Instagram / in-app browser banner  ← the big one

**Why:** When someone taps your link from your Instagram bio, Instagram opens
the site inside its *own* mini-browser. That mini-browser blocks the pop-ups
and cookies Wix needs, so **login silently fails** and pages load slower. This
is why people "can't log in" and the site "doesn't open well on Instagram."

**The fix:** A small banner that appears *only* for those visitors and helps
them reopen the site in their real browser (Safari/Chrome), where everything
works. It's invisible to everyone else.

**Deploy steps:**
1. In Wix Studio, add a thin section directly **under the header** (top of the
   page). Do this at least on **Home, Readings, and Courses**.
2. Add → Embed → **HTML iFrame**.
3. Paste the entire contents of `wix-studio/embeds/inapp-browser-banner.html`.
4. Set width to **100%**, height to **auto** (or ~70px).
5. Right-click the embed → Properties → set its **ID** to `browserBanner`
   (this lets the site pass it the correct page link).
6. Re-paste `wix-studio/velo/masterPage.js` into Dev Mode → Site → masterPage.js
   (it now sends the page URL to the banner). Save & Publish.

> The banner is hidden for normal visitors and reports zero height, so it costs
> nothing for people who are already in Safari/Chrome.

---

## 2. Faster loading

**What changed (no editor steps needed beyond re-pasting):**
- **`global.css`** — trimmed the Google Fonts from ~12 weights down to the ones
  actually used, and added a "reduce motion" rule. Re-paste into
  Dev Mode → CSS → `global.css`.
- **`embeds/home-hero.html`** — added font *preconnect* (fonts start loading
  sooner), GPU-accelerated the rotating mandala so it stops repainting every
  frame, and stops the animation for visitors who prefer reduced motion.
  Re-paste into the Home hero HTML embed.

**Result:** quicker first paint and far less battery/CPU churn on phones — which
is exactly where the in-app-browser visitors are.

---

## 3. Easier, clearer login

**What changed:**
- **`embeds/mobile-nav-member.html`** — the mobile member bar now has a **filled
  gold "Log In" button with an icon** (was a tiny 9px grey link almost nobody
  noticed), clearer "Sign Up" wording, and bigger tap targets.
- The **"My Account"** link no longer points at a dead `/my-account` page. It now
  routes through the site code to your real account page.
- **`velo/masterPage.js`** and **`velo/footer-embed.html`** updated to match. If
  your Wix account page uses a different address than `/account/my-account`,
  change the `ACCOUNT_URL` value near the top of `masterPage.js` (one place).

**Deploy steps:** re-paste the three files above into their Wix locations
(mobile nav embed, masterPage.js, footer embed), then Publish.

---

## Quick checklist

- [ ] Paste `inapp-browser-banner.html` into a top strip; set embed ID `browserBanner`
- [ ] Re-paste `masterPage.js` (Dev Mode → Site)
- [ ] Re-paste `global.css` (Dev Mode → CSS)
- [ ] Re-paste `home-hero.html` (Home hero embed)
- [ ] Re-paste `mobile-nav-member.html` (mobile member bar embed)
- [ ] Re-paste `footer-embed.html` (footer embed)
- [ ] Confirm `ACCOUNT_URL` in `masterPage.js` matches your real account page
- [ ] Publish, then test on a phone from your Instagram bio link
