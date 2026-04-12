/**
 * Wix CRM backend — creates/updates a contact from the contact form.
 *
 * SETUP (one-time, ~2 minutes):
 * In Wix Studio → CRM → Contacts → Settings → Custom Fields → Add two fields:
 *   1. Name: "Inquiry Type"   → key will be  custom.inquiry_type
 *   2. Name: "Message"        → key will be  custom.message
 * (Wix auto-generates the key from the field name.)
 */

import { Permissions, webMethod } from 'wix-web-module';
import { contacts }               from 'wix-crm-backend';
import { elevate }                from 'wix-auth';

export const submitContactForm = webMethod(
  Permissions.Anyone,
  async ({ name, email, inquiry_type, message }) => {
    const [first = '', ...rest] = (name || '').trim().split(' ');
    const last = rest.join(' ');

    const elevatedUpsert = elevate(contacts.appendOrCreateContact);

    await elevatedUpsert({
      info: {
        name:   { first, last },
        emails: [{ tag: 'MAIN', email }],
        extendedFields: {
          items: [
            { key: 'custom.inquiry_type', value: inquiry_type || '' },
            { key: 'custom.message',      value: message      || '' }
          ]
        }
      }
    });

    return { ok: true };
  }
);
