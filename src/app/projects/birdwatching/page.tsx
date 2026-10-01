import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Birdwatching VR',
  description:
    'Unity 6 XR prototype about photographing birds in VR, with camera capture, species detection, star-rated bingo-book progress, backpack tools, feeding-stick interaction, and comfort settings.',
};

const snapshotItems = [
  {
    label: 'My Role',
    value: 'Built camera capture, bird detection and scoring, field-guide progress, backpack tools, comfort settings, and builds',
  },
  {
    label: 'Technical Challenge',
    value: 'Turn an in-world VR camera into a reliable capture, recognition, scoring, and collection system',
  },
  {
    label: 'Team',
    value: 'Three-person student team with Felix Chughtai and Talulla Allen',
  },
  {
    label: 'Build Status',
    value: 'Playable Unity/XR prototype with PCVR support and Quest standalone build work.',
  },
];

const stackItems = [
  'Unity 6000.3.10f1, C#, Universal Render Pipeline 17.3.0.',
  'XR Interaction Toolkit 3.3.1, OpenXR 1.16.1, XR Hands 1.7.3, Oculus XR 4.5.2.',
  'Dynamic Photo Camera Mini adapted into a VR-held camera with live preview and PNG capture.',
  'Built around PCVR/OpenXR with Android/Quest build output through IL2CPP and OpenGL ES 3.2.',
];

const systemCards = [
  {
    title: 'VR Camera Capture',
    body: 'Held camera with live preview, trigger capture, zoom, shutter feedback, saved PNGs, and preview repair.',
  },
  {
    title: 'Bird Detection And Scoring',
    body: 'Camera rays identify the bird, then score framing, visibility, distance, and center/fill into a 1-4 star photo rating.',
  },
  {
    title: 'Bingo Field Guide',
    body: 'In-hand field guide with page turning, saved photos, species names, lock states, and best/latest stars.',
  },
  {
    title: 'Tool Handling',
    body: 'Backpack inventory for camera, book, and feeding stick with shoulder retrieval, stow anchors, haptics, and outlines.',
  },
  {
    title: 'Feeding Stick',
    body: 'Held perch that can attract one bird, hold it briefly, then release it before a cooldown.',
  },
  {
    title: 'Comfort Runtime',
    body: 'In-headset menu for movement, turning, vignette, credits, and FPS display.',
  },
];

const cameraPipeline = [
  'Hold the camera and render a live preview.',
  'Trigger saves the view as a PNG.',
  'Rays find the strongest visible bird candidate.',
  'Shot quality becomes a 1-4 star score.',
  'Species progress is saved to disk.',
  'The field guide updates with photo, name, and stars.',
];

const bingoBookFootage = {
  src: '/videos/projects/birdwatching/birdwatching-bingo-book-footage-2026-04-15.mp4',
  poster: '/images/projects/birdwatching/birdwatching-bingo-book-footage-20260415-poster.png',
  title: 'April 15, 2026 bingo book prototype footage',
  caption:
    'Dev footage of the current bingo book prototype in Unity: open/closed book state, anchored pages, a turning-page pivot, grab colliders, and page animation work that supports the in-hand field guide.',
};

const implementedSlice = [
  'Seven species represented: Robin, Blue Jay, Cardinal, Chickadee, Sparrow, Gold Finch, and Crow.',
  'Nine bingo-book slots, including variant slots where the source art supports them.',
  'Saved photo/progress data with migration support for older saves.',
  'Low-poly forest scene with baked lighting, wind shaders, outlines, and runtime credits.',
  'Still rough in places: bird materials/shaders and some backpack/camera alignment tuning.',
];

const interactionPolish = [
  {
    title: 'Backpack Retrieval',
    body: 'Shoulder zones, stow state, haptics, delayed returns, and a right-shoulder camera summon.',
  },
  {
    title: 'Controller And Hands',
    body: 'Controller play is primary, with a hand-tracking fallback for pinch/grab and teleport aiming.',
  },
  {
    title: 'Comfort First',
    body: 'Runtime locomotion and vignette settings apply in headset without leaving the build.',
  },
  {
    title: 'Behavior Guardrails',
    body: 'Very early QA proved that if the birds felt grabbable, people tried to grab them. We tightened flags and boundaries.',
  },
];

const devLogItems = [
  {
    log: 'Dev Log 04',
    title: 'Camera And Field Guide',
    body: 'Camera capture, species ID, photo scoring, saved PNGs, and bingo-book progress.',
    href: '/documents/projects/birdwatching/dev-logs/georgi-devlog-04-photo-camera-and-bingo-book.pdf',
  },
  {
    log: 'Dev Log 05',
    title: 'Controllers, Hands, Comfort',
    body: 'Controller input, hand fallback, locomotion choices, vignette, and VR settings.',
    href: '/documents/projects/birdwatching/dev-logs/georgi-devlog-05-controller-hands-and-comfort.pdf',
  },
  {
    log: 'Dev Log 06',
    title: 'Backpack Prototype',
    body: 'Backpack slots, stow/retrieve behavior, delayed returns, and tuning notes.',
    href: '/documents/projects/birdwatching/dev-logs/georgi-devlog-06-backpack-inventory-prototype.pdf',
  },
  {
    log: 'Dev Log 08',
    title: 'Summon And Polish Pass',
    body: 'Camera summon, outlines, backpack cleanup, and late polish.',
    href: '/documents/projects/birdwatching/dev-logs/georgi-devlog-08-camera-summon-outlines-and-backpack-polish.pdf',
  },
];

const showcasePhotos = [
  {
    src: '/images/projects/birdwatching/birdwatching-igda-showcase-demo-01.jpeg',
    alt: 'Birdwatching VR demo at the IGDA Baltimore showcase at the University of Baltimore',
    width: 1024,
    height: 768,
    caption: 'Live headset demo of Birdwatching VR during the IGDA® Baltimore showcase at the University of Baltimore.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-igda-showcase-demo-02.jpeg',
    alt: 'Birdwatching VR team demonstration area at the IGDA Baltimore showcase',
    width: 1024,
    height: 768,
    caption: 'Team demo area with attendees watching and trying student projects during the showcase.',
  },
];

const buildNotePages: DocPage[] = [
  {
    src: '/images/projects/birdwatching/birdwatching-current-build-note-01.svg',
    alt: 'Birdwatching VR current build note summarizing the playable prototype',
    width: 1400,
    height: 1000,
    caption: 'Current build snapshot based on the Unity project, Exhibit Q&A, and Georgi development logs.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-current-build-note-02.svg',
    alt: 'Birdwatching VR camera and bingo system note',
    width: 1400,
    height: 1000,
    caption: 'System note for the camera capture, bird detection, scoring, persistence, and bingo-book display loop.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-current-build-note-03.svg',
    alt: 'Birdwatching VR interaction and platform note',
    width: 1400,
    height: 1000,
    caption: 'Interaction/platform note covering backpack tools, feeding stick, comfort menu, hand fallback, and Quest/PCVR support.',
  },
];

const buildNoteOutline: DocOutlineItem[] = [
  { heading: 'Build Snapshot', pageIndex: 0 },
  { heading: 'Camera And Bingo', pageIndex: 1 },
  { heading: 'Interaction Layer', pageIndex: 2 },
];

const evidencePages: DocPage[] = [
  {
    src: '/images/projects/birdwatching/birdwatching-slide-01-cover.png',
    alt: 'Birdwatching project cover slide with the student team and project title',
    width: 2880,
    height: 1620,
    caption: 'Original project cover slide naming the game and the three-person student team.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-02-description.png',
    alt: 'Birdwatching description slide explaining the VR wildlife exploration concept',
    width: 2880,
    height: 1620,
    caption: 'Early description slide: the player is a field biologist using a camera and feeding stick to study birds.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-04-art-style.png',
    alt: 'Birdwatching art-style slide showing PS1-era low-poly references and mood board',
    width: 2880,
    height: 1620,
    caption: 'Art-style references used to keep the forest readable, moody, and achievable for a small student team.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-06-mechanics.png',
    alt: 'Birdwatching mechanics slide listing camera, feeding, currency, and bingo-book systems',
    width: 2880,
    height: 1620,
    caption: 'Original mechanics slide. Several of these ideas are now represented in the Unity prototype.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-09-research.png',
    alt: 'Birdwatching research slide focused on render texture and in-world camera pipeline',
    width: 2880,
    height: 1620,
    caption: 'The render-texture/photo-capture question became the main technical spine of the prototype.',
  },
];

const evidenceOutline: DocOutlineItem[] = [
  { heading: 'Cover', pageIndex: 0 },
  { heading: 'Pitch', pageIndex: 1 },
  { heading: 'Art Direction', pageIndex: 2 },
  { heading: 'Mechanics', pageIndex: 3 },
  { heading: 'Research', pageIndex: 4 },
];

const planningDocPages: DocPage[] = [
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p01.png',
    alt: 'Opening page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Original planning page covering the project pitch, description, and story setup.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p02.png',
    alt: 'Mechanics page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Original mechanics page outlining the camera, feeding stick, points, upgrades, and calm/no-fail-state direction.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p03.png',
    alt: 'Audience and systems page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Planning page that framed the audience and bingo-book collection loop.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p04.png',
    alt: 'Asset planning page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Early asset plan page listing tools, props, and environment packs considered for the first build.',
  },
];

const planningDocOutline: DocOutlineItem[] = [
  { heading: 'Description & Story', pageIndex: 0 },
  { heading: 'Mechanics', pageIndex: 1 },
  { heading: 'Audience & Systems', pageIndex: 2 },
  { heading: 'Asset Plan', pageIndex: 3 },
];

export default function BirdwatchingCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Birdwatching VR' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Student Team Project · Unity 6 XR Prototype · PCVR / Quest Build Work
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Birdwatching VR</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
            A Unity XR prototype about exploring a low-poly forest, photographing birds, and filling a star-rated field guide. I owned the main systems work:
            camera capture, bird detection, photo scoring, bingo-book progress, backpack tools, comfort settings, and builds.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  Current Unity Prototype
                </span>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">A VR camera-to-field-guide loop.</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The player takes a photo, the game identifies the bird, scores the shot, saves progress, and updates the physical book in VR.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Physical camera, bingo book, feeding stick, and backpack tools.</li>
                  <li>- Persistent photo and species progress with latest/best shot metadata.</li>
                  <li>- Comfort controls, hand-tracking fallback work, and Quest/PCVR build setup.</li>
                </ul>
              </div>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                  <LightboxImage
                    src="/images/projects/birdwatching/birdwatching-bird-closeup-qa-20260505.png"
                    alt="Close-up bird model from the Birdwatching VR Unity prototype"
                    width={1009}
                    height={706}
                    className="h-auto w-full object-cover"
                    roundedClassName="rounded-none"
                    popupCaption="Close-up bird model from the playable Unity/XR prototype. The build note lives further down with the reviewer documents."
                  />
                </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project In Short</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Player loop</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Photograph birds, score each shot, and complete a physical field guide in VR.</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">My contribution</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Owned camera capture, detection, scoring, persistence, tools, comfort settings, and builds.</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Validation</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Tested the playable slice with public users at an IGDA Baltimore showcase.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.02fr_0.98fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Camera To Field Guide</h2>
              <ol className="space-y-3 text-sm text-[var(--muted)]">
                {cameraPipeline.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 font-mono text-[10px] text-[var(--accent-cyan)]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxLocalVideo
                src={bingoBookFootage.src}
                poster={bingoBookFootage.poster}
                title={bingoBookFootage.title}
                popupCaption={bingoBookFootage.caption}
                popupCtaHref={bingoBookFootage.src}
                popupCtaLabel="Open MP4 directly"
                triggerLabel="Play Bingo Book Footage"
                className="aspect-video h-auto w-full object-contain"
                roundedClassName="rounded-none"
              />
              <div className="border-t border-[var(--border)] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Current Prototype Footage</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Live Unity footage of the in-hand field-guide setup.</p>
              </div>
            </div>
          </div>

          <details className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <summary className="cursor-pointer list-none p-6 marker:content-none md:p-8">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Closer look</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">Systems, interaction polish, testing, and documents</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                    Open the technical stack, complete system breakdown, development logs, showcase notes, and planning material.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--accent-cyan)] bg-[var(--accent-cyan)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--background)] shadow-[0_0_18px_rgba(34,211,238,0.22)] transition-colors group-hover:bg-[var(--foreground)]">
                  <span className="group-open:hidden">Open +</span>
                  <span className="hidden group-open:inline">Close -</span>
                </span>
              </div>
            </summary>

            <div className="space-y-12 border-t border-[var(--border)] p-6 md:p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                  <h2 className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Stack</h2>
                  <ul className="space-y-3 text-sm text-[var(--muted)]">
                    {stackItems.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                  <h2 className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Implemented Slice</h2>
                  <ul className="space-y-3 text-sm text-[var(--muted)]">
                    {implementedSlice.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Built Systems</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {systemCards.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
              </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.96fr_1.04fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/birdwatching/birdwatching-slide-04-art-style.png"
                alt="Birdwatching low-poly art direction slide"
                width={2880}
                height={1620}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Original art-style slide. The build still leans on low-poly woodland assets because the game needs readable VR silhouettes and a realistic student scope."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Interaction Polish</h2>
              <div className="space-y-5">
                {interactionPolish.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Development Logs</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">Dev diaries from the build.</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Short PDFs showing how the camera, field guide, backpack, and comfort work came together across the semester.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {devLogItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)]/60"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">{item.log}</p>
                    <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
                      Open PDF
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Public Demo</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">Shown at the IGDA® Baltimore showcase.</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  We demonstrated Birdwatching VR at the University of Baltimore alongside other student projects. It was a useful test for onboarding, controls,
                  comfort, and whether people understood what to do without us hovering over them.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Earlier tests were less graceful: a few people tried to grab birds or bonk them with the book. Funny, but useful. We tightened grabbable flags so
                  the game reads as observation, not bird harassment.
                </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {showcasePhotos.map((photo) => (
                    <div key={photo.src} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <LightboxImage
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        className="aspect-[4/3] h-auto w-full object-cover"
                        roundedClassName="rounded-none"
                        popupCaption={photo.caption}
                      />
                    <p className="border-t border-[var(--border)] p-4 text-xs leading-relaxed text-[var(--muted)]">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

              <div>
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Reviewer Notes</h2>
            <p className="mb-5 max-w-3xl text-sm text-[var(--muted)]">
              Three quick references: current build notes, original pitch deck, and the written planning doc.
            </p>
            <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">
              <DocViewer
                title="Current Build Notes"
                description="Playable slice, camera/bingo loop, interaction layer, platform work, and remaining rough edges."
                pages={buildNotePages}
                outline={buildNoteOutline}
              />
              <DocViewer
                title="Original Planning Deck"
                description="The early concept, art direction, mechanics, and render-texture research that led into the Unity build."
                pages={evidencePages}
                outline={evidenceOutline}
              />
              <DocViewer
                title="Planning Document"
                description="Original written project plan covering premise, mechanics, audience, and asset planning."
                pages={planningDocPages}
                outline={planningDocOutline}
              />
            </div>
              </div>
            </div>
          </details>

        </section>
      </div>
    </main>
  );
}
