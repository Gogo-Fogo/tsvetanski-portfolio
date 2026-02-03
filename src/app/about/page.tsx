import Link from 'next/link';
import DegreeGraph from '@/components/degree-graph';

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
            <h1 className="text-4xl font-bold tracking-tight mt-4">ABOUT</h1>
        </header>

        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Profile</h2>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="hidden lg:block">
              <DegreeGraph className="h-[460px] w-full" />
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur rounded-2xl p-8 shadow-[var(--shadow)]">
              <h3 className="text-2xl font-bold tracking-tight mb-4">T-Shaped Developer</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Bridging the gap between <span className="text-[var(--foreground)] font-medium">Technical Engineering</span> and <span className="text-[var(--foreground)] font-medium">Human Factors</span>. 
                I specialize in rapid, high-fidelity spatial interaction prototyping, leveraging AI-assisted development workflows to deliver 
                simulation-grade results at startup speeds.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Commercial Success</h2>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl px-8 py-6 shadow-[var(--shadow)]">
            <h3 className="text-3xl font-bold italic">Shinobi Story</h3>
            <p className="text-5xl font-black mt-3 tracking-tight">$110,000.00 REVENUE</p>
            <p className="mt-4 text-[var(--muted)] max-w-md">
              Led development and systems design. Shipped and monetized a high-engagement interactive experience with sustained live-ops growth.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-bold text-lg">M.S. Interaction Design & Information Architecture (Accelerated)</h3>
                  <p className="text-[var(--muted)] font-mono text-[10px] uppercase tracking-[0.2em]">Incoming Spring 2026</p>
                </div>
                <p className="text-[var(--muted)] text-sm mt-3">
                  University of Baltimore · HCI, user research, complex systems design.
                </p>
                <div className="mt-4 border-l-2 border-[var(--border)] pl-4 py-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">Key Project</p>
                  <p className="text-sm font-semibold text-[var(--foreground)]">US Military Client Simulation</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--foreground)]">B.S. Simulation and Game Design</span> — University of Baltimore (Jan 2025)
                </li>
                <li>
                  <span className="font-semibold text-[var(--foreground)]">B.A. Communication and Media Studies</span> — University of Maryland (Jan 2023)
                </li>
                <li>
                  <span className="font-semibold text-[var(--foreground)]">A.A. Digital Animation</span> — Montgomery College (Aug 2020–Jul 2023)
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Core Identity</h2>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Focused on human-centered simulation systems that balance performance, clarity, and usability in spatial workflows.
                Detailed skills and experience live in the Resume section.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Certifications</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Google Ads Search Certification</li>
              <li>- Design Powered by Data: UX Web Analytics</li>
              <li>- User Experience (UX) for Non-Designers</li>
              <li>- "How to become a game developer?"</li>
              <li>- Bulgarian Language Proficiency (CEFR B2)</li>
            </ul>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Honors & Awards</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Montgomery College Excellence in Equity Award (Digital Art)</li>
              <li>- Phi Theta Kappa Honor Society</li>
              <li>- II International Children’s Art Contest (Turgenev)</li>
              <li>- “Stefan Gechev” Literature Competition Recognition</li>
            </ul>
          </div>
        </section>

        <section className="mt-24 border-t border-[var(--border)] pt-16">
          <div className="flex flex-wrap gap-4">
            <Link href="/resume" className="inline-block rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-[var(--foreground)] transition-colors">
              View Resume
            </Link>
            <Link href="/resume.pdf" target="_blank" className="inline-block rounded-full border border-[var(--foreground)] text-[var(--foreground)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Download PDF
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}












