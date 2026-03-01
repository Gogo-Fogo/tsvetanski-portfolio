import Link from 'next/link';
import DegreeGraph from '@/components/degree-graph';
import { MotionPage } from '@/components/motion-safe';

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <MotionPage className="max-w-5xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
            <h1 className="text-4xl font-bold tracking-tight mt-4">ABOUT</h1>
        </header>

        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Profile</h2>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="relative order-2 lg:order-1">
              <DegreeGraph
                className="h-[220px] lg:h-[460px] w-full transition-all duration-300"
              />
            </div>
            <div className="order-1 lg:order-2 border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur rounded-2xl p-8 shadow-[var(--shadow)]">
              <h3 className="text-2xl font-bold tracking-tight mb-4">T-Shaped Developer</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Bridging the gap between <span className="text-[var(--foreground)] font-medium">Technical Engineering</span> and <span className="text-[var(--foreground)] font-medium">Human Factors</span>. 
                I specialize in rapid, high-fidelity spatial interaction prototyping. AI-assisted workflows let me move at startup speed without sacrificing engineering rigor.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mt-3">
                I build immersive systems and responsive gameplay in Unity (C#), from physics-driven prototypes to commercial outcomes,
                with strong grounding in QA, live-ops, and player-centered delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Commercial Success</h2>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl px-8 py-6 shadow-[var(--shadow)]">
            <h3 className="text-3xl font-bold italic">Shinobi Story</h3>
            <p className="text-5xl font-black mt-3 tracking-tight">$110,000 REVENUE</p>
            <p className="mt-4 text-[var(--muted)] max-w-md">
              Led development and systems design. Shipped weekly content updates, ran live events, and managed the community pipeline.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-bold text-lg">Accelerated B.S./M.S. Pathway (High-Performance Track)</h3>
                  <p className="text-[var(--muted)] font-mono text-[10px] uppercase tracking-[0.2em]">Jan 2025–May 2027</p>
                </div>
                <p className="text-[var(--muted)] text-sm mt-3">
                  University of Baltimore · Simulation & Game Design + Interaction Design.
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
                  <span className="font-semibold text-[var(--foreground)]">B.A. Communication and Media Studies</span> — University of Maryland (Jan 2023–Dec 2024)
                </li>
                <li>
                  <span className="font-semibold text-[var(--foreground)]">Associate&apos;s Degree, Digital Animation (AAS)</span> — Montgomery College (Aug 2020–Jul 2023)
                </li>
                <li>
                  <span className="font-semibold text-[var(--foreground)]">Diploma of Education, Bulgarian Language, Literature, and History</span> — Bulgarian Educational and Cultural Center &quot;Kliment Ohridski,&quot; Washington DC (2015–2019)
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Core Identity</h2>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                The specifics are in the Resume. The work is in the projects.
              </p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)] mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><span className="text-[var(--foreground)] font-medium">Bulgarian</span> — Native or bilingual proficiency</li>
                <li><span className="text-[var(--foreground)] font-medium">English</span> — Native or bilingual proficiency</li>
                <li><span className="text-[var(--foreground)] font-medium">Chinese</span> — Elementary proficiency</li>
                <li><span className="text-[var(--foreground)] font-medium">Russian</span> — Elementary proficiency</li>
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)] mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Selected Skills</h3>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- XR & Simulation: Virtual Reality (VR), Unity, rapid prototyping, playtesting & iteration.</li>
                <li>- Game Production: bug tracking, game balancing, performance monitoring, quality assurance.</li>
                <li>- Design & UX: user experience (UX), interaction/system design, storyboarding, Figma/Adobe XD.</li>
                <li>- Media & Marketing: video production/editing, social media management, analytics, content creation.</li>
                <li>- Collaboration: product/project management, leadership, mentoring, team coordination.</li>
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)] mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>- Game Engines: Unity, Unreal Engine</li>
                <li>- Video & Design: Adobe Premiere Pro, After Effects, Photoshop, Illustrator</li>
                <li>- 3D: Autodesk Maya, ZBrush</li>
                <li>- Workflow: Notion, Trello, GitHub/GitLab</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Certifications</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Design Powered by Data: Getting Started with UX Web Analytics (LinkedIn, Dec 2024)</li>
              <li>- Google Ads Search Certification (Skillshop, Dec 2024–Dec 2025, ID: 126278099)</li>
              <li>- Fundamentals of Social Media (Muck Rack, Jun 2024, ID: s6fmbrwpdfca)</li>
              <li>- Making a Short Film: Start to Finish (LinkedIn, Dec 2023)</li>
              <li>- Learning Notion (LinkedIn, Aug 2023)</li>
              <li>- User Experience (UX) for Non-Designers (LinkedIn, May 2023)</li>
              <li>- &quot;How to become a game developer?&quot; (ARC Academy, Feb 2022)</li>
              <li>- Bulgarian Language Proficiency (CEFR Level B2) (Sofia University St. Kliment Ohridski, May 2019)</li>
            </ul>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Honors & Awards</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Dean’s List – Honors (College of Public Affairs / Yale Gordon College of Arts and Sciences, Jan 2026)</li>
              <li>- Helen P. Denit Honors Program Scholar (University of Baltimore, Jan 2025)</li>
              <li>- Dean’s List (3 Semesters) — Spring 2023, Fall 2023, Spring 2024 (University of Maryland, Jun 2024)</li>
              <li>- Honors Program Member & NSCS Nominee (University of Maryland, Jul 2023)</li>
              <li>- Dean’s List (Full Year 2022) (Montgomery College, Apr 2023)</li>
              <li>- Montgomery College Excellence in Equity Award for Digital Art (Apr 2021)</li>
              <li>- Phi Theta Kappa Honor Society (Apr 2021)</li>
              <li>- 2018 SERT WATTS UP? Poster Contest (MCPS School Energy & Recycling Team, May 2018)</li>
              <li>- “Stefan Gechev” 20th Literature Competition — II Place (State Agency for Bulgarians Abroad, Jul 2016)</li>
              <li>- II International Contest of the Children’s Art, Ivan Sergeyevich Turgenev — First Round Winner (National Level), Diploma of Achievement (Jan 2013)</li>
              <li>- Certificate of Language Proficiency (CEFR Level B2) — Sofia University “St. Kliment Ohridski”</li>
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
      </MotionPage>
    </main>
  );
}






















