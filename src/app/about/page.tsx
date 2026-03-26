import Link from 'next/link';
import DegreeGraph from '@/components/degree-graph';
import { MotionPage } from '@/components/motion-safe';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Georgi Tsvetanski',
  description: 'T-shaped developer working across XR, gameplay systems, interaction design, and storytelling.',
};

const highlights = [
  'Spatial interaction prototyping across XR, simulation, and real-time systems.',
  'Gameplay systems, rapid iteration, and usability-minded design decisions.',
  'Media, animation, and communication experience that strengthens presentation and storytelling.',
];

const featuredProjects = [
  {
    title: 'Shogun: Flowers Fall in Blood',
    description: 'Ongoing Unity tactics RPG rebuild centered on one believable combat slice, clearer HUD, and stronger production discipline.',
    href: '/projects/shogun-flowers-fall-in-blood',
  },
  {
    title: 'FEH Barracks Manager',
    description: 'Large solo fan tool covering synced barracks data, scraper and reconciliation workflows, release packaging, and product UX.',
    href: '/projects/feh-barracks-manager',
  },
  {
    title: 'MUMOSA Crisis Response VR',
    description: 'Army Research Laboratory client work focused on the VR lane of a multimodal situational awareness concept for crisis review and training.',
    href: '/projects/mumosa-crisis-response-vr',
  },
  {
    title: 'Shinobi Story',
    description: 'Commercial MMORPG contribution spanning content, animation, events, and long-tail live game support.',
    href: '/projects/shinobi-story',
  },
];

const selectedExperience = [
  {
    role: 'Gameplay QA / Analysis',
    org: 'Shokuho Mod Team (Volunteer Project) · Freelance',
    period: 'Mar 2025 – Aug 2025',
    highlights: [
      'Ran structured playtests, bug reporting, and balance analysis under controlled scenarios.',
      'Used capture and performance tooling to support clearer design and economy decisions.',
    ],
  },
  {
    role: 'Digital & Visual Media',
    org: 'UMD Cyber-Physical Systems Engineering',
    period: 'Sep 2023 – Oct 2024',
    highlights: [
      'Led video, campaign, and social media work from planning through post-production and reporting.',
      'Handled outreach materials, interviews, mentoring, and cross-team coordination for CPSE.',
    ],
  },
  {
    role: 'Game Development',
    org: 'Pixel Bulb Studio (Shinobi Story)',
    period: 'May 2021 – Apr 2024',
    highlights: [
      'Built and supported in-game content, behaviors, quests, and event flows on a custom MMORPG pipeline.',
      'Worked across implementation, player-facing design, and retention-minded live service support.',
    ],
  },
  {
    role: 'Leadership & Communication',
    org: 'Undergraduate Communication Association',
    period: 'May 2023 – Dec 2024',
    highlights: [
      'Led officer coordination, budgeting, recruitment, and organization-wide planning across two terms.',
      'Helped move the organization forward through clearer delegation and stakeholder communication.',
    ],
  },
];

const earlierRoles = [
  'Blog Writer — The Universities at Shady Grove (2023–2024)',
  'Marketing & Communications Specialist — Pixel Bulb Studio (2021)',
  'Multimedia Specialist — Pixel Bulb Studio (2019–2021)',
];

const certifications = [
  'Design Powered by Data: Getting Started with UX Web Analytics (2024)',
  'Google Ads Search Certification (2024–2025)',
  'Fundamentals of Social Media (2024)',
  'Making a Short Film: Start to Finish (2023)',
];

const honors = [
  'Dean\'s List - Honors, University of Baltimore (2026)',
  'Helen P. Denit Honors Program Scholar (2025)',
  'Dean\'s List across University of Maryland semesters (2023–2024)',
  'Montgomery College Excellence in Equity Award for Digital Art (2021)',
];

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-20 font-sans">
      <MotionPage className="max-w-5xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">ABOUT</h1>
        </header>

        <section className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Profile</h2>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="relative order-2 lg:order-1">
              <DegreeGraph className="h-[220px] lg:h-[460px] w-full transition-all duration-300" />
            </div>
            <div className="order-1 lg:order-2 border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur rounded-2xl p-8 shadow-[var(--shadow)]">
              <h3 className="text-2xl font-bold tracking-tight mb-4">T-Shaped Developer</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Bridging technical implementation, design thinking, and human factors through spatial interaction, gameplay prototyping, and XR work.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mt-3">
                I build immersive systems and responsive gameplay in Unity, and my background in simulation, animation, communication, and media production helps me move between structure, feel, and storytelling without treating them as separate jobs.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Commercial Success</h2>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl px-5 py-5 sm:px-8 sm:py-6 shadow-[var(--shadow)]">
            <h3 className="text-2xl sm:text-3xl font-bold italic">Shinobi Story</h3>
            <p className="text-4xl sm:text-5xl font-black mt-3 tracking-tight">$110,000 REVENUE</p>
            <p className="mt-4 text-[var(--muted)] max-w-md leading-relaxed">
              Contributed character and ability animations, shipped weekly content, ran live events, and supported the community-facing pipeline on a fully custom Naruto MMORPG.
            </p>
            <Link
              href="/projects/shinobi-story"
              className="mt-5 inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              View Shinobi Story →
            </Link>
          </div>
        </section>

        <section className="mb-14">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Highlights</h2>
            <ul className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
              {highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Featured Projects</h2>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              View Full Project Archive
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>
                  <span className="shrink-0 text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--muted)]">View →</span>
                </div>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Selected Experience</h2>
            <Link
              href="/cpse"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              View CPSE Experience
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {selectedExperience.map((item) => (
              <div key={`${item.role}-${item.period}`} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">{item.role}</p>
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">{item.period}</span>
                </div>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted)]">{item.org}</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)] leading-relaxed">
                  {item.highlights.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Earlier Roles</h3>
            <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
              {earlierRoles.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Education</h2>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-bold text-lg">Accelerated B.S./M.S. Pathway</h3>
                <p className="text-[var(--muted)] font-mono text-[10px] uppercase tracking-[0.2em]">Jan 2025–May 2027</p>
              </div>
              <p className="text-[var(--muted)] text-sm mt-3">
                University of Baltimore · Simulation & Game Design + Interaction Design.
              </p>
              <div className="mt-4 border-l-2 border-[var(--border)] pl-4 py-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">Key Project</p>
                <Link href="/projects/mumosa-crisis-response-vr" className="text-sm font-semibold text-[var(--foreground)] hover:underline">
                  US Military Client Simulation
                </Link>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                <li><span className="font-semibold text-[var(--foreground)]">B.S. Simulation and Game Design</span> — University of Baltimore</li>
                <li><span className="font-semibold text-[var(--foreground)]">B.A. Communication and Media Studies</span> — University of Maryland</li>
                <li><span className="font-semibold text-[var(--foreground)]">A.A.S. Digital Animation</span> — Montgomery College</li>
                <li><span className="font-semibold text-[var(--foreground)]">Bulgarian Language, Literature, and History</span> — Bulgarian Educational and Cultural Center "Kliment Ohridski"</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Skills & Tools</h2>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)] space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Core Skills</h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>- XR and simulation prototyping, Unity, interaction design, usability-minded iteration.</li>
                  <li>- Gameplay systems, QA, balance analysis, performance monitoring, and documentation.</li>
                  <li>- Video production, storyboarding, social media content, and cross-team communication.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Toolset</h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>- Unity, Unreal Engine, Figma, Adobe XD</li>
                  <li>- Premiere Pro, After Effects, Photoshop, Illustrator</li>
                  <li>- Autodesk Maya, ZBrush, Notion, Trello, GitHub, GitLab</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                  <span className="rounded-full border border-[var(--border)] px-3 py-1.5">Bulgarian — Native</span>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1.5">English — Native</span>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1.5">Chinese — Elementary</span>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1.5">Russian — Elementary</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Selected Certifications</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {certifications.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Selected Honors</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {honors.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--border)] pt-10">
          <div className="flex flex-wrap gap-4">
            <Link href="/resume.pdf" target="_blank" className="inline-block rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-[var(--foreground)] transition-colors">
              Download Resume [PDF]
            </Link>
          </div>
        </section>
      </MotionPage>
    </main>
  );
}
