// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · HOME PAGE VELO CODE
// Goes in: Dev Mode → Pages tab → Home (or whatever your home page is named)
//
// This code receives the height from the HTML embed and resizes it
// so the full design shows without any scrollbar or cutoff.
// ═══════════════════════════════════════════════════════════════

$w.onReady(function () {

  // Listen for height message from the HTML embed
  // Make sure your HTML Component element ID is: htmlComponent1
  // (Click the embed in the editor → Properties panel → change ID to htmlComponent1)
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'shivoham-height') {
      const newHeight = event.data.height;
      if (newHeight && newHeight > 100) {
        $w('#htmlComponent1').height = newHeight;
      }
    }
  });

});
