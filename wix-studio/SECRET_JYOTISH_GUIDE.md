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
| Search data | `wix-studio/seo/secret-jyotish-course-schema.json` |

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
3. Size, Desktop view: **980px wide, X = 0, height 8130px**.
4. Size, Mobile view: **320px wide, X = 0, height 12350px** (if Wix won't
   go wider than 280px, use 280px wide and **13150px** high).
5. Make the strip exactly as tall as the embed, so there's no gap above
   the footer.

The page has no page code and no scrolling buttons, so nothing goes in Dev
Mode.

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
