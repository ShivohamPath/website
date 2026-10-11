# ShivohamPath · Free Testimonial Collection

A way to keep collecting testimonials without a paid review plan. It runs on
things you already have: your Wix site, the Vercel project behind the contact
form, MailerLite's free plan, and your free Trustpilot profile.

## How it works

1. After a reading, the client gets an email asking how it went
   (`emails/email-6-testimonial-request.html`).
2. The button opens **shivohampath.com/share-your-experience**, a short form
   (`embeds/testimonial-form.html`): name, email, city, which reading,
   star rating, their words, and whether you may publish them.
3. The form sends it to `dashboard/api/testimonial.js`, which saves it in
   MailerLite as a **note on that person's record**, in a group called
   **Testimonials**. They are **not** added to your newsletter.
4. The thank-you screen invites them to paste the same words on Trustpilot
   (free for you, no invitation plan needed).

---

## Setup (one time, about 20 minutes)

### 1. MailerLite: create the group
1. MailerLite → **Subscribers → Groups → Create group** → name it `Testimonials`.
2. Open the group. The number at the end of the page URL is the **group ID**. Copy it.
3. Never send newsletters to "All subscribers". Always send to a specific
   group, so testimonial-givers don't receive marketing they didn't ask for.

### 2. Vercel: add the group ID
1. Vercel → project **shivohampath-website** → **Settings → Environment Variables**.
2. Add `MAILERLITE_TESTIMONIAL_GROUP_ID` = the ID from step 1.
3. Redeploy (Deployments → latest → ⋯ → Redeploy). `api/testimonial.js`
   deploys automatically with the rest of the `dashboard` folder.

### 3. Wix: create the page
1. Add a new page called **Share Your Experience**, with URL slug `share-your-experience`.
2. Hide it from the menu (it's reached through the email and the homepage link).
3. Set the strip background to `#0a0a0f`.
4. Add → Embed → **HTML iFrame**. Paste all of `embeds/testimonial-form.html`.
5. Width 100%. Height about **1250px** on desktop and **1500px** on mobile.
6. Publish, then send yourself a test testimonial.

### 4. MailerLite: the follow-up email
- **Simplest:** after each reading, send `email-6-testimonial-request.html`
  to that client as a one-off campaign (paste it into MailerLite's custom
  HTML editor).
- **Automatic:** create an automation triggered when someone joins a group
  such as `Clients` (add each client after their reading), with a 3-day delay,
  then this email. MailerLite's free plan includes automations.

---

## Reading your testimonials

MailerLite → **Subscribers → Groups → Testimonials** → click a person →
**Notes**. Each note looks like:

```
[Testimonial] ★★★★★ — 11 October 2026
Reading: Karmic Knots
Name: Ananya, Pune
Permission: May publish with first name and city

The reading broke open something I had been trying to heal…
```

Only publish testimonials whose **Permission** line allows it, and use the
name format they chose.

## Putting them on the website

Paste approved testimonials into the homepage testimonials section as plain
text. Avoid Trustpilot's embedded widget: it's another iframe and slows the
page, especially in Instagram's browser.

## Trustpilot rules to keep in mind

- You may invite **every** client to review, for free, using
  `trustpilot.com/evaluate/shivohampath.com`.
- Don't invite only the happy ones. The form deliberately shows the
  Trustpilot prompt regardless of star rating.
- Don't offer discounts or gifts in exchange for reviews.
