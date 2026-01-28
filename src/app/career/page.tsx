"use client";

import LightboxImage from '@/components/lightbox-image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    title: "Repo X (Pirate Social Deduction)",
    description: "Multiplayer prototype with spatial voice, proximity tuning, and social presence systems.",
    tags: ["Photon Voice", "Multiplayer Systems", "Spatial Audio"],
    href: "/projects/repo-x"
  },
  {
    title: "Unity Creations",
    description: "Game prototypes and systems design across solo and team projects.",
    tags: ["Game Design", "Systems", "Prototyping"],
    bannerImage: "/images/SS_NewContentStrategy.png",
    bannerAlt: "Unity creations highlight",
    bannerWidth: 1400,
    bannerHeight: 900
  },
  {
    title: "Shinobi Story",
    description: "Narrative action game with content strategy, marketing beats, and player engagement planning.",
    tags: ["Narrative Design", "Gameplay Systems", "Marketing"],
    bannerImage: "/images/ShinobiStoryBanner.jpg",
    bannerAlt: "Shinobi Story banner",
    bannerWidth: 1600,
    bannerHeight: 900,
    bannerBorderClass: "border-2 border-[#D8B33C]",
    href: "/projects/shinobi-story"
  },
  {
    title: "VR Interaction Lab",
    description: "XR interactions exploring hand tracking, precision tasks, and training-grade affordances.",
    tags: ["XR Interaction", "Hand Tracking", "Human Factors"],
    href: "/projects/vr-interaction-lab"
  },
  {
    title: "Fallout Team Level Design",
    description: "Level design sprint focused on spatial flow, storytelling, and player guidance.",
    tags: ["Level Design", "Team Production", "Environment"],
    href: "/projects/fallout-level-design"
  },
  {
    title: "VR Microgames",
    description: "Two compact VR prototypes for interaction feel, comfort, and spatial UI feedback.",
    tags: ["Spatial UX", "Rapid Prototyping", "Comfort Design"],
    href: "/projects/vr-microgames"
  },
  {
    title: "Breda (Breda University of Applied Sciences)",
    description: "Successful Breda application highlighting game design and production planning.",
    tags: ["Game Design", "Application Project", "Production"],
    bannerImage: "/images/Breda_Banner.png",
    bannerAlt: "Breda application banner",
    bannerWidth: 1600,
    bannerHeight: 900,
    bannerBorderClass: "border-2 border-[#D8B33C]",
    href: "/projects/breda"
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





















