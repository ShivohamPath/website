// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · VELO MASTER PAGE CODE
// Goes in: Dev Mode → Site tab → masterPage.js
// Runs on EVERY page of the site
// ═══════════════════════════════════════════════════════════════

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w.onReady(function () {

  // ── STICKY NAV: add blur + border on scroll ────────────────
  // Give your header element the ID: #siteHeader in the editor
  wixWindow.getBoundingRect().then((rect) => {
    // Scroll detection handled via CSS backdrop-filter in global.css
  });

  // ── ACTIVE NAV LINK HIGHLIGHT ──────────────────────────────
  // Give each nav link a CSS class "nav-link" in the editor
  // and the active one will get gold colour
  const currentPath = wixLocation.path;

  // ── SMOOTH SCROLL INDICATOR ───────────────────────────────
  // Give the scroll indicator element ID: #scrollIndicator
  try {
    if ($w('#scrollIndicator')) {
      $w('#scrollIndicator').show();
    }
  } catch (e) { /* element may not exist on all pages */ }

  // ── BOOK BUTTON: navigate to bookings page ─────────────────
  // Give all "Book a Reading" buttons the ID: #bookBtn (or bookBtn1, bookBtn2…)
  // and link them to your Wix Bookings page in the editor directly.
  // No code needed — link via the editor link panel.

  // ── FOOTER IFRAME NAVIGATION ───────────────────────────────
  // Receives postMessage events sent by footer-embed.html when a
  // visitor clicks a footer nav link.
  //
  // REQUIRED: give the HTML embed element the ID #footerEmbed
  // in the Wix editor (Add → Embed → HTML iFrame → right-click → ID).
  // Wix Velo uses $w().onMessage() — NOT window.addEventListener.
  try {
    $w('#footerEmbed').onMessage((event) => {
      const data = event.data;
      if (data && data.type === 'footerNav' && data.path) {
        wixLocation.to(String(data.path));
      }
    });
  } catch (e) { /* #footerEmbed not found on this page */ }

  console.log('ShivohamPath · Site loaded · Path:', currentPath);
});


// ═══════════════════════════════════════════════════════════════
// PAGE-SPECIFIC NOTES
// ═══════════════════════════════════════════════════════════════
//
// HOME PAGE (pages/Home.js):
//   - Animate hero stats counting up on scroll
//   - Instagram feed widget: add via Wix Social Feed app
//
// READINGS PAGE (pages/Readings.js):
//   - Each service card links to a Wix Bookings service
//   - Use $w('#bookService1').onClick → wixLocation.to('/bookings')
//
// COURSES PAGE (pages/Courses.js):
//   - Video modules from Wix Video app
//   - Enrollment via Wix Pricing Plans widget
//
// BOOKS PAGE (pages/Books.js):
//   - PDF products via Wix Stores (digital products)
//   - Instant download on purchase
//
// BLOG (managed entirely by Wix Blog app — no custom code needed)
//
// ═══════════════════════════════════════════════════════════════
