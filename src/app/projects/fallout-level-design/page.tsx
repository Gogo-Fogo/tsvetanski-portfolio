import Link from 'next/link';

export default function FalloutLevelDesignCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/career" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO THE LAB
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">Fallout Team Level Design</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A collaborative level design sprint focused on spatial flow, environmental storytelling, and player guidance.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="border border-dashed border-[var(--border)] bg-[var(--surface)]/40 rounded-2xl p-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Media & Metrics</h2>
            <p className="text-sm text-[var(--muted)]">
              Placeholder for greybox shots, layout diagrams, or team feedback notes.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Goal</h2>
            <p className="text-[var(--muted)] text-sm">
              Build a readable, atmospheric level that supports team collaboration while guiding players through exploration,
              encounter beats, and narrative reveals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Key Contributions</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Crafted player flow routes and encounter pacing.</li>
                <li>- Designed environmental storytelling cues and spatial landmarks.</li>
                <li>- Coordinated layout iteration with the art and design team.</li>
                <li>- Tested readability and navigation through quick walkthroughs.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Tools & Tech</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Unity / Level blocking</li>
                <li>- Greybox + playtest iteration</li>
                <li>- Collaboration workflows</li>
              </ul>
            </div>
          </div>

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



