import Breadcrumbs from '@/components/breadcrumbs';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prince of Persia: Warrior Within Mod | Georgi Tsvetanski',
  description:
    'Solo Slay the Spire 2 character mod in Godot/C# with Dagger of Time rewinds, Sand economy, persistent Dahaka pursuit, and custom Warrior Within audio/presentation.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Solo designer, gameplay engineer, mod integrator, and presentation builder',
  },
  {
    label: 'Stack',
    value: 'Godot 4.5.1, C#/.NET 9, Harmony patches, BaseLib, Slay the Spire 2 v0.99.1',
  },
  {
    label: 'Current Build',
    value: '26 authored Prince cards, 3 generated combat utility cards, custom relic flow, and a live Dahaka escape encounter',
  },
  {
    label: 'Audio Layer',
    value: '10 Prince combat-start lines, 11 Dahaka quotes, and 21 routed music/theme tracks',
  },
];

const currentBuildItems = [
  'Custom Prince character slot with its own starter deck, reward pool, rest/shop/combat art hooks, and Neow dialogue.',
  'Dagger of Time starter relic with Sand carryover, Wind Back generation, and lethal rewind handling.',
  'Combat rewind that restores piles, relic runtime fields, enemy roster changes, move state, and UI state instead of faking a partial undo.',
  'Persistent Dahaka chase that carries between combats and can replace a normal fight with a dedicated escape sequence.',
  'Custom presentation work across combat-start voice bubbles, music routing, rewind SFX, sword impacts, and room-facing art swaps.',
];

const systemItems = [
  {
    title: 'Character Foundation',
    body: 'The Prince is not a skin over a vanilla character. He has a custom slot, his own starter deck, starter relic, reward pool, combat language, and room/presentation hooks shaped around Warrior Within.',
  },
  {
    title: 'Rewind Engineering',
    body: 'The hard part is making time travel land cleanly inside STS2 combat flow. The rewind path has to restore state, rebuild valid combat surfaces, and avoid leaving the engine in a broken future timeline.',
  },
  {
    title: 'Dahaka Pursuit',
    body: 'Time use has a cost. Sand spending pushes a real chase meter, and once it tops out the mod can turn the current fight into a Dahaka escape encounter with distance tracking and encounter-specific presentation.',
  },
];

const presentationItems = [
  'Warrior Within music and combat themes are routed across menu, event, combat, chase, rest, shop, and Dahaka moments.',
  'Prince combat-start audio uses real voiced lines and speech-bubble presentation instead of a silent card-only shell.',
  'Dahaka has his own quotes, sounds, chase presentation, and escape-state UI instead of being reduced to a lore reference.',
  'Some surfaces are still visibly beta or placeholder, but the tone and system intent are already locked in and playable.',
];

const evidencePages: DocPage[] = [
  {
    src: '/images/projects/prince-of-persia-warrior-within-mod/pop-doc-01.png',
    alt: 'Prince of Persia Warrior Within mod project snapshot evidence page',
    width: 1224,
    height: 1584,
    caption: 'Project snapshot page built from the live mod state, design direction, and March 2026 implementation notes.',
  },
  {
    src: '/images/projects/prince-of-persia-warrior-within-mod/pop-doc-02.png',
    alt: 'Prince of Persia Warrior Within mod systems evidence page',
    width: 1224,
    height: 1584,
    caption: 'Current systems page covering rewind, Sand economy, and the Dahaka pursuit loop that makes the mod distinct.',
  },
  {
    src: '/images/projects/prince-of-persia-warrior-within-mod/pop-doc-03.png',
    alt: 'Prince of Persia Warrior Within mod engineering and presentation evidence page',
    width: 1224,
    height: 1584,
    caption: 'Engineering and presentation page showing why this project is more than a character art swap or card pack.',
  },
];

const evidenceOutline: DocOutlineItem[] = [
  { heading: 'Project Snapshot', pageIndex: 0 },
  { heading: 'Core Systems', pageIndex: 1 },
  { heading: 'Engineering & Mood', pageIndex: 2 },
];

const documentLinks = [
  {
    href: '/documents/projects/prince-of-persia-warrior-within-mod/design-gdd.md',
    label: 'Working GDD',
  },
  {
    href: '/documents/projects/prince-of-persia-warrior-within-mod/implementation-roadmap.md',
    label: 'Implementation Roadmap',
  },
  {
    href: '/documents/projects/prince-of-persia-warrior-within-mod/dahaka-development-plan.md',
    label: 'Dahaka Plan',
  },
];

export default function PrinceOfPersiaWarriorWithinModCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Prince of Persia: Warrior Within Mod' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Solo Project · Slay the Spire 2 Character Mod
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Prince of Persia: Warrior Within Mod</h1>
          <p className="mt-3 max-w-4xl text-[var(--muted)]">
            This is my Slay the Spire 2 character mod built in Godot and C#. The job is not to paste Prince art over an existing class. It is to make
            Warrior Within feel right inside a deckbuilder: fast, hunted, aggressive, and built around using time at a cost.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/projects/prince-of-persia-warrior-within-mod/prince-banner.png"
              alt="Prince of Persia Warrior Within mod banner showing the Prince in the custom Slay the Spire 2 mod"
              width={1536}
              height={828}
              className="h-auto w-full object-cover"
              popupCaption="Current Prince banner art used for the mod's character-facing presentation. The tone is already locked on Warrior Within: severe, mobile, and under pressure."
              roundedClassName="rounded-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshotItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Why I Built It This Way</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The source fantasy only works if the Prince is more than a sword icon. He needs dual-blade tempo, risky second chances, and the Dahaka as
                real pressure instead of lore text sitting beside normal deckbuilder combat.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                That pushed the mod into deeper systems work very quickly. I had to build a real card pool, Dagger of Time state, Sand resource UI, audio
                routing, room art hooks, Neow dialogue, and a pursuit encounter that can interrupt normal combat without breaking the run.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What The Current Build Already Does</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {currentBuildItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">System Split</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {systemItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/prince-of-persia-warrior-within-mod/ravages-of-time.png"
                alt="Ravages of Time card art from the Prince of Persia Warrior Within Slay the Spire 2 mod"
                width={1417}
                height={944}
                className="h-auto w-full object-cover"
                popupCaption="One of the current Prince card-art pieces. The mod is not only mechanical; it is also trying to carry Warrior Within's tone, violence, and time-bending pressure into the card presentation."
                roundedClassName="rounded-none"
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Art Direction And Adaptation</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I am treating this as an adaptation problem, not only a programming problem. Warrior Within has a very specific tone: harsh, restless,
                confrontational, and built around motion under threat. The mod works better when the cards, voice, relics, and encounter pressure all point
                in the same direction.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Some surfaces are still beta or placeholder, and I am fine being direct about that. What matters right now is that the class identity is
                already coherent and the live build is carrying real system weight underneath the visuals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(34,22,14,0.96),rgba(9,12,18,0.98))] p-6 shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/prince-of-persia-warrior-within-mod/dahaka-character.png"
                alt="Dahaka character art used in the Prince of Persia Warrior Within Slay the Spire 2 mod"
                width={480}
                height={720}
                className="mx-auto h-auto max-h-[26rem] w-auto object-contain"
                popupCaption="The Dahaka is already more than a reference. He has his own chase state, encounter flow, quotes, sounds, and escape presentation in the current build."
              />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Audio And Presentation</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                This project is already doing more presentation work than most early character mods. It has its own voice, music routing, combat-start
                attitude, and pursuit framing. That matters because the class fantasy falls apart if the systems say Warrior Within but the room feels mute.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {presentationItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Project Evidence</h2>
            <p className="mb-5 max-w-3xl text-sm text-[var(--muted)]">
              I wanted this page backed by the real working notes, not just retrospective copy. This evidence pack was built from the current GDD, the
              active roadmap, and the Dahaka development handoff so the page shows the actual scope and thinking already inside the project.
            </p>
            <DocViewer
              title="Prince Mod Evidence Pack"
              description="Current snapshot, systems summary, and engineering/presentation notes derived from the live Warrior Within mod docs."
              pages={evidencePages}
              outline={evidenceOutline}
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Notes & Documents</h2>
            <div className="flex flex-wrap gap-3">
              {documentLinks.map((document) => (
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
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Outcome</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              This is already a serious mod project, not a trailer shell. Fresh gameplay capture and the first public trailer are next, but the important
              part is already here: the systems, the implementation burden, and a clear Warrior Within identity inside a deckbuilder.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
