import { CardGrid, CaseStudyHeader, CaseStudyShell, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'bg3-toolkit-modding' as const;

export const metadata = projectMetadata(
  slug,
  "Learning Larian's BG3 Toolkit: Osiris story scripting, dialogue with flags and skill checks, and an offline reference built from the official modding docs."
);

const glance = [
  { label: 'My role', value: 'Solo modder, learning the Toolkit from scratch' },
  { label: 'Built with', value: 'BG3 Toolkit, Osiris, Dialog and Timeline editors, Stats editor, Python' },
  { label: 'Focus', value: 'Gameplay scripting: dialogue, flags, skill checks and story goals' },
  { label: 'Status', value: 'Ongoing since September 2026' },
] as const;

const skills = [
  {
    title: 'Dialogue with consequences',
    body: 'Branching conversations where choices set flags, so the world remembers what happened, and branches gated by Persuasion or Intimidation checks.',
  },
  {
    title: 'Osiris story goals',
    body: 'Event-driven scripts that react to triggers, item use and dialogue flags, request rolls, then change the world: unlock, open, grant items and XP once.',
  },
  {
    title: 'Characters and stats',
    body: 'Placed characters with their own stats entries (level, ability scores, armor) instead of base-game defaults.',
  },
  {
    title: 'Cinematics',
    body: 'First dialogue timelines: camera shots and a speaker-framed greeting. My least practised area so far.',
  },
];

const reference = [
  {
    title: 'Osiris function index',
    body: 'A script pulls the official modding wiki through its API and builds an offline index of 1,149 Osiris entries (269 events, 387 queries, 493 calls), each with its signature and a link to the source page.',
  },
  {
    title: 'Curated essentials',
    body: "A short guide to the functions behind flags, dialogue, doors, rolls and rewards, with the wiki's examples beside each signature.",
  },
  {
    title: 'Toolkit cheat sheet',
    body: "Shortcuts, debug-console commands and testing tricks merged from the community sheet and Larian's official guide, such as forcing every roll to pass or fail to test both branches.",
  },
  {
    title: 'Tutorial notes',
    body: 'Toolkit tutorials transcribed locally with Whisper and turned into step-by-step notes for scripting, timelines and the stats editor.',
  },
];

const lessons = [
  {
    title: 'One dialogue, two IDs',
    body: "Starting a dialogue from Osiris needs the dialogue's resource ID, not the ID stored inside the file. The wrong one fails with a misleading “doesn't exist” error.",
  },
  {
    title: 'Reloads can keep stale data',
    body: "After changing a dialogue's timeline setting, reloading the level kept the old version. Only a full Toolkit restart picked up the change.",
  },
  {
    title: 'Log what you actually saw',
    body: 'My work log separates what I watched work in game mode from what is still untested: both outcomes of a roll, save and load, repeat interactions.',
  },
];

export default function Bg3ToolkitModdingPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            I&apos;m learning Larian&apos;s official Baldur&apos;s Gate 3 Toolkit, focused on gameplay scripting. I first opened it in September
            2026, so alongside building encounters I built myself an offline reference to learn faster.
          </p>
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="what-i-build" title="What I can build so far">
          <CardGrid items={skills} columns={2} />
        </Section>

        <Section
          id="reference"
          title="An offline reference I built"
          intro={
            <p>
              BG3 modding knowledge is spread across a wiki, community spreadsheets, a search engine and videos. I pulled what I needed into
              one searchable set of notes, every entry linked back to its source.
            </p>
          }
        >
          <CardGrid items={reference} columns={2} />
        </Section>

        <Section id="lessons" title="What the Toolkit taught me">
          <CardGrid items={lessons} />
          <Prose>
            <p>
              <small>Baldur&apos;s Gate 3 and the BG3 Toolkit belong to Larian Studios. This is personal modding work, not affiliated with Larian.</small>
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
