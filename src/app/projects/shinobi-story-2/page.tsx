import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shinobi Story 2',
  description:
    'Unreal Engine 5 follow-up to Shinobi Story. I designed and built the character creator UI and wrote the C++ traversal layer: target leaps, tree dashes and wall runs.',
};

const snapshotItems = [
  { label: 'My role', value: 'Co-owner. Sole UI designer and implementer; traversal programmer alongside the team' },
  { label: 'Status', value: 'Early prototype, in development' },
  { label: 'Engine', value: 'Unreal Engine 5, C++ and Blueprints, Mutable character customization' },
  { label: 'Ownership', value: 'Character creator UI: all mine. Traversal: my C++ layer on top of third-party movement plugins' },
] as const;

const uiDecisions = [
  {
    title: 'Hand-drawn, not 3D cards',
    body: 'An earlier version used 3D card meshes. I moved to layered 2D parchment art, brush lettering and ink icons because matching the art target mattered more than keeping the 3D route.',
  },
  {
    title: 'Clean cutouts from a SAM pipeline',
    body: 'The frame, rope, cards and confirm stamp were cut out with a Segment Anything workflow in my local ComfyUI. I wrote an export step that strips the old white matte from soft edges and keeps thin rope gaps open.',
  },
  {
    title: 'Native UI materials',
    body: 'Shadows, a gold selection rim, warm color grading, worn paper edges and the ground seal are UI materials with small HLSL expressions, not baked images, so they move with the cards.',
  },
  {
    title: 'Motion that reads',
    body: 'Each talisman sways ±0.6° on its own phase. At first the motion stepped visibly; turning off pixel snapping on the moving panels fixed it. A 565-frame profiling capture showed the widget ticked in 0.07 ms on average, so the UI wasn’t the bottleneck.',
  },
];

const traversalLayers = [
  {
    owner: 'Third-party base',
    title: 'Gravity and surface movement',
    body: 'Dynamic-gravity character movement from a tutorial-derived plugin, OmniWalk for surface walking, and a marketplace targeting system. I kept these as reference and didn’t edit the originals.',
  },
  {
    owner: 'My C++',
    title: 'Traversal query',
    body: 'USS2TraversalQueryComponent picks the best target from camera aim, WASD intent, distance and actor tags. Target scoring lives here instead of in the character class, so new surface types plug into one contract.',
  },
  {
    owner: 'My C++',
    title: 'Target leap, tree dash, wall run',
    body: 'Separate components for leaping to a validated landing point, chaining tree-to-tree dashes, and running along walls. Capsule movement stays code-driven; animation sells the pose but never owns the position.',
  },
  {
    owner: 'My C++ + Blueprint',
    title: 'Feedback and the Blueprint boundary',
    body: 'Cue and feedback components expose events like TargetLeapStarted and WallRunEnded so designers can attach VFX, camera shake and audio in Blueprint without touching the movement math.',
  },
];

export default function ShinobiStory2Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: 'Shinobi Story 2' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Unreal Engine 5 · UI Design · Traversal Systems
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Shinobi Story 2</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            The Unreal Engine 5 follow-up to{' '}
            <Link href="/projects/shinobi-story" className="font-medium text-[var(--foreground)] underline underline-offset-4">
              Shinobi Story
            </Link>
            . This page covers my two areas: the character creator UI, which I designed and built end to end, and the C++ traversal
            layer I wrote on top of third-party movement plugins.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
            <LightboxImage
              src="/images/projects/shinobi-story-2/character-creator-in-engine.jpg"
              alt="Shinobi Story 2 character creator running in Unreal: hanging parchment talismans for skin tone, age and body type, a Skin Tone slider banner, and a Confirm Ninja stamp beside the character"
              width={863}
              height={487}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-none"
              popupCaption="The character creator running in Unreal (play-in-editor capture, V17)."
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Character Creator UI</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              I explored eight art directions in two rounds, including a clan-archive scroll, a field dossier, orbiting clan seals and
              a hanging scroll. The talisman fan won: customization categories hang as paper tags from a rope, the selected tag swings
              forward, and a banner below holds its slider or options. I then rebuilt it in Unreal, comparing each version against the
              target and saving the evidence.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/shinobi-story-2/character-creator-target.jpg"
                  alt="Talisman fan concept used as the art target for the character creator"
                  width={1561}
                  height={1008}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="The approved art target: concept round 2, option 4."
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--muted)]">Art target (concept)</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
                <LightboxImage
                  src="/images/projects/shinobi-story-2/character-creator-face.jpg"
                  alt="In-engine character creator on the Face page with talismans for eye, nose and chin shape"
                  width={863}
                  height={487}
                  className="h-auto w-full object-cover"
                  roundedClassName="rounded-none"
                  popupCaption="In engine: the Face page, with previous/next arrows on the shape talismans."
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--muted)]">In engine, Face page</figcaption>
              </figure>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {uiDecisions.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/shinobi-story-2/landing-menu.jpg"
                alt="Shinobi Story 2 landing menu with two parchment buttons, Create Your Ninja and Exit"
                width={863}
                height={487}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="The landing menu (V19): two parchment buttons that share the creator's paper grain and seal."
              />
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">How I Verified Each Pass</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The creator went through 19 numbered versions. For each one I compiled with warnings treated as errors, captured every
                creator page in play mode, checked the log for Blueprint errors, and confirmed the sway graph was unchanged unless the
                pass meant to change it. Notes also say plainly what wasn’t tested yet, such as controller input and other aspect
                ratios.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Traversal System</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              The goal is fast, surface-to-surface shinobi movement: leap to a branch, dash between trees, run along a wall, chain them
              together. The traversal is a shared effort, so here’s exactly which layer is mine.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {traversalLayers.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.owner}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 font-mono text-xs leading-relaxed text-[var(--muted)]">
              camera aim + WASD intent<br />
              -&gt; traversal query (score tagged targets)<br />
              -&gt; leap / dash / wall-run component (validate landing, move capsule)<br />
              -&gt; feedback events -&gt; Blueprint VFX, camera, audio
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              Early on, most of this lived in one movement bridge component. During a second audit I split it apart: input binding,
              traversal focus, traversal execution, sprint presentation and cosmetic cues each moved into their own owner. The aim
              was movement features that teammates can extend without breaking each other.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Combat Prototypes</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Alongside traversal I prototyped combat ideas in a separate test project, including a shadow-clone ability that
                spawns AI-driven copies of the player. These stay outside the main project until they prove themselves.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/shinobi-story-2/shadow-clone-prototype.jpg"
                alt="Unreal prototype with the player character and two shadow clones on a test platform"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="Shadow-clone prototype in an Unreal test level."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
