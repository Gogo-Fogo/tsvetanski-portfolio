import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fallout Level Design | Georgi Tsvetanski",
  description: "Third-floor lead on a team-built Fallout 4 interior level — interior production, merge stability, and visual optimization across a multi-person pipeline.",
};


const falloutDocuments = [
  {
    href: '/documents/projects/fallout-level-design/recruiter/fii-fallout-final-milestone-report.pdf',
    label: 'FII Final Milestone Report',
  },
  {
    href: '/documents/projects/fallout-level-design/recruiter/game-370-milestone-one.pdf',
    label: 'GAME 370 Milestone One (Project Lead)',
  },
  {
    href: '/documents/projects/fallout-level-design/recruiter/game-370-final-project-revised-design.pdf',
    label: 'Revised Design: Hall of Idols',
  },
];

const falloutEvidenceImages = [
  {
    src: '/images/projects/fallout/fallout-page-01.png',
    alt: 'Floating Institute final milestone report opening page',
    width: 1224,
    height: 1584,
    caption: 'Opening section of the milestone report with team contribution breakdown and project scope.',
  },
  {
    src: '/images/projects/fallout/fallout-page-02.png',
    alt: 'Milestone report page describing required techniques and implementation details',
    width: 1224,
    height: 1584,
    caption: 'Technique summary section including Creation Kit implementation notes and integration workflow.',
  },
  {
    src: '/images/projects/fallout/fallout-page-04.png',
    alt: 'Milestone report page focused on technical challenges and project reflection',
    width: 1224,
    height: 1584,
    caption: 'Challenge documentation covering merge stability, runtime issues, and scene optimization efforts.',
  },
  {
    src: '/images/projects/fallout/fallout-page-05.png',
    alt: 'Milestone report page with runtime control strategy and tutorial references',
    width: 1224,
    height: 1584,
    caption: 'Runtime strategy and supporting references used during implementation in the Fallout 4 Creation Kit.',
  },
];

const milestoneOneImages = [
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p02-img01.png',
    alt: 'Creation Kit editor view for Ashen Vale Hall of Idols puzzle space',
    width: 1717,
    height: 1388,
    caption: 'Creation Kit editor workflow for the Hall of Idols puzzle room in Milestone One.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p01-img01.png',
    alt: 'Ashen Vale Hall of Idols chamber with statues and lighting',
    width: 2048,
    height: 959,
    caption: 'In-engine composition and encounter-space lighting for the Hall of Idols.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p02-img03.png',
    alt: 'Ashen Vale bridge and statue area during technical iteration',
    width: 1406,
    height: 1085,
    caption: 'Iteration phase showing traversal-blockout and trigger testing around the statue platforms.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p03-img01.png',
    alt: 'Sun Chamber portal-like environment from Milestone One',
    width: 1147,
    height: 532,
    caption: 'Sun Chamber setup used to stage the major transition beat after puzzle completion.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p05-img02.png',
    alt: 'Early terrain sculpt for Ashen Vale jungle exterior',
    width: 1024,
    height: 768,
    caption: 'Early terrain shaping pass for the jungle exterior entrance area (WIP).',
  },
];

const hallOfIdolsRevisedImages = [
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p03-img01.png',
    alt: 'Hall of Idols top-down revised layout diagram',
    width: 1385,
    height: 1115,
    caption: 'Revised top-down layout: idol plinths, interact points, and stair route to the Sun Chamber.',
  },
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p04-img01.png',
    alt: 'Hall of Idols full Creation Kit scene with object and lighting setup',
    width: 1717,
    height: 1388,
    caption: 'Creation Kit working view showing object lists, scripted placeholders, and lighting pass configuration.',
  },
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png',
    alt: 'Hall of Idols chamber scene with illuminated statues and trigger markers',
    width: 2048,
    height: 959,
    caption: 'Puzzle chamber blockout with spotlight-guided statues and traversal staging.',
  },
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p02-img01.png',
    alt: 'Close-up of Hall of Idols statue placeholder and spotlight tuning',
    width: 1406,
    height: 1085,
    caption: 'Interactive statue placeholder tuned for rotate-on-activation behavior and readability.',
  },
];

const falloutLearningReferences = [
  {
    href: 'https://www.youtube.com/watch?v=qaKbOLdzC6-k',
    label: 'Linking Cells Tutorial',
  },
  {
    href: 'https://www.youtube.com/watch?v=ZIWI7jalt9o',
    label: 'Terminals Setup',
  },
  {
    href: 'https://www.youtube.com/watch?v=Ipgx3xmzEaw',
    label: 'Enemy Customization',
  },
  {
    href: 'https://www.youtube.com/watch?v=T_wJhG2zHqw',
    label: 'Navmesh Tutorial',
  },
  {
    href: 'https://geckwiki.com/index.php/Bethsoft_Tutorial_Navmesh',
    label: 'GECK Wiki: Navmesh',
  },
];

export default function FalloutLevelDesignCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Fallout Level Design' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Fallout 4 Creation Kit - Team Mod Project
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Fallout Mod (Level Design)</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Team-built Fallout 4 level expansion centered on the Floating Institute concept. I joined later in development and focused on
            interior production, merge stability, and optimization so the final combined build remained playable and visually coherent.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png"
                alt="Hall of Idols puzzle chamber — Fallout 4 level design"
                width={2048}
                height={959}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Scope Split</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Major Team Build</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Floating Institute (FII)</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Larger, late-semester combined project. I was not project lead there, but handled third-floor level design, optimization,
                  and technical support during merge stabilization.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Earlier Project (Lead)</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">GAME 370 Milestone One - Ashen Vale</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Smaller first project where I led delivery and learned core Creation Kit workflow before the larger FII production cycle.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project Context</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The team goal was to create a multi-area Fallout 4 experience that felt native to the existing world while introducing a new
                location hub with connected interior cells and combat spaces. Work had to fit Creation Kit constraints and merge cleanly into
                a shared ESP.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                At one point during the semester, I merged my level ESP into the main team level. Because of that, my original personal ESP became
                outdated and no longer represents the final integrated build state.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">My Role</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Joined mid-project and onboarded quickly to an active production pipeline.</li>
                <li>- Built the third-floor interior and multiple room variants.</li>
                <li>- Led level-design polish, optimization, and technical support for integrated team cells.</li>
                <li>- Fixed first-merge technical issues: door links, room bounds, portals, and lighting.</li>
                <li>- Future-proofed the level to run better and avoid visual breakage after full-team merge.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Technical Workflow</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                  I used Blender, NifSkope, and B.A.E. (Bethesda Archive Extractor) to understand mesh and collision edits, then implemented
                  and tested the level in Creation Kit with load doors and XMarkerHeading markers for reliable inter-cell traversal.
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  For testing and iteration, I used in-engine commands like <span className="font-medium text-[var(--foreground)]">coc</span> and{' '}
                  <span className="font-medium text-[var(--foreground)]">tgm</span> to quickly jump through cells and isolate visual and runtime issues.
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>- Fallout 4 Creation Kit</li>
                  <li>- Blender</li>
                  <li>- NifSkope</li>
                  <li>- B.A.E. (Bethesda Archive Extractor)</li>
                  <li>- Load doors + XMarkerHeading for cell continuity</li>
                  <li>- Room bounds and portals for render scope control</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Challenges Resolved</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="mb-1 block font-medium text-[var(--foreground)]">Merge Instability:</span>
                  Worked through duplicate FormID warnings and conflicts introduced when combining multiple team cells into the shared file.
                </li>
                <li>
                  <span className="mb-1 block font-medium text-[var(--foreground)]">Visual Corruption (Abyss Bug):</span>
                  Traced a major broken-color and stretch artifact to conflicts around room bounds and portals, then rebuilt setup until visuals stabilized.
                </li>
                <li>
                  <span className="mb-1 block font-medium text-[var(--foreground)]">Heavy Interior Performance:</span>
                  Reduced performance pressure from dense NPC, light, and model setups while preserving readability and atmosphere.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Optimization Strategy</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>- Avoided oversized enemy rooms and over-dense encounters where they hurt framerate most.</li>
                <li>- Used teleport and load-door routing to keep traversal broad without rendering everything continuously.</li>
                <li>- Used room bounds and portals so only relevant geometry was processed each frame.</li>
                <li>- Kept scene readability first: stable navigation and clear combat spaces over visual excess.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Milestone One (Project Lead)</h2>
            <p className="mb-6 text-sm text-[var(--muted)]">
              This was my first Fallout Creation Kit project and intentionally much smaller in scale than FII. It helped me learn puzzle
              spaces, traversal setup, encounter pacing, and editor-side debugging fundamentals before working inside the larger merged build.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {milestoneOneImages.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <LightboxImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover"
                    popupCaption={image.caption}
                    roundedClassName="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Revised Design: Hall of Idols</h2>
            <p className="mb-5 text-sm text-[var(--muted)]">
              In the revised final design document, I narrowed scope to one fully defined puzzle module to show exact implementation detail.
              Hall of Idols functioned as the tutorial gate: the player rotates idol statues, reveals a hidden stairway, and transitions to
              the Sun Chamber phase.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-[var(--muted)]">
              <li>- World function: a ritual checkpoint that filters progression through correct idol orientation.</li>
              <li>- Gameplay loop: entry -&gt; dead-end read -&gt; interact/rotate idols -&gt; unlock hidden stairs -&gt; descend.</li>
              <li>- Technical focus: scripted statue placeholders, spotlight guidance, and modular handoff to Area 2.</li>
              <li>- Integration strategy: authored as a standalone module to reduce team conflict during active development.</li>
            </ul>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {hallOfIdolsRevisedImages.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <LightboxImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover"
                    popupCaption={image.caption}
                    roundedClassName="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Milestone Evidence</h2>
            <p className="mb-6 text-sm text-[var(--muted)]">
              Excerpts from the FII final milestone submission documenting role ownership, technical decisions, and runtime-control strategy.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {falloutEvidenceImages.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <LightboxImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover"
                    popupCaption={image.caption}
                    roundedClassName="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Outcome</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              The final level shipped as a stable merged team build with connected spaces, clearer flow, and reduced visual and runtime failures.
              My contribution was less about claiming a full level solo and more about making the integrated project hold together technically under real constraints.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">References & Documents</h2>
            <div className="mb-6 flex flex-wrap gap-3">
              {falloutDocuments.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  {document.label}
                </a>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {falloutLearningReferences.map((reference) => (
                <li key={reference.href}>
                  <a
                    href={reference.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--foreground)]"
                  >
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
