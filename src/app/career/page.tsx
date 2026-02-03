"use client";

import LightboxImage from '@/components/lightbox-image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  bannerImage?: string;
  bannerAlt?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerBorderClass?: string;
}

const projects: Project[] = [
  {
    title: "Guilty As Arrr",
    description: "Real-time spatial audio attenuation for multi-user social deduction.",
    tags: ["Photon Fusion", "Networked Multiplayer", "Spatial Audio"],
    href: "/projects/repo-x"
  },
  {
    title: "Trash Been (Urban Logistics)",
    description: "Simulating urban waste management systems through optimized collection routes and spatial flow.",
    tags: ["Logistics Simulation", "System Design", "Unity"],
    bannerImage: "/images/TB_MindMap.png",
    bannerAlt: "Trash Been logistics mind map",
    bannerWidth: 1400,
    bannerHeight: 900,
    href: "/projects/trash-been"
  },
  {
    title: "VR Dirt Bike Game",
    description: "Immersive training for smart and safe driving practices using VR safety simulation.",
    tags: ["VR Safety Simulation", "Educational VR", "Human Factors"],
    href: "/projects/vr-microgames"
  },
  {
    title: "VR Car Drift Simulator",
    description: "High-fidelity spatial interaction and vehicle dynamics in a night city environment.",
    tags: ["VR Driving Simulation", "Vehicle Physics", "Spatial Interaction"],
    href: "/projects/vr-interaction-lab"
  },
  {
    title: "Fallout Mod (Level Design)",
    description: "Overhauled game level demonstrating world-building, environmental storytelling, and existing IP adaptation.",
    tags: ["Level Design", "Environmental Storytelling", "Team Collaboration"],
    href: "/projects/fallout-level-design"
  },
  {
    title: "Shinobi Story",
    description: "Narrative-forward stealth experience with new content strategy and marketing beats.",
    tags: ["Content Strategy", "Narrative Design", "Game Marketing"],
    bannerImage: "/images/ShinobiStoryBanner.jpg",
    bannerAlt: "Shinobi Story banner",
    bannerWidth: 1400,
    bannerHeight: 900,
    href: "/projects/shinobi-story"
  },
  {
    title: "Shonen TCG Game",
    description: "Developing a robust 3D multiplayer trading card game prototype with complex game systems.",
    tags: ["3D Multiplayer TCG", "Game Systems Design", "Prototyping"],
  },
  {
    title: "VR Patapon Game",
    description: "Conceptualizing an innovative VR rhythm-strategy game with unique interaction models.",
    tags: ["VR GDD", "Rhythm Interaction", "Strategy"],
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
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <Link href="/" className="group flex items-center space-x-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN</span>
          </Link>
          <div className="mt-8">
            <h1 className="text-4xl font-bold tracking-tight">THE LAB</h1>
            <p className="text-[var(--muted)] mt-3 font-medium tracking-[0.2em] text-xs uppercase">Spatial Prototyping & XR Systems</p>
          </div>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              {project.href ? (
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
                <div className="group relative border border-transparent p-8 rounded-2xl transition-all duration-500 bg-[var(--surface)] hover:bg-[var(--surface)] shadow-[var(--shadow)] hover:shadow-[var(--shadow-strong)] hover:[box-shadow:var(--shadow-strong),var(--glow-strong)] flex flex-col justify-between">
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
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
























