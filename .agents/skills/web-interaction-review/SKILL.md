---
name: web-interaction-review
description: "Use when auditing, designing or shipping tsvetanski.com's interaction design and information architecture on desktop and mobile browsers: recruiter task paths, navigation and labels, the homepage and project-page content budget, cards and tabs, touch targets and hover alternatives, fixed controls, keyboard and screen-reader paths, light/dark themes, and screenshot verification. Pairs with information-architecture-navigation, interaction-patterns-components, ux-usability-foundations and ux-writing-content-design, applying their general web advice to this portfolio."
metadata:
  author: tsvetanski.com (written for this repository)
---

# Web interaction review (tsvetanski.com)

The installed UX skills bring the method: `information-architecture-navigation` for grouping,
labels and wayfinding; `interaction-patterns-components` for choosing tabs, cards, filters and
disclosure; `ux-usability-foundations` for feedback, affordances and error prevention;
`ux-writing-content-design` for labels and microcopy; `accessibility-inclusive-design` for
inclusive design; `product-design-and-ux` when a change needs a task flow or state model.
`web-interface-guidelines` checks the code. This skill supplies what this site is judged
against: who visits, what they need in the first seconds, the decisions already made, and how
to verify on a real screen.

Use it for every visual or layout change, together with the skill that fits the question.
Code changes follow the `AGENTS.md` snapshot rule.

## Who visits and what they need

The primary visitor is a recruiter or hiring manager for XR, simulation and gameplay roles,
often on a phone, scanning for under a minute. Secondary visitors are collaborators and
clients. Their tasks, in order:

1. **Who is this and what does he do?** Name, role and one sentence, without scrolling.
2. **Get the resume or make contact.** Visible on the first screen of the homepage.
3. **Judge the work.** Reach a relevant project in at most two clicks, and see the real work,
   not a description of it.
4. **Understand his part.** Every case study says what Georgi did versus the team or a
   third-party base.
5. **Recover.** Every deep page (entered from LinkedIn or search) shows where it is and how
   to reach the rest of the site.

Walk at least tasks 1–3 on a phone width for any homepage change, and 3–5 for a case study.

## Decisions already made (do not reopen without the owner)

- **Content budget per card:** title, one sentence of roughly ten words, at most two tags.
  The whole card is the link; an arrow is only a cue. No counters, dots or carousel arrows.
- **Homepage:** compact hero (real portrait, name, `Simulation · XR · Gameplay Systems`, one
  line in Georgi's voice, View Resume + Contact Me), category tabs that swap cards in place,
  one featured card and two smaller cards, then a "View all" link. No second Resume button in
  the header. No stock or AI-generated scenery.
- **Too much and too little both fail.** The owner rejected dense dashboards (cognitive
  overload) and bare image-plus-title rows (no message, no context). Stay in the middle.
- **Imagery:** real captures and Georgi's real photo only. Never AI-generated screenshots,
  faces or scenery presented as the work. Label design mockups as mockups.
- **Honesty:** state ownership precisely ("all mine", "my C++ layer on top of …"), credit
  collaborators by name, and verify every fact against source files before publishing.
- **Confidentiality:** do not publish recruitment tests, private team details or unannounced
  work without the owner's explicit approval.

## 1. Navigation and labels

- Global navigation stays small: Projects, About, Contact. Category names match everywhere
  (homepage tabs, `/career` filters, case-study kickers): `XR + Simulation`,
  `Gameplay Systems`, `Tools & AI`, `Creative`.
- Tabs switch peer views of the same content and use `aria-pressed` toggle buttons or a full
  ARIA tab pattern with arrow-key support, never a half-implemented one.
- Filters on `/career` are shareable through the URL (`?filter=`); keep them that way.
- Every case study has breadcrumbs (`Home / Projects / Name`) and a visible way back.
- Labels predict their destination. Avoid vague umbrellas ("Works", "More", "Stuff").

## 2. Mobile browser

- Touch targets are at least 44 × 44 CSS px, including tag-free card areas and tab buttons.
- Nothing works only on hover. Hover effects are enhancements; the same information or action
  is reachable by tap.
- No horizontal page scroll at 375 px. Horizontally scrolling rows (tabs) show that more items
  exist (a cut-off item or fade), and have no visible scrollbar.
- Fixed controls (Command palette pill bottom-left, theme toggle, contact bubble) must not
  cover primary content or CTAs at rest or at the end of the page. Leave bottom padding.
- Embedded iframes run full-bleed on phones when their content needs more width than the
  padded column (see the TUR site embed).
- Primary actions sit within thumb reach and are not crowded by destructive or secondary ones.

## 3. Desktop and keyboard

- Logical heading order with one `h1` per page. Landmarks: `header`, `nav` (labelled when
  more than one), `main`, `footer`.
- Every interactive element is reachable by Tab, has a visible focus style, and shows the
  same emphasis on `:focus-visible` as on `:hover`.
- Real links for navigation, real buttons for actions.
- Do not hijack the scroll wheel or trap focus outside dialogs.

## 4. Feedback, motion and states

- Every click or tap shows an immediate result (pressed state, swap, navigation).
- Motion is subtle and meaningful: small image zoom or pan, border colour change, arrow nudge.
  Respect `prefers-reduced-motion` by removing transforms and transitions.
- Empty and failure states say what happened and offer a way forward (no-results filter,
  failed embed, missing YouTube stats).
- Images reserve their space (`width`/`height` or `fill` in a sized box) so nothing jumps.

## 5. Visual reading

- Text over imagery sits on a gradient that keeps it at WCAG AA contrast (4.5:1 body,
  3:1 large) in both themes. Check light mode separately; the orange brand colour needs a
  darker text variant on light backgrounds.
- One dominant element per view. If everything is emphasised, nothing is.
- Crop out editor chrome, printed titles and stray objects from card images; make a dedicated
  crop rather than relying on `object-position` alone.

## Procedure

1. **Scope.** Name the pages and states the change touches, and which visitor tasks they serve.
2. **Read the code** for evidence: components, CSS modules, routes. Cite `file:line`.
3. **Run the site** (`npm run build` then `npx next start -p 3000 -H 127.0.0.1`).
4. **Capture** with `node scripts/ui-snapshots/capture.mjs` (home, about and career at
   1440 × 1100 and 390 × 844, light and dark), then `node scripts/ui-snapshots/verify.mjs`.
   For pages the script does not cover, use the browser tools at 375, 768 and 1440 px, and
   check `document.documentElement.scrollWidth` equals the viewport width.
5. **Look at every screenshot.** Check the tasks above, overlap, clipping, contrast, and
   fixed-control collisions. A screenshot that was not inspected does not count.
6. **Record findings** as: ID, page, finding, evidence, rule, severity (High: blocks a visitor
   task or misrepresents the work; Medium: slows a frequent task or hides content; Low:
   polish), recommendation, and whether the owner must decide.
7. **Fix the smallest thing** that resolves each finding. Rerun step 4 after layout changes and
   say in the final notes that snapshot verification was performed.

## Evidence rules

- A finding is a hypothesis until it is seen on a rendered page. Never invent user research,
  quotes or analytics.
- Separate what an agent can fix from what needs the owner (naming, structure, removing or
  publishing content).
