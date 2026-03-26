import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Birdwatching | Georgi Tsvetanski',
  description:
    'In-progress student VR project about photographing birds in a post-nuclear woodland, built with Felix Chughtai and Talulla Allen around a tightly scoped first prototype.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'One of three student collaborators, helping shape the project direction, VR interaction scope, and the first playable milestone.',
  },
  {
    label: 'Team',
    value: 'Felix Chughtai, Talulla Allen, and Georgi Tsvetanski.',
  },
  {
    label: 'Current Stage',
    value: 'Planning complete enough to start building; first prototype work is about to begin.',
  },
  {
    label: 'Planned Slice',
    value: 'One woodland map, birds to discover, photo capture, feeding interactions, and a bingo-style field journal.',
  },
];

const loopItems = [
  {
    title: 'Explore And Spot',
    body: 'Walk the woodland as a field biologist and look for birds without turning the game into a combat or fail-state loop.',
  },
  {
    title: 'Photograph The Bird',
    body: 'Use the left-hand camera to take a clean snapshot that can become proof of discovery inside the collection book.',
  },
  {
    title: 'Feed And Lure',
    body: 'Use the right-hand feeding stick and later upgrades to attract birds, get them closer, and support the calm interaction fantasy.',
  },
  {
    title: 'Fill The Bingo Book',
    body: 'Turn sightings into visible collection progress so the player always has a reason to keep exploring and documenting wildlife.',
  },
];

const scopeItems = [
  'Keep the world small: one polished woodland environment is better than several half-built biomes.',
  'Focus on the three interactions that matter most right now: spotting birds, taking photos, and feeding them.',
  'Treat co-op as a stretch goal rather than something the first prototype depends on.',
  'Preserve the relaxed tone by avoiding fail states and by rewarding curiosity, collection, and gentle interaction.',
];

const evidencePages: DocPage[] = [
  {
    src: '/images/projects/birdwatching/birdwatching-slide-01-cover.png',
    alt: 'Birdwatching project cover slide with the student team and project title',
    width: 2880,
    height: 1620,
    caption: 'Project cover slide naming the game and the three-person student team behind the current plan.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-02-description.png',
    alt: 'Birdwatching description slide explaining the VR wildlife exploration concept',
    width: 2880,
    height: 1620,
    caption: 'Description slide: the player is a field biologist in a post-nuclear area, using a camera and feeding stick to study birds.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-03-story.png',
    alt: 'Birdwatching story slide describing the nuclear recovery field-biologist framing',
    width: 2880,
    height: 1620,
    caption: 'Story framing: a nuclear-recovery biologist documenting how bird populations changed after the disaster.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-04-art-style.png',
    alt: 'Birdwatching art-style slide showing the PS1-era low-poly references and mood board',
    width: 2880,
    height: 1620,
    caption: 'Art-style references: PS1-era low-poly presentation used as both a mood choice and a practical production constraint.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-06-mechanics.png',
    alt: 'Birdwatching mechanics slide listing the camera, feeding, currency, and bingo-book systems',
    width: 2880,
    height: 1620,
    caption: 'Mechanics slide covering the camera, feeding stick, bird rarity, simple economy, and bingo-book progress loop.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-08-scope.png',
    alt: 'Birdwatching scope slide describing the realistic first-delivery plan and May 7 target',
    width: 2880,
    height: 1620,
    caption: 'Scope check: one strong environment, clear interaction priorities, and a May 7 semester deadline keeping the team honest.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-09-research.png',
    alt: 'Birdwatching research slide focused on render texture and the in-world camera pipeline',
    width: 2880,
    height: 1620,
    caption: 'Key technical question: using a render-texture workflow so in-game photos can become actual journal entries and collection proof.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-slide-10-assets.png',
    alt: 'Birdwatching asset plan slide listing the environment, bird, and prop sources under consideration',
    width: 2880,
    height: 1620,
    caption: 'Planned asset support for the first milestone: environment packs, birds, props, and book/camera references to accelerate the build.',
  },
];

const evidenceOutline: DocOutlineItem[] = [
  { heading: 'Cover', pageIndex: 0 },
  { heading: 'Description', pageIndex: 1 },
  { heading: 'Story', pageIndex: 2 },
  { heading: 'Art Style', pageIndex: 3 },
  { heading: 'Mechanics', pageIndex: 4 },
  { heading: 'Scope', pageIndex: 5 },
  { heading: 'Research', pageIndex: 6 },
  { heading: 'Assets', pageIndex: 7 },
];


const planningDocPages: DocPage[] = [
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p01.png',
    alt: 'Opening page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Opening page of the written planning doc covering the project pitch, description, and story setup.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p02.png',
    alt: 'Mechanics page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Mechanics page outlining the camera, feeding stick, points, upgrades, and the no-fail-state direction.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p03.png',
    alt: 'Audience and systems page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Audience and systems page touching co-op as a stretch goal and the bingo-book collection loop.',
  },
  {
    src: '/images/projects/birdwatching/birdwatching-planning-doc-p04.png',
    alt: 'Asset planning page of the Birdwatching project planning document',
    width: 1041,
    height: 1347,
    caption: 'Early asset plan page listing the tools, props, and environment packs considered for the first build.',
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
              { label: 'Birdwatching' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Student Team Project · VR Wildlife Exploration · In Pre-Production
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Birdwatching</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            This is a new VR game project I am starting with Felix Chughtai and Talulla Allen. The pitch is simple: play as a field biologist in a post-nuclear
            woodland, photograph birds, lure them in with a feeding stick, and slowly fill a bingo-style field journal. Right now the value is in the planning:
            the scope is small enough to ship for class, the interaction loop is clear, and the biggest technical question is already visible.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  Spring 2026 Semester Build
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">A Calm VR Collection Game With A Very Specific First Prototype</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The plan is not to make a huge open-world ecology sim. It is to build one believable slice of play around observation, photography, and quiet
                  interaction. That makes this a good early portfolio case even before the prototype is finished, because the team already has a clear loop, a
                  visual direction, and a realistic sense of what should stay small.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- One map, one mood, and a controlled first milestone.</li>
                  <li>- Left-hand camera and right-hand feeding stick as the main VR verbs.</li>
                  <li>- Bingo-book collection loop as the thing that gives the prototype a reason to exist.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#evidence"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    View Planning Deck
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <LightboxImage
                  src="/images/projects/birdwatching/birdwatching-banner.png"
                  alt="Birdwatching planning deck cover slide"
                  width={2880}
                  height={1620}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="Birdwatching planning deck cover: the student team is framing the project as a VR wildlife-exploration game with a tightly scoped first milestone."
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.02fr_0.98fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What The Game Is</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Birdwatching casts the player as a field biologist returning to a post-nuclear landscape to document how bird populations are changing. The tone is
                not survival-horror. It is quiet exploration with a little melancholy in the setting and a lot of attention on noticing wildlife, getting closer,
                and recording what you found.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                That makes the premise useful for VR: the player has a reason to move slowly, look carefully, raise a camera naturally, and treat discovery as the
                reward instead of rushing to the next objective marker.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/birdwatching/birdwatching-slide-03-story.png"
                alt="Birdwatching story slide"
                width={2880}
                height={1620}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Story framing slide: the player is positioned as a field biologist documenting birdlife in a landscape changed by nuclear disaster."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Planned Player Loop</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {loopItems.map((item) => (
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
                alt="Birdwatching art-style slide"
                width={2880}
                height={1620}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Art-style slide: PS1-era low-poly references are being used for mood, readability, and realistic production scope."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Tone And Art Direction</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The current art direction leans on PS1-era low-poly references from games like Metal Gear, Resident Evil, Silent Hill, and Tomb Raider. That is not
                just nostalgia for its own sake. It keeps the target achievable, gives the world a slightly haunted mood, and supports a stronger visual identity
                than generic placeholder realism would.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                For a class project, that is the right trade. The world can look authored and memorable without pretending the team has the time to build a dense,
                high-fidelity ecosystem from scratch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.03fr_0.97fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Why The Scope Is Healthy</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {scopeItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                The May 7 target makes it easy for a student team to overreach. The strongest part of the current planning is that it already rejects that trap and
                treats the first version as a narrow, polished VR loop instead of a dream feature list.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/birdwatching/birdwatching-slide-08-scope.png"
                alt="Birdwatching scope slide"
                width={2880}
                height={1620}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Scope slide: one woodland environment, core bird interactions, and a clear semester deadline keeping the prototype realistic."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.98fr_1.02fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/birdwatching/birdwatching-slide-09-research.png"
                alt="Birdwatching technical research slide"
                width={2880}
                height={1620}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Research slide: the photo-capture pipeline is one of the key technical unknowns because the journal loop depends on real in-game snapshots."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Key Technical Question</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The most important system to prove early is the in-world camera. The deck already identifies the right question: can the prototype use a render-texture
                workflow to capture a 2D snapshot from the 3D scene and turn that into a real journal entry inside the bingo book?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                If that works, the whole collection loop starts to feel legitimate. If it does not, the game risks becoming a nice walk through the woods without a
                satisfying record of what the player discovered.
              </p>
            </div>
          </div>

          <div id="evidence">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Planning Evidence</h2>
            <p className="mb-5 max-w-3xl text-sm text-[var(--muted)]">
              This case is intentionally early, so the value has to come from the actual planning work. The evidence below is the current deck: concept, story,
              art direction, mechanics, scope, research, and the first pass on what the build needs.
            </p>
            <DocViewer
              title="Birdwatching Planning Deck"
              description="Current student-team planning deck covering the premise, art direction, mechanics, scope, and technical research for the first VR build."
              pages={evidencePages}
              outline={evidenceOutline}
            />
          </div>

          <div id="planning-doc" className="grid grid-cols-1 gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project Planning Doc</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Beyond the slide deck, the team also wrote a shorter planning document that states the game more directly: what it is, how the mechanics work,
                who it is for, and which asset paths could get the first build moving quickly.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                It is not as polished as the deck, but it is still useful portfolio evidence because it shows the concept being translated into an actual class
                planning deliverable instead of living only as mood and pitch language.
              </p>
            </div>

            <div>
              <DocViewer
                title="Birdwatching Project Planning Doc"
                description="4-page written planning document covering the project pitch, mechanics, audience, and early asset plan for the first build."
                pages={planningDocPages}
                outline={planningDocOutline}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Where It Stands Right Now</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              This page is not a postmortem and not a victory lap. It is a record of the project at the moment before the real build starts. The next meaningful
              milestone is a basic playable loop with birds in the scene, camera capture working, and the field journal proving that the concept survives contact
              with implementation.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
