# Wix SEO Action Checklist — shivohampath.com
_Generated from GSC + Semrush audits (28 May 2026) and verified against live Wix data._

## ✅ Already done (in code / via API — no action needed)
- **404 fixed:** "Enrol Now" for Foundations of Jyothish now points to the real
  page `/challenge-page/foundationsofjyothishthekarmapath` (was the dead
  `/spiritualcourses/foundations-of-jyothish`). _(courses-cta, courses-current)_
- **Booking redirect fixed:** Madhurya Bhakta "Book Now" now uses the current
  slug `madhurya-bhakta-reading-females-only` (was the old redirecting slug).
- **Course SEO fixed live (via API):**
  - SWBH title → `She Who Becomes Him: Madhurya Bhakti Course | Shivoham Path` (was 65 chars ending "…| Blog").
  - Foundations → added a proper title + replaced the "spirituality blog" description.
- **Google Fonts preconnect** added to all 36 embeds + footer (minor speed win).

---

## 🔴 Priority 1 — Do these in the Wix dashboard

### 1. Add the 301 redirect (clears the GSC 404 fully)
There is **no API** for this — it must be done in the dashboard:
- Wix Dashboard → **Marketing & SEO → SEO Tools → URL Redirect Manager** → **+ New Redirect**
- Type **301**, From `/spiritualcourses/foundations-of-jyothish`,
  To `/challenge-page/foundationsofjyothishthekarmapath`.

### 2. Find the **2nd** 404 (GSC reports 2; we fixed 1)
- GSC → **Indexing → Pages → "Not found (404)"** → click to see the 2 exact URLs.
- One will be the `/spiritualcourses/...` URL (now fixed — click **Validate Fix**).
- The other is unknown — once you see it, either fix the link that points to it or
  add a 301 like above. _(Paste it back to me and I'll trace + fix it.)_

### 3. Verify the **2 noindex** pages are intentional
- GSC → **Indexing → Pages → "Excluded by 'noindex' tag"** → see the 2 URLs.
- If they're thank-you / checkout / members pages → correct, leave them.
- If a real content page is in there → open it in Wix → **Page SEO → Advanced →**
  toggle **"Let search engines index this page"** back ON.

---

## 🟠 Priority 2 — Content SEO (Semrush warnings)

### 4. Add the 12 missing meta descriptions
- Find them: Semrush → the "12 pages don't have meta descriptions" issue → list of pages.
- Wix: open each page → **Page SEO → "What it looks like on Google" → Description.**
- Keep to **140–160 characters**, include the page's main keyword. Template:
  `[Main offering] with Veena Maheshwari — [benefit]. [Call to action].`

### 5. Shorten the 14 long title tags (<60 characters)
- Semrush → "14 pages have too much text within the title tags" → list.
- Both courses are already fixed. One known one to trim:
  **Karmic Knots booking service** title is 67 chars
  (`Karmic Knots Reading | 60-Min Vedic Astrology Session | Shivohampath`).
  Wix Dashboard → **Bookings → Services → Karmic Knots Reading → SEO** → shorten to
  e.g. `Karmic Knots Reading (60 min) | Shivoham Path`.

### 6. Add structured data
- Use the snippets in **`STRUCTURED-DATA-snippets.md`** (built from your live data).
- Validate at https://search.google.com/test/rich-results.

---

## 🟡 Priority 3 — Investigate / monitor

### 7. The 2 "invalid structured data" items (Semrush error)
- These are **not** from our work (our JSON-LD is valid; the count didn't change).
- Likely Wix auto-generated markup on a blog post or event. Find them by running the
  affected pages through the Rich Results Test, then fix or remove the bad block.

### 8. The 23 "slow load speed" pages (NEW error)
- Brand-new spike (+23) — may be partly a crawl-time blip. **Re-run the Semrush audit
  in ~1 week** before over-reacting.
- If it persists: (a) compress oversized images (your program art is 3886px wide —
  Wix should be resizing, but check originals), (b) reduce the number of separate
  HTML embeds/apps per page, (c) lazy-load below-the-fold sections.

### 9. The 50 "discovered / crawled – not indexed" pages
- Many are Wix **app URLs** (`/booking-calendar/*`, `/service-page/*`,
  `/challenge-payment/*`, checkout, members) that **don't need** indexing — not a problem.
- For real content pages (blog posts, readings, courses): use **GSC → URL Inspection →
  Request Indexing**, and keep adding internal links + fresh content. Indexed count is
  already climbing (11 → 29), so this is trending the right way.

---

## ⚠️ Data hygiene I spotted (worth a look)
- **Price mismatch:** the Readings grid embed shows **₹6,499** for the *Madhurya Bhakta*
  card, but the live booking service is **₹7,500**. Embeds hard-code prices, so they
  drift from the real Bookings/Programs prices. Worth auditing all hard-coded prices in
  the embeds against the live services and syncing them.

## 🟢 Safe to ignore
- **76 "low text-to-HTML ratio"** — inherent to Wix + design-heavy pages. Not worth chasing.
- **14 "blocked from search" (Semrush donut)** — mostly Wix system pages that are
  blocked by design.
