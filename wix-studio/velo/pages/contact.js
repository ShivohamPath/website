/**
 * Wix Velo page code for the Contact page.
 *
 * HOW TO ADD THIS IN WIX STUDIO:
 * 1. Open your Contact page in Wix Studio
 * 2. Click the HTML embed element → note its ID in the Properties panel
 *    (e.g. #html1, #htmlComponent1, etc.)
 * 3. Replace '#html1' below with the actual ID
 * 4. Open Dev Mode → Pages → Contact (or whatever the page is named)
 * 5. Paste this code there
 */

import { syncToMailerLite, addSubscriberNote, GROUPS } from 'backend/mailerlite';

const HTML_EMBED_ID = '#html1'; // ← CHANGE THIS to your HTML embed's actual ID

$w.onReady(function () {
  $w(HTML_EMBED_ID).on('message', async (event) => {
    const data = event.data;
    if (!data || data.type !== 'CONTACT_SUBMIT') return;

    const { name, email, inquiry_type, message } = data.payload || {};

    try {
      const result = await syncToMailerLite(email, name, GROUPS.SITE_MEMBERS);

      // Add inquiry + message as a subscriber note (non-blocking)
      const subscriberId = result && result.data && result.data.id;
      if (subscriberId && message) {
        const date = new Date().toLocaleDateString('en-GB', {
          day: 'numeric', month: 'long', year: 'numeric'
        });
        const noteText = `[${inquiry_type || 'General'}] — ${date}\n\n${message}`;
        addSubscriberNote(subscriberId, noteText); // intentionally not awaited
      }

      $w(HTML_EMBED_ID).postMessage({ type: 'CONTACT_RESPONSE', success: true });
    } catch (err) {
      console.error('Contact form error:', err);
      $w(HTML_EMBED_ID).postMessage({
        type: 'CONTACT_RESPONSE',
        success: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  });
});
