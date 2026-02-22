import Breadcrumbs from '@/components/breadcrumbs';

export default function VRInteractionLabCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'VR Interaction Lab' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">VR Interaction Lab</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A focused XR interaction suite exploring hand tracking, precision tasks, and training-grade affordances.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Overview & Project Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Overview</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                This focused XR interaction suite explores hand tracking, precision tasks, and training-grade affordances.
                The goal is to validate interaction patterns for precision work in XR, balancing accuracy, comfort, and training transfer.
              </p>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
              {/* Placeholder for future LightboxImage/Video */}
              <div className="aspect-video w-full flex items-center justify-center bg-[var(--muted)]/20 text-[var(--muted)] text-center p-8">
                <p>Placeholder: Interaction clips, screenshots, and evaluation metrics will go here.</p>
              </div>
            </div>
          </div>

          {/* Key Contributions & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Task-Based Drills:</span>
                  Designed interaction drills to test accuracy and stability for precision work in VR environments.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Hand Tracking Tuning:</span>
                  Adjusted hand tracking thresholds for consistent feedback loops and reliable interaction performance.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Spatial UI Design:</span>
                  Created intuitive spatial UI affordances to minimize cognitive load and enhance user experience.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Iterative User Testing:</span>
                  Refined interactions through rapid user testing and observation, ensuring practical usability.
                </li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Technologies</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- XR Interaction Toolkit</li>
                <li>- Hand tracking</li>
                <li>- Rapid prototyping workflow</li>
              </ul>
            </div>
          </div>

          {/* Outcome */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered interaction patterns and heuristics that inform future training simulations and spatial UX work, establishing a foundation for advanced XR projects.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




