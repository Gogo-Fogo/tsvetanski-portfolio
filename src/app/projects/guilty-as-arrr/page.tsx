import {
  ActionLinks,
  BulletList,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Section,
  Split,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'guilty-as-arrr' as const;

export const metadata = projectMetadata(
  slug,
  'A networked pirate social-deduction game in Unity with Photon Fusion and proximity voice. I led the team and rescoped it to a working multiplayer slice.'
);

const IMG = '/images/projects/guilty-as-arr';
const DOCS = '/documents/projects/guilty-as-arrr/recruiter';

const glance = [
  { label: 'My role', value: 'Team lead, systems developer and playtest coordinator' },
  { label: 'Built with', value: 'Unity URP, Photon Fusion, Photon Voice 2' },
  { label: 'Challenge', value: 'Keep proximity voice and social cues readable over a network' },
  { label: 'Result', value: 'A testable multiplayer slice, rescoped and delivered within one semester' },
] as const;

const contributions = [
  {
    title: 'Proximity voice',
    body: 'Photon Voice 2 attenuates speech by in-game distance and direction. I tuned the baselines for clarity and social tension, so deception and accusation both work.',
  },
  {
    title: 'Session flow',
    body: 'Lightweight session management and round rules on Photon Fusion, kept simple so playtests stayed reliable after the rescope.',
  },
  {
    title: 'Spatial cues',
    body: 'Balanced visual and audio feedback so players can read each other in chaotic rounds.',
  },
  {
    title: 'Scope and delivery',
    body: 'Re-prioritised the backlog and cut non-essential features so the remaining systems could be polished and documented.',
  },
];

const rescope = [
  'Reframed the goal from a broad feature set to a stable multiplayer prototype.',
  'Prioritised session flow, proximity voice and readable social feedback.',
  'Tracked ownership and weekly priorities on Trello, re-ranking after every playtest to protect core gameplay over polish.',
];

export default function GuiltyAsArrrPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A multiplayer pirate social-deduction game built around proximity voice: distance and direction change who can hear you, so where
            you stand is part of every private conversation and accusation. I led the team, built the core systems and ran the playtests.
          </p>
        }
        hero={
          <LightboxImage
            src={`${IMG}/deck-helm.png`}
            alt="First-person view of the ship deck and helm with a tropical island behind"
            width={2231}
            height={957}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The ship deck in the playable build."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="what-i-built" title="What I built">
          <CardGrid items={contributions} columns={2} />
        </Section>

        <Section
          id="rescope"
          title="Rescoping mid-semester"
          intro={
            <p>
              Midway through, a teammate left the class. That forced a full scope reset and moved more of the implementation, testing and
              delivery onto me. Instead of over-promising, I narrowed the project to a working multiplayer slice we could finish and test.
            </p>
          }
        >
          <BulletList items={rescope} />
          <ActionLinks
            links={[
              { href: `${DOCS}/guilty-as-arrr-gdd-original.docx`, label: 'Original GDD (Word)' },
              { href: `${DOCS}/guilty-as-arrr-gdd-rescoped.docx`, label: 'Rescoped GDD (Word)' },
              { href: `${DOCS}/guilty-as-arrr-dgc-community.docx`, label: 'Community notes (Word)' },
            ]}
          />
        </Section>

        <Section id="playtests" title="Playtests">
          <Split
            media={
              <Figure caption="A tester used collision seams to climb the rigging, then walked along a rope.">
                <LightboxImage
                  src="/images/GuiltyAsArr_Playtest.png"
                  alt="Playtester exploring ship traversal routes and collision boundaries"
                  width={1031}
                  height={1029}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <p>
              My favourite part of development is watching people either play the intended loop or break it creatively. In one session a tester
              climbed higher than we expected using collision seams, then walked a rope like a true pirate.
            </p>
            <p>
              <strong>Feature, not a bug</strong>, and useful data for navigation boundaries, movement readability and player freedom.
            </p>
            <p>I also ran a project social account to share progress and collect playtest feedback.</p>
          </Split>
          <DeepDive summary="More screenshots">
            <MediaGrid>
              <Figure caption="The ship hold: warm light and geometry players used in unexpected ways.">
                <LightboxImage src={`${IMG}/ship-interior.png`} alt="Ship hold interior with stacked cannonballs" width={2242} height={945} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="The ship scene in the Unity editor.">
                <LightboxImage src={`${IMG}/ship-editor.png`} alt="Unity editor with the pirate ship scene" width={3608} height={1394} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="The ocean level the ship travels through.">
                <LightboxImage src={`${IMG}/level-ocean.png`} alt="Ocean level with dark rock formations in the Unity editor" width={4417} height={1393} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
              <Figure caption="The project's X profile for community updates.">
                <LightboxImage src="/images/GuiltyAsArr_XProfile.png" alt="Guilty As Arrr X profile" width={2048} height={893} className="h-auto w-full" roundedClassName="rounded-none" />
              </Figure>
            </MediaGrid>
          </DeepDive>
        </Section>

        <Section
          id="outcome"
          title="Outcome"
          intro={
            <p>
              A testable multiplayer slice that proved the social loop and stayed realistic after the team shrank. The lesson was production
              judgement: with less capacity, I traded feature breadth for execution quality and still shipped something coherent and testable.
            </p>
          }
        />
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
