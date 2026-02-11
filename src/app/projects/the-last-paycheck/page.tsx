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

        <section className="grid gap-8">
          <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-150 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]">
            <LightboxImage
              src="/images/TheLastPaycheck_Banner.png"
              alt="The Last Paycheck project banner"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              roundedClassName="rounded-2xl"
            />
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Premise</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The Last Paycheck is a game design document exploring poverty, unstable labor, and emotional survival in a dystopian
              2050 America. The player must support their child while navigating job insecurity, inflation pressure, and high-risk
              daily decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Design Focus</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Narrative systems for social pressure and personal trade-offs</li>
                <li>- Economic mechanics around unstable income and rising costs</li>
                <li>- Emotional engagement through parent-child survival stakes</li>
                <li>- Consequence-driven decision loops across multiple timelines</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Project Type</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                This is currently a full design document project (GDD), built to validate narrative + systems direction before moving
                into prototype production.
              </p>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Read the GDD</h2>
            <a
              href="https://docs.google.com/document/d/1JTBtBdJxqJtGmq32sABKRfg9poBi-yePNI8TkbjgvEI/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--background)] shadow-[var(--shadow)] transition-all duration-300 hover:bg-transparent hover:text-[var(--foreground)] hover:[box-shadow:var(--shadow-strong),0_0_22px_var(--accent-cyan)]"
            >
              Open GDD
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
