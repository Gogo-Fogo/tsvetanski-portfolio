import {
  ActionLinks,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  Figure,
  MediaGrid,
  Prose,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import CrankyPugViewer from '@/components/cranky-pug-viewer';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'cranky-squirrel-annihilator' as const;

export const metadata = projectMetadata(
  slug,
  'Solo follow-up to the Cranky game jam: first-person pug movement, reactive squirrel and rooster AI, full UI and a playable WebGL build.'
);

const glance = [
  { label: 'My role', value: 'Solo developer, designer and 3D artist' },
  { label: 'Built with', value: 'Unity, C#, Blender, Substance Painter' },
  { label: 'Challenge', value: 'Funny, dog-like movement that still feels responsive' },
  { label: 'Result', value: 'A playable WebGL build with custom movement and reactive AI' },
] as const;

const mechanics = [
  {
    title: 'Analog paw running',
    body: "Alternate L1 and R1 (or two keys) to move the front paws, which gives the dog's movement a rhythmic, physical feel.",
  },
  {
    title: 'Reactive squirrel AI',
    body: "Squirrels run, dodge and react to the player's approach through a proximity-based behaviour system I wrote.",
  },
  {
    title: 'Physics-driven humour',
    body: "The game leans into clunky physics to make the pug's movement funny, inspired by Fall Guys.",
  },
];

export default function CrankySquirrelAnnihilatorPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <>
            <p>
              A solo Unity game: play a pug chasing squirrels with analog paw controls and physics-driven humour. I rebuilt it from the ground
              up after the <a href="/projects/cranky-game-jam">2024 game jam version</a>, handling everything from the Blender model to the AI
              and the WebGL build.
            </p>
          </>
        }
        actions={<ActionLinks links={[{ href: 'https://gogo81.itch.io/cranky-v1', label: 'Play in the browser (itch.io)', primary: true }]} />}
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl="https://www.youtube.com/embed/uOrj1FdbcEM"
              thumbnailUrl="https://img.youtube.com/vi/uOrj1FdbcEM/maxresdefault.jpg"
              title="Cranky: The Squirrel Annihilator gameplay"
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption="Gameplay video."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="mechanics" title="Core mechanics">
          <CardGrid items={mechanics} />
          <CrankyPugViewer />
        </Section>

        <Section
          id="development"
          title="Development"
          intro={
            <>
              <p>
                Midway through, I rebuilt the movement system to reduce hand fatigue while keeping the playful, dog-like feel. Balancing awkward
                physics with responsive controls, and keeping everything smooth in WebGL, took constant testing; I compared each revision against
                playtest feedback.
              </p>
            </>
          }
        >
          <MediaGrid>
            <Figure caption="Squirrel target art.">
              <LightboxImage src="/images/Cranky_squirrel.png" alt="Cranky squirrel art" width={1200} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="The pug's expression in game.">
              <LightboxImage src="/images/Cranky_Face.png" alt="Cranky pug expression in game" width={1200} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
          <ActionLinks
            links={[
              { href: 'https://docs.google.com/document/d/1WVyQefiP6Nu1LgEGjCt0d2I3NQGgfSBVXPCX0QmJa7U/edit?usp=sharing', label: 'Game design document' },
              { href: 'https://docs.google.com/document/d/1TpCbjZVbZbUJ0aAq4xGkjsWb1CNSq08nq2ufRL13_qQ/edit?usp=sharing', label: 'Dev notes' },
              { href: 'https://docs.google.com/document/d/1zTa27UjdRvVP12vMo39GdtkHW6AA8O432UanxHt1n1w/edit?usp=sharing', label: 'Level design before and after' },
            ]}
          />
          <Prose>
            <p>
              <small>
                Thanks to the Unity and Reddit developer communities, my professors and classmates at Montgomery College, the free asset creators
                on the Unity Asset Store and Pixabay whose audio and visuals I used, and the early playtesters who improved the controls and
                pacing.
              </small>
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
