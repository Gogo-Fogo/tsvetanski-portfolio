import Breadcrumbs from '@/components/breadcrumbs';
import LightboxImage from '@/components/lightbox-image';

export default function TheLastPaycheckPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/career' },
              { label: 'The Last Paycheck' },
            ]}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mt-4">The Last Paycheck</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Solo Project · Narrative + Systems Design · Dystopian Simulation (2050)
          </p>
        </header>

        <section className="flex flex-col gap-12 md:gap-16">
          {/* Hero Banner */}
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <div className="aspect-video w-full">
              <LightboxImage
                src="/images/TheLastPaycheck_Banner.png"
                alt="The Last Paycheck project banner"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                roundedClassName="rounded-none"
              />
            </div>
          </div>

          {/* Project Premise & Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Premise</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                The Last Paycheck is a game design document exploring poverty, unstable labor, and emotional survival in a dystopian
                2050 America. The player must support their child while navigating job insecurity, inflation pressure, and high-risk
                daily decisions.
              </p>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Focus</h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Narrative Systems:</span>
                  Designing for social pressure and personal trade-offs in a harsh economic climate.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Economic Mechanics:</span>
                  Modeling unstable income, rising costs, and their impact on daily decisions.
                </li>
                <li>
                  <span className="text-[var(--foreground)] font-medium block mb-1">Emotional Engagement:</span>
                  Focus on parent-child survival stakes and consequence-driven decision loops.
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action for GDD */}
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)] text-center">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Explore the Full Design</h2>
            <a
              href="https://docs.google.com/document/d/1JTBtBdJxqJtGmq32sABKRfg9poBi-yePNI8TkbjgvEI/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
            >
              Read the Game Design Document
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
