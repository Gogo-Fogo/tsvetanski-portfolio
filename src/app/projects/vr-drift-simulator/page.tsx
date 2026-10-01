import {
  ActionLinks,
  CardGrid,
  CaseStudyHeader,
  CaseStudyShell,
  DeepDive,
  Figure,
  MediaGrid,
  Section,
} from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'vr-drift-simulator' as const;

export const metadata = projectMetadata(
  slug,
  'Drift Immersive: a Unity VR driving prototype with tuned drift handling, a working cockpit and comfort-aware camera behaviour.'
);

const DOCS = '/documents/projects/drift-immersive/recruiter';

const glance = [
  { label: 'My role', value: 'Vehicle handling, XR interaction, cockpit feedback, technical structure, debugging and UX evaluation' },
  { label: 'Built with', value: 'Unity, C#, VR interaction systems, vehicle physics' },
  { label: 'Challenge', value: 'Expressive drift handling with stable controls, readable instruments and a comfortable camera' },
  { label: 'Result', value: 'Playable drift prototype plus a GDD, UI analysis, code-quality report and annotated deck' },
] as const;

const contributions = [
  {
    title: 'Drift handling',
    body: 'Iterated traction response and drift behaviour until the car felt expressive but controllable.',
  },
  {
    title: 'Cockpit interaction',
    body: 'Steering and speed feedback inside the cockpit, built so attention stays on the road.',
  },
  {
    title: 'Project structure',
    body: 'Modules organised for maintainability while gameplay kept changing.',
  },
  {
    title: 'UX evaluation',
    body: 'Documented control response and friction in cockpit layout, gear feedback and camera comfort.',
  },
];

const fixes = [
  {
    title: 'Steering wheel conflicts',
    body: 'The wheel fought other transforms. I rebuilt its local rotation so it follows input cleanly.',
  },
  {
    title: 'Speedometer drift',
    body: 'Live speed is normalised to a 0–1 range and the needle rotation clamped, so the gauge stays stable.',
  },
  {
    title: 'Camera jitter in turns',
    body: 'Decoupled the XR camera from the car body to reduce rotational jitter during turns.',
  },
];

export default function VrDriftSimulatorPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            Drift Immersive is a VR driving prototype about one thing: making a drift feel good without making you sick. I tuned the vehicle
            handling, built the cockpit interaction, and debugged the camera and instruments.
          </p>
        }
        actions={
          <ActionLinks
            links={[
              { href: 'https://youtu.be/wYnWfsZomgk', label: 'Watch the demo', primary: true },
              { href: `${DOCS}/drift-immersive-annotated-deck.pdf`, label: 'Annotated deck (PDF)' },
            ]}
          />
        }
        hero={
          <div className="aspect-video">
            <LightboxVideo
              embedUrl="https://www.youtube.com/embed/wYnWfsZomgk"
              thumbnailUrl="/images/DriftImmersive_Banner.png"
              title="Drift Immersive level demo"
              popupCaption="Level demo: VR driving, interaction flow and drift handling."
              className="h-full w-full object-cover"
              roundedClassName="rounded-none"
            />
          </div>
        }
        heroCaption="Level demo. Plays here or on YouTube."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="contribution" title="What I built">
          <CardGrid items={contributions} columns={2} />
        </Section>

        <Section
          id="debugging"
          title="Making it stable"
          intro={<p>Most of the work was debugging the cockpit so it felt solid in a headset. Three fixes mattered most:</p>}
        >
          <CardGrid items={fixes} />
          <DeepDive summary="Debugging and instrument slides">
            <Figure caption="Problem-to-solution breakdown: local rotation rebuild, speed normalisation and XR camera decoupling.">
              <LightboxImage
                src="/images/DriftImmersive_TechnicalDebugging.jpg"
                alt="Challenges vs solutions slide from Drift Immersive"
                width={1800}
                height={1013}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="Speedometer calibration: speed mapped to 0–1 and a clamped needle.">
              <LightboxImage
                src="/images/DriftImmersive_Speedometer.jpg"
                alt="Responsive speedometer slide from Drift Immersive"
                width={2880}
                height={1620}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </DeepDive>
        </Section>

        <Section id="stills" title="In the cockpit">
          <MediaGrid>
            <Figure caption="First-person view used to judge lane readability and the sense of speed.">
              <LightboxImage
                src="/images/drift-immersive-banner.jpg"
                alt="First-person drift view entering a city highway curve at night"
                width={766}
                height={351}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
            <Figure caption="City layout from the design document, used to plan lane spacing, road edges and high-speed collisions.">
              <LightboxImage
                src="/images/projects/drift-immersive/city-layout-from-gdd.png"
                alt="Night city street layout from the Drift Immersive design document"
                width={706}
                height={282}
                className="h-auto w-full"
                roundedClassName="rounded-none"
              />
            </Figure>
          </MediaGrid>
        </Section>

        <Section id="documents" title="Documents" intro={<p>Design rationale, analysis and code structure for the prototype.</p>}>
          <ActionLinks
            links={[
              { href: `${DOCS}/drift-immersive-gdd.pdf`, label: 'Game design document (PDF)' },
              { href: `${DOCS}/drift-immersive-gameplay-ui-analysis.pdf`, label: 'Gameplay and UI analysis (PDF)' },
              { href: `${DOCS}/drift-immersive-code-quality-report.pdf`, label: 'Code-quality report (PDF)' },
              { href: `${DOCS}/drift-immersive-annotated-deck.pdf`, label: 'Annotated deck (PDF)' },
            ]}
          />
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
