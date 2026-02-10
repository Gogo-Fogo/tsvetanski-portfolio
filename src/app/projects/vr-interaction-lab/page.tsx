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

        <section className="grid gap-8">
          <div className="border border-dashed border-[var(--border)] bg-[var(--surface)]/40 rounded-2xl p-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Media & Metrics</h2>
            <p className="text-sm text-[var(--muted)]">
              Placeholder for interaction clips, screenshots, and evaluation metrics.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Validate interaction patterns for precision work in XR, balancing accuracy, comfort, and training transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Designed task-based interaction drills for accuracy and stability.</li>
                <li>- Tuned hand tracking thresholds for consistent feedback loops.</li>
                <li>- Created spatial UI affordances to minimize cognitive load.</li>
                <li>- Iterated via rapid user testing and observation.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- XR Interaction Toolkit</li>
                <li>- Hand tracking</li>
                <li>- Rapid prototyping workflow</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered interaction patterns and heuristics that inform future training simulations and spatial UX work.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




