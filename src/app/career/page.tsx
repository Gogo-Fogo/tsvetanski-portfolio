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
        </section>

      </div>
    </main>
  );
}
































