# Case-study rewrite log (site overhaul, October 2026)

Branch `codex/site-overhaul`. Every case study was rebuilt on the shared case-study kit
(`src/components/case-study/`) and its copy rewritten to the blueprint
(`CONTEXT/project-page-style-blueprint.md`). Rules followed:

- No new claims. Every fact below is either already on the old page or checked in the source
  project; anything uncertain is listed under **Check**.
- Numbers, dates, credits and roles are copied, not rephrased.
- Outcomes were moved *out* of collapsed accordions; long process material went *into*
  "deep dive" disclosures.
- Visitor-facing pitch text ("Portfolio relevance", "recruiter-ready", "how I pitch it") was
  removed, as approved.

For each page: what changed, what was cut, and what Georgi should check.

---

## Site-wide

- Titles and names now come from `src/content/projects.ts`. Renamed for consistency:
  MUMOSA → **MUMOSA Crisis Response** (approved); Fallout → **Fallout 4 Level Design**;
  Shonen Showdown no longer in capitals; Figuresmith LLC → **Figuresmith** (the LLC closed;
  the page still says it was an LLC).
- Every case study ends with "Next in {category}" and two related projects.
- **Check:** BG3 and Patapon card images are title/official art, not captures of your work.
  Send a Toolkit capture for BG3 when you have one.

## Public documents sweep (`public/documents/`)

Removed in Phase 0 (approved): MUMOSA team alignment notes, mindmap, VR-vision notes, Axure
prototype, assignment brief, the co-authored final report. They're in `output/private/mumosa/`
locally. They remain in this repo's git history; purging that needs a history rewrite and
force-push, which I haven't done.

Still hosted and unlinked; **decide whether these are yours to publish:**

- `projects/birdwatching/birdwatching-planning-deck.pdf` (16 MB) and
  `birdwatching-final-project-planning.{pdf,docx}`: team planning documents?
- `projects/fallout-level-design/supporting/*.pdf`: other GAME 370 projects
  (Payday 2, Into the Radius 2) and an "Ashen Vale" PDF. Whose work are they?
- `projects/Shogun_FlowersFallInBlood/**`: legal research notes (AI-asset legal
  considerations, ToS/EULA drafts). Fine if you're happy for them to be public.
- `projects/FEH_Barracks/portfolio-case-study/08-resume-and-interview-notes.md`: interview
  talking points.

---

## Baldur's Gate 3 Modding (`/projects/bg3-toolkit-modding`)

- Structure: header → What I can build so far → An offline reference I built → What the
  Toolkit taught me → Larian disclaimer.
- Copy tightened; all numbers (1,149 entries: 269 events, 387 queries, 493 calls) kept.
- No hero image: the only image is a title card that repeats the page title.
- **Check:** nothing new claimed.

## TUR Workout Tracker (`/projects/tur-workout-tracker`)

- The website embed stays as the hero (your earlier request), full-bleed on phones.
- Structure: Why I built it (+ brand) → What it does → How it's built → Where it stands.
- All numbers kept (806 exercises, ~350 Swift files, 42 test files, epix Gen 2).
- **Check:** nothing new claimed.

## MUMOSA Crisis Response (`/projects/mumosa-crisis-response-vr`)

- Renamed from "MUMOSA Situation Awareness Dashboard" (approved).
- New order: The brief → What I built in Unreal → Paper prototype → The team's dashboard
  redesign → Research → Outcome. Contents menu on the side. The outcome is no longer hidden in
  the "Closer look" accordion; the planned pipeline, scene sketches, planning boards and the
  usability-test plan moved into deep-dive blocks.
- **Attribution fix:** the old hero ("Dashboard concept…") was Figure 1 of ARL's published
  paper, not our work. It's now captioned as ARL's dashboard, credited to Lukin et al.,
  FuturED 2024, and shown as the starting point. A second ARL figure (aerial
  Gaussian-splat evidence) was presented as "original simulation-evidence concept"; removed.
- New hero: your Unreal marker shot, cropped to remove the editor toolbars.
- Removed from `public/` (moved to `output/private/mumosa/`): page images of the co-authored
  report (`mumosa-paper-p01/02/07.png`), the team VR-direction note page, and the two ARL
  figures above (the banner stays, credited).
- Glance: added "Client: DEVCOM Army Research Laboratory, via a University of Baltimore
  interaction design course" (source: the final report's cover, IDIA 612, Spring 2026).
- Dashboard section states your part as on the old page: information architecture, Axure
  build spec, design system, evidence-review interaction model.
- **Check:** are you happy showing the team FigJam boards (they're now in a deep dive)? And
  is "Kamilah S." how she wants to be credited?
