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
    description: "Roblox ninja action game — $110K revenue, 68K registered users. Led content design, community, and marketing rollouts over three years.",
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
    title: "B.S. / M.S. Simulation & Game Design / Interaction Design",
    detail: "University of Baltimore (Jan 2025 – May 2027)",
    note: "Selected for the Accelerated B.S./M.S. Pathway (High-Performance Track). Focused on interaction design, digital simulation, information architecture, and user research for immersive systems."
  },
  {
    title: "B.A. Communication and Media Studies",
    detail: "University of Maryland (Jan 2023 – Dec 2024)",
    note: "Activities: UCA President (Fall 2024), UCA Vice President (Fall 2023 & Spring 2024), Student Blogger (Fall 2023)."
  },
  {
    title: "Associate's Degree, Digital Animation (AAS)",
    detail: "Montgomery College (Aug 2020 – Jul 2023)",
    note: "Activities: Art Society Club. Training in 2D/3D animation pipelines, storyboarding, and motion graphics."
  },
  {
    title: "Diploma of Education, Bulgarian Language, Literature, and History",
    detail: "Bulgarian Educational and Cultural Center \"Kliment Ohridski,\" Washington DC (2015 – 2019)",
    note: "Early foundation in language, communication, and cultural history."
  }
];

const experience = [
  {
    role: "QA Tester | Gameplay Analyst",
    org: "Shokuho Mod Team (Volunteer Project) · Freelance",
    period: "Mar 2025 – Aug 2025",
    highlights: [
      "Conducted structured playtests with fresh saves and controlled scenarios.",
      "Documented bugs in AI behavior, combat balance, and economy systems using standardized reporting templates.",
      "Monitored performance with MSI Afterburner and OBS, and created statistical summaries to support design/balance decisions."
    ]
  },
  {
    role: "President",
    org: "Undergraduate Communication Association (UCA)",
    period: "Jul 2024 – Dec 2024",
    highlights: [
      "Oversaw constitution/policy execution, strategic agendas, and executive coordination.",
      "Managed budgeting, financial records, and budget-request preparation.",
      "Represented the organization in funding and operational planning decisions."
    ]
  },
  {
    role: "Vice President",
    org: "Undergraduate Communication Association (UCA)",
    period: "May 2023 – Aug 2024",
    highlights: [
      "Delegated officer responsibilities and coordinated execution through Trello workflows.",
      "Organized events, led recruitment, and supported partner/stakeholder communication.",
      "Helped elevate UCA to Tier 2 by meeting leadership program requirements."
    ]
  },
  {
    role: "Digital & Visual Media Specialist",
    org: "UMD Cyber-Physical Systems Engineering",
    period: "May 2024 – Oct 2024",
    highlights: [
      "Led video production from strategy to post-production, including planning, interviewing, recording, and editing.",
      "Managed social media strategy for Instagram/Facebook and executed weekly campaigns with trend/performance reporting.",
      "Mentored interns, coordinated event media support, and managed equipment/material procurement with vendors."
    ]
  },
  {
    role: "Social Media & Marketing Content Creator",
    org: "UMD Cyber-Physical Systems Engineering",
    period: "Sep 2023 – May 2024",
    highlights: [
      "Created reels, flyers, and campaign content for CPSE program rebranding across Instagram, YouTube, Facebook, and TikTok.",
      "Drafted and edited weekly social posts, and produced end-of-semester analytics reporting.",
      "Designed promotional assets aligned with UMD branding/social media guidelines and wrote student/program feature articles."
    ]
  },
  {
    role: "Blog Writer",
    org: "The Universities at Shady Grove",
    period: "Oct 2023 – May 2024",
    highlights: [
      "Authored student-facing articles on science, student life, and personal/academic experience.",
      "Produced and published blog content in WordPress on deadline for the USG student platform."
    ]
  },
  {
    role: "Game Developer",
    org: "Pixel Bulb Studio (Shinobi Story)",
    period: "May 2021 – Apr 2024",
    highlights: [
      "Designed in-game content, NPC behaviors, quests, boss events, and level flows.",
      "Supported sprint execution and database workflows, including internal training/tutorial support.",
      "Analyzed player behavior and retention strategies."
    ]
  },
  {
    role: "Marketing & Communications Specialist",
    org: "Pixel Bulb Studio",
    period: "Jan 2021 – May 2021",
    highlights: [
      "Led community-facing marketing campaigns and social channel operations.",
      "Planned/implemented digital strategy including branding, ad assets, and moderation workflows.",
      "Analyzed performance metrics and delivered strategic recommendations."
    ]
  },
  {
    role: "Multimedia Specialist",
    org: "Pixel Bulb Studio",
    period: "Dec 2019 – Apr 2021",
    highlights: [
      "Produced multimedia assets including ads, banners, videos, and animations.",
      "Adapted raw materials into platform-ready content and collaborated across multimedia workflows."
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
            XR and simulation prototyper with a background in live-ops game development and university video production.
            Built systems, shipped content, and grew a Roblox game to $110K in revenue.
          </p>
          <p className="text-[var(--muted)] mt-2 text-sm max-w-2xl">
            Targeting entry-level roles in Technical Design, XR Development, Gameplay Engineering, and Technical QA.
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

              <div className="mt-6 border-t border-[var(--border)] pt-6">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Skills Matrix</h3>
                <ul className="space-y-2 text-xs text-[var(--muted)]">
                  <li>- Game Engines: Unity, Unreal Engine</li>
                  <li>- Video & Design: Adobe Premiere Pro, After Effects, Photoshop, Illustrator</li>
                  <li>- 3D: Autodesk Maya, ZBrush</li>
                  <li>- Workflow: Notion, Trello, GitHub/GitLab</li>
                </ul>
              </div>
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










