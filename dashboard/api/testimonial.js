// Receives testimonials from the "Share your experience" form
// (wix-studio/embeds/testimonial-form.html) and stores each one as a note
// on the client's MailerLite subscriber record.
//
// The person is added ONLY to MAILERLITE_TESTIMONIAL_GROUP_ID, never to the
// newsletter group: leaving a testimonial is not consent to marketing email.

const READINGS = [
  'Karmic Knots',
  'The Specific Question',
  'The Spiritual Path',
  'Relationships & Marriage',
  'Madhurya Bhakta',
  'Shiva Oracle Reading',
  'Course',
  'Other'
];

const CONSENT = {
  full: 'May publish with first name and city',
  initial: 'May publish with first name and last initial only',
  anonymous: 'May publish anonymously',
  private: 'Private — do NOT publish'
};

export default async function handler(req, res) {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, city, reading, rating, consent, message, website } = req.body || {};

  // Honeypot: real visitors never see or fill the "website" field
  if (website) return res.status(200).json({ success: true });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and your experience are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (String(message).length > 3000) {
    return res.status(400).json({ error: 'Please keep your testimonial under 3000 characters' });
  }

  if (!CONSENT[consent]) {
    return res.status(400).json({ error: 'Please choose how we may share your words' });
  }

  const stars = Math.min(5, Math.max(1, parseInt(rating, 10) || 0));
  if (!stars) return res.status(400).json({ error: 'Please choose a rating' });

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server misconfigured' });

  const groupId = process.env.MAILERLITE_TESTIMONIAL_GROUP_ID || '';

  try {
    const subRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email,
        fields: { name: String(name).slice(0, 100), city: String(city || '').slice(0, 100) },
        groups: groupId ? [groupId] : []
      })
    });

    const subData = await subRes.json();
    if (!subRes.ok) {
      return res.status(400).json({ error: subData.message || 'Could not save your testimonial' });
    }

    const subscriberId = subData.data?.id;
    if (subscriberId) {
      const date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
      });
      const readingName = READINGS.includes(reading) ? reading : 'Not specified';
      const noteText =
        `[Testimonial] ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)} — ${date}\n` +
        `Reading: ${readingName}\n` +
        `Name: ${name}${city ? `, ${city}` : ''}\n` +
        `Permission: ${CONSENT[consent]}\n\n` +
        `${message}`;

      // Unlike the contact form, the note IS the testimonial, so wait for it
      const noteRes = await fetch(`https://connect.mailerlite.com/api/subscribers/${subscriberId}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ note: noteText })
      });
      if (!noteRes.ok) {
        return res.status(502).json({ error: 'Could not save your testimonial. Please try again.' });
      }
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
