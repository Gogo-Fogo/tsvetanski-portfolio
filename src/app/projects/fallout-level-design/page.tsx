import Breadcrumbs from '@/components/breadcrumbs';

export default function FalloutLevelDesignCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Fallout Level Design' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Fallout Mod (Level Design)</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Overhauled game level demonstrating world-building, environmental storytelling, and adaptation of existing IP within a team collaboration workflow.
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Overview & Project Goal */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Overview</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              This project demonstrates the ability to work within an established IP and technical framework. The goal was to build an atmospheric,
              playable level that maintains <span className="text-[var(--foreground)] font-medium">brand consistency</span> while introducing
              fresh encounter beats and spatial flow.
            </p>
          </div>

          {/* Core Contributions & Narrative Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Spatial Storytelling</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                Focused on <span className="text-[var(--foreground)] font-medium">environmental narrative density</span>—using layout and set-dressing
                to communicate history and player objectives without explicit dialogue.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Crafted player flow routes and encounter pacing.</li>
                <li>- Designed environmental storytelling cues and spatial landmarks.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Collaboration & Iteration</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Coordinated layout iteration with the art and design team.</li>
                <li>- Tested readability and navigation through quick walkthroughs.</li>
                <li>- Utilized Unity for level blocking, greybox prototyping, and playtest iteration.</li>
              </ul>
            </div>
          </div>

          {/* Outcome */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered a cohesive level layout with improved player guidance and stronger narrative beats through space.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




