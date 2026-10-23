import { CardGrid, CaseStudyHeader, CaseStudyShell, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'bg3-toolkit-modding' as const;

export const metadata = projectMetadata(
  slug,
  "Learning Larian's BG3 Toolkit: Osiris story scripting and dialogue with flags and skill checks."
);

const glance = [
  { label: 'My role', value: 'Programmer in the technical department of Path to Menzoberranzan; solo modder' },
  { label: 'Built with', value: 'BG3 Toolkit, Osiris, Dialog and Timeline editors, Stats editor' },
  { label: 'Focus', value: 'Gameplay scripting: dialogue, flags, skill checks and story goals' },
  { label: 'Status', value: 'Modding since September 2026; joined Path to Menzoberranzan in October 2026' },
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
            2026 and have been building small encounters to learn it. In October 2026 I joined the technical department of Path to
            Menzoberranzan (PtM), a large community-made BG3 campaign, as a programmer, to keep learning the engine alongside a big team of
            very creative people.
          </p>
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="what-i-build" title="What I can build so far">
          <CardGrid items={skills} columns={2} />
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
