import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Black Dice Engine | Georgi Tsvetanski',
  description:
    'A tabletop RPG platform with a Game Master dashboard, player companion, deterministic rules services, campaign memory, and optional AI assistance.',
};

const snapshotItems = [
  {
    label: 'Role',
    value: 'Solo product architect and gameplay-systems engineer',
  },
  {
    label: 'Status',
    value: 'Early prototype with a game server, GM dashboard, player companion, session state, and dice endpoints',
  },
  {
    label: 'Stack',
    value: 'Node.js, TypeScript, local web clients, structured campaign storage, and media adapters',
  },
  {
    label: 'Technical Rule',
    value: 'AI may suggest actions, but deterministic services validate dice, permissions, and campaign state',
  },
];

const productPillars = [
  {
    title: 'GM Command Center',
    body: 'A dashboard for scene framing, live narration support, party state, hidden notes, dice logs, memory review, and approvals for heavier media jobs.',
  },
  {
    title: 'Player Companion',
    body: 'Phone/tablet views for character sheets, status, rolls, submitted actions, handouts, and player-visible scene updates over the local network.',
  },
  {
    title: 'Local-First Runtime',
    body: 'Campaign databases, generated media, models, secrets, and private PDFs stay outside Git and on the host machine unless remote services are explicitly enabled.',
  },
];

const architectureItems = [
  {
    title: 'Game Server',
    body: 'Single API boundary for the GM dashboard, player phones, WebSocket updates, permissions, and service orchestration.',
  },
  {
    title: 'Dice + State Services',
    body: 'Dice parsing, roll history, explicit state events, inventory/resource updates, conditions, initiative, quest flags, and auditability.',
  },
  {
    title: 'Memory Service',
    body: 'Campaign canon, summaries, unresolved threads, NPC facts, locations, faction state, and session history stay structured instead of becoming loose chat history.',
  },
  {
    title: 'AI + Media Adapters',
    body: 'Local LLM adapters, optional director calls, ComfyUI scene generation routing, and local audio cues sit behind approvals and runtime health checks.',
  },
];

const lessons = [
  {
    title: 'Do not make the LLM the source of truth',
    body: 'The AI may propose narration, dice calls, memory updates, or state changes. The game server validates and applies mechanics through explicit services.',
  },
  {
    title: 'Keep player-visible and GM-only data separate',
    body: 'A table tool has real privacy boundaries: hidden notes, future reveals, private character details, and imported material cannot leak into companion views.',
  },
  {
    title: 'Graceful degradation matters',
    body: 'If image generation, audio, or a local model fails, the session should keep running. Runtime health, reconnect state, and backups are part of the design.',
  },
];

export default function BlackDiceEnginePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Black Dice Engine' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Local-First AI · TTRPG Systems · Runtime Architecture
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Black Dice Engine</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            A tabletop RPG platform that coordinates narration, player companion screens, dice and campaign state, session memory, and optional AI or
            locally generated scene media. The rules services—not the language model—control the game state.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
            <LightboxImage
              src="/images/projects/black-dice-engine/black-dice-engine-banner.png"
              alt="Black Dice Engine banner showing a dark fantasy character and black dice branding"
              width={1672}
              height={941}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-none"
              popupCaption="Black Dice Engine branding: a local-first AI GM command center for dark collaborative TTRPG campaigns."
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            <LightboxImage
              src="/images/projects/black-dice-engine/black-dice-engine-banner-info-pitch.png"
              alt="Black Dice Engine pitch banner describing the local-first AI Game Master engine"
              width={1672}
              height={941}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-none"
              popupCaption="Pitch banner: local-first AI Game Master engine with live narration, player sheets, deterministic state, campaign memory, and local scene generation."
            />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">What It Solves</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                AI-assisted tabletop tools can drift, forget canon, invent contradictory state, or mix private material into remote
                services. Traditional virtual tabletops also split narration, memory, media generation, rules bookkeeping, and player
                sheets across too many disconnected apps.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Black Dice Engine brings those responsibilities into one local runtime: the GM gets live narration support and deterministic
                state tools; players get lightweight companion views; the campaign gets structured memory; and generated content flows
                through clear schemas, permissions, and approvals.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/black-dice-engine/black-dice-engine-d20-lowres.png"
                alt="Black Dice Engine black D20 logo render"
                width={1140}
                height={1380}
                className="mx-auto max-h-[360px] w-auto object-contain"
                roundedClassName="rounded-xl"
                popupCaption="Black Dice Engine D20 branding asset."
              />
              <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Brand mark, not the main product story</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Product Pillars</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {productPillars.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Architecture</h2>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
              The core architecture is intentionally not a tangled mesh. The GM dashboard and player phones talk to one local game server.
              The game server coordinates dice, state, memory, AI, media, runtime health, and persistence.
            </p>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 font-mono text-xs leading-relaxed text-[var(--muted)]">
              GM dashboard / player phones<br />
              -&gt; local game server<br />
              -&gt; dice, state, memory, AI, and media services<br />
              -&gt; database and local asset folders<br />
              -&gt; WebSocket updates back to clients
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {architectureItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Current Prototype</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                The repository includes the first local prototype: a Node/TypeScript game server with health, runtime-status,
                session-snapshot, and dice-roll endpoints, plus small GM dashboard and player companion shells.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The next major work is integrating persistence, local model adapters, ComfyUI routing, campaign memory ingestion,
                permissions, imports, and hardened runtime recovery.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Engineering Lessons</h2>
              <div className="grid gap-4">
                {lessons.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Portfolio Relevance</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              This is portfolio-worthy because the hard part is orchestration: player input to GM reasoning, dice/rules/state tools,
              memory updates, media jobs, campaign logs, and the next turn. It shows product architecture, local-first privacy thinking,
              schema-driven AI boundaries, runtime reliability, and gameplay systems design in one project.
            </p>
            <a
              href="https://github.com/Gogo-Fogo/black-dice-engine"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)]"
            >
              View GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
