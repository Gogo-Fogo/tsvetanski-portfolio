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
  Split,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'shift-culture-vr' as const;

export const metadata = projectMetadata(
  slug,
  'A VR dirt-bike safety prototype for B-360, a Baltimore youth STEM nonprofit, built to run on low-cost mobile VR for first-time users.'
);

const glance = [
  { label: 'My role', value: 'Technical implementation, VR interaction flow, gameplay feel and comfort testing' },
  { label: 'Team', value: "Zefran Jehle and Lewis Plested, in Dr. Elka Cahn's community game-design class" },
  { label: 'Client', value: 'B-360, a Baltimore youth STEM nonprofit' },
  { label: 'Result', value: 'Reviewed in person with B-360; testers reported no motion sickness during the session' },
] as const;

const loop = [
  'Inspect a dirt bike in a workshop to learn its parts.',
  'Answer short quiz prompts on safety and bike knowledge.',
  'Test-ride the bike in first person.',
];

const constraints = [
  {
    title: 'Affordable hardware',
    body: 'Built for Google Cardboard-style mobile VR, not expensive headsets, so it could run in real workshops.',
  },
  {
    title: 'Comfort first',
    body: 'Camera behaviour, movement and pacing tuned to reduce sickness for people trying VR for the first time.',
  },
  {
    title: 'Useful to the client',
    body: 'The goal was a prototype B-360 could evaluate for its workshops and outreach, not a class demo.',
  },
];

const process = [
  'Regular class critiques and team check-ins kept the scope under control.',
  'Desktop and mobile test loops caught comfort, clarity and stability problems early.',
  'We kept revising the UI, onboarding and interactions so first-time users could follow along.',
];

export default function ShiftCultureVrPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A VR dirt-bike safety prototype for B-360, a Baltimore youth STEM nonprofit. It had to run on cheap
            phone-based VR and be comfortable for first-time users. I built the technical side: the VR interaction flow, the riding feel and
            the comfort tuning.
          </p>
        }
        actions={
          <ActionLinks
            links={[
              { href: 'https://www.ubalt.edu/about/newsroom/ubalt-stories-community-game-design.cfm', label: 'UBalt news story (Jan 30, 2026)', primary: true },
              { href: 'https://b360baltimore.org/', label: 'About B-360' },
            ]}
          />
        }
        hero={
          <LightboxImage
            src="/images/B360_bike_simulator.png"
            alt="First-person riding view in the B-360 VR dirt-bike simulator"
            width={1920}
            height={895}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="The riding view we tuned for readability, obstacle awareness and comfort."
        glance={glance}
      />

      <CaseStudyBody>
        <Section
          id="brief"
          title="The brief"
          intro={
            <p>
              The University of Baltimore newsroom featured the class collaboration on January 30, 2026. Our prototype had to reflect
              B-360&apos;s mission, run on affordable mobile VR, and make sense in a workshop.
            </p>
          }
        >
          <CardGrid items={constraints} />
          <Figure caption="B-360 riders. Photo: University of Baltimore newsroom.">
            <LightboxImage
              src="/images/B360_dirtbike_riders.jpg"
              alt="B-360 dirt-bike riders in Baltimore"
              width={1600}
              height={900}
              className="h-auto w-full"
              roundedClassName="rounded-none"
            />
          </Figure>
        </Section>

        <Section id="prototype" title="The prototype">
          <Split
            media={
              <Figure caption="The menu and onboarding keep first-time players oriented before the workshop and riding sections.">
                <LightboxImage
                  src="/images/B360_mainmmenu.png"
                  alt="Main menu of the VR prototype"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <p>
              <strong>The player loop:</strong>
            </p>
            <BulletList items={loop} />
          </Split>
          <MediaGrid>
            <Figure caption="The low-cost phone headset we designed for.">
              <LightboxImage
                src="/images/B360_budget_phoneVR.png"
                alt="Low-cost mobile VR headset used for the prototype"
                width={1600}
                height={900}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Development and team testing.">
              <LightboxImage
                src="/images/B360_dev_vr.jpeg"
                alt="Development preview of the B-360 VR prototype"
                width={1600}
                height={900}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
          <Prose>
            <p>
              <strong>How we worked:</strong>
            </p>
          </Prose>
          <BulletList items={process} />
        </Section>

        <Section
          id="outcome"
          title="Outcome"
          intro={
            <>
              <p>
                We showed B-360 a working prototype at our final in-person meeting and watched them play it. Nobody reported motion sickness,
                which mattered a lot for a low-cost phone VR build, and the session showed how the project could fit real workshops.
              </p>
              <p>
                The semester ended before the final cross-platform version was finished. In March 2026, Zefran and I planned to keep developing
                it through summer 2026, aiming for a cleaner build on PC, Android phones and Meta Quest with better onboarding and polish.
              </p>
              <p>
                It taught me to judge VR decisions by usefulness, comfort and access rather than novelty, and what working with a real client
                is like.
              </p>
            </>
          }
        >
          <Figure caption="Community volunteering connected to the outreach side of the project.">
            <LightboxImage
              src="/images/B360_volunteering_baltimore.jpeg"
              alt="Community volunteering in Baltimore tied to the B-360 collaboration"
              width={1600}
              height={900}
              className="h-auto w-full"
              roundedClassName="rounded-none"
            />
          </Figure>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
