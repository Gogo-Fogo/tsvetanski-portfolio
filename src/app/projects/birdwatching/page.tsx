import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import LightboxLocalVideo from '@/components/lightbox-local-video';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Birdwatching VR | Georgi Tsvetanski',
  description:
    'Unity 6 XR prototype about photographing birds in VR, with camera capture, species detection, star-rated bingo-book progress, backpack tools, feeding-stick interaction, and comfort settings.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Technical development, VR interaction systems, tool workflow, camera/bingo integration, comfort menu, and build support on a three-person student team.',
  },
  {
    label: 'Team',
    value: 'Felix Chughtai, Talulla Allen, and Georgi Tsvetanski.',
  },
  {
    label: 'Current Stage',
    value: 'Playable Unity/XR prototype with PCVR support and Quest standalone build pipeline work.',
  },
  {
    label: 'Core Loop',
    value: 'Explore the forest, lure birds, photograph species, earn a 1-4 star shot rating, and fill a physical bingo-style field guide.',
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
    body: 'A physical grabbable camera renders a live preview, supports trigger capture, zoom, shutter feedback, preview repair, and writes photos to persistent storage.',
  },
  {
    title: 'Bird Detection And Scoring',
    body: 'Capture rays and viewport bounds identify the photographed species, then score framing, fill, visibility, centeredness, occlusion, and distance into a 1-4 star rating.',
  },
  {
    title: 'Bingo Field Guide',
    body: 'The book opens in-hand, turns pages, loads saved PNGs back into world-space slots, shows bird names, scientific names, lock states, and best/latest star ratings.',
  },
  {
    title: 'Tool Handling',
    body: 'Camera, bingo book, and feeding stick are managed through a backpack inventory with shoulder retrieval, stow anchors, delayed returns, haptics, and outline feedback.',
  },
  {
    title: 'Feeding Stick',
    body: 'When the stick is held upright and steady, one bird can land on its perch, peck for a timed window, then fly away before a cooldown allows the next landing.',
  },
  {
    title: 'Comfort Runtime',
    body: 'An in-headset settings panel switches teleport/smooth movement, snap/smooth turn, vignette, credits, and FPS display without leaving VR.',
  },
];

const cameraPipeline = [
  'Grab the physical camera and render a live preview to its screen.',
  'Press trigger to capture the current camera view as a PNG.',
  'Sample rays and visible bounds to find the strongest bird candidate.',
  'Score shot quality from hit ratio, frame fill, visibility, centeredness, occlusion, and distance.',
  'Register the species in persistent bingo progress and update latest/best photo metadata.',
  'Load the saved photo into the field guide slot with name, scientific name, and stars.',
];

const bingoBookFootage = {
  src: '/videos/projects/birdwatching/birdwatching-bingo-book-footage-2026-04-15.mp4',
  poster: '/images/projects/birdwatching/birdwatching-bingo-book-footage-20260415-poster.png',
  title: 'April 15, 2026 bingo book prototype footage',
  caption:
    'Dev footage of the current bingo book prototype in Unity: open/closed book state, anchored pages, a turning-page pivot, grab colliders, and page animation work that supports the in-hand field guide.',
};

const implementedSlice = [
  'Seven bird species are represented: Robin, Blue Jay, Cardinal, Chickadee, Sparrow, Gold Finch, and Crow.',
  'The bingo book tracks nine slots, including female Cardinal and female Gold Finch variants where the source bird art supports a distinct appearance.',
  'Progress and captured photos are saved to disk, with migration support for older progress data.',
  'The forest scene uses baked lighting, low-poly nature assets, wind shaders, grabbable outlines, and a runtime credits page for asset attribution.',
  'Known rough edges are still documented honestly, including bird material/shader issues and remaining backpack/camera alignment tuning.',
];

const interactionPolish = [
  {
    title: 'Backpack Retrieval',
    body: 'The backpack shifted from “find the mesh and grab it” toward shoulder zones, haptics, hidden/stowed state, and direct right-shoulder camera summon.',
  },
  {
    title: 'Controller And Hands',
    body: 'Controller play remains the primary path, with a hand-tracking fallback layer for pinch/grasp assisted grabbing and teleport aiming.',
  },
  {
    title: 'Comfort First',
    body: 'The runtime menu applies locomotion and vignette settings across loaded scenes and temporarily locks movement while the menu is open.',
  },
];

const showcasePhotos = [
  {
    src: '/images/projects/birdwatching/birdwatching-igda-showcase-demo-01.jpeg',
    alt: 'Birdwatching VR demo at the IGDA Baltimore showcase at the University of Baltimore',
    caption: 'Live headset demo of Birdwatching VR during the IGDA® Baltimore showcase at the University of Baltimore.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-igda-showcase-demo-02.jpeg',
    alt: 'Birdwatching VR team demonstration area at the IGDA Baltimore showcase',
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
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            What started as a planning deck is now a working VR prototype: a quiet wildlife game where the player explores a low-poly forest, uses a physical
            camera to photograph birds, and fills a star-rated field guide. My strongest contribution is the technical layer that turns the pitch into a playable
            loop: camera capture, species detection, bingo progress, backpack tools, feeding interactions, comfort settings, and headset build support.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  Current Unity Prototype
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">A calm VR bird-photography game with a real camera-to-journal loop.</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The portfolio value is no longer just the concept. The prototype now has the runtime systems layer: a camera that sees the world, a system that
                  decides which bird was photographed, a score for how good the shot was, and a physical field guide that reflects saved progress.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Physical camera, bingo book, feeding stick, and backpack tools.</li>
                  <li>- Persistent photo and species progress with latest/best shot metadata.</li>
                  <li>- Comfort controls, hand-tracking fallback work, and Quest/PCVR build setup.</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/birdwatching/birdwatching-current-build-note-01.svg"
                  alt="Birdwatching VR current build note"
                  width={1400}
                  height={1000}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Current build note summarizing the playable Unity/XR prototype. The original pitch deck is kept separately in the reviewer notes."
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshotItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Stack</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {stackItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Implemented Slice</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {implementedSlice.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Built Systems</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {systemCards.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
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
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  This clip is from the live Unity project, not the old planning deck. It shows the field-guide object setup behind the bingo-book loop.
                </p>
              </div>
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Public Demo</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Shown at the IGDA® Baltimore showcase at the University of Baltimore.</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Felix, Talulla, and I demonstrated Birdwatching VR at an International Game Developers Association (IGDA®) showcase hosted at the University of
                  Baltimore. The project was shown alongside other student work, giving us a real playtest setting for onboarding, controls, headset comfort,
                  and the moment-to-moment feedback loop.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  A professor&apos;s post specifically called out the Interaction Design lens: flow, onboarding, controls, and feedback. That matters for this case
                  study because the hard part is not only making a camera, book, and feeding stick exist in Unity. It is making them understandable to someone
                  trying the prototype in a noisy showcase room.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {showcasePhotos.map((photo) => (
                  <div key={photo.src} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <LightboxImage
                      src={photo.src}
                      alt={photo.alt}
                      width={1024}
                      height={768}
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
              These notes are compiled from the current Unity source, Exhibit Q&A, asset credits, and Georgi development logs. They separate what is implemented
              from the original planning material.
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

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What This Shows</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              The project is a good portfolio case because it shows the unglamorous work that makes VR prototypes survive play: adapting third-party systems,
              keeping tool interactions stable, making comfort settings accessible inside the headset, preserving user progress, and connecting a simple game
              fantasy to real runtime state. It is still a student prototype, but it is no longer just a pitch.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
