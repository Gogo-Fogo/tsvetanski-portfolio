import { ActionLinks, CardGrid, CaseStudyHeader, CaseStudyShell, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'black-dice-engine' as const;

export const metadata = projectMetadata(
  slug,
  'A local-first tabletop RPG engine: a Game Master dashboard, player companion screens, deterministic dice and state services, campaign memory and optional AI help.'
);

const glance = [
  { label: 'My role', value: 'Solo product architect and gameplay-systems engineer' },
  { label: 'Built with', value: 'Node.js, TypeScript, local web clients, structured campaign storage, media adapters' },
  { label: 'Key rule', value: 'AI may suggest actions; deterministic services validate dice, permissions and campaign state' },
  { label: 'Status', value: 'Early prototype: game server, GM dashboard, player companion, session state and dice endpoints' },
] as const;

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
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A tabletop RPG platform that runs on the host&apos;s machine: a Game Master dashboard, player screens on phones, campaign memory,
            dice and state services, and optional AI or locally generated media. The rules services, not the language model, control the
            game state. Solo project.
          </p>
        }
        actions={<ActionLinks links={[{ href: 'https://github.com/Gogo-Fogo/black-dice-engine', label: 'Source on GitHub', primary: true }]} />}
        hero={
          <LightboxImage
            src="/images/projects/black-dice-engine/black-dice-engine-banner.png"
            alt="Black Dice Engine brand banner with a dark fantasy character and black dice"
            width={1672}
            height={941}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="Brand banner. The prototype's dashboard and player screens are still bare shells, so they aren't shown yet."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="problem"
          title="What it solves"
          intro={
            <>
              <p>
                AI-assisted tabletop tools drift, forget canon, invent contradictory state, or send private material to remote services.
                Virtual tabletops also split narration, memory, media, rules bookkeeping and player sheets across too many apps.
              </p>
              <p>
                Black Dice Engine puts those jobs in one local runtime: the GM gets narration support and deterministic state tools, players
                get light companion views, the campaign gets structured memory, and generated content passes through clear schemas,
                permissions and approvals.
              </p>
            </>
          }
        >
          <CardGrid items={productPillars} />
        </Section>

        <Section
          id="architecture"
          title="Architecture"
          intro={
            <p>
              Deliberately not a tangled mesh: the GM dashboard and player phones talk to one local game server, which coordinates dice, state,
              memory, AI, media, runtime health and persistence.
            </p>
          }
        >
          <pre className="overflow-x-auto rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] p-4 font-mono text-sm leading-relaxed">
            {'GM dashboard / player phones\n→ local game server\n→ dice, state, memory, AI and media services\n→ database and local asset folders\n→ WebSocket updates back to clients'}
          </pre>
          <CardGrid items={architectureItems} columns={2} />
        </Section>

        <Section id="lessons" title="Engineering lessons">
          <CardGrid items={lessons} />
        </Section>

        <Section id="status" title="Where it stands">
          <Prose>
            <p>
              The repository has the first local prototype: a Node/TypeScript game server with health, runtime-status, session-snapshot and
              dice-roll endpoints, plus small GM dashboard and player companion shells.
            </p>
            <p>
              Next: persistence, local model adapters, ComfyUI routing, campaign memory ingestion, permissions, imports and hardened runtime
              recovery.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
