import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';
import LightboxVideo from '@/components/lightbox-video';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VR Interaction Lab | Georgi Tsvetanski",
  description: "Physics-driven VR prototypes in Unity: a B-360 dirt bike safety simulator for accessible mobile headsets and a night-city drift driving experience.",
};


const driftDemo = {
  url: 'https://youtu.be/wYnWfsZomgk',
  embedUrl: 'https://www.youtube.com/embed/wYnWfsZomgk',
  thumbnailUrl: '/images/drift-immersive-banner.jpg',
};

const driftGameplayPOVImage = {
  src: '/images/drift-immersive-banner.jpg',
  alt: 'First-person drift view with yellow sports car entering a city highway curve at night',
  width: 766,
  height: 351,
};

const driftGameplayChaseImage = {
  src: '/images/DriftImmersive_Banner.png',
  alt: 'Third-person chase camera view of yellow sports car drifting on a lit city expressway',
  width: 1366,
  height: 768,
};

const driftDocuments = [
  {
    href: '/documents/projects/drift-immersive/recruiter/drift-immersive-gdd.pdf',
    label: 'Game Design Document',
  },
  {
    href: '/documents/projects/drift-immersive/recruiter/drift-immersive-gameplay-ui-analysis.pdf',
    label: 'Gameplay & UI Analysis',
  },
  {
    href: '/documents/projects/drift-immersive/recruiter/drift-immersive-code-quality-report.pdf',
    label: 'Code Quality Report',
  },
  {
    href: '/documents/projects/drift-immersive/recruiter/drift-immersive-annotated-deck.pdf',
    label: 'Annotated Deck',
  },
];

const driftDebuggingImage = {
  src: '/images/DriftImmersive_TechnicalDebugging.jpg',
  alt: 'Challenges vs Solutions: Technical Debugging slide from Drift Immersive',
  width: 1800,
  height: 1013,
};

const driftSpeedometerImage = {
  src: '/images/DriftImmersive_Speedometer.jpg',
  alt: 'Interior Instruments: The Responsive Speedometer slide from Drift Immersive',
  width: 2880,
  height: 1620,
};

const driftCityCollisionSetupImage = {
  src: '/images/projects/drift-immersive/city-layout-from-gdd.png',
  alt: 'Night city street layout from Drift Immersive GDD used for road-boundary and collision-planning reference',
  width: 706,
  height: 282,
};

export default function VRInteractionLabCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'VR Car Drift Simulator' },
            ]}
            className="mb-4"
          />
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Drift Immersive · XR Driving Prototype</p>
          <h1 className="text-4xl font-bold tracking-tight mt-4">VR Car Drift Simulator</h1>
          <p className="text-[var(--muted)] mt-3 max-w-3xl">
            A drift-focused immersive driving prototype combining spatial interaction, vehicle dynamics, and comfort-aware VR handling.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          <div className="rounded-2xl border border-[var(--accent-cyan)]/40 bg-[linear-gradient(145deg,var(--surface),color-mix(in_oklab,var(--surface)_90%,var(--accent-cyan)_10%))] p-8 shadow-[var(--shadow-strong)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]"></span>
                  Featured Case Study
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Drift Immersive: Prototype to Technical Case Pack</h2>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                  A complete case bundle combining playable drift behavior, debugging evidence, and formal documentation for implementation quality and design rationale.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  <li>- Playable drift loop with handling and cockpit feedback tuning.</li>
                  <li>- Structured technical breakdown across debugging and UI analysis.</li>
                  <li>- Recruiter-ready artifacts: GDD, analysis report, code quality report, annotated deck.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={driftDemo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
                  >
                    Watch Demo
                  </a>
                  <a
                    href="/documents/projects/drift-immersive/recruiter/drift-immersive-annotated-deck.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                  >
                    Open Annotated Deck
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
                <div className="relative aspect-video w-full">
                  <LightboxImage
                    src={driftGameplayChaseImage.src}
                    alt={driftGameplayChaseImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    width={driftGameplayChaseImage.width}
                    height={driftGameplayChaseImage.height}
                    className="object-cover"
                    roundedClassName="rounded-none"
                    popupCaption="Featured Drift Immersive gameplay still used in the case study overview."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Drift Immersive is a technical prototype designed to explore realistic drift behavior in VR while keeping controls intuitive and stable.
                The focus was balancing gameplay responsiveness, simulation credibility, and user comfort in prolonged sessions.
              </p>
              <a
                href={driftDemo.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
              >
                Watch Demo on YouTube
              </a>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              <div className="aspect-video w-full">
                <LightboxVideo
                  embedUrl={driftDemo.embedUrl}
                  thumbnailUrl={driftDemo.thumbnailUrl}
                  title="Drift Immersive - Level Demo"
                  popupCaption="Level demo showing VR driving behavior, interaction flow, and drift-focused handling."
                  className="h-full w-full object-cover"
                  roundedClassName="rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Gameplay Stills</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Additional in-engine driving shot from the drift test environment, used to review car stability and curve entry behavior.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <LightboxImage
                src={driftGameplayChaseImage.src}
                alt={driftGameplayChaseImage.alt}
                width={driftGameplayChaseImage.width}
                height={driftGameplayChaseImage.height}
                className="h-full w-full rounded-xl object-cover"
                popupCaption="Chase-camera shot used to review car stability and curve entry behavior."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Vehicle Dynamics Tuning:</span>
                  Iterated car handling, traction response, and drift behavior for controllable but expressive movement.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Immersive Interaction Design:</span>
                  Built UI and interaction flows that keep focus on driving feedback in a spatial VR context.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Technical Architecture:</span>
                  Structured project modules for maintainability while iterating quickly on gameplay systems.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">UX Evaluation:</span>
                  Documented interface behavior and control response — identifying friction points in cockpit layout, gear feedback, and camera comfort.
                </li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Technologies</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity (C#)</li>
                <li>- VR/XR interaction systems</li>
                <li>- Vehicle physics and handling iteration</li>
                <li>- Rapid prototyping and testing workflow</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Challenges vs Solutions: Technical Debugging</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Snapshot of a real debugging pass covering steering wheel transform conflicts, speed normalization, and VR camera jitter during turns.
            </p>
            <LightboxImage
              src={driftDebuggingImage.src}
              alt={driftDebuggingImage.alt}
              width={driftDebuggingImage.width}
              height={driftDebuggingImage.height}
              className="h-auto w-full object-cover"
              popupCaption="Problem-to-solution breakdown used to stabilize cockpit behavior: local rotation rebuild, speed normalization, and XR camera decoupling."
            />
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Interior Instruments: Responsive Speedometer</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Speedometer calibration pass showing the normalization fix that maps live vehicle speed into a stable gauge range.
            </p>
            <LightboxImage
              src={driftSpeedometerImage.src}
              alt={driftSpeedometerImage.alt}
              width={driftSpeedometerImage.width}
              height={driftSpeedometerImage.height}
              className="h-auto w-full object-cover"
              popupCaption="Speedometer slide documenting the normalization pipeline: currentSpeed to 0–1 range mapping, clamped needle rotation, and reliable in-cockpit feedback."
            />
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">City Setup: High-Speed Collision Safety</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              City-environment planning reference from the project documentation, used to validate lane spacing, road boundaries, and high-speed collision behavior.
            </p>
            <LightboxImage
              src={driftCityCollisionSetupImage.src}
              alt={driftCityCollisionSetupImage.alt}
              width={driftCityCollisionSetupImage.width}
              height={driftCityCollisionSetupImage.height}
              className="h-auto w-full object-cover"
              popupCaption="City-layout frame extracted from Drift Immersive documentation and used as a road-boundary/collision-planning reference."
            />
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered a playable drift simulation with documented design rationale, functionality analysis, and code-quality reporting across four recruiter-ready PDFs.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Documents</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Full supporting materials for Drift Immersive, including design, analysis, and code-structure documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              {driftDocuments.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)]"
                >
                  {document.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">POV Drift Readability Shot</h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              POV shot used to evaluate lane readability and drift sensation at speed.
            </p>
            <LightboxImage
              src={driftGameplayPOVImage.src}
              alt={driftGameplayPOVImage.alt}
              width={driftGameplayPOVImage.width}
              height={driftGameplayPOVImage.height}
              className="h-auto w-full rounded-xl object-cover"
              popupCaption="POV shot used to evaluate lane readability and drift sensation at speed."
            />
          </div>
        </section>
      </div>
    </main>
  );
}




