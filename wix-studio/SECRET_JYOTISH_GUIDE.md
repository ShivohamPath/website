# The Secret Side of Jyotish · New sales page (for Claude in Chrome)

You are helping Veena Maheshwari add a new sales page to shivohampath.com in
her Wix editor (the **classic** editor: Desktop and Mobile views only). The
page is finished; your job is to create it in Wix, paste it in, size it,
set its search settings, publish and check.

**Ground rules** (same as `CLAUDE_IN_CHROME_TASKS.md`)
- Never type, ask for or store passwords. If a sign-in page appears, ask
  Veena to sign in herself.
- Don't change any other page. Don't reword her text.
- Ask Veena before anything not listed here, or if the screen doesn't match.
- Stop and report when this guide is done.

## The files

On GitHub, repository `ShivohamPath/website`, branch
`claude/loving-hamilton-dgcv4q`:

| What | File |
|---|---|
| Page body (one embed) | `wix-studio/embeds/secret-jyotish-v2.html` |
| Search data | `wix-studio/seo/secret-jyotish-course-schema.json` (reference) |
| Page code (sets the search data) | `wix-studio/velo/pages/secret-jyotish.js` |

File page: `https://github.com/ShivohamPath/website/blob/claude/loving-hamilton-dgcv4q/wix-studio/<path>`.
Copy with the **Copy raw file** button and paste with Ctrl+V / Cmd+V.

## Step 1 · Create the page

1. Editor → **Pages & Menu** → **+ Add Page** → **Blank page** (not a
   template, not an Online Programs page).
2. Name it **The Secret Side of Jyotish**.
3. Page settings → **Page URL / SEO basics** → URL slug
   **`the-secret-side-of-jyotish`**.
4. **Don't show it in the site menu** yet (Veena will decide where to link
   it from). It is still reachable by its address once published.
5. The page should have the site header and footer like every other page.

## Step 2 · Add the page body

1. Add one strip/section to the page: background `#0a0a0f`, no padding, and
   nothing else in it.
2. Add → Embed Code → **Embed HTML** (Code). Paste the whole of
   `embeds/secret-jyotish-v2.html` and click Update.
3. Size, Desktop view: **980px wide, X = 0, height 8080px** (used on the live site).
4. Size, Mobile view: **320px wide, X = 0, height 12250px** (used on the live site).
5. Make the strip exactly as tall as the embed, so there's no gap above
   the footer.

## Step 2b · Page code (search data)

Wix's "Structured data markup" box wouldn't save on this page, so the
search data is set by page code instead. Dev Mode → Pages → **The Secret
Side of Jyotish** → replace everything in its code file with
`wix-studio/velo/pages/secret-jyotish.js` → publish. Then skip the
structured-data part of Step 3.

## Step 3 · Search settings (SEO)

Page settings → **SEO basics**:
- **Title tag:** `The Secret Side of Jyotish · Live Saturday Cohort | Shivoham Path`
- **Meta description:** `A live Saturday cohort in rectification, the varga deities, the D20, the D60, past-life methods, Bhrigu Nandi Nadi and the nadiamsa. Every method traced to its text. Enrolment opens 1 December.`
- **Let search engines index this page:** on.

Page settings → **Advanced SEO → Structured data markup** → add new
markup → paste the whole of `seo/secret-jyotish-course-schema.json` → save.

## Step 4 · Publish and check

Publish, then open `https://www.shivohampath.com/the-secret-side-of-jyotish`:

- [ ] Desktop: the page runs from the "Enrolment opens 1 December" badge
      down to the two buttons, with **no scrollbar inside the embed**,
      nothing cut off, and only a small gap before the footer.
- [ ] Mobile view (editor preview): same checks.
- [ ] "Ask me a question" opens the Contact page in the same tab, not
      inside the box.
- [ ] "Foundations of Jyothish" opens `/spiritualcourses/foundations-of-jyothish`.

If the bottom is cut off or a scrollbar shows, add 50px in that view; if
there's empty space under the buttons, take 50px off. Note the heights you
end up with.

## Report back

Tell Veena: the page address, the heights you used, and anything you
skipped and why. Then ask her where she'd like the page linked from (for
example the Courses page, the Foundations of Jyotish page, or the menu).
Claude Code can add a card for it to the Courses page.

## Step 5 · Link the page (Veena chose all three)

1. **Site menu:** Pages & Menu → drag "The Secret Side of Jyotish" under
   **Courses** as a sub-item (dropdown), so the top menu stays Readings,
   Courses, About, Blog. If the menu can't show sub-items, place it right
   after Courses instead. Check the mobile menu shows it too.
2. **Courses page:** re-paste the latest `embeds/courses-v2.html`. It now has
   a "The Secret Side of Jyotish" card after She Who Becomes Him. Heights
   in `CLAUDE_IN_CHROME_TASKS.md` (Courses row).
3. **Foundations of Jyotish page:** re-paste the latest
   `embeds/jyotish-v2.html`. It now ends with an "After Foundations" note
   linking to the new page. Heights in `CLAUDE_IN_CHROME_TASKS.md`
   (Foundations of Jyotish row).

Each "Read about the course" button should open `/the-secret-side-of-jyotish`
in the same tab.

## Step 6 · Make the page look full-width (Veena's feedback)

The embed is 980px wide; the rest of the screen width is the Wix strip
and page background. They must be exactly the same colour as the page, or
the page looks like a box in the middle.

1. The strip/section holding the embed: background colour exactly
   **`#0a0a0f`**, opacity 100%, no image, no border, and set to full width.
2. **Page background** (Page settings → Background / Change Page
   Background): solid colour **`#0a0a0f`**. Do this on The Secret Side of
   Jyotish page, and on any other page where you see a lighter or
   different colour beside the 980px content.
3. Re-paste the latest `embeds/secret-jyotish-v2.html` (its edges now
   blend into `#0a0a0f`). Heights stay 8080 desktop and 12250 mobile.
4. The other page files were also updated so their edges blend in
   (`readings-v2`, `footer-v2`, `about-v2`, `courses-v2`, `jyotish-v2`,
   `swbh-v2`, `karmic-knots-v2`). Re-paste each one when you next work
   on that page. Heights are unchanged except Courses (see the task list).
