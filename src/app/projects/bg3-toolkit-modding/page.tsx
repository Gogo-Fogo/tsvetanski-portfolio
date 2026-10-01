import Breadcrumbs from '@/components/breadcrumbs';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baldur’s Gate 3 Modding | Georgi Tsvetanski',
  description:
    'Learning Larian’s BG3 Toolkit: Osiris story scripting, dialogue with flags and skill checks, and an offline reference I built from the official modding docs.',
};

const snapshotItems = [
  { label: 'My role', value: 'Solo modder, learning the Toolkit from scratch' },
  { label: 'Status', value: 'Ongoing since September 2026' },
  { label: 'Tools', value: 'BG3 Toolkit, Osiris, Dialog and Timeline editors, Stats editor, Python' },
  { label: 'Focus', value: 'Gameplay scripting: dialogue, flags, skill checks and story goals' },
] as const;

const skills = [
  {
    title: 'Dialogue with consequences',
    body: 'Multi-branch conversations where choices set flags, so the world remembers what happened, and branches gated by Persuasion or Intimidation checks.',
  },
  {
    title: 'Osiris story goals',
    body: 'Event-driven scripts that react to triggers, item use and dialogue flags, request rolls, and change the world: unlocking, opening, granting items and XP once.',
  },
  {
    title: 'Characters and stats',
    body: 'Placing characters and giving them their own stats entries (level, ability scores, armor) instead of relying on base-game defaults.',
  },
  {
    title: 'Cinematics',
    body: 'Starting on dialogue timelines: camera shots and a speaker-framed greeting. This is the area I’m least practiced in so far.',
  },
];

const reference = [
  {
    title: 'Osiris function index',
    body: 'A script that pulls the official modding wiki through its own API and generates an offline index of 1,149 Osiris entries (269 events, 387 queries, 493 calls), each with its signature and a link back to the source page.',
  },
  {
    title: 'Curated essentials',
    body: 'A shorter guide to the functions behind flags, dialogue, doors, rolls and rewards, with the wiki’s examples kept alongside each signature.',
  },
  {
    title: 'Toolkit cheat sheet',
    body: 'Shortcuts, debug-console commands and testing tricks merged from the community sheet and Larian’s official guide. One example: forcing every roll to succeed or fail to test both branches of a check quickly.',
  },
  {
    title: 'Tutorial notes',
    body: 'I transcribed Toolkit tutorials locally with Whisper and turned them into step-by-step notes for scripting, dialogue timelines and the stats editor.',
  },
];

const lessons = [
  {
    title: 'Two different IDs for one dialogue',
    body: 'Starting a dialogue from Osiris needs the dialogue’s resource ID, not the ID stored inside the dialogue file. The wrong one fails with a “doesn’t exist” error that points you the wrong way.',
  },
  {
    title: 'Reloads can keep stale data',
    body: 'After changing a dialogue’s timeline setting, reloading the level kept the old version active. A full Toolkit restart was needed before the change showed up.',
  },
  {
    title: 'Write down what you actually saw',
    body: 'I keep a work log that separates what I watched work in game mode from what is still untested, such as both outcomes of a roll, save and load, and repeat interactions.',
  },
];

function CardGrid({ items, columns }: { items: readonly { title: string; body: string }[]; columns: string }) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${columns}`}>
      {items.map((item) => (
        <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
          <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function Bg3ToolkitModdingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Baldur’s Gate 3 Modding' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Modding · BG3 Toolkit · Osiris Scripting
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Baldur’s Gate 3 Modding</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            I’m learning Larian’s official BG3 Toolkit, focused on gameplay scripting. I had never used it before September 2026, so
            alongside building encounters I built myself an offline reference to learn faster.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Can Build</h2>
            <CardGrid items={skills} columns="md:grid-cols-2" />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">An Offline Reference I Built</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              BG3 modding knowledge is spread across a wiki, community spreadsheets, a search engine and videos. I pulled the parts I
              needed into one searchable set of notes, with every entry linked back to its source.
            </p>
            <CardGrid items={reference} columns="md:grid-cols-2" />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Learned in the Toolkit</h2>
            <CardGrid items={lessons} columns="md:grid-cols-3" />
            <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
              Baldur’s Gate 3 and the BG3 Toolkit belong to Larian Studios. This is personal modding work, not affiliated with Larian.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
