import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import ProjectAtAGlance from '@/components/project-at-a-glance';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legion Go Console Dock',
  description:
    'A 3D-printable dock for the Lenovo Legion Go handheld with active cooling, rear cable routing, and NFC "game cards" that launch PC games.',
};

const snapshotItems = [
  { label: 'My role', value: 'Solo hardware design: requirements, Blender CAD, print preparation and wiring plan' },
  { label: 'Status', value: 'Print-ready parts sliced and validated; printing and wiring are next' },
  { label: 'Tools', value: 'Blender, OrcaSlicer, Creality K1 Max, PN532 NFC reader, Zaparoo' },
  { label: 'Size', value: '270 × 188 × 34 mm chassis with a removable 266 × 184 mm service lid' },
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
    <main className="min-h-screen bg-[var(--background)] p-8 font-sans text-[var(--foreground)] md:p-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Legion Go Console Dock' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">
            Hardware Design · Blender CAD · 3D Printing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Legion Go Console Dock</h1>
          <p className="mt-3 max-w-3xl text-[var(--muted)]">
            A console-style dock for the Lenovo Legion Go handheld PC. It cools the device while docked, hides the TV and charging
            cables, and reads NFC-tagged cards that launch games, so a PC handheld feels like plugging in a cartridge.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <ProjectAtAGlance items={snapshotItems} />

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-strong)]">
            <LightboxImage
              src="/images/projects/legion-go-console-dock/dock-exploded-render.jpg"
              alt="Exploded render of the dock: the removable service lid lifted above the chassis, with the NFC reader holder highlighted in purple"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-none"
              popupCaption="Print-ready parts: the service lid lifted off the chassis, with the NFC reader holder in purple."
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
            <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Systems</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {systems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)]">
              <h2 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Process</h2>
              <div className="grid gap-4">
                {process.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
              <LightboxImage
                src="/images/projects/legion-go-console-dock/dock-chassis-render.jpg"
                alt="Render of the dock chassis with the lid removed, showing the internal fan bay, cable channels and NFC reader pocket"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
                roundedClassName="rounded-none"
                popupCaption="The chassis with the lid off: fan bay, cable channels and reader pocket."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
