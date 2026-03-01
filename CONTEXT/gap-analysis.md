# Gap Analysis & Per-Page Punch List
Updated: 2026-02-28
Phase 1C output. Compiled from file scan (1A) + visual scan (1B).
Each item is specific and observable — "done" means it can be verified by screenshot.

---

## 🔴 Blockers — Fix Before Phase 2 Page Polish

### B1 — Dead Route: `/projects/virtual-lab` (404)
- Find all links pointing to this route and either build the page or remove the links
- Check: nav components, Career Hub project data, any hardcoded hrefs

### B2 — Missing Thumbnails: Guilty As Arrr + Fallout Mod (Level Design)
- Both Career Hub cards show "BANNER COMING SOON" — no banner images exist in `/public/images/`
- **Guilty As Arrr**: needs a banner asset for `/projects/repo-x` — check project page for any usable screenshot
- **Fallout Level Design**: needs a banner asset — check project page for any usable screenshot
- User action required: provide images or pull a screenshot from project page assets

---

## Per-Page Punch Lists

### 1. Home `/` — Priority 1
**Copy**
- [ ] Subtitle "Spatial interaction prototyper for XR + simulation." — consider whether this is specific enough or if a second line adding the dual-track identity would help ("XR engineering + cinematic storytelling")
- [ ] "VIEW PROJECTS" CTA — test whether this lands visitors at Career Hub (correct) or somewhere else

**IA / Wayfinding**
- [ ] Does the page make sense to a deep-link visitor? Add a one-liner about who Georgi Tsvetanski is (currently the subtitle has to do all that work)
- [ ] No global nav — verify this is intentional; if home is the only entry point it works, but confirm no orphan pages need a way back

**Visual / Layout**
- [ ] Both focus card CTAs have equal visual weight — consider making PRIMARY FOCUS CTA more prominent
- [ ] Verify mobile: secondary focus card ("Videography & Storytelling") label partially cut off at bottom — does it encourage scroll or confuse?

**Interaction**
- [ ] Confirm "EST. 2026 // SYSTEM STABLE" is intentional brand voice; if yes, own it — if not, remove

---

### 2. About `/about` — Priority 2
**CRITICAL — Mobile layout**
- [ ] Degree graph takes full mobile viewport with no context; fix before any copy work
  - Option A: On mobile, show copy first (reorder DOM or use flex-col-reverse)
  - Option B: Collapse graph to a smaller fixed-height widget on mobile
  - Option C: Replace graph with a static summary list on mobile (< 768px)

**Copy**
- [ ] Remove "leveraging" from T-Shaped Developer section — rewrite that sentence
- [ ] "I build immersive systems and responsive gameplay in Unity (C#), from physics-driven prototypes to commercial outcomes, with strong grounding in QA, live-ops, and player-centered delivery." — read this aloud. Long. Break into 2 sentences or shorten.
- [ ] Full copy read against voice rules — check every sentence in the Profile section

**Visual / Layout**
- [ ] "$110,000.00 REVENUE" — verify this is formatted intentionally (full dollar format with cents vs "$110K"). Decide and commit to one convention site-wide.

---

### 3. Career Hub `/career` — Priority 3
**Content gaps**
- [ ] Fix B2 (Guilty As Arrr banner) before this page is marked done
- [ ] Only 8 of 13+ projects surface in the hub — is this intentional curation or a metadata gap?
  - If intentional: document which projects are excluded and why
  - If a gap: add missing project metadata

**IA / Labels**
- [ ] Verify filter tab labels match recruiter search language (per IA guidelines)
  - "Technical Implementation" — clear ✅
  - "VR/XR Interaction" — clear ✅
  - "Design & Storytelling" — acceptable but broad; acceptable for now
- [ ] "Browse by discipline to find work faster." — functional. Could be punchier.

**Copy**
- [ ] "XR & Game Project Portfolio" heading — run voice rules check

---

### 4. Shinobi Story `/projects/shinobi-story` — Priority 4
**Copy — HIGH PRIORITY**
- [ ] Rewrite subtitle: "A ninja-focused action game experience with a content strategy and marketing rollout that supported growth, community engagement, and cinematic storytelling."
  - Fails: throat-clearing, vague, no numbers, no specifics
  - Fix direction: Lead with the result — "$110K revenue. 50K+ monthly players. I led content, community, and cinematic production for a Naruto-inspired mobile MMO."
- [ ] "Personal highlight: this Shinobi Story video is the main showcase." — remove "Personal highlight:" prefix; just describe what the video shows
- [ ] Full copy read — this is the commercial success showcase; every sentence must survive "so what?"

**Visual / Layout**
- [ ] $110K revenue figure — is it above the fold? If not, surface it earlier (hero subtitle or a metrics row)
- [ ] Mobile: breadcrumb truncation — acceptable or fix with overflow-hidden + ellipsis?
- [ ] Mobile: THEME toggle overlapping breadcrumb — is this a site-wide CSS issue? Check z-index / positioning

**IA / Wayfinding**
- [ ] Breadcrumbs present ✅
- [ ] Verify there's a clear next action after reading the page (back to career hub? next project?)

---

### 5. CPSE `/cpse` — Priority 5
**Copy**
- [ ] "Stats unavailable" — visible to visitors. Remove this text or replace with actual stats or nothing
- [ ] Subtitle: "Highlights from two consecutive roles supporting the UMD Cyber-Physical Systems Engineering program, spanning content creation, social strategy, and full-cycle video production." — run voice rules. "Spanning" is soft. Consider: "Two consecutive roles at UMD CPSE: social media strategy, interview production, and a summer program video that drew a Nobel laureate."
- [ ] Full copy read of all bullet points vs voice rules

**Visual / Layout**
- [ ] Verify video embed loads and autoplays or has clear play affordance

---

### 6. VR Interaction Lab `/projects/vr-interaction-lab`
**To audit in its own session:**
- [ ] Full copy read — engineering depth must be shown with specifics
- [ ] Verify blueprint pattern (contextual pairing) is applied
- [ ] Check all media loads and displays correctly

---

### 7. Fallout Level Design `/projects/fallout-level-design`
**To audit in its own session:**
- [ ] Full copy read — design discipline showcase
- [ ] PDF link still active (confirmed in Phase 0) — verify CTA placement matches blueprint

---

### 8. Creative `/creative`
**To audit in its own session:**
- [ ] Deep-link resilience — does this page orient a first-time visitor?
- [ ] Verify CPSE breadcrumb path is consistent with this section hierarchy

---

### 9. Resume `/resume`
- [ ] Low priority — basic check: no broken links, downloadable PDF if present works

---

### 10. Guilty As Arrr `/projects/repo-x`
- [ ] Fix B2 (missing Career Hub banner) — source or create a banner image
- [ ] Spatial audio + Photon Fusion are strong technical specs — verify they're prominent in copy

---

### 11–12. VR Microgames, Trash Been
**Blueprint pass:**
- [ ] Apply contextual pairing pattern if not already present
- [ ] Verify media loads and aspect ratios match blueprint guidelines

---

### 13. V4N GOGO Figurine Lab `/projects/v4n-gogo-figurine-lab`
- [ ] No hero image — add one or restructure to a non-image-dependent layout
- [ ] "The LLC is no longer active because of school time constraints" — consider framing as "active hobby practice" rather than a disbanded business; the current phrasing undercuts the work
- [ ] Decide: is this page a portfolio showcase or a social media landing page? Pick one and commit

---

### 14. Breda Case `/projects/breda`
- [ ] "Leveraged visual scripting..." — borderline banned phrase. Rewrite: "Used visual scripting to..."

---

### 15. Cranky Annihilator, Shogun Flowers
- [ ] Both have strong heroes — verify the rest of the page content lives up to the first impression
- [ ] Copy read pass

---

### 16. The Signal `/projects/the-signal`
- [ ] Team credits are present (good) — verify the rest of the content communicates Georgi's specific contribution (not just the project)

---

### 17. The Last Paycheck `/projects/the-last-paycheck`
**Dark mode hero failure**
- [ ] Hero image (dark silhouettes) is invisible in dark mode — fix required:
  - Option A: Add a light background behind the hero container (e.g., `bg-[var(--surface-light)]` or a warm cream) so silhouettes read
  - Option B: Use a different hero asset that works in both modes
  - Option C: Apply a CSS backdrop that lifts visibility
- [ ] Verify copy communicates the dystopian concept clearly

---

### 18. Totally Bugged Out `/projects/totally-bugged-out`
- [ ] All-caps title style — verify intentional and consistent with other project pages
- [ ] Copy read pass

---

### 19. Cranky (Game Jam 2024) `/projects/cranky-game-jam`
- [ ] Whiteboard hero — either embrace it with context ("this is the design sketch from hour 2 of the jam") or replace with a gameplay screenshot if one exists
- [ ] Disambiguation note ("Not to be confused with the later solo expansion...") — good but verify placement is visible without scrolling

---

### 20. Virtual Lab `/projects/virtual-lab` — DEAD ROUTE
- [ ] Audit all links/nav references to this route and either build or remove
- [ ] If the content exists elsewhere under a different route, redirect or update the links

---

## Cross-Cutting Issues

### Mobile THEME Toggle Overlap
- THEME button (fixed, top-right) overlaps breadcrumb text on narrow viewports
- Fix: increase breadcrumb right-padding on mobile, or adjust THEME button z-index/position offset
- Affects: all project pages with breadcrumbs

### Copy Voice Audit — Site-Wide Sweep Needed
Pages confirmed to have voice rule violations:
- About: "leveraging" ❌
- Shinobi Story: multiple generic phrases ❌
- Breda: "Leveraged" (borderline) ⚠️
- CPSE subtitle: "spanning" (soft) ⚠️

After Phase 2 page polish, do a final site-wide grep for banned phrases before marking any page "done."

### $110K Figure Formatting
- About uses "$110,000.00 REVENUE" (long form with cents)
- Decide on site-wide convention: "$110K" vs "$110,000" — pick one, apply everywhere

### `1 Issue` Dev Badge
- Next.js error indicator visible in screenshots — likely a dev-mode console error
- Identify and fix the underlying error before launch

---

## Phase 2 Ready Criteria

Before starting any page in Phase 2:
1. Blockers B1 + B2 resolved (virtual-lab 404, Guilty As Arrr banner)
2. Mobile THEME toggle overlap assessed (global fix vs per-page)
3. `1 Issue` dev badge identified and root cause known

Then work in priority order per the master plan.
