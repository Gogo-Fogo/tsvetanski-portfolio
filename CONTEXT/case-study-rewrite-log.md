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

## Birdwatching VR (`/projects/birdwatching`)

- Order: Camera to field guide (steps + footage) → What I built → Playtests and showcase →
  Dev logs and documents. Contents menu. The "Closer look" accordion is gone; the stack and
  implemented-slice lists sit in a deep dive.
- Kept: team (Felix Chughtai, Talulla Allen), versions, 7 species / 9 slots, IGDA® Baltimore
  showcase, the grab-the-birds playtest story.
- **Removed:** the "Planning document" viewer (the team's written plan). The original
  planning deck stays in a deep dive, labelled as the team's.
- **Check:** are the planning deck slides OK to show? See also the unlinked planning PDFs in
  the documents sweep above.

## Shift Culture VR (`/projects/shift-culture-vr`, was `/vr-microgames`)

- Order: The brief (constraints, B-360 riders photo credited to the UBalt newsroom) → The
  prototype → Outcome.
- Status sentence changed from "As of March 2026, Zefran and I plan to keep developing…
  through Summer 2026" to the past tense, since summer has passed.
- **Check:** what happened over the summer? If development continued, give me one line.

## VR Car Drift Simulator (`/projects/vr-drift-simulator`, was `/vr-interaction-lab`)

- Fixed stale metadata (it described the B-360 bike project).
- Demo video is now the hero. Order: What I built → Making it stable (three fixes, slides in a
  deep dive) → In the cockpit → Documents.
- Removed "Recruiter-ready artifacts" and the duplicate chase-camera image.
- **Check:** was this a solo or team project? The page never said. If there was a team,
  give me the names.

## Patapon VR: The First Beat (`/projects/patapon-vr-the-first-beat`)

- Shortened as approved: one "The design" section (four design cards, command patterns,
  roadmap in a deep dive, Sony attribution). The lore paragraphs, project spec list and four
  extra Sony images are gone.

## Shinobi Story (`/projects/shinobi-story`)

- Featured highlight video is the hero; the Embla carousel (arrows + dots) is replaced by a
  plain grid of three more videos. Order: What I did → Results → Running a live game (content
  planning, marketing, quality reviews) → More videos (links to Shinobi Story 2).
- All numbers kept: 1M+ downloads, 56,000 players, 16,500+ Discord, $110K, ~85% margin,
  2019–2024.
- **Check:** the three extra videos fall back to "Shinobi Story video" when the YouTube API
  key is missing. Make sure `YOUTUBE_API_KEY` is set on Vercel so real titles show.

## Shinobi Story 2 (`/projects/shinobi-story-2`)

- Ported to the kit with light edits; ownership wording unchanged ("all mine", "my C++ layer on
  top of third-party movement plugins"). Contents menu added.

## Shonen Showdown (`/projects/shonen-showdown`)

- Title no longer in capitals. Gameplay video is the hero. Order: The rules engine → Card data
  the team can extend (with the shared card spreadsheet) → Who did what (Georgi, Ricardo, Sam)
  → Design documents. Game modes and the full systems list are in a deep dive.
- **Check:** are Ricardo and Sam happy to be named by first name only, or do they want surnames?

## Prince of Persia: Warrior Within Mod (`/projects/prince-of-persia-warrior-within-mod`)

- Gameplay capture is the hero. Contents menu. Order: rewind system → Dahaka loop → card
  families → art and presentation (ComfyUI disclosure kept, sprite sheets in a deep dive) →
  what the build contains (reviewer documents in a deep dive).
- Breadcrumb said "Prince"; now the full title.
- Rewrote the art-pipeline bullets that read like internal notes ("Prince combat proof now
  shows… v15_fullcanvas").

## Fallout 4 Level Design (`/projects/fallout-level-design`)

- Renamed from "Fallout Mod (Level Design)". Order: Hall of Idols puzzle → The team level
  (Floating Institute: challenges, optimisation) → Earlier work: Milestone One → Documents.
- **Check, please:** the old page mixed two projects. My reading: the team level is the
  Floating Institute (you owned the third floor), and the Hall of Idols puzzle belongs to your
  earlier "Ashen Vale" Milestone One build, where you were project lead. The lede now says
  exactly that. Correct me if the Hall of Idols was actually part of the team build.

## Shogun: Flowers Fall in Blood (`/projects/shogun-flowers-fall-in-blood`)

- March 2026 battle slice is the hero. Order: What changed since 2025 (2025 video beside the
  current slice scope) → Support scenes → Build and art pipeline (AI-assisted art disclosed:
  Gemini ideation, PixelLab sprites). The "Closer look" accordion is gone.
- **Check:** the page still describes the March 2026 build. Anything newer since then?

## Guilty As Arrr (`/projects/guilty-as-arrr`, was `/repo-x`)

- Hero is now an in-game deck shot (the old hero, a square playtest photo, moved to the
  Playtests section). Order: What I built → Rescoping mid-semester (docs) → Playtests →
  Outcome.
- **Removed claim:** "ensuring sub-50ms latency for critical social cues". I couldn't find a
  measurement behind it. If you measured it, tell me and I'll restore it with the source.
- Removed "portfolio-ready" and the temporary parrot avatar.

## Lizard Wizard (`/projects/lizard-wizard`)

- Ported to the kit; team names moved into the at-a-glance list. No new claims.

## Black Dice Engine (`/projects/black-dice-engine`)

- Removed "Portfolio Relevance" ("This is portfolio-worthy because…") and the "Brand mark,
  not the main product story" caption. Order: What it solves → Architecture → Engineering
  lessons → Where it stands. GitHub link moved to the header.
- Hero is the brand banner, captioned honestly: the dashboard and player screens are still
  bare shells, so they aren't shown.
- **Check:** is the banner art AI-generated? If so it should say so in the caption. A
  screenshot of the GM dashboard, even a rough one, would be a better hero.

## Ami (`/projects/ami-research-companion`)

- Order: The problem (+ constraints) → What it does → Testing on her MacBook → Outcome.
  Removed the "It demonstrates experience with…" pitch paragraph.

## FEH Barracks Manager (`/projects/feh-barracks-manager`)

- Hero is now the My Heroes library (was the dashboard). Order: Why I built it → Product
  screens → How it's built → Hard problems → Outcome (docs + evidence pack in a deep dive).
- The 1,270 / 5,081 / 1,267 numbers are now labelled "local data set", as on the old page
  ("Current Local Scale").

## ComfyUI Production Pipeline (`/projects/comfyui-production-pipeline`)

- AI disclosure moved into the lede. Order: Pipeline shape → One cleanup, start to finish →
  Local workflow router (more graphs and Shogun examples in a deep dive) → What I learned (links
  to the projects it feeds).
- Card image is now the BiRefNet cutout step instead of an unreadable node graph.

## Legion Go Console Dock (`/projects/legion-go-console-dock`)

- Ported to the kit; no copy changes beyond trimming.

## Cranky (Game Jam 2024) (`/projects/cranky-game-jam`)

- Hero is the pug rig (the old banner had a printed title). Order: The pug, from model to game
  → Running the jam → Results (links, thanks to Julian Apostolov).
- **Contradiction resolved toward the at-a-glance list:** the old metadata said "Lead
  Animator and Co-Designer"; the role list said "Project manager, 3D artist, and animator".
  I used the role list everywhere. Tell me if "co-designer" should be added.
- **Check:** Global Game Jam is usually a 48-hour event; the page says "one week". Was your
  site's jam really a week?

## Cranky: The Squirrel Annihilator (`/projects/cranky-squirrel-annihilator`)

- Gameplay video is the hero; itch.io link in the header; 3D pug viewer kept. Thanks
  condensed into one line.

## Totally Bugged Out (`/projects/totally-bugged-out`)

- Title no longer in capitals. Gameplay video is the hero. Fixed the zero-height image
  containers the old page had.

## The Signal (`/projects/the-signal`)

- The finished game is the hero. Order: Design pillars (+ walkthrough video) → Story and
  visuals → Balancing (sheets and docs). Duplicate images and the duplicate "Overview" are
  gone; the 38 Adobe Stock IDs moved into a collapsed "Image credits" block (approved).

## The Last Paycheck (`/projects/the-last-paycheck`)

- Short concept page: header with the GDD link, banner, three design-focus cards.

## Trash Been (`/projects/trash-been`, absorbs `/projects/breda`)

- Merged as approved; `/projects/breda` redirects here. Live demo video is the hero.
- "May 2022" and "helped secure my acceptance to Breda" kept from the old page.
- **Check:** should it say "Breda University of Applied Sciences" in full?

## Horror VN Kit (`/projects/horror-vn-kit`)

- Ported to the kit; Eden credited as writer and artist in the lede, glance and hero caption.

## Figuresmith (`/projects/figuresmith`)

- The seven YouTube Shorts no longer load seven live players up front; they're click-to-play
  thumbnails. Title shortened to "Figuresmith" (the lede still says Figuresmith LLC).
- No hero image: the page has no local photos. Send a good photo of a finished figure and I'll
  use it as the hero and the card image.

---

## About (`/about`)

- h1 "About" (was "XR & Gameplay Developer"); same portrait and role line as the homepage.
- **Draft bio for your review** (two short paragraphs, built only from facts on the site and
  your resume): Shinobi Story 2021–2024, MUMOSA for an ARL client project, the B-360 VR
  simulator, Black Dice Engine, studying Simulation and Game Design at UBalt.
- Experience first (three linked rows), then Education as a plain list, then the skills
  graph as the optional visual.
- **Check the education list** (from your resume PDF, which is out of date: its headline is
  "Content Creator" and it has no master's):
  - University of Baltimore, Bachelor's in Simulation and Game Design, 2025 – present.
  - University of Baltimore, M.S. Interaction Design and Information Architecture,
    "accelerated program". I couldn't find dates; please give me the years.
  - University of Maryland, College Park, Bachelor's in **Digital Media and Communication**,
    2023–2024. The skills graph calls it "B.A. Communication & Media Studies". Which is right?
  - Montgomery College, Associate's in Digital Animation, 2020–2023.
- The old caption "University of Baltimore · Simulation & Game Design" under the graph implied
  all four degrees were from one school; removed.
- Your resume PDF itself still says "Content Creator" at the top. Worth updating, since it's
  the main button on the homepage.

## Creative (`/creative`)

- One name everywhere: "Creative" (was also "Videography & Communication Work" and
  "Videography & Storytelling").
- Sections: Creative case studies (cards) → Video → Animation and 3D → Illustration →
  Writing, with in-page links at the top.
- The three-video carousel (arrows and dots) is now a plain grid. Each gallery shows 8 pieces
  with a "Show all" button, which shortens the page a lot on phones.
- **Removed pitch text:** "Why this is substantial" and "How I pitch it".
- Removed "Shot, edited and directed by me unless noted". I'd drafted that line and it isn't
  sourced.

## UMD CPSE Media Work (`/cpse`)

- Rebuilt on the case-study kit (breadcrumb Home / Projects / UMD CPSE Media Work, with the
  next-project footer). The summer program film is a click-to-play hero instead of an iframe
  that loaded on page open; the duplicate copy in the gallery is gone. Uses the shared
  YouTube helper.

## Portrait and logo

- Portrait re-cut with BiRefNet-HR from your ComfyUI-RMBG models plus pymatting edge
  clean-up (`scripts/cutout-portrait.py`; run it with ComfyUI's Python). It's sharper (863×745,
  was 330×285) and smaller (59 KB WebP, was a PNG).
- Your GT logo, converted exactly from `GOGO_LOGO_SOURCE_FILE.ai` (no tracing), now appears in
  the header, the browser tab icon, the Apple touch icon and the share card. Two-tone: the G
  arc follows the text colour, the T and lower bowl are brand orange. Originals are in
  `art-source/brand/`.
