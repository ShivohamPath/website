// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · VELO MASTER PAGE CODE
// Goes in: Dev Mode → Site tab → masterPage.js
// Runs on EVERY page of the site
// ═══════════════════════════════════════════════════════════════

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';
import { authentication, currentMember } from 'wix-members';

$w.onReady(function () {

  const currentPath = wixLocation.path;

  // ── FOOTER IFRAME NAVIGATION ───────────────────────────────
  // REQUIRED: give the footer HTML embed element the ID #footerEmbed
  // in Wix editor (right-click element → Properties → ID).
  try {
    $w('#footerEmbed').onMessage((event) => {
      const data = event.data;
      if (data && data.type === 'footerNav' && data.path) {
        wixLocation.to(String(data.path));
      }
    });
  } catch (e) { /* #footerEmbed not found on this page */ }

  // ── MOBILE NAV MEMBER BAR ──────────────────────────────────
  // The mobile-nav-member embed (#mobileNavEmbed) sends login/logout
  // requests via postMessage; we handle them here with Wix auth.
  // REQUIRED: give the mobile nav embed element the ID #mobileNavEmbed.
  try {
    $w('#mobileNavEmbed').onMessage((event) => {
      let data = event.data;
      try { if (typeof data === 'string') data = JSON.parse(data); } catch (e) {}
      if (data && data.type === 'memberLogin') {
        authentication.promptLogin({ mode: 'login' })
          .then(() => {
            $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: true });
          })
          .catch(() => {});
      }
      if (data && data.type === 'memberSignup') {
        authentication.promptLogin({ mode: 'signup' })
          .then(() => {
            $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: true });
          })
          .catch(() => {});
      }
      if (data && data.type === 'memberLogout') {
        authentication.logout();
        $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: false });
      }
    });

    // Send initial member state to the mobile nav embed
    currentMember.getMember()
      .then(() => $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: true }))
      .catch(() => $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: false }));

    authentication.onLogin(() =>
      $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: true }));
    authentication.onLogout(() =>
      $w('#mobileNavEmbed').postMessage({ type: 'memberState', loggedIn: false }));

  } catch (e) { /* #mobileNavEmbed not found on this page */ }

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
