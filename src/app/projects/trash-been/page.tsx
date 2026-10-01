import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  Figure,
  MediaGrid,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'trash-been' as const;

export const metadata = projectMetadata(
  slug,
  'Solo Unity platformer built in one week for a Breda application: collect trash to restore a polluted city, unlock movement upgrades and keep your momentum.'
);

const glance = [
  { label: 'My role', value: 'Solo designer and developer' },
  { label: 'Timeframe', value: 'One week, from concept to playable build (May 2022)' },
  { label: 'Built with', value: 'Unity visual scripting, Blender, WebGL' },
  { label: 'Result', value: 'A complete playable build, submitted on time; it helped secure my acceptance to Breda' },
] as const;

const loop = [
  { title: 'Core loop', body: 'Run and jump through a polluted city, collecting trash bags to clean each zone.' },
  { title: 'Progression', body: 'As the city gets cleaner it shifts from grim to vibrant, and you earn speed and jump upgrades.' },
  { title: 'Pressure', body: 'Enemy "globs" slow your momentum and force cleaner routes.' },
];

const process = [
  'Kept the scope small enough to finish in a week.',
  'Used community resources when blocked, and tested every playable revision remotely.',
  'Retopologised assets in Blender to keep the WebGL build light.',
];

export default function TrashBeenPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A platformer where cleaning a polluted city restores its colour, its pace and your momentum. I designed and built it alone in one
            week in May 2022 for my Breda application.
          </p>
        }
        actions={<ActionLinks links={[{ href: 'https://gogo81.itch.io/trash-been', label: 'Play in the browser (itch.io)', primary: true }]} />}
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl="https://www.youtube.com/embed/zCdPRazVHYM"
              thumbnailUrl="https://img.youtube.com/vi/zCdPRazVHYM/maxresdefault.jpg"
              title="Trash Been live demo walkthrough"
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption="Live demo walkthrough."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="game" title="The game">
          <CardGrid items={loop} />
        </Section>

        <Section
          id="process"
          title="One week, start to finish"
          intro={<p>The hardest part was building and debugging the whole loop in a week.</p>}
        >
          <BulletList items={process} />
          <MediaGrid>
            <Figure caption="Gameplay and systems mind map.">
              <LightboxImage src="/images/TB_MindMap.png" alt="Trash Been gameplay and systems mind map" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="QA and testing notes.">
              <LightboxImage src="/images/TB_QA.png" alt="Trash Been QA and testing notes" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
          <Figure caption="A young tester playing the build.">
            <div className="aspect-video">
              <LightboxVideo
                embedUrl="https://www.youtube.com/embed/BzVovBaY99o"
                thumbnailUrl="https://img.youtube.com/vi/BzVovBaY99o/maxresdefault.jpg"
                title="Trash Been young tester playthrough"
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </Figure>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
