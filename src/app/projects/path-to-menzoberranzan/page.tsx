import Breadcrumbs from '@/components/breadcrumbs';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Path to Menzoberranzan | Georgi Tsvetanski',
  description:
    'Volunteer gameplay work for Path to Menzoberranzan, a free fan-made Baldur’s Gate 3 campaign: an encounter built in the BG3 Toolkit with dialogue, flags, skill checks and Osiris scripting.',
};

const snapshotItems = [
  { label: 'My role', value: 'Volunteer gameplay implementer (applicant in the technical assessment stage)' },
  { label: 'Status', value: 'Gameplay skill check in progress, September 2026' },
  { label: 'Tools', value: 'Baldur’s Gate 3 Toolkit, Osiris story scripting, Dialog Editor, Git' },
  { label: 'Project', value: 'A free, volunteer-made BG3 campaign with a new protagonist and story' },
] as const;

const pieces = [
  {
    title: 'An NPC with real stats',
    body: 'A guard with a custom stats entry (level, ability scores, armor), so the encounter rolls against a real character rather than defaults.',
  },
  {
    title: 'Branching dialogue and a memory flag',
    body: 'A conversation with Persuasion and Intimidation branches. The greeting sets a first-encounter flag so the game remembers you have already met.',
  },
  {
    title: 'Two ways through the door',
    body: 'Winning the dialogue check opens the main door. A visible Perception roll can reveal a hidden button that opens a side door.',
  },
  {
    title: 'A small reward loop',
    body: 'I added a bartender who serves a beer and grants exploration XP once. The script guards against repeat rewards.',
  },
];

const lessons = [
  {
    title: 'Two different IDs for one dialogue',
    body: 'Starting a dialogue from script needs its resource ID, not the ID stored inside the dialogue file. Using the wrong one fails with a “doesn’t exist” error that points in the wrong direction.',
  },
  {
    title: 'Reloads can keep stale data',
    body: 'After changing a dialogue’s timeline setting, reloading the level kept the old version active. A full Toolkit restart was needed before the change showed up.',
  },
  {
    title: 'A roll the player can see',
    body: 'A guaranteed hidden check worked, but no roll appeared, so discovery felt like nothing happened. I switched to a real Perception roll at a very low difficulty: nearly always succeeds, but the player sees it.',
  },
];

export default function PathToMenzoberranzanPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Path to Menzoberranzan' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Modding · Baldur’s Gate 3 Toolkit · Gameplay Scripting
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Path to Menzoberranzan</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            Path to Menzoberranzan is a free, fan-made campaign for Baldur’s Gate 3, built by volunteers. I applied as a gameplay
            implementer and was accepted into the technical assessment. This page covers that assessment work: a complete encounter
            built in a toolkit I hadn’t used before.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">The Encounter</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              The brief: get into a tavern guarded by an NPC. Convince the guard one way or another, or find a more discreet way in.
              I built each piece and documented how the dialogue, flags, stats and scripts connect.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {pieces.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What I Learned in the Toolkit</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {lessons.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">How I Work on a Volunteer Team</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              I follow the team’s naming and branch conventions, and I keep a work log that separates what I saw working in game mode
              from what is still untested. Open checks are written down: both dialogue roll outcomes, save and load, and repeat
              interactions. A reviewer can see exactly what “done” means.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
              Path to Menzoberranzan is an independent fan project, not affiliated with Larian Studios, Hasbro or Wizards of the Coast.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
