import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Prose,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import DocViewer from '@/components/doc-viewer';
import type { DocOutlineItem, DocPage } from '@/components/doc-viewer';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'fallout-level-design' as const;

export const metadata = projectMetadata(
  slug,
  'Fallout 4 Creation Kit level design: third-floor interiors and merge stability on a team-built level, plus the Hall of Idols puzzle chamber.'
);

const falloutDocuments = [
  {
    href: '/documents/projects/fallout-level-design/recruiter/fii-fallout-final-milestone-report.pdf',
    label: 'FII Final Milestone Report',
  },
  {
    href: '/documents/projects/fallout-level-design/recruiter/game-370-milestone-one.pdf',
    label: 'GAME 370 Milestone One (Project Lead)',
  },
  {
    href: '/documents/projects/fallout-level-design/recruiter/game-370-final-project-revised-design.pdf',
    label: 'Revised Design: Hall of Idols',
  },
];

const falloutEvidenceImages = [
  {
    src: '/images/projects/fallout/fallout-page-01.png',
    alt: 'Floating Institute final milestone report opening page',
    width: 1224,
    height: 1584,
    caption: 'Opening section of the milestone report with team contribution breakdown and project scope.',
  },
  {
    src: '/images/projects/fallout/fallout-page-02.png',
    alt: 'Milestone report page describing required techniques and implementation details',
    width: 1224,
    height: 1584,
    caption: 'Technique summary section including Creation Kit implementation notes and integration workflow.',
  },
  {
    src: '/images/projects/fallout/fallout-page-03.png',
    alt: 'Milestone report page with peer challenge notes and team problem-solving',
    width: 1224,
    height: 1584,
    caption: 'Team challenges section — peer accounts of merge conflicts, visual bugs, and shared debugging.',
  },
  {
    src: '/images/projects/fallout/fallout-page-04.png',
    alt: 'Milestone report page focused on technical challenges and project reflection',
    width: 1224,
    height: 1584,
    caption: 'Challenge documentation covering merge stability, runtime issues, and scene optimization efforts.',
  },
  {
    src: '/images/projects/fallout/fallout-page-05.png',
    alt: 'Milestone report page with runtime control strategy and tutorial references',
    width: 1224,
    height: 1584,
    caption: 'Runtime strategy and supporting references used during implementation in the Fallout 4 Creation Kit.',
  },
];

const milestoneOneImages = [
  {
    src: '/images/projects/fallout/initial-design/initial-design-p02-img01.png',
    alt: 'Sun Chamber top-down design layout with platform positions and puzzle flow',
    width: 1534,
    height: 993,
    caption: 'Sun Chamber layout diagram: platforms, trap zones, retrieval objective, and collapse trigger after idol is taken.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p01-img01.png',
    alt: 'Ashen Vale Hall of Idols chamber with statues and lighting',
    width: 2048,
    height: 959,
    caption: 'In-engine composition and encounter-space lighting for the Hall of Idols.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p02-img03.png',
    alt: 'Ashen Vale bridge and statue area during technical iteration',
    width: 1406,
    height: 1085,
    caption: 'Iteration phase showing traversal-blockout and trigger testing around the statue platforms.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p03-img01.png',
    alt: 'Sun Chamber portal-like environment from Milestone One',
    width: 1147,
    height: 532,
    caption: 'Sun Chamber setup used to stage the major transition beat after puzzle completion.',
  },
  {
    src: '/images/projects/fallout/milestone-one/milestone-one-p05-img02.png',
    alt: 'Early terrain sculpt for Ashen Vale jungle exterior',
    width: 1024,
    height: 768,
    caption: 'Early terrain shaping pass for the jungle exterior entrance area (WIP).',
  },
];

const hallOfIdolsRevisedImages = [
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p03-img01.png',
    alt: 'Hall of Idols top-down revised layout diagram',
    width: 1385,
    height: 1115,
    caption: 'Revised top-down layout: idol plinths, interact points, and stair route to the Sun Chamber.',
  },
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p04-img01.png',
    alt: 'Hall of Idols full Creation Kit scene with object and lighting setup',
    width: 1717,
    height: 1388,
    caption: 'Creation Kit working view showing object lists, scripted placeholders, and lighting pass configuration.',
  },
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png',
    alt: 'Hall of Idols chamber scene with illuminated statues and trigger markers',
    width: 2048,
    height: 959,
    caption: 'Puzzle chamber blockout with spotlight-guided statues and traversal staging.',
  },
  {
    src: '/images/projects/fallout/hall-of-idols/hall-of-idols-p02-img01.png',
    alt: 'Close-up of Hall of Idols statue placeholder and spotlight tuning',
    width: 1406,
    height: 1085,
    caption: 'Interactive statue placeholder tuned for rotate-on-activation behavior and readability.',
  },
];

const falloutEvidenceOutline: DocOutlineItem[] = [
  { heading: 'Team Contributions', pageIndex: 0 },
  { heading: 'Required Techniques', pageIndex: 1 },
  { heading: 'Team Challenges', pageIndex: 2 },
  { heading: 'My Challenges', pageIndex: 3 },
  { heading: 'Runtime Strategy', pageIndex: 4 },
];

const falloutLearningReferences = [
  {
    href: 'https://www.youtube.com/watch?v=qaKbOLdzC6-k',
    label: 'Linking Cells Tutorial',
  },
  {
    href: 'https://www.youtube.com/watch?v=ZIWI7jalt9o',
    label: 'Terminals Setup',
  },
  {
    href: 'https://www.youtube.com/watch?v=Ipgx3xmzEaw',
    label: 'Enemy Customization',
  },
  {
    href: 'https://www.youtube.com/watch?v=T_wJhG2zHqw',
    label: 'Navmesh Tutorial',
  },
  {
    href: 'https://geckwiki.com/index.php/Bethsoft_Tutorial_Navmesh',
    label: 'GECK Wiki: Navmesh',
  },
];

const glance = [
  { label: 'My role', value: 'Third-floor level designer and merge support on the team level; project lead on my earlier Milestone One build' },
  { label: 'Team', value: 'Joined an active Fallout 4 mod team mid-project' },
  { label: 'Built with', value: 'Fallout 4 Creation Kit, Blender, NifSkope, B.A.E.' },
  { label: 'Result', value: 'A stable merged build with connected, optimised interior spaces' },
] as const;

const toc = [
  { id: 'hall-of-idols', label: 'Hall of Idols puzzle' },
  { id: 'team-level', label: 'The team level' },
  { id: 'milestone-one', label: 'Earlier work: Milestone One' },
  { id: 'documents', label: 'Documents' },
];

const challenges = [
  {
    title: 'Duplicate FormIDs',
    body: 'Combining several team cells into one shared file produced duplicate FormID warnings and conflicts that I worked through.',
  },
  {
    title: 'Broken colours and stretching',
    body: 'I traced a major colour and stretch artefact to room-bound and portal conflicts, then rebuilt the setup until it stabilised.',
  },
  {
    title: 'Performance',
    body: 'Dense NPC, light and model setups strained performance. I reduced them while keeping rooms readable and atmospheric.',
  },
];

const optimisation = [
  'No oversized enemy rooms or over-dense encounters where they hurt frame rate most.',
  'Teleport and load-door routing keep traversal broad without rendering everything at once.',
  'Room bounds and portals so only relevant geometry is processed each frame.',
  'Readability first: stable navigation and clear combat spaces over visual excess.',
];

export default function FalloutLevelDesignPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            Fallout 4 level design in the Creation Kit. I joined a team building the Floating Institute expansion mid-project and owned its
            third-floor interiors, then kept the merged build stable and fast. Before that, I was project lead on a smaller build, Ashen Vale,
            and designed its Hall of Idols puzzle chamber.
          </p>
        }
        hero={
          <LightboxImage
            src="/images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png"
            alt="Hall of Idols chamber with illuminated statues and trigger markers"
            width={2048}
            height={959}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The Hall of Idols puzzle chamber: spotlight-guided statues and traversal staging."
        glance={glance}
      />

      <CaseStudyBody toc={toc}>
        <Section
          id="hall-of-idols"
          title="Hall of Idols puzzle"
          intro={
            <>
              <p>
                I narrowed the design to one production-ready module: rotate the idol statues, reveal hidden stairs, and descend into the Sun
                Chamber. Keeping it standalone also reduced merge conflicts.
              </p>
              <p>
                <strong>Player loop:</strong> read the dead end → rotate the idols → unlock the stairs → descend. Built with scripted
                placeholders, spotlight guidance and a modular handoff to the next area.
              </p>
            </>
          }
        >
          <MediaGrid>
            {hallOfIdolsRevisedImages
              .filter((_, index) => index !== 2)
              .map((image) => (
                <Figure key={image.src} caption={image.caption}>
                  <LightboxImage src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-auto w-full" roundedClassName="rounded-none" />
                </Figure>
              ))}
          </MediaGrid>
        </Section>

        <Section
          id="team-level"
          title="The team level"
          intro={
            <>
              <p>
                On the team&apos;s Floating Institute level I built room variants for the third floor and stabilised door links, portals,
                bounds, lighting and merged cells, so the combined build stayed connected and readable.
              </p>
              <p>
                I used Blender, NifSkope and B.A.E. to understand mesh and collision edits, and built in the Creation Kit with load doors and
                XMarkerHeading markers for reliable travel between cells. In-engine commands like <code>coc</code> and <code>tgm</code> let me
                jump between cells to isolate problems.
              </p>
            </>
          }
        >
          <CardGrid items={challenges} />
          <Prose>
            <h3>How I kept it fast</h3>
          </Prose>
          <BulletList items={optimisation} />
          <Figure caption="Creation Kit editor view: object placement, door links and room bounds.">
            <LightboxImage
              src="/images/projects/fallout/milestone-one/milestone-one-p02-img01.png"
              alt="Creation Kit editor view of a Hall of Idols puzzle space"
              width={1717}
              height={1388}
              className="h-auto w-full"
              roundedClassName="rounded-none"
            />
          </Figure>
        </Section>

        <Section
          id="milestone-one"
          title="Earlier work: Milestone One"
          intro={
            <p>
              My first Creation Kit project, where I was project lead, was deliberately much smaller than the team level. It taught me puzzle
              spaces, traversal setup, encounter pacing and editor-side debugging before I worked inside the larger merged build.
            </p>
          }
        >
          <DeepDive summary="Milestone One screenshots">
            <MediaGrid>
              {milestoneOneImages.map((image) => (
                <Figure key={image.src} caption={image.caption}>
                  <LightboxImage src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-auto w-full" roundedClassName="rounded-none" />
                </Figure>
              ))}
            </MediaGrid>
          </DeepDive>
        </Section>

        <Section id="documents" title="Documents">
          <ActionLinks links={falloutDocuments.map((document) => ({ href: document.href, label: `${document.label} (PDF)` }))} />
          <DeepDive summary="Milestone report excerpts and tutorials I learned from">
            <DocViewer
              title="Team final milestone report (excerpts)"
              description="Role ownership, technical decisions and runtime strategy from the team's final submission."
              pages={falloutEvidenceImages as DocPage[]}
              outline={falloutEvidenceOutline}
            />
            <ActionLinks links={falloutLearningReferences} />
          </DeepDive>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
