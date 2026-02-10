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

        <section className="grid gap-8">
          <div className="border border-dashed border-[var(--border)] bg-[var(--surface)]/40 rounded-2xl p-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Media & Metrics</h2>
            <p className="text-sm text-[var(--muted)]">
              Placeholder for prototype captures, comfort metrics, and iteration notes.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Rapidly validate comfort-first interaction loops through short-form microgames, optimizing spatial UI and
              input feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Designed short interaction loops focused on clarity and comfort.</li>
                <li>- Tuned spatial UI feedback and hand/controller affordances.</li>
                <li>- Iterated on motion and locomotion comfort settings.</li>
                <li>- Documented learnings for future XR prototypes.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- XR Interaction Toolkit</li>
                <li>- Spatial UI prototyping</li>
                <li>- Rapid playtesting</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Produced a reusable comfort checklist and interaction heuristics that feed into larger XR experiences.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




