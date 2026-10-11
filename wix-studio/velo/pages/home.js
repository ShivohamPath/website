// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · HOME PAGE VELO CODE (homepage v2)
// Goes in: Dev Mode → Pages tab → Home
//
// The v2 homepage is built from native Wix elements (no HTML embeds),
// following wix-studio/HOMEPAGE_V2_BUILD_GUIDE.md. This code does two
// things, and needs these element IDs (Properties panel → ID):
//
//   Free guide form   #guideName  (Text Input)
//                     #guideEmail (Text Input, type Email)
//                     #guideButton (Button)
//                     #guideMessage (Text, small, below the button)
//
//   Mobile booking bar  #heroSection (the hero section)
//                       #mobileDock  (container pinned to the bottom,
//                                     "Hidden on load", mobile only)
// ═══════════════════════════════════════════════════════════════

import wixWindowFrontend from 'wix-window-frontend';
import { subscribeToGuide } from 'backend/subscribe.web';

const GUIDE_MESSAGE = 'Arrives in your inbox within a minute. Unsubscribe anytime.';

$w.onReady(function () {

  // ── FREE GUIDE SIGNUP ─────────────────────────────────────────
  $w('#guideMessage').text = GUIDE_MESSAGE;

  $w('#guideButton').onClick(async () => {
    const email = ($w('#guideEmail').value || '').trim();
    const name = ($w('#guideName').value || '').trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $w('#guideMessage').text = 'Please enter a valid email so the guide can reach you.';
      return;
    }

    $w('#guideButton').disable();
    $w('#guideButton').label = 'Sending…';

    const result = await subscribeToGuide(email, name).catch(() => ({ ok: false }));

    if (result.ok) {
      $w('#guideMessage').text = `Thank you. The guide is on its way to ${email}.`;
      $w('#guideButton').label = 'Sent';
    } else {
      $w('#guideMessage').text = result.error || 'Something went wrong. Please try again in a moment.';
      $w('#guideButton').label = 'Send Me the Guide';
      $w('#guideButton').enable();
    }
  });

  // ── MOBILE BOOKING BAR ────────────────────────────────────────
  // Slides up once the hero has scrolled off screen, phones only.
  if (wixWindowFrontend.formFactor === 'Mobile') {
    $w('#heroSection').onViewportLeave(() => {
      $w('#mobileDock').show('slide', { direction: 'bottom', duration: 300 });
    });
    $w('#heroSection').onViewportEnter(() => {
      $w('#mobileDock').hide('slide', { direction: 'bottom', duration: 300 });
    });
  }

});
