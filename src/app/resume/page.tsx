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
    title: "Repo X (Pirate Social Deduction)",
    description: "Multiplayer prototype focused on spatial voice chat, proximity tuning, and social presence systems for group play."
  },
  {
    title: "VR Interaction Lab",
    description: "Focused XR interactions exploring hand tracking, precision tasks, and training-grade interaction affordances."
  },
  {
    title: "Trash Been",
    description: "Rapidly shipped prototype demonstrating scope control, gameplay loops, and production discipline."
  }
];

const education = [
  {
    title: "M.S. Interaction Design & Information Architecture (Accelerated)",
    detail: "University of Baltimore (Concurrent Enrollment Spring 2026)",
    note: "Focus on HCI, research methods, and complex systems."
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
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-sm font-mono mb-4 inline-block hover:underline decoration-1 underline-offset-4">
            ← BACK TO HOME
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mt-4">RESUME</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            A multifaceted creator bridging spatial design, simulation engineering, and human-centered systems. My work blends
            XR prototyping, research-driven interaction design, and production-focused development.
          </p>
        </header>

        <section className="grid gap-10">
          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Highlights</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              {highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Core Skills</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {skills.map((skill) => (
                  <li key={skill}>- {skill}</li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Featured Projects</h2>
              <div className="space-y-5 text-sm text-gray-600">
                {projects.map((project) => (
                  <div key={project.title}>
                    <p className="font-semibold text-black">{project.title}</p>
                    <p className="mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Education</h2>
            <div className="space-y-6 text-sm text-gray-600">
              {education.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-black">{item.title}</p>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{item.detail}</p>
                  {item.note ? <p className="mt-2">{item.note}</p> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-100 bg-white/70 rounded-2xl p-8 shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">Experience</h2>
            <div className="space-y-6 text-sm text-gray-600">
              {experience.map((item) => (
                <div key={item.role}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-black">{item.role}</p>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{item.period}</span>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{item.org}</p>
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
            className="inline-block rounded-full border border-black bg-black text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-transparent hover:text-black transition-colors"
          >
            Download Full Resume [PDF]
          </Link>
        </section>
      </div>
    </main>
  );
}