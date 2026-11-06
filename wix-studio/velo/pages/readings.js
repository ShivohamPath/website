// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · READINGS PAGE VELO CODE (readings v2)
// Goes in: Dev Mode → Pages tab → Readings
//
// The Readings page body is ONE HTML embed (embeds/readings-v2.html) with the
// element ID #readingsEmbed. Its jump links ("Jyotish consultations",
// "The Vishwanath Oracle") can't scroll the Wix page from inside the
// embed, so the embed sends how far down the target is, and we scroll here.
// ═══════════════════════════════════════════════════════════════

import wixWindowFrontend from 'wix-window-frontend';

// Height of Wix's sticky header, so the target isn't hidden underneath it.
// If a section ends up slightly under the header, raise these numbers.
const HEADER_OFFSET = { Mobile: 70, Tablet: 80, Desktop: 80 };

$w.onReady(function () {
  $w('#readingsEmbed').onMessage(async (event) => {
    const data = event.data;
    if (!data || data.type !== 'shivoham-scroll' || typeof data.offset !== 'number') return;

    // Bring the embed's top to the top of the screen, then move down to the
    // target section inside it.
    await $w('#readingsEmbed').scrollTo();
    const rect = await wixWindowFrontend.getBoundingRect();
    const header = HEADER_OFFSET[wixWindowFrontend.formFactor] || 80;
    wixWindowFrontend.scrollTo(0, Math.max(0, rect.scroll.y + data.offset - header));
  });
});
