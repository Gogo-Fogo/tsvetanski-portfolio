import Breadcrumbs from '@/components/breadcrumbs';

export default function VRMicrogamesCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'VR Microgames' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">VR Microgames</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Compact VR prototypes emphasizing interaction feel, comfort tuning, and spatial UI feedback loops.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Overview & Project Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                This project focuses on rapidly validating comfort-first interaction loops through short-form microgames.
                The goal is to optimize spatial UI and input feedback for seamless and enjoyable VR experiences.
              </p>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              {/* Placeholder for future LightboxImage/Video */}
              <div className="aspect-video w-full flex items-center justify-center bg-[var(--muted)]/20 text-[var(--muted)] text-center p-8">
                <p>Placeholder: Prototype captures, comfort metrics, and iteration notes will go here.</p>
              </div>
            </div>
          </div>

          {/* Key Contributions & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Interaction Loop Design:</span>
                  Designed short, focused interaction loops emphasizing clarity, comfort, and immediate feedback.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Spatial UI & Input Tuning:</span>
                  Tuned spatial UI feedback and refined hand/controller affordances for intuitive interactions.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Motion & Comfort Settings:</span>
                  Iterated on various motion and locomotion settings to ensure optimal player comfort and reduce VR sickness.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Documented Learnings:</span>
                  Compiled a reusable comfort checklist and interaction heuristics to inform future XR prototypes and larger experiences.
                </li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Technologies</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- XR Interaction Toolkit</li>
                <li>- Spatial UI prototyping</li>
                <li>- Rapid playtesting</li>
              </ul>
            </div>
          </div>

          {/* Outcome */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Produced a reusable comfort checklist and interaction heuristics that feed into larger XR experiences, streamlining future VR development.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




