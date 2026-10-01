import { CardGrid, CaseStudyHeader, CaseStudyShell, Figure, Section, Split } from '@/components/case-study/case-study';
import { CaseStudyBody, CaseStudyFooter } from '@/components/case-study/case-study-layout';
import LightboxImage from '@/components/lightbox-image';
import { projectMetadata } from '@/content/project-helpers';

const slug = 'legion-go-console-dock' as const;

export const metadata = projectMetadata(
  slug,
  'A 3D-printable dock for the Lenovo Legion Go handheld with active cooling, rear cable routing, and NFC "game cards" that launch PC games.'
);

const glance = [
  { label: 'My role', value: 'Solo hardware design: requirements, Blender CAD, print preparation and wiring plan' },
  { label: 'Built with', value: 'Blender, OrcaSlicer, Creality K1 Max, PN532 NFC reader, Zaparoo' },
  { label: 'Size', value: '270 × 188 × 34 mm chassis with a removable 266 × 184 mm service lid' },
  { label: 'Status', value: 'Print-ready parts sliced and validated; printing and wiring are next' },
] as const;

const systems = [
  {
    title: 'Active cooling',
    body: 'A 70 mm fan sits under a 181 × 46 mm opening lined up with the handheld’s intake. The air path is designed as a sealed pressure chamber with a replaceable foam gasket, modeled on high-pressure laptop coolers, with a front knob for fan speed.',
  },
  {
    title: 'Cable routing',
    body: 'Separate rear channels carry USB-C charging and HDMI out, so the handheld drops in and plays on a TV with nothing hanging off the sides.',
  },
  {
    title: 'NFC game cards',
    body: 'microSD-to-SD adapters get NFC stickers and become physical “cartridges”. A PN532 reader inside the dock reads the tag, and Zaparoo launches the matching Steam game.',
  },
  {
    title: 'Serviceable by design',
    body: 'The lid comes off, the fan is a bought part rather than a printed one, and the NFC reader sits in its own holder behind a thin non-metal wall so it can still read through the shell.',
  },
];

const process = [
  {
    title: 'Measure before modeling',
    body: 'I documented every bought part (fan, NFC reader, tags, adapters, storage cases) with its specs and what it means for the design, and marked every dimension in the scene as verified or assumed.',
  },
  {
    title: 'Milestones over undo',
    body: 'Each risky change got a named milestone file first. That made it cheap to try fixes to the rear vents and HDMI frame, compare them, and roll back the ones that made things worse.',
  },
  {
    title: 'Validate the print, not the render',
    body: 'Parts were checked for watertight geometry and wall thickness, then sliced for the K1 Max at 0.2 mm with slim tree supports. A voxel-remesh shortcut that looked fine but failed validation was rejected and labeled “do not print”.',
  },
];

export default function LegionGoConsoleDockPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader
        slug={slug}
        lede={
          <p>
            A console-style dock for the Lenovo Legion Go handheld PC. It cools the device while docked, hides the TV and charging cables, and
            reads NFC-tagged cards that launch games, so a PC handheld feels like plugging in a cartridge.
          </p>
        }
        hero={
          <LightboxImage
            src="/images/projects/legion-go-console-dock/dock-exploded-render.jpg"
            alt="Exploded render of the dock: the removable service lid above the chassis, with the NFC reader holder in purple"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full"
            roundedClassName="rounded-none"
          />
        }
        heroCaption="Print-ready parts: the service lid lifted off the chassis, with the NFC reader holder in purple."
        glance={glance}
      />

      <CaseStudyBody>
        <Section id="systems" title="What it does">
          <CardGrid items={systems} columns={2} />
        </Section>

        <Section id="process" title="How I worked">
          <Split
            media={
              <Figure caption="The chassis with the lid off: fan bay, cable channels and reader pocket.">
                <LightboxImage
                  src="/images/projects/legion-go-console-dock/dock-chassis-render.jpg"
                  alt="Dock chassis with the lid removed, showing the fan bay, cable channels and NFC reader pocket"
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                  roundedClassName="rounded-none"
                />
              </Figure>
            }
          >
            <CardGrid items={process} columns={1} />
          </Split>
        </Section>
      </CaseStudyBody>

      <CaseStudyFooter slug={slug} />
    </CaseStudyShell>
  );
}
