import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lizard Wizard',
  description:
    'A five-person Unity capstone: a momentum-based desert puzzle-platformer. I set up the shared production structure and built the predator sensing AI.',
};

const snapshotItems = [
  { label: 'My role', value: 'Production setup lead and predator AI programmer on a five-person team' },
  { label: 'Status', value: 'In development as our senior capstone (fall 2026)' },
  { label: 'Engine', value: 'Unity 6 (URP), new Input System, GitHub feature-branch workflow' },
  { label: 'Genre', value: 'Momentum-based 3D puzzle-platformer and rescue game' },
] as const;

const contributions = [
  {
    title: 'Five-person project structure',
    body: 'I laid out the shared Unity hierarchy for art, audio, data, scripts, scenes and docs, and gave each teammate a personal sandbox scene. Features get built and tested there before anything touches a production scene, which keeps merge conflicts down.',
  },
  {
    title: 'Team rules and reference',
    body: 'I wrote a folder cheat sheet and working rules: coordinate before editing production scenes, branch per feature, keep files where they belong. I also set up the Trello board and a shared PureRef reference board.',
  },
  {
    title: 'Repository recovery',
    body: 'When a terrain asset was corrupted by line-ending conversion, I restored the working version and updated the Git attributes so Unity binary assets are never treated as text again.',
  },
];

const sensingSteps = [
  { title: 'Vision', body: 'Checks distance and view angle first. Only if both pass does it spend a raycast on line of sight. It runs a few times per second, not every frame.' },
  { title: 'Hearing', body: 'A radius around the spider receives noise events from the player. If the noise lands inside the radius, the spider has heard the player.' },
  { title: 'One shared reaction', body: 'Both senses call the same ChooseReaction method. The spider rolls once: 75% pounce, 25% retreat. It never re-rolls every frame, so it can’t flicker between states.' },
  { title: 'Readable in the editor', body: 'Gizmos draw the vision cone and hearing sphere, and every state change is logged, so designers can tune ranges without reading the code.' },
];

export default function LizardWizardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Lizard Wizard' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Capstone · Unity 6 · Team of Five
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Lizard Wizard</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            A whimsical 3D puzzle-platformer: build speed across the dunes, carry it through jumps and obstacles, and deliver water to
            thirsty critters before you run out. I set up the production structure the five of us work in, and I’m building the
            predators’ sensing AI.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
            <LightboxImage
              src="/images/projects/lizard-wizard/spider-sensing-sandbox.jpg"
              alt="Unity editor showing the spider prototype's vision and hearing gizmos in a desert sandbox scene, with the console reporting Player detected by Vision"
              width={2000}
              height={697}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-none"
              popupCaption="My sandbox scene: the spider's vision cone and hearing radius as gizmos, and the console confirming a vision detection."
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">The Game</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              You play a lizard wizard whose hat is also a water reservoir. Water drains over time, spills when you fall or get hit, and
              is the only thing keeping thirsty desert critters alive. Movement is the core: sliding down dunes and carrying momentum,
              with references like HASTE, Alto’s Odyssey, Titanfall 2 and Sonic Frontiers. Predators and weather add pressure to the
              route you choose.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              The team is Ibrahim Shaheed, Vivian, Xavier McIntosh, Diego Santiago-Rodriguez and me. Terrain generation, player physics
              and the water UI belong to teammates. The sections below cover only my part.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Production Foundation</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {contributions.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Predator Sensing AI</h2>
              <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
                The first predator is a desert spider. I kept its state machine to three states (Idle, Pounce and Retreat) and put
                the effort into how it notices you, plus a little randomness so it doesn’t feel scripted.
              </p>
              <div className="grid gap-4">
                {sensingSteps.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/lizard-wizard/spider-ai-state-machine.jpg"
                alt="Spider AI state machine diagram: Idle, check for player by vision or hearing, random choice, then Pounce 75% or Retreat 25%, then return to Idle"
                width={1122}
                height={1402}
                className="h-auto w-full object-contain"
                roundedClassName="rounded-xl"
                popupCaption="The spider state machine from my technical design doc, written before the code."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Production Blog</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              The team posts weekly progress on a public production blog. My first post covers the movement research and the project
              structure described above.
            </p>
            <a
              href="https://primenuggets.github.io/Production-Blog/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)]"
            >
              Read the Production Blog
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
