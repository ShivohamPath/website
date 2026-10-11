// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · NEWSLETTER / FREE GUIDE SIGNUP (backend web method)
// Goes in: Dev Mode → Backend → subscribe.web.js
//
// Called by the homepage "free guide" form (pages/home.js). Adds the
// visitor to the EMAIL_SUBSCRIBERS group, the same group the footer form
// uses, so MailerLite's existing automation sends the free PDF guide.
// ═══════════════════════════════════════════════════════════════

import { Permissions, webMethod } from 'wix-web-module';
import { syncToMailerLite, GROUPS } from 'backend/mailerlite';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const subscribeToGuide = webMethod(Permissions.Anyone, async (email, name) => {
  email = String(email || '').trim();
  name = String(name || '').trim().slice(0, 100);

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, error: 'Please enter a valid email so the guide can reach you.' };
  }

  try {
    await syncToMailerLite(email, name, GROUPS.EMAIL_SUBSCRIBERS);
    return { ok: true };
  } catch (err) {
    console.error('Guide signup failed:', err);
    return { ok: false, error: 'Something went wrong. Please try again in a moment.' };
  }
});
