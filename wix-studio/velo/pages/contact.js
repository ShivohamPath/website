/**
 * Wix Velo page code — Contact page.
 *
 * HOW TO ADD THIS IN WIX STUDIO:
 * 1. Open your Contact page in Wix Studio
 * 2. Click the HTML embed element → note its ID in the Properties panel
 *    (e.g. #html1, #htmlComponent1, etc.)
 * 3. Replace '#html1' below with the actual ID
 * 4. Open Dev Mode → Pages → Contact
 * 5. Paste this entire file there
 */

import { submitContactForm } from 'backend/contacts.web';

const HTML_EMBED_ID = '#html1'; // ← CHANGE THIS to your HTML embed's actual ID

$w.onReady(function () {
  $w(HTML_EMBED_ID).on('message', async (event) => {
    const data = event.data;
    if (!data || data.type !== 'CONTACT_SUBMIT') return;

    const { name, email, inquiry_type, message } = data.payload || {};

    try {
      await submitContactForm({ name, email, inquiry_type, message });
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
