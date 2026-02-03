import Link from 'next/link';

const highlights = [
  "Spatial interaction prototyping across XR, simulation, and real-time systems.",
  "Multidisciplinary collaboration spanning design, engineering, and product strategy.",
  "Rapid prototyping mindset with a focus on usability, performance, and human factors."
];

const skills = [
  "XR Interaction & Unity Prototyping",
  "Simulation Engineering & Systems Design",
  "Human Factors & UX Research",
  "Multiplayer & Networked Systems",
  "AI-Assisted Development",
  "Live-Ops & Product Management"
];

const projects = [
  {
    title: "Shinobi Story",
    description: "Content strategy and marketing rollout highlighting new beats, community engagement, and performance gains.",
    href: "/projects/shinobi-story"
  },
  {
    title: "Guilty As Arrr",
    description: "Multiplayer VR pirate social deduction prototype focused on real-time spatial audio attenuation and networked systems.",
    href: "/projects/repo-x"
  },
  {
    title: "VR Interaction Lab",
    description: "Focused XR interactions exploring hand tracking, precision tasks, and training-grade interaction affordances.",
    href: "/projects/vr-interaction-lab"
  },
  {
    title: "Trash Been: Urban Logistics",
    description: "System-driven simulation focused on urban waste management, optimized collection routes, and spatial flow analysis.",
    href: "/projects/trash-been"
  }
];

const education = [
  {
    title: "M.S. Interaction Design & Information Architecture (Accelerated)",
    detail: "University of Baltimore (Incoming Spring 2026)",
    note: "Focus on Human-Computer Interaction (HCI), US Military client simulation, and complex systems design."
  },
  {
    title: "B.S. Simulation and Game Design",
    detail: "University of Baltimore (Jan 2025)",
    note: "STEM designated. Simulation for non-entertainment fields."
  },
  {
    title: "B.A. Communication and Media Studies",
    detail: "University of Maryland (Jan 2023)"
  }
];

const experience = [
  {
    role: "QA Tester | Gameplay Analyst",
    org: "Shokuho Mod Team (Mount & Blade II: Bannerlord)",
    period: "Mar 2025 – Present",
    highlights: [
      "Structured playtests and bug documentation for AI, combat, and economy systems.",
      "Performance monitoring using MSI Afterburner and OBS Studio.",
      "Statistical summaries to inform balance and design decisions."
    ]
  },
  {
    role: "Digital & Visual Media Specialist",
    org: "UMD Cyber-Physical Systems Engineering",
    period: "May 2024 – Oct 2024",
    highlights: [
      "Led video production and interviews for program visibility.",
      "Produced the UMD CPSE Summer Program 2024 video (youtu.be/YP9sqDBSWdo), which drew a Nobel Prize–winning physicist to join as a special guest.",
      "Managed social media content strategy and campaign reporting.",
      "Mentored interns and coordinated media support at events."
    ]
  },
  {
    role: "Game Developer | Multimedia Specialist | Senior Community Manager",
    org: "Pixel Bulb Studio (Shinobi Story)",
    period: "Jan 2021 – Apr 2024",
    highlights: [
      "Designed in-game content, NPC behaviors, and level flows.",
      "Produced marketing media, social assets, and community campaigns.",
      "Analyzed player behavior and retention strategies."
    ]
  },
  {
    role: "President / Vice President",
    org: "Undergraduate Communication Association (UCA)",
    period: "May 2023 – Dec 2024",
    highlights: [
      "Led recruitment, budgeting, and strategic planning.",
      "Directed events, partnerships, and marketing efforts.",
      "Elevated the organization to Tier 2 via leadership program completion."
    ]
  }
];

export default function Resume() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">RESUME</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            A multifaceted creator bridging spatial design, simulation engineering, and human-centered systems. My work blends
            XR prototyping, research-driven interaction design, and production-focused development.
          </p>
          <Link
            href="/cpse"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            View CPSE Experience
          </Link>
        </header>

        <section className="grid gap-10">
          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Highlights</h2>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              {highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Core Skills</h2>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {skills.map((skill) => (
                  <li key={skill}>- {skill}</li>
                ))}
              </ul>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Featured Projects</h2>
              <div className="space-y-5 text-sm text-[var(--muted)]">
                {projects.map((project) => (
                  <div key={project.title}>
                    {project.href ? (
                      <Link
                        className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                        href={project.href}
                      >
                        <span>{project.title}</span>
                        <span className="text-xs uppercase tracking-[0.3em] opacity-60">Click to view</span>
                      </Link>
                    ) : (
                      <p className="font-semibold text-[var(--foreground)]">{project.title}</p>
                    )}
                    <p className="mt-2 px-4 text-sm text-[var(--muted)]">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Education</h2>
            <div className="space-y-6 text-sm text-[var(--muted)]">
              {education.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">{item.detail}</p>
                  {item.note ? <p className="mt-2">{item.note}</p> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Experience</h2>
            <div className="space-y-6 text-sm text-[var(--muted)]">
              {experience.map((item) => (
                <div key={item.role}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-[var(--foreground)]">{item.role}</p>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--muted)]">{item.org}</p>
                  <ul className="mt-2 space-y-1">
                    {item.highlights.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-block rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-[var(--foreground)] transition-colors"
          >
            Download Full Resume [PDF]
          </Link>
        </section>
      </div>
    </main>
  );
}




