# Project Page Style Blueprint (Site-Wide)

## 1. Goal
Ensure every project page acts as a cohesive case study with a clear narrative, optimized visual hierarchy, and tight pairing between descriptive text and supporting media.

## 2. Visual Hierarchy & Spacing
- **Outer Padding**: `p-8 md:p-24` (matches existing container).
- **Max Width**: `max-w-4xl mx-auto`.
- **Section Spacing**: Use `gap-12 md:gap-16` between major sections to provide breathing room.
- **Card Styling**: Standardize cards using:
  - Background: `bg-[var(--surface)]`
  - Border: `border border-[var(--border)]`
  - Radius: `rounded-2xl`
  - Shadow: `shadow-[var(--shadow)]`
  - Hover: `hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]` (consistent glow)

## 3. The "Contextual Pairing" Pattern (Standard Layout)
Avoid standalone image blocks. Instead, use 2-column grids to pair descriptions with visuals.

### Pattern A: Text + Image (50/50)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div>
    <h2 className="...">Section Title</h2>
    <p className="...">Descriptive text providing context for the image.</p>
  </div>
  <div className="[Standard Media Wrapper]">
    <LightboxImage ... />
  </div>
</div>
```

### Pattern B: Alternating Flow
Reverse the order on alternating sections (`md:flex-row-reverse` if using flex, or just swap column order) to maintain engagement.

## 4. Standardized Media Wrapper
Instead of duplicating long Tailwind strings, use this standard wrapper for images/videos:
`group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]`

## 5. Aspect Ratio Guidelines
- **Hero/Banner**: `aspect-[16/6]` or `aspect-video` (width: 1600, height: 900)
- **Standard Gameplay**: `aspect-video` (16:9)
- **Character/Asset Renders**: `aspect-square` (1:1)
- **Cinematic/Wide**: `aspect-[32/9]`

## 6. Project-Specific Elements
- **Roles & Tools**: Keep these in a compact 2-column grid near the top.
- **Link Buttons**: Use the "Pill" style with uppercase tracking:
  - Primary: `bg-[var(--foreground)] text-[var(--background)]`
  - Secondary: `border border-[var(--border)] text-[var(--foreground)]`

## 7. Narrative Flow
1. **Header**: Breadcrumbs + Project Title + 1-sentence TL;DR.
2. **Hero**: Main banner or high-impact video.
3. **The Overview**: Paired with a close-up or gameplay screenshot.
4. **Roles/Tools**: Brief technical metadata.
5. **The Deep Dive**: Alternating "Text + Media" blocks for specific features (AI, Level Design, Art).
6. **Outcomes/Links**: Results followed by external CTA buttons.