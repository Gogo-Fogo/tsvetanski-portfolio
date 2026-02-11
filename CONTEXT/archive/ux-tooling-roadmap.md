# Portfolio UX Tooling Roadmap (GitHub Push-by-Push)

This roadmap tracks the agreed rollout for interactive UX tooling on the portfolio.

## Completed Summary (2026-02-11)
- ✅ Pushes **1 through 10** have been implemented in production code.
- ✅ Chosen lightbox path was **Push 2 Option A (Radix Dialog hardening)**.
- ✅ Contact flow and optional 3D layer were completed (with 3D module moved to `/creative` for visibility).
- ℹ️ Remaining unchecked items below were mostly documentation/QA bookkeeping and are now synchronized.

## Phase 0 — Baseline / Safety
- [x] Create branch: `feature/ux-tooling-wave-1`
- [x] Capture baseline Lighthouse metrics (Performance, Accessibility, Best Practices)
- [x] Keep this file updated after each push

### Baseline Snapshot (2026-02-10)
- Performance: **76**
- Accessibility: **100**
- Best Practices: **100**
- Reports:
  - `CONTEXT/lighthouse-baseline.report.html`
  - `CONTEXT/lighthouse-baseline.report.json`

---

## Push 1 — Embla Carousel
- [x] Install Embla Carousel
- [x] Replace manual horizontal scroll behavior in `src/app/creative/video-carousel.tsx`
- [x] Preserve keyboard navigation + touch swipe
- [x] Test mobile scrolling + no layout shift
- [x] Commit: `feat(creative): upgrade video carousel with embla`

## Push 2 — Lightbox Strategy (Choose one path)

### Option A: Keep current lightbox, harden with Radix Dialog
- [x] Install Radix Dialog
- [x] Migrate lightbox container behavior to Dialog primitives
- [x] Ensure ESC close, focus trap, and focus return to trigger
- [x] Commit: `feat(media): harden lightbox accessibility with radix dialog`

### Option B: Replace with Yet Another React Lightbox (YARL)
- [ ] Install YARL
- [ ] Replace custom image/video lightbox behavior
- [ ] Keep visual style aligned with current theme
- [ ] Commit: `feat(media): migrate gallery lightbox to yarl`

## Push 3 — Lenis Smooth Scrolling
- [x] Install Lenis
- [x] Add global smooth scroll wrapper as a client island
- [x] Validate anchor links + keyboard scrolling behavior
- [x] Commit: `feat(ux): add lenis smooth scrolling`

### Push 3 Validation Snapshot (2026-02-10)
- Anchor links: **No in-page hash anchors currently present** (`href="#..."` not found), so no Lenis anchor regression observed.
- Keyboard scrolling: **Pass (manual check on `/creative`)**
- Lighthouse spot-check (`/creative`):
  - Performance: **76**
  - Accessibility: **96**
  - Best Practices: **96**
  - Reports:
    - `CONTEXT/lighthouse-push3.report.html`
    - `CONTEXT/lighthouse-push3.report.json`

## Push 4 — Floating UI
- [x] Install Floating UI
- [x] Add tooltip/hovercard patterns for project metadata/CTAs
- [x] Verify placement behavior on small viewports
- [x] Commit: `feat(ui): add floating-ui tooltips and hovercards`

## Push 5 — Sonner
- [x] Install Sonner and root toaster
- [x] Add minimal success/error/loading toasts for key actions
- [x] Avoid toast spam and preserve readability
- [x] Commit: `feat(feedback): add sonner toast notifications`

## Mail Upgrade Checkpoint (Gate)
- [x] Complete planned mail upgrades before starting optional tooling phase

---

## Push 6 — cmdk Command Palette
- [x] Install cmdk
- [x] Add `Cmd/Ctrl + K` palette with routes and quick actions
- [x] Lazy-load palette to protect initial load performance
- [x] Commit: `feat(nav): add command palette with cmdk`

## Push 7 — nuqs URL State
- [x] Install nuqs
- [x] Persist project filters/tabs/search state in URL
- [x] Validate browser back/forward behavior
- [x] Commit: `feat(projects): persist filters in url with nuqs`

## Push 8 — Motion Expansion
- [x] Expand Motion usage to tasteful page/section transitions
- [x] Respect `prefers-reduced-motion`
- [x] Commit: `feat(motion): add progressive route and section transitions`

## Optional Phase (After Mail Upgrades)

## Push 9 — react-hook-form (Optional, after mail upgrades)
- [x] Install react-hook-form
- [x] Add validation + success/failure UX handling
- [x] Commit: `feat(contact): add robust form handling`

## Push 10 — Optional 3D Layer (Virtual Lab, after mail upgrades)
- [x] Expand selective `react-three-fiber` + `drei` in one showcase module
- [x] Enforce perf budget (lazy loading, adaptive quality)
- [x] Commit: `feat(virtual-lab): add selective 3d interaction module`

---

## Quality Gate (Run on every push)
- [x] `npm run lint`
- [x] `npm run build`
- [x] Manual desktop + mobile viewport checks
- [x] Lighthouse spot-check after major UX pushes









