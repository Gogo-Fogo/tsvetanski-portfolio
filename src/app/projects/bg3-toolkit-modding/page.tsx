import { CardGrid, CaseStudyHeader, CaseStudyShell, Prose, Section } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'bg3-toolkit-modding' as const;

export const metadata = projectMetadata(
  slug,
  "Modding Baldur's Gate 3 with Larian's Toolkit. I script dialogue, flags and skill checks in Osiris."
);

const glance = [
  { label: 'My role', value: 'Programmer on the Path to Menzoberranzan tech team' },
  { label: 'Built with', value: 'BG3 Toolkit, Osiris, Dialog and Timeline editors, Stats editor' },
  { label: 'Focus', value: 'Dialogue, flags, skill checks and Osiris scripts' },
  { label: 'Status', value: 'Started September 2026. Joined PtM in October 2026.' },
] as const;

const skills = [
  {
    title: 'Dialogue',
    body: 'Conversations that branch on player choices. Choices set flags that later scenes check, and some lines need a Persuasion or Intimidation roll.',
  },
  {
    title: 'Osiris scripts',
    body: 'Scripts that run when the player walks into a trigger, uses an item or picks a dialogue line. They can ask for a roll, open a door, or give items and XP one time only.',
  },
  {
    title: 'Characters and stats',
    body: 'I place characters and give them their own stats entries (level, ability scores, armor) instead of the game defaults.',
  },
  {
    title: 'Cinematics',
    body: "I've made a few dialogue timelines with camera shots and a basic greeting. This is the part I've practised least.",
  },
];

const lessons = [
  {
    title: 'Dialogues have two IDs',
    body: "To start a dialogue from Osiris you need its resource ID, not the ID inside the dialogue file. If you use the wrong one, the error says the dialogue doesn't exist.",
  },
  {
    title: 'Reloading the level is not always enough',
    body: "I changed a dialogue's timeline setting and reloaded the level, but the old version kept playing. I had to restart the Toolkit.",
  },
  {
    title: 'I keep a work log',
    body: "I write down what I tested in game mode and what I haven't yet, like both results of a roll, saving and loading, or talking to someone twice.",
  },
];

export default function Bg3ToolkitModdingPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            I&apos;ve been modding Baldur&apos;s Gate 3 with Larian&apos;s Toolkit since September 2026, mostly scripting. In October 2026 I
            joined Path to Menzoberranzan (PtM), a fan-made BG3 campaign, as a programmer on their tech team.
          </p>
        }
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="what-i-build" title="What I can do so far">
          <CardGrid items={skills} columns={2} />
        </Section>

        <Section id="lessons" title="Things I learned">
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
