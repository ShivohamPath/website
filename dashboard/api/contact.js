export default async function handler(req, res) {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, inquiry_type, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message is too long' });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server misconfigured' });

  // Use a dedicated contact group if set, otherwise fall back to the main group
  const groupId = process.env.MAILERLITE_CONTACT_GROUP_ID || process.env.MAILERLITE_GROUP_ID || '';

  try {
    // 1. Upsert subscriber into MailerLite
    const subRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email,
        fields: { name },
        groups: groupId ? [groupId] : []
      })
    });

    const subData = await subRes.json();

    if (!subRes.ok) {
      return res.status(400).json({ error: subData.message || 'Could not save contact' });
    }

    // 2. Attach a note so the message is visible on the subscriber record
    const subscriberId = subData.data?.id;
    if (subscriberId) {
      const date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
      });
      const noteText = `[${inquiry_type || 'General'}] — ${date}\n\n${message}`;

      // Non-blocking — a note failure doesn't fail the whole request
      fetch(`https://connect.mailerlite.com/api/subscribers/${subscriberId}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ note: noteText })
      }).catch(() => {});
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
