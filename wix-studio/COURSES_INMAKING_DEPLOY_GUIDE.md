# Courses Page — "In the Making" Section Deploy Guide

Adds the third course from the original lineup, **Spirituality for Misfits**
("A gangster's path to the soul"), to the Courses page as an
**IN THE MAKING** section with a waitlist form.

## What changed

| File | Change |
|---|---|
| `embeds/courses-inmaking.html` | **New embed** — "In the Making" card with waitlist email form |
| `embeds/courses-hero.html` | Hero stats now include a "1 · In the Making" pill |
| `velo/footer-embed.html` | Courses column: Jyotish link now points to its live landing page (no more "Coming Soon"), and "Spirituality for Misfits — In the Making" added |
| `dashboard/api/subscribe.js` | Optionally tags waitlist signups into a separate MailerLite group |

## Deploy steps

### 1. Courses page — add the new embed

1. Wix Studio → Courses page → add an **HTML iframe (Embed → Custom Code / HTML iframe)**
   directly **below the "She Who Becomes Him" card** (the `courses-coming` embed)
   and **above the philosophy section**.
2. Paste the full contents of `embeds/courses-inmaking.html`.
3. Set the iframe width to full-bleed (same as the other course embeds) and
   height to roughly **560px desktop / 700px mobile** — then preview and adjust
   until there's no clipping or dead space.

### 2. Courses page — update the hero embed

Re-paste the updated `embeds/courses-hero.html` into the existing hero iframe
(it now shows the "In the Making" stat pill).

### 3. Footer

Re-paste the updated `velo/footer-embed.html` into the footer embed on the
master page.

### 4. (Optional) Separate waitlist group in MailerLite

The waitlist form posts to the same Vercel endpoint as the newsletter
(`/api/subscribe`) with `source: "spirituality-for-misfits-waitlist"`.
By default those subscribers land in the main newsletter group.

To also collect them in their own group:

1. MailerLite → create a group, e.g. *Misfits Waitlist*, and copy its Group ID.
2. Vercel → project settings → Environment Variables → add
   `MAILERLITE_MISFITS_GROUP_ID` = that Group ID.
3. Redeploy the Vercel project (`dashboard/` folder).

Without the env var everything still works — signups simply go to the main
group only.

## Post-deploy checklist

- [ ] "IN THE MAKING" divider + card visible between She Who Becomes Him and the philosophy section
- [ ] Hero shows four stat pills, including "1 · In the Making"
- [ ] Waitlist form: valid email → success state ("You're on the list.")
- [ ] Waitlist form: invalid email → inline error, no navigation
- [ ] Footer courses column shows all three courses; Jyotish link opens its live landing page
- [ ] Mobile: form stacks vertically, button full-width, no horizontal scroll
