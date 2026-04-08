import { fetch } from 'wix-fetch';
import { getSecret } from 'wix-secrets-backend';

const ML_API = 'https://connect.mailerlite.com/api';

export const GROUPS = {
  EMAIL_SUBSCRIBERS:    '183427858702534273',
  SITE_MEMBERS:         '183428098925004623',
  COURSE_WAITLIST:      '183387514562675961',
  COURSE_MEMBERS:       '183910576153429227'   // Jyothish Course Joiners
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export async function addSubscriberNote(subscriberId, noteText) {
  const apiKey = await getSecret('MAILERLITE_API_KEY');
  await fetch(`${ML_API}/subscribers/${subscriberId}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ note: noteText })
  }).catch(() => {}); // non-blocking
}

export async function syncToMailerLite(email, name, groupId, retries = 3) {
  if (!email || !EMAIL_REGEX.test(email)) return;

  const apiKey = await getSecret('MAILERLITE_API_KEY');

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(`${ML_API}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          email,
          fields: { name: name || '' },
          groups: [groupId]
        })
      });

      const data = await res.json();
      console.log('MailerLite sync:', email, '->', groupId, res.status);

      if (!res.ok) {
        throw new Error(`MailerLite API error ${res.status}: ${data.message || 'Unknown'}`);
      }

      return data;
    } catch (err) {
      console.error(`MailerLite sync error (attempt ${attempt}/${retries}):`, err);
      if (attempt === retries) {
        throw err;
      }
      await wait(attempt * 1000);
    }
  }
}
