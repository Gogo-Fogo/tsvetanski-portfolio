import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
            <h1 className="text-4xl font-bold tracking-tight mt-4">BIOMETRICS & BACKGROUND</h1>
        </header>

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

        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Experience Snapshot</h2>
          <div className="grid gap-6">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">QA Tester | Gameplay Analyst</h3>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">Shokuho Mod Team · 2025–Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Structured playtests and bug documentation for AI, combat, and economy systems.</li>
                <li>- Performance monitoring with MSI Afterburner and OBS to track framerate and stutter events.</li>
                <li>- Statistical summaries to support balance decisions and design iteration.</li>
              </ul>
            </div>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">Digital & Visual Media Specialist</h3>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">UMD CPSE · 2024</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>- Led video production, interviews, and field capture for program storytelling.</li>
                <li>- Managed social content strategy and campaign reporting across platforms.</li>
                <li>- Mentored interns and coordinated media coverage for events and demo days.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl">M.S. Interaction Design & Information Architecture (Accelerated)</h3>
                <p className="text-[var(--muted)] font-mono text-xs uppercase tracking-[0.2em]">University of Baltimore (Concurrent Enrollment Spring 2026)</p>
                <p className="mt-3 text-[var(--muted)] max-w-md">
                  Selected for accelerated track with a focus on Human-Computer Interaction, research methods, and complex system design.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl">B.S. Simulation and Game Design</h3>
                <p className="text-[var(--muted)] font-mono text-xs uppercase tracking-[0.2em]">University of Baltimore (Jan 2025)</p>
                <p className="mt-3 text-[var(--muted)] max-w-md">
                  STEM designated. Coding & development track with emphasis on simulation for non-entertainment fields.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl">B.A. Communication and Media Studies</h3>
                <p className="text-[var(--muted)] font-mono text-xs uppercase tracking-[0.2em]">University of Maryland (Jan 2023)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Core Competencies</h2>
            <ul className="space-y-2 font-mono text-sm text-[var(--muted)]">
              <li>- Spatial Interaction Prototyping (Unity/XR)</li>
              <li>- Simulation Engineering & Human Factors</li>
              <li>- AI-Assisted Development & Rapid Prototyping</li>
              <li>- Networked Multiplayer Systems (Photon)</li>
              <li>- User Research & HCI Principles</li>
              <li>- Live-Ops & Product Management</li>
            </ul>
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


