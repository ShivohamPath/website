# Paste-Ready Structured Data (JSON-LD) for Wix

**Why this file exists:** the JSON-LD inside the HTML *embeds* lives in an iframe,
so Google attributes it to the iframe's URL — **not** to your real page. To make
structured data count, it must be added to the page's `<head>` via Wix.

## Where to paste each snippet in Wix
For each page below:
1. Wix Dashboard → **SEO** → **Go to SEO Settings** (or open the page in the Editor → **Page Settings → SEO (Advanced tab)**).
2. Scroll to **Structured Data Markup** → **+ Add New Schema** (Wix Studio: *Custom JSON-LD*).
3. Paste the snippet for that page. Save & publish.

All values below are pulled from your **live** Wix Programs/Bookings data (May 2026), so prices and URLs are accurate. Update `LOGO_URL` on the home snippet with your real logo image URL.

---

## 1) Home page  →  `/`
Combines Organization + Person (Veena) + WebSite.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.shivohampath.com/#organization",
      "name": "Shivoham Path",
      "url": "https://www.shivohampath.com/",
      "logo": "LOGO_URL",
      "founder": { "@id": "https://www.shivohampath.com/#veena" },
      "sameAs": [
        "https://www.instagram.com/shivohampath",
        "https://www.youtube.com/@shivohampath"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.shivohampath.com/#veena",
      "name": "Veena Maheshwari",
      "jobTitle": "Vedic Astrologer & Spiritual Teacher",
      "url": "https://www.shivohampath.com/about",
      "worksFor": { "@id": "https://www.shivohampath.com/#organization" },
      "knowsAbout": [
        "Vedic Astrology", "Jyotish", "Karmic Astrology",
        "Madhurya Bhakti", "Tantra", "Bhakti", "Nakshatras", "Dasha"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.shivohampath.com/#website",
      "url": "https://www.shivohampath.com/",
      "name": "Shivoham Path",
      "publisher": { "@id": "https://www.shivohampath.com/#organization" }
    }
  ]
}
```

---

## 2) Readings page  →  `/readings`
ItemList of all 6 live services with real prices + correct booking URLs.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Astrology & Oracle Readings",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": {
      "@type": "Service", "name": "Karmic Knots Reading (60 mins)",
      "url": "https://www.shivohampath.com/booking-calendar/karmic-knots-reading-60-mins",
      "provider": { "@type": "Person", "name": "Veena Maheshwari" },
      "offers": { "@type": "Offer", "price": "6500", "priceCurrency": "INR" } } },
    { "@type": "ListItem", "position": 2, "item": {
      "@type": "Service", "name": "Synastry & Kundali Milan",
      "url": "https://www.shivohampath.com/booking-calendar/synastry-kundali-milan",
      "provider": { "@type": "Person", "name": "Veena Maheshwari" },
      "offers": { "@type": "Offer", "price": "9400", "priceCurrency": "INR" } } },
    { "@type": "ListItem", "position": 3, "item": {
      "@type": "Service", "name": "Madhurya Bhakta Reading (Females only)",
      "url": "https://www.shivohampath.com/booking-calendar/madhurya-bhakta-reading-females-only",
      "provider": { "@type": "Person", "name": "Veena Maheshwari" },
      "offers": { "@type": "Offer", "price": "7500", "priceCurrency": "INR" } } },
    { "@type": "ListItem", "position": 4, "item": {
      "@type": "Service", "name": "Specific Question Reading (30 mins)",
      "url": "https://www.shivohampath.com/booking-calendar/specific-question-reading-30-mins",
      "provider": { "@type": "Person", "name": "Veena Maheshwari" },
      "offers": { "@type": "Offer", "price": "2499", "priceCurrency": "INR" } } },
    { "@type": "ListItem", "position": 5, "item": {
      "@type": "Service", "name": "Advanced Moksha Path Consultation",
      "url": "https://www.shivohampath.com/booking-calendar/advanced-moksha-path-consultation",
      "provider": { "@type": "Person", "name": "Veena Maheshwari" },
      "offers": { "@type": "Offer", "price": "8500", "priceCurrency": "INR" } } },
    { "@type": "ListItem", "position": 6, "item": {
      "@type": "Service", "name": "Shiva Oracle Reading (PDF Report)",
      "url": "https://www.shivohampath.com/booking-calendar/shiva-oracle-reading-pdf-report-only",
      "provider": { "@type": "Person", "name": "Veena Maheshwari" },
      "offers": { "@type": "Offer", "price": "1499", "priceCurrency": "INR" } } }
  ]
}
```

---

## 3) Courses landing page  →  `/courses`
Two Course objects. (Wix already renders the program pages themselves; add these
on the marketing `/courses` page so the course cards are eligible for rich results.)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "Course",
      "name": "Foundations of Jyothish: The Karma-Based Path",
      "description": "A 12-module, self-paced Vedic astrology course. Learn to read any birth chart as a map of the soul's karma — Lagna, grahas, Rahu-Ketu, dashas and transits.",
      "url": "https://www.shivohampath.com/challenge-page/foundationsofjyothishthekarmapath",
      "provider": { "@type": "Organization", "name": "Shivoham Path", "sameAs": "https://www.shivohampath.com/" },
      "offers": { "@type": "Offer", "price": "8500", "priceCurrency": "INR", "category": "Paid", "availability": "https://schema.org/InStock" },
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "online", "courseWorkload": "P78D" } },
    { "@type": "Course",
      "name": "She Who Becomes Him",
      "description": "A self-paced sacred odyssey through Madhurya Bhakti — six modules, 46 steps, with a certificate on completion.",
      "url": "https://www.shivohampath.com/challenge-page/madhuryabhakti",
      "provider": { "@type": "Organization", "name": "Shivoham Path", "sameAs": "https://www.shivohampath.com/" },
      "offers": { "@type": "Offer", "price": "5555", "priceCurrency": "INR", "category": "Paid", "availability": "https://schema.org/InStock" },
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "online", "courseWorkload": "P46D" } }
  ]
}
```

---

## 4) Karmic Knots reading page  →  `/readings/karmic-knots`
Single Service (this is your most-promoted reading).

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Karmic Knots Reading",
  "serviceType": "Vedic Astrology Reading",
  "description": "A 60-minute Vedic astrology reading that maps the Prarabdha karma patterns in your chart — Rahu, Ketu and your Atmakaraka — actively shaping this lifetime.",
  "url": "https://www.shivohampath.com/readings/karmic-knots",
  "provider": { "@type": "Person", "name": "Veena Maheshwari", "url": "https://www.shivohampath.com/about" },
  "areaServed": "Worldwide",
  "offers": { "@type": "Offer", "price": "6500", "priceCurrency": "INR" }
}
```

---

### After pasting
- Validate each page at **https://search.google.com/test/rich-results**.
- Then in **GSC → URL Inspection**, request indexing so Google re-reads the page.
