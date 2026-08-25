# UX/UI Audit — Current Local Portfolio

**Audit date:** 2026-08-24
**Target:** current local working tree at `http://localhost:3000`
**Coverage:** 28 App Router pages after the requested deletion of `/virtual-lab`; every page reviewed at 1440×1100 and 390×844, in light and dark themes (112 route captures total)

## Executive assessment

This is a distinctive, credible portfolio with a stronger point of view than most technical-design portfolios. The homepage establishes Georgi's focus on simulation, XR, gameplay systems, and creative tooling quickly; the best project pages combine visual proof, clear responsibilities, process evidence, and a memorable voice. Dark mode is especially cinematic, while light mode remains coherent and professional. The current design succeeds at the difficult creative-impact half of the brief.

The main weaknesses are concentrated in conversion, accessibility, and information architecture rather than in the visual system. The site-wide contact form is unusable at the tested mobile width, the closed form remains exposed to keyboard and assistive-technology users, the Career archive's Clear action resets inconsistently, and the About graph is effectively mouse-only. Recruiter scanning is also slowed by inconsistent project naming and several extremely long case studies. The sitemap and archive no longer represent the actual project set.

There is one P0 blocker, six high-impact P1 findings, seven P2 improvements, and three P3 polish/tooling findings. The first implementation batch should fix mobile contact, correctly hide the closed contact panel, repair Career Clear, make the graph operable by keyboard, remove the V4N overflow, and reconcile the sitemap/archive labels. Those changes address the largest usability and credibility risks without redesigning the portfolio.

## First remediation batch — implemented 2026-08-24

The findings below preserve the original audit evidence. The following current-state changes were implemented immediately afterward:

- **P0-01 resolved:** Quick Contact now opens above the trigger as a viewport-inset, internally scrollable panel. The form fits at 390×844 and remains usable at shorter heights.
- **P1-01 resolved:** the closed contact form is unmounted, so its controls are absent from the accessibility tree and tab order. Open focuses Close; Escape closes and returns focus to the trigger.
- **P1-02 resolved:** Career search and filter now use one URL-state object; Clear resets both values atomically. A combined filter/query reset passed five consecutive browser runs.
- **P1-03 substantially resolved:** graph nodes are named keyboard buttons with Enter/Space behavior and a visible focus treatment. Zoom, back, reset, and Show All controls now have explicit labels and state.
- **P1-04 resolved:** Instagram shells and injected iframes are constrained to the content grid. V4N measured 1425 px document width against 1425 px client width after the fix, and direct post fallbacks remain available.
- **P1-05 partially resolved:** the sitemap now contains all 28 public pages and no obsolete `/resume` entry; `/resume` redirects directly to `/resume.pdf`. The three intentionally/unintentionally unlisted Career projects still need a content decision.
- **P1-06 resolved:** the homepage identity is now its single semantic H1 with no visual change.
- **Language cleanup:** all user-facing and audit references now use “resume,” without the accented spelling.

Verification captures: [`fixed mobile contact`](../outputs/ux-ui-audit-2026-08-24/remediation--contact-panel--mobile-dark.jpg) and [`fixed V4N desktop`](../outputs/ux-ui-audit-2026-08-24/remediation--v4n--desktop-dark.jpg).

## Strongest existing qualities

- **Immediate positioning:** the homepage clearly communicates a hybrid technical designer / XR / gameplay-systems profile and backs it with work immediately.
- **Memorable visual identity:** the lens-based homepage, restrained neon accents, large media, and editorial typography feel authored rather than templated.
- **Strong case-study ingredients:** flagship pages consistently show role, context, process artifacts, outcomes, and media instead of relying on unsupported claims.
- **Theme parity:** all 28 routes rendered coherently in both themes; no route lost content or became unreadable during the four-state capture pass.
- **Responsive foundations:** layouts generally reflow cleanly and all captured routes had one `main` landmark, no missing image alt attributes, and no broken rendered images at capture time.
- **Useful global interactions:** command palette, theme toggle, homepage lens selection, Career search/filtering, and Creative lightbox all worked under pointer and keyboard tests, except where called out below.

## Severity-ranked findings

### P0 — blocker

#### P0-01 — Mobile contact conversion is clipped off-screen

- **Affected:** every non-home route; reproduced on `/about` at 390×844 in dark mode and confirmed from the shared component.
- **Observed:** opening Quick Contact places its 359 px panel and 56 px bubble side-by-side inside the same fixed row. The panel measured `left: -75.84px`, `right: 283.33px`, so its labels, inputs, and submit control are cut off by the left edge. See [`interaction--contact-panel--mobile-dark.png`](../outputs/ux-ui-audit-2026-08-24/interaction--contact-panel--mobile-dark.png).
- **Impact:** the primary conversion path cannot be read or completed reliably on a common phone width.
- **Correction:** below the mobile breakpoint, render the panel above the bubble (or as an inset bottom sheet) with explicit left/right insets, `max-height`, and internal scrolling. Re-test at 320, 360, and 390 px, with the keyboard open.

### P1 — high impact

#### P1-01 — The visually closed contact form remains exposed to keyboard and assistive technology

- **Affected:** every non-home route; all viewports/themes.
- **Observed:** the closed panel is only `w-0`, transparent, and `pointer-events-none`. Its Close button and Name, Email, Project Type, Message, and Send Inquiry controls remain in the accessibility tree and focus model.
- **Impact:** keyboard focus can move into invisible/off-screen controls; screen-reader users encounter a form that appears to be open even when the trigger says it is closed.
- **Correction:** conditionally mount the panel or apply `hidden`/`inert` while closed. On open, move focus to the panel; on close/Escape, return focus to the trigger. Give the panel dialog semantics and an accessible name.

#### P1-02 — Career “Clear” is inconsistent when resetting search/filter state

- **Affected:** `/career`; reproduced at 390×844 dark with `?q=bird`, and with a category plus query.
- **Observed:** search correctly reduced the archive to one Birdwatching result. Clear can reset correctly, but the two independent URL-state updates race; in the captured run the URL, search value, result count, and filter state remained unchanged after 1.2 seconds. See [`interaction--career-search--mobile-dark.png`](../outputs/ux-ui-audit-2026-08-24/interaction--career-search--mobile-dark.png).
- **Impact:** users can become stranded in a filtered archive and may assume projects are missing.
- **Correction:** update both query parameters atomically (or await the first setter before the second), then add an interaction test covering query-only, filter-only, and combined state.

#### P1-03 — About degree graph is mouse-only and its controls are under-labelled

- **Affected:** `/about`; desktop and mobile, both themes.
- **Observed:** graph nodes are clickable SVG circles without keyboard focus, button semantics, accessible names, or keyboard handlers. Nodes do not appear as operable items in the accessibility snapshot. Zoom controls are announced as unlabeled `+` and `−`; `ALL` is ambiguous without context.
- **Impact:** keyboard and screen-reader users cannot explore the education graph, while sighted keyboard users receive no focus path through its core interaction.
- **Correction:** model each node as a focusable button/treeitem with an accessible label, Enter/Space behavior, visible focus, and programmatic expanded/selected state. Label Zoom in, Zoom out, Reset view, and Show all. Provide an equivalent linear education list next to the visualization.

#### P1-04 — V4N desktop page creates horizontal scrolling and dark-mode embeds appear empty

- **Affected:** `/projects/v4n-gogo-figurine-lab`; 1440×1100, most visible in dark mode.
- **Observed:** document width measured 1578 px against a 1440 px viewport. An Instagram embed extended to `right: 1577px`, producing a page-level horizontal scrollbar. Dark captures show large black embed rectangles with little evidence that content is loading or interactive.
- **Impact:** the page feels broken, content can be missed, and page-level horizontal scroll undermines a polished portfolio impression.
- **Correction:** constrain third-party embeds to `max-width: 100%`, remove their injected minimum width/margins inside a clipping wrapper, and provide poster/placeholder states that work in both themes. Test embed failure and blocked-third-party-cookie states.

#### P1-05 — Project discovery sources disagree with the actual route set

- **Affected:** sitemap, `/career`, direct project routes; all viewports/themes.
- **Observed:** 23 project routes exist, but the Career archive contains 20 and the sitemap contains 13 project URLs. Ten valid routes are absent from the sitemap: Ami Research Companion, Birdwatching, Black Dice Engine, Breda, ComfyUI Production Pipeline, FEH Barracks Manager, MUMOSA, Patapon VR, Prince of Persia mod, and Shonen Showdown. Breda, Trash Been, and V4N are not present in Career. The sitemap advertises `/resume`, which permanently redirects to `/about`; the actual document link is `/resume.pdf`.
- **Impact:** projects are hidden from recruiters and search/discovery systems, and the resume destination behaves differently from its label.
- **Correction:** establish one typed project registry that generates Career entries, project navigation, sitemap URLs, and labels. Include all intentionally public projects, explicitly mark intentionally unlisted work, and either link `/resume` to the PDF or remove the redirect URL from the sitemap.

#### P1-06 — Homepage has no semantic H1

- **Affected:** `/`; desktop/mobile, light/dark.
- **Observed:** the visible identity and positioning line are not an `h1`; the route had zero H1 elements while every other audited page had one.
- **Impact:** the page's primary identity is less clear to screen readers and document-outline consumers, and the most important recruiter-facing message lacks semantic priority.
- **Correction:** make “Georgi Tsvetanski” plus the positioning phrase the single page H1, preserving the current visual treatment with nested spans.

### P2 — meaningful improvements

#### P2-01 — Fixed mobile controls obscure content and compete with page CTAs

- **Affected:** all mobile routes; especially `/career`, `/about`, and project cards.
- **Observed:** the large theme control at the top-right, command palette at bottom-left, and contact bubble at bottom-right occupy three persistent screen edges. The contact bubble overlaps cards/links during normal scrolling.
- **Impact:** dense mobile pages feel more crowded, and primary content/CTAs can sit beneath persistent utility controls.
- **Correction:** collapse theme and command functions into a compact mobile utility menu, reserve safe-area spacing, and hide or minimize controls while scrolling down. Ensure page content has enough bottom padding for any retained fixed controls.

#### P2-02 — Flagship case studies are too long for recruiter-first scanning

- **Affected:** most strongly MUMOSA (25,901 px mobile), Prince of Persia (14,473 px), ComfyUI (12,660 px), Birdwatching (10,527 px), Fallout (8,618 px), and FEH (8,660 px); both themes.
- **Observed:** critical role, outcome, and proof are distributed through very long linear pages, with limited persistent orientation or “summary vs. deep dive” separation.
- **Impact:** a recruiter with one to three minutes may leave before reaching the strongest proof; creative depth is present but costly to scan.
- **Correction:** add a compact above-the-fold case-study summary (role, problem, contribution, outcome, tools), a sticky/in-page contents menu on long pages, and collapse secondary process material into labelled deep-dive sections or appendices.

#### P2-03 — Project names and boundaries are inconsistent across surfaces

- **Affected:** `/career` and several project routes, all viewports/themes.
- **Observed:** Career labels do not consistently match page titles, including “VR Dirt Bike Game” vs. “Shift Culture VR,” “VR Car Drift Simulator” vs. the VR Interaction Lab route, “VR Patapon Game” vs. “Patapon VR: The First Beat,” and MUMOSA archive/page naming. `/projects/breda` and `/projects/trash-been` both present Trash Been work without an obvious distinction. Breda and VR Microgames also inherit the homepage's generic metadata title/description.
- **Impact:** recruiters can interpret related entries as duplicates or different projects, weakening recall and ownership clarity.
- **Correction:** define one canonical public name, short archive name, one-sentence descriptor, and relationship field per project. Cross-link or merge genuinely related case studies, and provide unique metadata for every public route.

#### P2-04 — Several hero/LCP images are not prioritized; three fill images have zero-height containers

- **Affected:** warnings appeared across Creative and many project pages; concrete zero-height warnings occurred on The Last Paycheck, The Signal, and Totally Bugged Out, in both tested viewport classes.
- **Observed:** the browser reported likely LCP images without eager/priority loading on roughly twenty routes. It also reported fill images whose parents had zero height on the three routes above, plus inaccurate `sizes="100vw"` declarations. About/document-viewer requested an unconfigured image quality of 100. Two YouTube max-resolution thumbnail requests returned upstream 404s before fallback.
- **Impact:** slower first meaningful visuals, layout ambiguity, wasted requests, and inconsistent hero presentation—especially harmful on visually led case studies.
- **Correction:** identify the single LCP image per route and preload/prioritize it; give fill parents stable aspect ratios/minimum heights; provide truthful responsive `sizes`; configure only required image qualities; and select known-valid YouTube thumbnail variants without a failing probe.

#### P2-05 — Mobile homepage project lenses need a clearer overflow affordance

- **Affected:** `/`; 390×844, light/dark.
- **Observed:** the horizontal lens rail shows two categories and a clipped portion of the next, with later categories off-screen and no explicit scroll hint, progress, or next control.
- **Impact:** the homepage's primary discovery mechanism is less obvious on touch devices, so categories and projects may remain undiscovered.
- **Correction:** add scroll snapping plus a visible “swipe”/progress affordance, ensure the selected item scrolls fully into view, and expose a compact “All work” alternative adjacent to the rail.

#### P2-06 — Lightboxes lack descriptions despite otherwise solid dialog behavior

- **Affected:** Creative and project media lightboxes; reproduced on `/creative` desktop dark.
- **Observed:** lightbox open/close and Escape behavior worked, but the console emitted Radix warnings for missing `DialogDescription`/`aria-describedby`. See [`interaction--creative-lightbox--desktop-dark.png`](../outputs/ux-ui-audit-2026-08-24/interaction--creative-lightbox--desktop-dark.png).
- **Impact:** assistive-technology users receive less context for what opened and what the displayed artifact represents.
- **Correction:** connect each dialog to a concise description/caption, including project, media type, and available controls; keep focus containment and Escape/return-focus behavior.

#### P2-07 — Several mobile text actions have undersized touch areas

- **Affected:** breadcrumbs and inline CTAs across project pages; carousel controls on `/creative`; 390×844, both themes.
- **Observed:** many visible links are only 15–22 px high with no additional hit-area padding; Creative carousel arrows measured about 39×39 px.
- **Impact:** actions are harder to tap accurately, particularly while one-handed or for users with motor impairments.
- **Correction:** provide at least 24×24 CSS px target boxes as a minimum and prefer roughly 44×44 for primary mobile controls, using padding/pseudo-elements without changing typography.

### P3 — polish and engineering hygiene

#### P3-01 — Interaction labels can be more explicit

- **Affected:** command palette hint, graph filter/reset controls, some icon-only media controls.
- **Observed:** the command hint exposes both “⌘K” and “Ctrl/⌘ K”; graph “ALL” has no contextual noun; some icon controls rely on visual convention.
- **Impact:** small comprehension and screen-reader friction.
- **Correction:** tailor the shortcut label to the detected platform and use action-first labels such as “Show all degrees.”

#### P3-02 — Large local media deserves a deliberate delivery policy

- **Affected:** Prince of Persia, Shogun, MUMOSA, Birdwatching, Cranky and other media-heavy routes.
- **Observed:** repository assets include individual videos of roughly 40–73 MB, a 26.5 MB PDF, a 16 MB presentation, and a 15 MB GLB. Videos use metadata-oriented loading in many places, so this is not equivalent to initial transfer, but opening media can still be expensive on mobile.
- **Impact:** slower media interaction and high bandwidth for interested recruiters on constrained connections.
- **Correction:** publish optimized multi-bitrate video, lightweight posters, compressed documents/previews, and explicit file-size/type labels before large downloads.

#### P3-03 — Lint scope is noisy and source lint currently fails

- **Affected:** engineering QA rather than a user-facing route.
- **Observed:** the default lint command traversed `.codex-tmp` browser-profile extensions and did not finish within the audit window. Targeted `eslint src next.config.ts` completed with six `react/no-unescaped-entities` errors (Ami Research Companion and Shogun pages).
- **Impact:** regressions are harder to detect consistently, making visual/accessibility quality less reliable over time.
- **Correction:** exclude generated/browser-profile directories and clear the six source violations so lint can be a dependable gate.

## Shared interaction results

| Interaction | Result | Evidence / note |
|---|---|---|
| Homepage project lenses | Pass | Tools & AI changed the selected heading and pressed state. [`interaction--home-tools-lens--desktop-dark.png`](../outputs/ux-ui-audit-2026-08-24/interaction--home-tools-lens--desktop-dark.png) |
| Career search/filter | Partial | Query and category filtering worked; Clear reset was inconsistent (P1-02). |
| Theme toggle | Pass with layout concern | Toggled successfully throughout the four-state route pass; mobile footprint is excessive (P2-01). |
| Command palette | Pass | Ctrl/⌘K opened a named dialog with combobox/listbox; Escape closed it. [`interaction--command-palette--mobile-dark.png`](../outputs/ux-ui-audit-2026-08-24/interaction--command-palette--mobile-dark.png) |
| Contact bubble/form | Fail | Mobile panel clipped; closed controls remain exposed (P0-01, P1-01). No mail client was launched during audit. |
| Degree graph | Pointer partial / keyboard fail | Pointer interaction and zoom exist; nodes are not keyboard or screen-reader operable (P1-03). |
| Creative carousel/lightbox | Pass with warning | Lightbox opened and closed by Escape; missing dialog description (P2-06). |
| Project carousels/media | Pass with warnings | Visible controls responded; performance and touch-size issues noted above. |
| Document/video viewers | Pass with delivery concern | Content displayed or exposed fallback/download paths; large media and image warnings remain. |

## Route-by-route review

Every row below represents four reviews: desktop dark, desktop light, mobile dark, and mobile light. “Pass” means the route rendered and remained navigable; findings are cross-referenced above.

| Route | Result | Primary audit note |
|---|---|---|
| `/` | Pass with findings | Excellent positioning and visual identity; missing H1 and mobile lens affordance (P1-06, P2-05). |
| `/about` | Pass with findings | Strong personal narrative and proof; graph accessibility and fixed-mobile controls need work (P1-03, P2-01). |
| `/career` | Partial | Strong searchable archive; Clear resets inconsistently and mobile controls overlap content (P1-02, P2-01). |
| `/cpse` | Pass | Clear role/impact narrative and consistent responsive hierarchy; shared contact issues apply. |
| `/creative` | Pass with findings | Visually strong media showcase; long mobile page, dialog descriptions, and media delivery need work (P2-02, P2-06, P3-02). |
| `/projects/ami-research-companion` | Pass | Clear problem framing and human context; missing sitemap entry and source lint errors (P1-05, P3-03). |
| `/projects/birdwatching` | Pass with findings | Rich prototype evidence; 10,527 px mobile page is costly to scan and missing from sitemap (P2-02, P1-05). |
| `/projects/black-dice-engine` | Pass | Strong local-first tool proposition and proof; missing sitemap entry. |
| `/projects/breda` | Pass with findings | Concise page, but overlaps ambiguously with Trash Been and inherits generic metadata (P2-03). |
| `/projects/comfyui-production-pipeline` | Pass with findings | Credible, content-rich technical case study; 12,660 px mobile length and sitemap omission (P2-02, P1-05). |
| `/projects/cranky-game-jam` | Pass | Authentic process presentation; deliberately rough artifacts are contextualized well. |
| `/projects/cranky-squirrel-annihilator` | Pass | One of the strongest visual/gameplay pages; clear premise and hierarchy. |
| `/projects/fallout-level-design` | Pass with findings | Detailed level-design proof; document-heavy 8,618 px mobile scan (P2-02). |
| `/projects/feh-barracks-manager` | Pass with findings | Strong product/process evidence; long mobile scan and sitemap omission (P2-02, P1-05). |
| `/projects/mumosa-crisis-response-vr` | Pass with findings | Flagship-quality evidence, but 25,901 px mobile length buries recruiter essentials (P2-02). |
| `/projects/patapon-vr-the-first-beat` | Pass with findings | Clear concept and visual proof; archive/page naming mismatch and sitemap omission (P2-03, P1-05). |
| `/projects/prince-of-persia-warrior-within-mod` | Pass with findings | Strong visual credibility; 14,473 px mobile length, large videos, and sitemap omission (P2-02, P3-02, P1-05). |
| `/projects/repo-x` | Pass | Clear case study once opened; route slug alone is not self-describing, so labels should remain consistent. |
| `/projects/shinobi-story` | Pass | Strong outcome metrics and cohesive presentation. |
| `/projects/shogun-flowers-fall-in-blood` | Pass with findings | Good iteration framing and visuals; mobile length and a small lint defect remain. |
| `/projects/shonen-showdown` | Pass | Strong gameplay-led first impression; omitted from sitemap (P1-05). |
| `/projects/the-last-paycheck` | Pass with warning | Concise and scannable, but the zero-height fill-image warning weakens hero reliability (P2-04). |
| `/projects/the-signal` | Pass with warning | Clear narrative and media rhythm; zero-height fill-image and sizing warnings (P2-04). |
| `/projects/totally-bugged-out` | Pass with warning | Clear premise and evidence; zero-height fill-image and sizing warnings (P2-04). |
| `/projects/trash-been` | Pass with findings | Understandable page, but absent from Career and ambiguous beside Breda (P1-05, P2-03). |
| `/projects/v4n-gogo-figurine-lab` | Partial | Desktop horizontal overflow and black dark-mode embeds; absent from Career (P1-04, P1-05). |
| `/projects/vr-interaction-lab` | Pass with finding | Driving/interaction work reads clearly; archive and route naming should be canonicalized (P2-03). |
| `/projects/vr-microgames` | Pass with findings | Strong real-world impact; generic metadata and “VR Dirt Bike”/“Shift Culture VR” naming mismatch (P2-03). |

## Navigation, link, and metadata inventory

- **Actual App Router pages:** 28 total; 23 are project pages.
- **Career archive:** 20 project entries; no dead project destinations found. Breda, Trash Been, and V4N have routes but no Career entry.
- **Sitemap:** 19 URLs total; only 13 project URLs. Ten public project routes are omitted.
- **Resume:** About correctly links to `/resume.pdf`; `/resume` is a permanent redirect to About and should not be presented as a standalone sitemap document.
- **Rendered link check:** 180 anchors inventoried across the 28 routes. Fifty unique internal destinations were requested/followed and resolved successfully; `/resume` resolved only by redirecting to About.
- **Metadata:** every route returned a title and description, but `/`, Breda, and VR Microgames share the same generic title and description.
- **Assets:** no rendered image had a missing alt attribute or zero natural width during the route capture pass. Upstream YouTube max-resolution probes did produce two avoidable 404s before fallback.

## Prioritized remediation sequence

### Immediate fixes — first implementation batch

1. Rebuild the mobile contact panel as an inset bottom sheet/stack and verify its form at 320–390 px.
2. Remove the closed contact form from the accessibility tree and implement focus entry/return/Escape behavior.
3. Make Career Clear reset query and filter state atomically; add regression tests.
4. Add keyboard semantics, labels, and a linear alternative to the About graph.
5. Constrain V4N embeds and supply light/dark/error placeholders.
6. Add the homepage H1 and repair the sitemap `/resume` entry plus the ten missing project URLs.
7. Stabilize the three zero-height hero containers and prioritize each route's actual LCP image.

### Structural improvements

1. Create a single project registry that drives routes, archive cards, sitemap, navigation, metadata, and canonical names.
2. Introduce a recruiter summary and optional deep-dive structure for long case studies, starting with MUMOSA, Prince of Persia, ComfyUI, and Birdwatching.
3. Consolidate mobile utility controls into a smaller pattern with safe-area/content clearance.
4. Establish reusable accessible primitives for media dialogs, carousels, touch targets, and reduced-motion behavior.
5. Define a media delivery pipeline for posters, video renditions, documents, and third-party fallbacks.

### Polish

1. Add a mobile rail affordance/progress cue to the homepage.
2. Normalize interaction names, platform-specific shortcut hints, and icon labels.
3. Give every public route unique metadata.
4. Exclude generated browser files from lint and clear the six source lint errors.

## Quick wins vs. larger redesign work

### Quick wins

- Add the homepage H1 without changing its appearance.
- Fix Career Clear with one atomic query update.
- Apply `hidden`/`inert` or conditional mounting to the closed contact panel.
- Add dialog descriptions and explicit graph/zoom labels.
- Remove `/resume` from the sitemap or make it resolve to the PDF; add the ten missing route entries.
- Add stable aspect ratios, accurate `sizes`, and priority to the affected hero images.
- Constrain Instagram wrappers to the viewport.
- Add unique metadata to Breda and VR Microgames.

### Larger redesign work

- A truly accessible graph interaction plus equivalent linear experience.
- Recruiter-summary/deep-dive restructuring across the longest flagship case studies.
- A centralized project content registry and canonical naming migration.
- Mobile utility/control consolidation.
- Robust third-party embed and large-media delivery architecture.

## Validation and artifacts

- `npm run build`: **passed** after the first remediation batch; the production route table contains 28 pages and no Virtual Lab route.
- Targeted `eslint src next.config.ts`: **failed with six source errors** as described in P3-03.
- Browser console: no route-stopping runtime error; dialog-description, image/LCP, fill-parent, and thumbnail warnings recorded above.
- Screenshots: 112 individual route screenshots, five interaction screenshots, four contact sheets, route metrics, and the rendered link map are stored in [`outputs/ux-ui-audit-2026-08-24`](../outputs/ux-ui-audit-2026-08-24/).
- Contact sheets: [`desktop dark`](../outputs/ux-ui-audit-2026-08-24/contact-sheet--desktop--dark.jpg), [`desktop light`](../outputs/ux-ui-audit-2026-08-24/contact-sheet--desktop--light.jpg), [`mobile dark`](../outputs/ux-ui-audit-2026-08-24/contact-sheet--mobile--dark.jpg), and [`mobile light`](../outputs/ux-ui-audit-2026-08-24/contact-sheet--mobile--light.jpg).

The audit itself changed no portfolio code except for the user-requested deletion of `/virtual-lab`. The first remediation batch documented above was implemented immediately after the audit handoff.
