import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  Figure,
  MediaGrid,
  Prose,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'cranky-game-jam' as const;

export const metadata = projectMetadata(
  slug,
  'Split-screen local multiplayer built in one week for Global Game Jam 2024: pugs chasing squirrels. I was project manager, 3D artist and animator.'
);

const glance = [
  { label: 'My role', value: 'Project manager, 3D artist and animator' },
  { label: 'Team and pace', value: 'Global Game Jam 2024 team, one-week sprint, UBalt site at the Universities at Shady Grove' },
  { label: 'Built with', value: 'Unity, Blender, Substance Painter' },
  { label: 'Result', value: 'A complete split-screen Windows build, delivered on time' },
] as const;

const art = [
  {
    title: 'Modelling and rigging',
    body: 'Built from scratch in Blender with a flexible rig for the exaggerated, floppy movement the game needed.',
  },
  {
    title: 'Textures',
    body: 'Hand-painted stylised textures in Substance Painter, chosen to stay readable on a split screen.',
  },
];

const management = [
  {
    title: 'Trello sprint board',
    body: 'Structured the sprint tasks and live progress tracking so everyone stayed aligned on a tight timeline.',
  },
  {
    title: 'Team coordination',
    body: 'Split design and art tasks and managed the timeline so every core pug animation was in before the final build.',
  },
];

const results = [
  'A complete, playable jam build in one week.',
  'The pug character pipeline integrated into gameplay.',
  'Designed and tested for keyboard and handheld controller play.',
];

export default function CrankyGameJamPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <>
            <p>
              A local split-screen game where players control pugs trying to catch squirrels, built in one week for Global Game Jam 2024 under
              the theme &quot;Make Me Laugh&quot;. The movement is intentionally clunky, inspired by Party Animals and Fall Guys.
            </p>
            <p>
              I was the project manager and built the pug: model, rig, textures and animation. Not to be confused with my later solo follow-up,{' '}
              <a href="/projects/cranky-squirrel-annihilator">Cranky: The Squirrel Annihilator</a>.
            </p>
          </>
        }
        hero={
          <LightboxImage
            src="/images/CRANKY_Animation_Blender_Rigging.png"
            alt="The Cranky pug rig and animation controls in Blender"
            width={3840}
            height={2043}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The pug rig in Blender."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="pug" title="The pug, from model to game">
          <CardGrid items={art} columns={2} />
          <MediaGrid>
            <Figure caption="The finished pug render.">
              <LightboxImage src="/images/Cranky_Pug_Render_Blender.png" alt="Cranky pug render in Blender" width={1000} height={1000} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="Texturing in Substance Painter.">
              <LightboxImage src="/images/Cranky_SubstancePainter.png" alt="Cranky pug texturing in Substance Painter" width={1000} height={1000} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
          <Prose>
            <p>
              <small>
                The pug concept was inspired by the work of Gil Rimmer and Rhenan Fidelis; all modelling, rigging and animation were made from
                scratch for this project.
              </small>
            </p>
          </Prose>
        </Section>

        <Section
          id="management"
          title="Running the jam"
          intro={<p>As project manager and 3D lead, my job was to keep a one-week scope realistic without dropping the visual standard.</p>}
        >
          <CardGrid items={management} columns={2} />
          <MediaGrid>
            <Figure caption="Planning with the team board.">
              <LightboxImage src="/images/GAMEJAM_CRANKY_PlanningWithTeamBoard.jpg" alt="Cranky jam planning board" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
            <Figure caption="The Trello sprint board.">
              <LightboxImage src="/images/Cranky_GameJam_Trello.png" alt="Cranky jam Trello board" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
            </Figure>
          </MediaGrid>
        </Section>

        <Section id="results" title="Results">
          <BulletList items={results} />
          <Figure caption="Demo day, playing on a Lenovo Legion Go.">
            <LightboxImage src="/images/Cranky_GameJam_DemoDay_Handheld_LegionGo.jpg" alt="Cranky demo day on a Lenovo Legion Go" width={1400} height={900} className="h-auto w-full" roundedClassName="rounded-none" />
          </Figure>
          <ActionLinks
            links={[
              { href: 'https://globalgamejam.org/games/2024/cranky-6', label: 'Global Game Jam page', primary: true },
              { href: 'https://drive.google.com/drive/folders/1Ptmv3frb4hGwuTKd5TdjwfhNmiuD52Ra?usp=sharing', label: 'Build and source files' },
              { href: 'https://docs.google.com/presentation/d/1-Pe5afGlmk3xhx1DTXY-sLpxyAqgKiaYJ33Mq-4bof8/edit?usp=sharing', label: 'Presentation' },
              { href: 'https://docs.google.com/document/d/1tJRc-iaIuqC71HeNq85wr4q9N26GP7WCNk34q3LItCQ/edit?usp=sharing', label: 'Jam GDD' },
              { href: 'https://docs.google.com/document/d/1eFnm2fgrBZUmR9nk0wMXdvT5SPWTmVtTMpOW1DCmleg/edit?usp=sharing', label: 'Concept overview' },
            ]}
          />
          <Prose>
            <p>
              Thanks to Julian Apostolov (
              <a href="https://www.instagram.com/uapostolov_17/" target="_blank" rel="noreferrer">
                @uapostolov_17
              </a>
              ) for helping troubleshoot pug and texture issues at 2 a.m.
            </p>
          </Prose>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
