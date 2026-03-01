# Visual Audit — tsvetanski.com
Updated: 2026-02-28
Phase 1B output. Screenshots taken at desktop (1280×800) dark + light, mobile (375×812) dark for priority pages.

---

## Critical Issues (fix before any page polish)

| # | Issue | Page(s) | Severity |
|---|-------|---------|----------|
| 1 | `/projects/virtual-lab` returns **404** — route exists in nav/links but page doesn't | virtual-lab | 🔴 Blocker |
| 2 | "Guilty As Arrr" project card has **"BANNER COMING SOON"** placeholder — no image | /career | 🔴 Visible gap |
| 3 | About mobile: **degree graph dominates entire viewport**, T-Shaped Developer copy fully below fold | /about | 🔴 Layout break |
| 4 | The Last Paycheck hero **nearly invisible in dark mode** — dark silhouettes on dark background | /projects/the-last-paycheck | 🟠 Dark mode failure |
| 5 | **"leveraging"** appears in About copy — banned phrase | /about | 🟠 Copy violation |
| 6 | Shinobi Story subtitle is generic — fails voice rules | /projects/shinobi-story | 🟠 Copy violation |
| 7 | THEME toggle **overlaps breadcrumb** on mobile (fixed position, top-right) | multiple project pages | 🟡 Mobile polish |
| 8 | Shinobi Story breadcrumb **truncated** on mobile ("HOME / PROJECTS / SHI...") | /projects/shinobi-story | 🟡 Mobile polish |
| 9 | V4N GOGO Figurine Lab: **no hero image** — just text cards above fold | /projects/v4n-gogo-figurine-lab | 🟡 Visual gap |

---

## Page-by-Page Observations

### 1. Home `/`
**Desktop dark:** Clean and minimal. Photo + name + subtitle + two focus cards + Connect section. Entire page content visible in one viewport — no scroll needed.
**Desktop light:** Warm cream background. Cards render well, no contrast issues.
**Mobile dark:** Stacks cleanly. Photo/name/subtitle all above fold. Focus cards stack vertically. Secondary focus card begins to appear at scroll start — good momentum.

**Observations:**
- No global navigation — only two focus-card CTAs + About/Resume text links at bottom. Intentional minimalism, but may leave deep-link visitors disoriented.
- Subtitle "Spatial interaction prototyper for XR + simulation." — clean but abstract. Doesn't state the dual-track identity explicitly.
- "EST. 2026 // SYSTEM STABLE" footer line — interesting personality touch.
- Connect section (email, LinkedIn, Instagram) is prominent.
- No visible CTA hierarchy — "VIEW PROJECTS" and "EXPLORE VIDEOGRAPHY & STORYTELLING" have equal weight visually.

**First impression (6-second test):** Passes. Name + identity + two tracks land quickly. Photo is humanizing.

---

### 2. About `/about`
**Desktop dark/light:** Degree graph on left, T-Shaped Developer copy on right — 50/50 grid, works well on desktop. Commercial Success section below with "$110,000.00 REVENUE" in large text. Strong proof point.
**Mobile dark:** ⚠️ Degree graph fills entire mobile viewport. T-Shaped Developer copy completely hidden below fold. First impression on mobile is an interactive graph with no label or context.

**Observations:**
- "leveraging AI-assisted development workflows" — "leveraging" is on the banned list. Fix immediately.
- "T-Shaped Developer" label is accurate and differentiated.
- Degree graph is the differentiator — it's unique and visually engaging on desktop.
- "$110,000.00 REVENUE" for Shinobi Story is the strongest social proof on the site — well-placed.
- "1 Issue" Next.js error badge visible bottom-left (dev mode only).
- Mobile graph layout needs rethinking — consider collapsing or repositioning graph on mobile so copy leads.

**First impression (6-second test):** Desktop passes. Mobile fails — graph takes over with no context.

---

### 3. Career Hub `/career`
**Desktop dark/light:** Heading "XR & Game Project Portfolio" + discipline filter tabs (All / Technical Implementation / VR/XR Interaction / Design & Storytelling) + search bar + results count. Clean discovery interface.
**Mobile dark:** Tabs stack vertically — functional, takes vertical space but works.

**Observations:**
- "BANNER COMING SOON" on Guilty As Arrr card — missing project thumbnail asset. Breaks visual consistency of the grid.
- Results: 8 — only 8 of 13+ total projects surface here. Intentional curation or incomplete metadata?
- Filter tabs use "Design & Storytelling" — aligns with IA guidelines (specific labels).
- Search field placeholder: "Search projects by title, skill, or keyword" — clear.
- No "back to home" or global nav visible above the fold — relies on HOME breadcrumb.

**First impression (6-second test):** Passes on desktop. Functional discovery layer.

---

### 4. Shinobi Story `/projects/shinobi-story`
**Desktop dark/light:** Strong full-width hero banner. Breadcrumbs present. Featured video section below.
**Mobile dark:** Hero image renders well. Breadcrumb truncates ("HOME / PROJECTS / SHI..."). THEME toggle overlaps breadcrumb area.

**Observations:**
- Subtitle: "A ninja-focused action game experience with a content strategy and marketing rollout that supported growth, community engagement, and cinematic storytelling." — long, generic, AI-sounding. Fails voice rules on multiple counts ("content strategy and marketing rollout that supported growth, community engagement"). Needs full rewrite.
- $110K revenue is the story here — needs to surface in the hero area, not buried below.
- Hero image is vibrant and engaging — one of the best on the site.
- "FEATURED VIDEO HIGHLIGHT / Personal highlight: this Shinobi Story video is the main showcase." — "Personal highlight" is awkward phrasing, reads like a note to self.

**First impression (6-second test):** Hero passes visually. Copy pitch fails.

---

### 5. CPSE `/cpse`
**Desktop light:** Role summary card with two roles + date ranges. Key Impact bullets. Featured video embedded (YouTube).
**Mobile dark:** Functional. Breadcrumb wraps to 3 lines (acceptable). Role summary readable. Video visible.

**Observations:**
- "Produced the UMD CPSE Summer Program 2024 video, which attracted a Nobel Prize–winning physicist as a special guest." — Excellent specific detail. Keep as-is.
- "Highlights from two consecutive roles supporting the UMD Cyber-Physical Systems Engineering program, spanning content creation, social strategy, and full-cycle video production." — subtitle is okay but reads corporate. Could be sharper.
- "Stats unavailable" appears below video title — placeholder text visible to visitors. Fix or remove.
- Key Impact bullets are specific and measurable — strongest copy on this page.
- Breadcrumb path: HOME / VIDEOGRAPHY & STORYTELLING / UMD CPSE — correctly shows multi-level hierarchy.

**First impression (6-second test):** Passes. Role + impact land clearly.

---

### 6. VR Interaction Lab `/projects/vr-interaction-lab` (Drift Immersive)
**Desktop dark:** Full case study layout visible. Strong engineering-focused content.

**Observations:**
- Page title may actually be "Drift Immersive" (car driving simulation). Verify title shown on page vs route name.
- Blueprint pattern (text + media contextual pairing) appears to be in use.

---

### 7. Fallout Level Design `/projects/fallout-level-design`
**Desktop dark:** Level design showcase. Content visible.

**Observations:**
- Strong discipline showcase — level design is a distinct credential.
- PDF document linked from this page (confirmed in Phase 0).

---

### 8. Creative `/creative`
**Desktop dark:** Secondary storytelling track. Visual/video content.

**Observations:**
- Needs to stand alone for visitors who land here from external link.
- CPSE experience lives under this section path per breadcrumbs.

---

### 9. Resume `/resume`
**Desktop dark:** Backup format page. Low priority.

**Observations:**
- Functional. Low recruiter utility vs the project pages.
- No major issues flagged.

---

### 10. Repo X — Guilty As Arrr `/projects/repo-x`
**Desktop dark:** Online multiplayer social deduction game. Photon Fusion, spatial audio.

**Observations:**
- No banner image in Career Hub grid (the BANNER COMING SOON issue).
- Page itself may have a hero — needs verification vs the card thumbnail issue.

---

### 11. VR Microgames — B-360 `/projects/vr-microgames`
**Desktop dark:** VR safety/education content.

**Observations:**
- Community-focused VR safety prototype. Educational angle differentiates from other VR projects.

---

### 12. Trash Been `/projects/trash-been`
**Desktop dark:** Colorful platformer hero. Vibrant character art.

**Observations:**
- Strong visual contrast vs darker projects — hero image pops.

---

### 13. V4N GOGO Figurine Lab `/projects/v4n-gogo-figurine-lab`
**Desktop dark:** No hero image above fold. Two text cards: "HOW IT STARTED" and "WHERE TO FOLLOW" with Instagram/YouTube CTAs.

**Observations:**
- Feels like a landing page, not a project case study.
- No visual hook — the figurine making content lives on Instagram/YouTube but nothing shown inline.
- Shady Grove FAQ button present — niche reference that may not land for all visitors.
- "The LLC is no longer active because of school time constraints" — honest but potentially undermining for recruiter context.

---

### 14. Breda Case `/projects/breda`
**Desktop dark:** Trash Been Breda Application case study. Development insights section.

**Observations:**
- Clear scoped case study — one-week sprint documented well.
- "Leveraged visual scripting and template reverse engineering for speed." — "Leveraged" is close to "Leveraging" (banned). Borderline — flag for review.
- Shares hero imagery with Trash Been (same game).

---

### 15. Cranky: The Squirrel Annihilator `/projects/cranky-squirrel-annihilator`
**Desktop dark:** Strong 3D character hero render (pug character, stylized). Full viewport hero image.

**Observations:**
- One of the strongest visual first impressions on the projects list.
- Minimal text visible above fold — all image.

---

### 16. Shogun: Flowers Fall in Blood `/projects/shogun-flowers-fall-in-blood`
**Desktop dark:** High-contrast ink art hero (samurai portrait, black and white).

**Observations:**
- Visually striking. Art style is distinctive.
- Hero fills most of viewport — strong.

---

### 17. The Signal `/projects/the-signal`
**Desktop dark:** Board game design. Photo of team playing prototype at a table.

**Observations:**
- Hero photo is authentic/candid — fits the collaborative design narrative.
- "TEAM PROJECT | BOARD GAME DESIGN" — clear discipline label.
- Credits visible: "Georgi Tsvetanski, Alex Jeffries, Zefran Jehle"

---

### 18. The Last Paycheck `/projects/the-last-paycheck`
**Desktop dark:** ⚠️ Hero image is very dark — silhouetted characters (parent and child dancing) almost entirely invisible against dark background. Complete visual failure in dark mode.

**Observations:**
- In dark mode, the hero communicates nothing — visitors see a near-black rectangle.
- In light mode this may work better — needs verification.
- "Narrative + Systems Design · Dystopian Simulation (2050)" — interesting concept.
- Consider: CSS overlay adjustment, alternative hero asset, or light-mode-only hero image.

---

### 19. Totally Bugged Out `/projects/totally-bugged-out`
**Desktop dark:** FPS gameplay screenshot — indoor environment, cockroach-extermination premise. Clear visual.

**Observations:**
- "TOTALLY BUGGED OUT" in all-caps — stylistic choice that works.
- Gameplay screenshot communicates the genre immediately.

---

### 20. Cranky (Game Jam 2024) `/projects/cranky-game-jam`
**Desktop dark:** Hero image is a whiteboard photo of game design sketches.

**Observations:**
- Whiteboard hero is authentic but low visual polish for a portfolio showcase.
- Works as "process documentation" context if the rest of the page is strong.
- "1 Week Game Jam · Local Split-Screen Co-op · Unity · Not to be confused with the later solo expansion, Cranky: The Squirrel Annihilator" — helpful disambiguation.

---

### 21. Virtual Lab `/projects/virtual-lab`
**Status: ❌ 404 — Page Not Found**

**Observations:**
- Route is dead. Check if this should be removed from any navigation links or if page needs to be built.
- If it appears in any nav or card links, those are broken links.

---

## Summary Scores (6-second first impression test)

| Page | Desktop Pass | Mobile Pass | Notes |
|------|-------------|-------------|-------|
| Home | ✅ | ✅ | Clean identity hook |
| About | ✅ | ❌ | Graph dominates mobile |
| Career | ✅ | ✅ | Missing card thumbnail |
| Shinobi Story | ✅ (visual) | ✅ | Copy pitch fails |
| CPSE | ✅ | ✅ | Solid |
| VR Interaction Lab | ✅ | — | |
| Fallout Level Design | ✅ | — | |
| Creative | ✅ | — | |
| Resume | ✅ | — | Low priority |
| Guilty As Arrr | ✅ | — | |
| VR Microgames | ✅ | — | |
| Trash Been | ✅ | — | |
| V4N GOGO | ⚠️ | — | No visual hook |
| Breda | ✅ | — | |
| Cranky Annihilator | ✅ | — | Strong hero |
| Shogun Flowers | ✅ | — | Strong hero |
| The Signal | ✅ | — | |
| The Last Paycheck | ❌ | — | Dark mode hero failure |
| Totally Bugged Out | ✅ | — | |
| Cranky Game Jam | ⚠️ | — | Whiteboard hero |
| Virtual Lab | ❌ 404 | — | Dead route |
