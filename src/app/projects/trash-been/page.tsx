import Breadcrumbs from '@/components/breadcrumbs';

export default function TrashBeenCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'Trash Been' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Trash Been: Urban Logistics</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A system-driven simulation focused on urban waste management, optimized collection routes, and spatial flow analysis.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Simulation Overview</h2>
            <p className="text-sm text-[var(--muted)]">
              Developed as a rapid vertical slice to simulate <span className="text-[var(--foreground)] font-medium">Urban Logistics</span>. 
              The project models waste accumulation across a city grid and challenges the player to optimize collection routes 
              under temporal constraints. As efficiency increases, the environment dynamically transforms, providing real-time 
              feedback on system health.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Create a data-informed simulation loop that validates <span className="text-[var(--foreground)] font-medium">spatial efficiency</span>. 
              The goal was to prove that complex logistics could be gamified into an intuitive, high-engagement interaction model 
              without losing simulation fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Engineered the dynamic waste accumulation and routing system.</li>
                <li>- Designed spatial feedback loops through environmental transformation.</li>
                <li>- Implemented pathfinding and logistics-based scoring algorithms.</li>
                <li>- Conducted rapid iteration sprints with focus on system readability.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity</li>
                <li>- Visual scripting + template reverse engineering</li>
                <li>- Rapid iteration + playtest loop</li>
                <li>- Gameplay/UI prototyping</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Outcome</h2>
            <p className="text-[var(--muted)] text-sm">
              Delivered a complete, playable prototype with tested mechanics and a clear roadmap for replayability: leaderboards,
              procedural variation, and animated narrative beats.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}



