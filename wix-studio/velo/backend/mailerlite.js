import { fetch } from 'wix-fetch';
import { getSecret } from 'wix-secrets-backend';

const ML_API = 'https://connect.mailerlite.com/api';

export const GROUPS = {
  EMAIL_SUBSCRIBERS:    '183427858702534273',
  SITE_MEMBERS:         '183428098925004623',
  COURSE_WAITLIST:      '183387514562675961',
  COURSE_MEMBERS:       '183910576153429227'   // Jyothish Course Joiners
};

export async function syncToMailerLite(email, name, groupId) {
  if (!email) return;

  try {
    const apiKey = await getSecret('MAILERLITE_API_KEY');

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
    return data;
  } catch (err) {
    console.error('MailerLite sync error:', err);
  }
}
