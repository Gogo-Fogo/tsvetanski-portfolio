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
  - Hover: `hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--hover-glow)]` (consistent glow)

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
`group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--hover-glow)]`

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
1. **Header**: Breadcrumbs + project type + title + one plain-English sentence explaining what was built.
2. **At a glance**: Four compact facts covering personal role, technical challenge, stack or platform, and result/proof.
3. **Hero proof**: Main gameplay video, product capture, or strongest visual evidence.
4. **Case study**: Challenge, important decisions, implementation, and outcome. Use specific headings instead of a generic "Closer Look" label.
5. **Technical evidence**: Architecture diagrams, detailed documents, repositories, and supporting media.
6. **Outcome/links**: Current status, measured result, demo, build, and source links where available.

## 8. Recruiter-First Writing Rules
- Lead with the plain-English result, then introduce a specialist term when it adds precision.
- Prefer concrete verbs such as `built`, `tested`, `shipped`, `measured`, and `debugged` over abstract nouns such as `synthesis`, `delivery model`, or `workflow ownership`.
- State personal ownership explicitly on team projects.
- Replace reassurance such as "real product" or "not just a prototype" with evidence: where it ran, who tested it, what shipped, or what changed after use.
- Define uncommon terms on first use. Keep engine, framework, and architecture names in metadata or technical sections when a general recruiter does not need them to understand the first sentence.
- Do not repeat the same claim in the header, At a glance cards, overview, and outcome. Each layer should add new evidence.
- Keep captions descriptive and short; do not use them as a second body paragraph.

## 9. Page Depth
- **Flagship project**: At a glance + full case study + technical evidence.
- **Supporting project**: At a glance + two to four proof sections + outcome.
- **Concept or older work**: Short summary + strongest artifact links. Do not stretch limited evidence into a flagship-length page.
