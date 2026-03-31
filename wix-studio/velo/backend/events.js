import { syncToMailerLite, GROUPS } from 'backend/mailerlite';

// ─── New Site Member → Site Members group ────────────────────────────────────
export function wixMembers_onMemberCreated(event) {
  const { member } = event;
  const email = member.loginEmail;
  const name  = [
    member.contactDetails?.firstName,
    member.contactDetails?.lastName
  ].filter(Boolean).join(' ');

  syncToMailerLite(email, name, GROUPS.SITE_MEMBERS);
}

// ─── New Booking (Reading) → Email Subscribers group ────────────────────────
export function wixBookings_onBookingConfirmed(event) {
  const contact = event.booking?.contactDetails;
  const email   = contact?.email;
  const name    = [contact?.firstName, contact?.lastName].filter(Boolean).join(' ');

  syncToMailerLite(email, name, GROUPS.EMAIL_SUBSCRIBERS);
}

// ─── New Contact → catches blog subscribers ──────────────────────────────────
// Blog subscribers are added as Wix contacts with a "blog" label.
// We check for that and route them to Site Members.
export function wixCrm_onContactCreated(event) {
  const contact = event.contact;
  const email   = contact?.primaryInfo?.email;
  const name    = [
    contact?.info?.name?.first,
    contact?.info?.name?.last
  ].filter(Boolean).join(' ');

  const labels          = contact?.info?.labelKeys || [];
  const isBlogSubscriber = labels.some(l =>
    l.toLowerCase().includes('blog') || l.toLowerCase().includes('subscrib')
  );

  if (isBlogSubscriber) {
    syncToMailerLite(email, name, GROUPS.SITE_MEMBERS);
  }
}
