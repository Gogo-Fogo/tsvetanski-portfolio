# Portfolio UX Tooling Roadmap (GitHub Push-by-Push)

This roadmap tracks the agreed rollout for interactive UX tooling on the portfolio.

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
- [ ] Test mobile scrolling + no layout shift
- [ ] Commit: `feat(creative): upgrade video carousel with embla`

## Push 2 — Lightbox Strategy (Choose one path)

### Option A: Keep current lightbox, harden with Radix Dialog
- [x] Install Radix Dialog
- [x] Migrate lightbox container behavior to Dialog primitives
- [x] Ensure ESC close, focus trap, and focus return to trigger
- [ ] Commit: `feat(media): harden lightbox accessibility with radix dialog`

### Option B: Replace with Yet Another React Lightbox (YARL)
- [ ] Install YARL
- [ ] Replace custom image/video lightbox behavior
- [ ] Keep visual style aligned with current theme
- [ ] Commit: `feat(media): migrate gallery lightbox to yarl`

## Push 3 — Lenis Smooth Scrolling
- [ ] Install Lenis
- [ ] Add global smooth scroll wrapper as a client island
- [ ] Validate anchor links + keyboard scrolling behavior
- [ ] Commit: `feat(ux): add lenis smooth scrolling`

## Push 4 — Floating UI
- [ ] Install Floating UI
- [ ] Add tooltip/hovercard patterns for project metadata/CTAs
- [ ] Verify placement behavior on small viewports
- [ ] Commit: `feat(ui): add floating-ui tooltips and hovercards`

## Push 5 — Sonner
- [ ] Install Sonner and root toaster
- [ ] Add minimal success/error/loading toasts for key actions
- [ ] Avoid toast spam and preserve readability
- [ ] Commit: `feat(feedback): add sonner toast notifications`

## Mail Upgrade Checkpoint (Gate)
- [ ] Complete planned mail upgrades before starting optional tooling phase

---

## Push 6 — cmdk Command Palette
- [ ] Install cmdk
- [ ] Add `Cmd/Ctrl + K` palette with routes and quick actions
- [ ] Lazy-load palette to protect initial load performance
- [ ] Commit: `feat(nav): add command palette with cmdk`

## Push 7 — nuqs URL State
- [ ] Install nuqs
- [ ] Persist project filters/tabs/search state in URL
- [ ] Validate browser back/forward behavior
- [ ] Commit: `feat(projects): persist filters in url with nuqs`

## Push 8 — Motion Expansion
- [ ] Expand Motion usage to tasteful page/section transitions
- [ ] Respect `prefers-reduced-motion`
- [ ] Commit: `feat(motion): add progressive route and section transitions`

## Optional Phase (After Mail Upgrades)

## Push 9 — react-hook-form (Optional, after mail upgrades)
- [ ] Install react-hook-form
- [ ] Add validation + success/failure UX handling
- [ ] Commit: `feat(contact): add robust form handling`

## Push 10 — Optional 3D Layer (Virtual Lab, after mail upgrades)
- [ ] Expand selective `react-three-fiber` + `drei` in one showcase module
- [ ] Enforce perf budget (lazy loading, adaptive quality)
- [ ] Commit: `feat(virtual-lab): add selective 3d interaction module`

---

## Quality Gate (Run on every push)
- [x] `npm run lint`
- [x] `npm run build`
- [ ] Manual desktop + mobile viewport checks
- [ ] Lighthouse spot-check after major UX pushes
