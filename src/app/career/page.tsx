"use client";

import LightboxImage from '@/components/lightbox-image';
import Breadcrumbs from '@/components/breadcrumbs';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  facets: ProjectFilter[];
  type?: 'commercial' | 'prototype';
  href?: string;
  bannerImage?: string;
  bannerAlt?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerBorderClass?: string;
}

interface SideProjectCard {
  title: string;
  subtitle: string;
  description: string;
  roles?: string;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  href?: string;
}

type ProjectFilter = 'all' | 'engineering' | 'xr' | 'art-storytelling';

const filterOptions: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'engineering', label: 'Technical Implementation' },
  { value: 'xr', label: 'VR/XR Interaction' },
  { value: 'art-storytelling', label: 'Design & Storytelling' },
];

const projects: Project[] = [
  {
    title: "Guilty As Arrr",
    description: "Multiplayer social deduction with proximity voice as a core mechanic.",
    tags: ["Photon Fusion", "Networked Multiplayer", "Spatial Audio"],
    facets: ['engineering', 'xr'],
    href: "/projects/repo-x"
  },
  {
    title: "Trash Been (Urban Logistics)",
    description: "Urban logistics sim—optimize routes, reduce waste, visualize system health.",
    tags: ["Logistics Simulation", "System Design", "Unity"],
    facets: ['engineering', 'art-storytelling'],
    bannerImage: "/images/TB_MindMap.png",
    bannerAlt: "Trash Been logistics mind map",
    bannerWidth: 1400,
    bannerHeight: 900,
    href: "/projects/trash-been"
  },
  {
    title: "VR Dirt Bike Game",
    description: "Safety-training sim for smart riding habits in VR.",
    tags: ["VR Safety Simulation", "Educational VR", "Human Factors"],
    facets: ['engineering', 'xr'],
    href: "/projects/vr-microgames"
  },
  {
    title: "VR Car Drift Simulator",
    description: "High-fidelity drift training with vehicle dynamics and spatial feedback.",
    tags: ["VR Driving Simulation", "Vehicle Physics", "Spatial Interaction"],
    facets: ['engineering', 'xr'],
    href: "/projects/vr-interaction-lab"
  },
  {
    title: "Fallout Mod (Level Design)",
    description: "Overhauled game level demonstrating world-building, environmental storytelling, and existing IP adaptation.",
    tags: ["Level Design", "Environmental Storytelling", "Team Collaboration"],
    facets: ['art-storytelling'],
    href: "/projects/fallout-level-design"
  },
  {
    title: "Shinobi Story",
    description: "Narrative stealth title + live content strategy and growth.",
    tags: ["Content Strategy", "Narrative Design", "Game Marketing"],
    facets: ['art-storytelling', 'engineering'],
    bannerImage: "/images/ShinobiStoryBanner.jpg",
    bannerAlt: "Shinobi Story banner",
    bannerWidth: 1400,
    bannerHeight: 900,
    href: "/projects/shinobi-story"
  },
  {
    title: "Shonen TCG Game",
    description: "Prototype for a 3D multiplayer TCG with deep rulesets.",
    tags: ["3D Multiplayer TCG", "Game Systems Design", "Prototyping"],
    facets: ['engineering', 'art-storytelling'],
    type: 'prototype'
  },
  {
    title: "VR Patapon Game",
    description: "Concept for a VR rhythm-strategy game with experimental inputs.",
    tags: ["VR GDD", "Rhythm Interaction", "Strategy"],
    facets: ['xr', 'art-storytelling'],
    type: 'prototype'
  }
];

const sideProjects: SideProjectCard[] = [
  {
    title: 'Totally Bugged Out',
    subtitle: 'Solo Project — First-Person Bug Survival Game',
    description:
      'Set in a bug-infested Balkan house, this prototype uses a universal throw system and swarming enemy behavior that can traverse walls and ceilings.',
    image: '/images/Totally Bugged Out_banner.png',
    imageAlt: 'Totally Bugged Out project banner',
    ctaLabel: 'View Case Study',
    href: '/projects/totally-bugged-out'
  },
  {
    title: 'Cranky (Game Jam 2024)',
    subtitle: 'Prototype / Local Multiplayer — Unity (1 Week)',
    description:
      'Built for Global Game Jam as a chaotic split-screen experience where two pugs chase squirrels in fast, goofy matches.',
    roles: 'Roles: Lead Animator, Co-Designer',
    image: '/images/Cranky_GameJam_Banner_2024.jpg',
    imageAlt: 'Cranky Game Jam 2024 banner',
    ctaLabel: 'View Case Study',
    href: '/projects/cranky-game-jam'
  },
  {
    title: 'Cranky: The Squirrel Annihilator',
    subtitle: 'Solo Project — First-Person Dog Chase Game',
    description:
      'A solo expansion of the jam concept with first-person pug movement, reactive squirrel/rooster AI, full UI, and WebGL-ready deployment.',
    image: '/images/CrankyTheSquirrelAnnihilator_banner.png',
    imageAlt: 'Cranky The Squirrel Annihilator banner',
    ctaLabel: 'View Case Study',
    href: '/projects/cranky-squirrel-annihilator'
  },
  {
    title: 'Shogun: Flowers Fall in Blood',
    subtitle: 'Solo Project — Tactical RPG / Unity',
    description:
      'Mobile tactical RPG prototype combining grid-based combat, gesture-driven skills, progression systems, enemy AI, and gacha simulation.',
    roles: 'Role: Solo Developer',
    ctaLabel: 'View Case Study',
    href: '/projects/shogun-flowers-fall-in-blood'
  },
  {
    title: 'The Signal',
    subtitle: 'Team Project — Narrative Board Game Design',
    description:
      'Sci-fi board game with modular exploration, evolving enemy behavior, class customization, and cooperative/competitive win paths.',
    roles: 'Team Roles: Design, Systems, Lore Writing, Visual Assets',
    image: '/images/Banner_TheSignal.jpg',
    imageAlt: 'The Signal board game banner',
    ctaLabel: 'View Case Study',
    href: '/projects/the-signal'
  },
  {
    title: 'The Last Paycheck',
    subtitle: 'Solo Project — Narrative + Systems Design',
    description:
      'A dystopian 2050 design document focused on poverty, survival, unstable jobs, inflation pressure, and player emotional engagement.',
    image: '/images/TheLastPaycheck_Banner.png',
    imageAlt: 'The Last Paycheck banner',
    ctaLabel: 'View Case Study',
    href: '/projects/the-last-paycheck'
  }
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Career() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.facets.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects' },
            ]}
          />
          <div className="mt-8">
            <h1 className="text-4xl font-bold tracking-tight">XR & Game Project Portfolio</h1>
            <p className="text-[var(--muted)] mt-3 font-medium tracking-[0.2em] text-xs uppercase">Technical Implementation · VR/XR Interaction · Design & Storytelling</p>
            <p className="text-[var(--muted)] mt-2 text-sm">Browse by discipline to find work faster.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {filterOptions.map((option) => {
              const active = option.value === activeFilter;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setActiveFilter(option.value)}
                  className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                    active
                      ? 'bg-[var(--foreground)] text-[var(--background)]'
                      : 'border border-[var(--border)] text-[var(--muted)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
                  }`}
                  aria-pressed={active}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </header>

        <motion.div
          key={activeFilter}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              {project.href && project.type !== 'prototype' ? (
                <Link
                  href={project.href}
                  className="group block h-full border border-transparent p-8 rounded-2xl transition-all duration-500 bg-[var(--surface)] hover:bg-[var(--surface)] shadow-[var(--shadow)] hover:shadow-[var(--shadow-strong)] hover:[box-shadow:var(--shadow-strong),var(--glow-strong)] flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`mb-6 w-full overflow-hidden rounded-xl bg-[var(--surface)] ${
                        project.bannerBorderClass ?? "border border-[var(--border)]"
                      }`}
                    >
                      {project.bannerImage ? (
                        <LightboxImage
                          src={project.bannerImage}
                          alt={project.bannerAlt ?? `${project.title} banner`}
                          width={project.bannerWidth ?? 1200}
                          height={project.bannerHeight ?? 675}
                          className="h-auto w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[var(--surface)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                          Banner coming soon
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold mb-3 tracking-tight">{project.title}</h2>
                    <ul className="list-disc pl-5 text-base text-[var(--muted)] leading-relaxed space-y-2 group-hover:text-[var(--foreground)] transition-colors duration-500">
                      <li>{project.description}</li>
                      <li>Key focus: {project.tags[0]}</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold tracking-[0.2em] border border-[var(--border)] px-3 py-1 rounded-full uppercase text-[var(--muted)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors duration-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ) : (
                <div
                  className={`group relative p-8 rounded-2xl bg-[var(--surface)] flex flex-col justify-between ${
                    project.type === 'prototype'
                      ? 'border border-dashed border-[var(--border)]/70 opacity-85 cursor-default'
                      : 'border border-transparent shadow-[var(--shadow)]'
                  }`}
                >
                  {project.type === 'prototype' ? (
                    <span className="absolute right-6 top-6 rounded-full border border-[var(--border)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      Concept
                    </span>
                  ) : null}
                  <div>
                    <div
                      className={`mb-6 w-full overflow-hidden rounded-xl bg-[var(--surface)] ${
                        project.bannerBorderClass ?? "border border-[var(--border)]"
                      }`}
                    >
                      {project.bannerImage ? (
                        <LightboxImage
                          src={project.bannerImage}
                          alt={project.bannerAlt ?? `${project.title} banner`}
                          width={project.bannerWidth ?? 1200}
                          height={project.bannerHeight ?? 675}
                          className="h-auto w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[var(--surface)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                          Banner coming soon
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold mb-3 tracking-tight">{project.title}</h2>
                    <ul className="list-disc pl-5 text-base text-[var(--muted)] leading-relaxed space-y-2">
                      <li>{project.description}</li>
                      <li>Key focus: {project.tags[0]}</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold tracking-[0.2em] border border-[var(--border)] px-3 py-1 rounded-full uppercase text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 text-sm text-[var(--muted)]">No projects in this filter yet. Try another category.</p>
        ) : null}

        <section className="mt-16 border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Side Projects</h2>
          <p className="text-sm text-[var(--muted)] max-w-3xl">
            Experimental prototypes and independent builds that combine 3D art, game systems design, and rapid technical iteration.
            These projects are where I test mechanics, interaction ideas, and production workflows before moving concepts into more formal case studies.
          </p>

          <h3 className="mt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Explore My Creations</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:[box-shadow:var(--shadow-strong),0_0_24px_var(--accent-cyan)]"
              >
                <div className="mb-4 w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                  {project.image ? (
                    <LightboxImage
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} banner`}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-28 items-center justify-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                      Banner coming soon
                    </div>
                  )}
                </div>

                <h4 className="text-base font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h4>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{project.subtitle}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{project.description}</p>
                {project.roles ? <p className="mt-3 text-xs text-[var(--muted)]">{project.roles}</p> : null}

                {project.href ? (
                  <Link
                    href={project.href}
                    className="mt-4 inline-block rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
                  >
                    {project.ctaLabel ?? 'View'}
                  </Link>
                ) : (
                  <span className="mt-4 inline-block rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]">
                    {project.ctaLabel ?? 'Details soon'}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}







































