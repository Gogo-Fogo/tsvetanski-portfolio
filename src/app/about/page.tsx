import Link from 'next/link';
import DegreeGraph from '@/components/degree-graph';
import { MotionPage } from '@/components/motion-safe';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Georgi Tsvetanski",
  description: "T-Shaped Developer: Unity engineer, XR prototyper, and cinematic storyteller. B.S./M.S. candidate in Simulation & Game Design + Interaction Design at University of Baltimore.",
};

const highlights = [
  "Spatial interaction prototyping across XR, simulation, and real-time systems.",
  "Multidisciplinary collaboration spanning design, engineering, and product strategy.",
  "Rapid prototyping mindset with a focus on usability, performance, and human factors.",
];

const featuredProjects = [
  {
    title: "Shinobi Story",
    description: "Fully custom Naruto MMORPG — complete WoW client overhaul, original animations. $110K revenue, 1M+ downloads, 56K players.",
    href: "/projects/shinobi-story",
  },
  {
    title: "Guilty As Arrr",
    description: "Multiplayer pirate social deduction prototype focused on real-time spatial audio attenuation and networked systems.",
    href: "/projects/repo-x",
  },
  {
    title: "VR Interaction Lab",
    description: "Focused XR interactions exploring hand tracking, precision tasks, and training-grade interaction affordances.",
    href: "/projects/vr-interaction-lab",
  },
  {
    title: "Trash Been: Urban Logistics",
    description: "System-driven simulation focused on urban waste management, optimized collection routes, and spatial flow analysis.",
    href: "/projects/trash-been",
  },
];

const experience = [
  {
    role: "QA Tester | Gameplay Analyst",
    org: "Shokuho Mod Team (Volunteer Project) · Freelance",
    period: "Mar 2025 – Aug 2025",
    highlights: [
      "Conducted structured playtests with fresh saves and controlled scenarios.",
      "Documented bugs in AI behavior, combat balance, and economy systems using standardized reporting templates.",
      "Monitored performance with MSI Afterburner and OBS, and created statistical summaries to support design/balance decisions.",
    ],
  },
  {
    role: "President",
    org: "Undergraduate Communication Association (UCA)",
    period: "Jul 2024 – Dec 2024",
    highlights: [
      "Oversaw constitution/policy execution, strategic agendas, and executive coordination.",
      "Managed budgeting, financial records, and budget-request preparation.",
      "Represented the organization in funding and operational planning decisions.",
    ],
  },
  {
    role: "Vice President",
    org: "Undergraduate Communication Association (UCA)",
    period: "May 2023 – Aug 2024",
    highlights: [
      "Delegated officer responsibilities and coordinated execution through Trello workflows.",
      "Organized events, led recruitment, and supported partner/stakeholder communication.",
      "Helped elevate UCA to Tier 2 by meeting leadership program requirements.",
    ],
  },
  {
    role: "Digital & Visual Media Specialist",
    org: "UMD Cyber-Physical Systems Engineering",
    period: "May 2024 – Oct 2024",
    highlights: [
      "Led video production from strategy to post-production, including planning, interviewing, recording, and editing.",
      "Managed social media strategy for Instagram/Facebook and executed weekly campaigns with trend/performance reporting.",
      "Mentored interns, coordinated event media support, and managed equipment/material procurement with vendors.",
    ],
  },
  {
    role: "Social Media & Marketing Content Creator",
    org: "UMD Cyber-Physical Systems Engineering",
    period: "Sep 2023 – May 2024",
    highlights: [
      "Created reels, flyers, and campaign content for CPSE program rebranding across Instagram, YouTube, Facebook, and TikTok.",
      "Drafted and edited weekly social posts, and produced end-of-semester analytics reporting.",
      "Designed promotional assets aligned with UMD branding/social media guidelines and wrote student/program feature articles.",
    ],
  },
  {
    role: "Blog Writer",
    org: "The Universities at Shady Grove",
    period: "Oct 2023 – May 2024",
    highlights: [
      "Authored student-facing articles on science, student life, and personal/academic experience.",
      "Produced and published blog content in WordPress on deadline for the USG student platform.",
    ],
  },
  {
    role: "Game Developer",
    org: "Pixel Bulb Studio (Shinobi Story)",
    period: "May 2021 – Apr 2024",
    highlights: [
      "Designed in-game content, NPC behaviors, quests, boss events, and level flows.",
      "Supported sprint execution and database workflows, including internal training/tutorial support.",
      "Analyzed player behavior and retention strategies.",
    ],
  },
  {
    role: "Marketing & Communications Specialist",
    org: "Pixel Bulb Studio",
    period: "Jan 2021 – May 2021",
    highlights: [
      "Led community-facing marketing campaigns and social channel operations.",
      "Planned/implemented digital strategy including branding, ad assets, and moderation workflows.",
      "Analyzed performance metrics and delivered strategic recommendations.",
    ],
  },
  {
    role: "Multimedia Specialist",
    org: "Pixel Bulb Studio",
    period: "Dec 2019 – Apr 2021",
    highlights: [
      "Produced multimedia assets including ads, banners, videos, and animations.",
      "Adapted raw materials into platform-ready content and collaborated across multimedia workflows.",
    ],
  },
];


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

        {/* ── Profile ── */}
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
                I specialize in rapid spatial interaction prototyping — AI-assisted workflows let me iterate at startup speed without sacrificing engineering rigor.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mt-3">
                I build immersive systems and responsive gameplay in Unity (C#), from physics-driven prototypes to commercial outcomes,
                with strong grounding in QA, live-ops, and player-centered delivery.
              </p>
            </div>
          </div>
        </section>

        {/* ── Commercial Success ── */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Commercial Success</h2>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl px-5 py-5 sm:px-8 sm:py-6 shadow-[var(--shadow)]">
            <h3 className="text-2xl sm:text-3xl font-bold italic">Shinobi Story</h3>
            <p className="text-4xl sm:text-5xl font-black mt-3 tracking-tight">$110,000 REVENUE</p>
            <p className="mt-4 text-[var(--muted)] max-w-md">
              Contributed character and ability animations, shipped weekly content, ran live events, and managed the community pipeline on a fully custom Naruto MMORPG.
            </p>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="mb-16">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Highlights</h2>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              {highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Featured Projects</h2>
          <div className="space-y-5 text-sm text-[var(--muted)]">
            {featuredProjects.map((project) => (
              <div key={project.title}>
                <Link
                  className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                  href={project.href}
                >
                  <span>{project.title}</span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">View →</span>
                </Link>
                <p className="mt-2 px-4 text-sm text-[var(--muted)]">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Experience</h2>
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-8 shadow-[var(--shadow)]">
            <div className="space-y-6 text-sm text-[var(--muted)]">
              {experience.map((item) => (
                <div key={`${item.role}-${item.period}`}>
                  <div className="flex flex-wrap items-start justify-between gap-1">
                    <p className="font-semibold text-[var(--foreground)]">{item.role}</p>
                    <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--muted)] shrink-0">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[var(--muted)]">{item.org}</p>
                  <ul className="mt-2 space-y-1">
                    {item.highlights.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/cpse"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            View CPSE Experience
          </Link>
        </section>

        {/* ── Education & Skills ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
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
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Skills & Tools</h2>
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)]">
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

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-6 shadow-[var(--shadow)] mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><span className="text-[var(--foreground)] font-medium">Bulgarian</span> — Native or bilingual proficiency</li>
                <li><span className="text-[var(--foreground)] font-medium">English</span> — Native or bilingual proficiency</li>
                <li><span className="text-[var(--foreground)] font-medium">Chinese</span> — Elementary proficiency</li>
                <li><span className="text-[var(--foreground)] font-medium">Russian</span> — Elementary proficiency</li>
              </ul>
            </div>
          </section>
        </div>

        {/* ── Certifications & Honors ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-8 shadow-[var(--shadow)]">
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
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-5 sm:p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Honors & Awards</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>- Dean&apos;s List – Honors (College of Public Affairs / Yale Gordon College of Arts and Sciences, Jan 2026)</li>
              <li>- Helen P. Denit Honors Program Scholar (University of Baltimore, Jan 2025)</li>
              <li>- Dean&apos;s List (3 Semesters) — Spring 2023, Fall 2023, Spring 2024 (University of Maryland, Jun 2024)</li>
              <li>- Honors Program Member & NSCS Nominee (University of Maryland, Jul 2023)</li>
              <li>- Dean&apos;s List (Full Year 2022) (Montgomery College, Apr 2023)</li>
              <li>- Montgomery College Excellence in Equity Award for Digital Art (Apr 2021)</li>
              <li>- Phi Theta Kappa Honor Society (Apr 2021)</li>
              <li>- 2018 SERT WATTS UP? Poster Contest (MCPS School Energy & Recycling Team, May 2018)</li>
              <li>- &quot;Stefan Gechev&quot; 20th Literature Competition — II Place (State Agency for Bulgarians Abroad, Jul 2016)</li>
              <li>- II International Contest of the Children&apos;s Art, Ivan Sergeyevich Turgenev — First Round Winner (National Level), Diploma of Achievement (Jan 2013)</li>
              <li>- Certificate of Language Proficiency (CEFR Level B2) — Sofia University &quot;St. Kliment Ohridski&quot;</li>
            </ul>
          </div>
        </section>

        {/* ── Download CTA ── */}
        <section className="border-t border-[var(--border)] pt-16">
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
