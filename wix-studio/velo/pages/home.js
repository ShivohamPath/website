// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · HOME PAGE VELO CODE (homepage v2)
// Goes in: Dev Mode → Pages tab → Home
//
// The homepage body is ONE HTML embed (embeds/home-v2.html) with the
// element ID #homeEmbed. Its in-page links ("Find Your Reading",
// "Start with the free guide") can't scroll the Wix page from inside the
// embed, so the embed sends how far down the target is, and we scroll here.
// ═══════════════════════════════════════════════════════════════

import wixWindowFrontend from 'wix-window-frontend';

// Height of the sticky header, so the target isn't hidden underneath it.
// Desktop header is 64px, mobile header is 100px.
const HEADER_OFFSET = { Mobile: 100, Tablet: 64, Desktop: 64 };

$w.onReady(function () {
  $w('#homeEmbed').onMessage(async (event) => {
    const data = event.data;
    if (!data || data.type !== 'shivoham-scroll' || typeof data.offset !== 'number') return;

    // Bring the embed's top to the top of the screen, then move down to the
    // target section inside it.
    await $w('#homeEmbed').scrollTo();
    const rect = await wixWindowFrontend.getBoundingRect();
    const header = HEADER_OFFSET[wixWindowFrontend.formFactor] || 64;
    wixWindowFrontend.scrollTo(0, Math.max(0, rect.scroll.y + data.offset - header));
  });
});
