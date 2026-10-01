'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  Clapperboard,
  FileText,
  Gamepad2,
  Instagram,
  LayoutGrid,
  Linkedin,
  Mail,
  RectangleGoggles,
  Send,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import styles from './portfolio-home.module.css';

type LensId = 'all' | 'xr' | 'gameplay' | 'tools' | 'creative';

interface Project {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  /** One sentence, roughly ten words. Details live on the case study. */
  summary: string;
  /** Two at most: usually the engine or medium, then the angle. */
  tags: readonly [string, string];
}

interface Lens {
  id: LensId;
  label: string;
  icon: LucideIcon;
  viewHref: string;
  viewLabel: string;
  projects: readonly [Project, Project, Project];
}

const projects = {
  mumosa: {
    title: 'MUMOSA Crisis Response',
    href: '/projects/mumosa-crisis-response-vr',
    image: '/images/projects/mumosa-crisis-response-vr/mumosa-home-card.jpg',
    imageAlt: 'MUMOSA spatial evidence selection inside an Unreal crisis-response scene',
    summary: 'Spatial evidence review for crisis-response research.',
    tags: ['Unreal Engine', 'Client research'],
  },
  shift: {
    title: 'Shift Culture VR',
    href: '/projects/vr-microgames',
    image: '/images/B360_bike_simulator.png',
    imageAlt: 'B-360 dirt bike safety simulator prototype',
    summary: 'Dirt-bike safety simulation for first-time VR users.',
    tags: ['Unity', 'Mobile VR'],
  },
  birdwatching: {
    title: 'Birdwatching VR',
    href: '/projects/birdwatching',
    image: '/images/projects/birdwatching/birdwatching-forest-hero.jpg',
    imageAlt: 'Stylized forest environment from Birdwatching VR',
    summary: 'Photograph birds in VR and fill a star-rated field guide.',
    tags: ['Unity 6', 'PCVR / Quest'],
  },
  shinobi: {
    title: 'Shinobi Story',
    href: '/projects/shinobi-story',
    image: '/images/ShinobiStoryHeroClean.png',
    imageAlt: 'Shinobi Story character charging through a forest',
    summary: 'Five years of content, animation and live operations.',
    tags: ['Live game', 'MMORPG'],
  },
  shonen: {
    title: 'Shonen Showdown',
    href: '/projects/shonen-showdown',
    image: '/images/projects/shonen-showdown/duel-fp-01.png',
    imageAlt: 'First-person duel view from Shonen Showdown',
    summary: 'Networked first-person card game on a reusable rules engine.',
    tags: ['Unity 6', 'Photon Fusion 2'],
  },
  cranky: {
    title: 'Cranky',
    href: '/projects/cranky-game-jam',
    image: '/images/CRANKY_Animation_Blender_Rigging.png',
    imageAlt: 'Cranky pug character rig and animation controls in Blender',
    summary: 'Split-screen pug chaos built in one week.',
    tags: ['Unity', 'Game jam'],
  },
  blackDice: {
    title: 'Black Dice Engine',
    href: '/projects/black-dice-engine',
    image: '/images/projects/black-dice-engine/black-dice-home-card.jpg',
    imageAlt: 'Black Dice Engine dark fantasy banner',
    summary: 'A local game-master engine for tabletop campaigns.',
    tags: ['TypeScript', 'Local AI'],
  },
  ami: {
    title: 'Ami',
    href: '/projects/ami-research-companion',
    image: '/images/projects/ami/ami-chat-evidence-illustrated.png',
    imageAlt: 'Ami research companion answering a question with illustrated visual evidence',
    summary: 'A research companion with source-grounded answers.',
    tags: ['Python', 'Local-first AI'],
  },
  feh: {
    title: 'FEH Barracks Manager',
    href: '/projects/feh-barracks-manager',
    image: '/images/projects/feh-barracks/feh-hero-library.png',
    imageAlt: 'FEH Barracks Manager searchable hero library and collection controls',
    summary: 'Fire Emblem Heroes companion with synced collections.',
    tags: ['Data pipeline', 'Release tooling'],
  },
  cpseVideo: {
    title: 'UMD CPSE Summer Program',
    href: '/cpse',
    image: 'https://img.youtube.com/vi/YP9sqDBSWdo/maxresdefault.jpg',
    imageAlt: 'UMD CPSE Summer Program 2024 video',
    summary: 'A program film, from planning to final cut.',
    tags: ['Videography', 'Editing'],
  },
  shinobiVideo: {
    title: 'Shinobi Story Highlight',
    href: '/projects/shinobi-story',
    image: 'https://img.youtube.com/vi/bPsGUDkz6-0/maxresdefault.jpg',
    imageAlt: 'Shinobi Story featured video highlight',
    summary: 'A trailer cut from five years of live-game footage.',
    tags: ['Trailer', 'Editing'],
  },
  alienWalk: {
    title: 'Alien Walk Cycle',
    href: '/creative#animation',
    image: '/images/projects/creative/alien-walk-wide.png',
    imageAlt: 'Alien walking animation study in an extended grayscale street scene',
    summary: 'A motion study in weight, rhythm and posing.',
    tags: ['3D animation', 'Walk cycle'],
  },
} satisfies Record<string, Project>;

const lenses: readonly Lens[] = [
  {
    id: 'all',
    label: 'All Projects',
    icon: LayoutGrid,
    viewHref: '/career',
    viewLabel: 'Browse every project',
    projects: [projects.mumosa, projects.shinobi, projects.blackDice],
  },
  {
    id: 'xr',
    label: 'XR + Simulation',
    icon: RectangleGoggles,
    viewHref: '/career?filter=xr',
    viewLabel: 'All XR + Simulation work',
    projects: [projects.mumosa, projects.shift, projects.birdwatching],
  },
  {
    id: 'gameplay',
    label: 'Gameplay Systems',
    icon: Gamepad2,
    viewHref: '/career?filter=games',
    viewLabel: 'All Gameplay Systems work',
    projects: [projects.shinobi, projects.shonen, projects.cranky],
  },
  {
    id: 'tools',
    label: 'Tools & AI',
    icon: BrainCircuit,
    viewHref: '/career?filter=tools',
    viewLabel: 'All Tools & AI work',
    projects: [projects.blackDice, projects.ami, projects.feh],
  },
  {
    id: 'creative',
    label: 'Creative',
    icon: Clapperboard,
    viewHref: '/creative',
    viewLabel: 'All creative work',
    projects: [projects.cpseVideo, projects.shinobiVideo, projects.alienWalk],
  },
];

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <Link href={project.href} className={featured ? styles.cardFeatured : styles.card}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={featured ? '(min-width: 900px) 62vw, 92vw' : '(min-width: 900px) 32vw, 92vw'}
        className={styles.cardImage}
        priority={featured}
        unoptimized
      />
      <div className={styles.cardCopy}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSummary}>{project.summary}</p>
        <ul className={styles.tags} aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <span className={styles.cardArrow} aria-hidden="true">
        <ArrowRight size={18} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

interface PortfolioHomeProps {
  shinobiVideoStatsText?: string | null;
}

export default function PortfolioHome({ shinobiVideoStatsText }: PortfolioHomeProps) {
  const [activeLens, setActiveLens] = useState<LensId>('xr');
  const lens = lenses.find((candidate) => candidate.id === activeLens) as Lens;

  // Live view counts replace the generic second tag on the Shinobi trailer card.
  const views = shinobiVideoStatsText?.split(' · ')[0];
  const lensProjects = lens.projects.map((project) =>
    project === projects.shinobiVideo && views
      ? { ...project, tags: [project.tags[0], views] as const }
      : project
  );

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.monogram} aria-label="Georgi Tsvetanski homepage">
          G<span>T</span>
        </Link>
        <nav className={styles.headerNav} aria-label="Primary navigation">
          <Link href="/career">Projects</Link>
          <Link href="/about">About</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-name">
        <div className={styles.heroCopy}>
          <h1 id="hero-name" className={styles.heroName}>
            Georgi <span>Tsvetanski</span>
          </h1>
          <p className={styles.heroRole}>Simulation · XR · Gameplay Systems</p>
          <p className={styles.heroLine}>I build interactive experiences that bridge research and play.</p>
          <div className={styles.heroActions}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.buttonPrimary}>
              <FileText aria-hidden="true" size={18} strokeWidth={1.8} />
              View Resume
            </a>
            <a href="#contact" className={styles.buttonSecondary}>
              <Send aria-hidden="true" size={17} strokeWidth={1.8} />
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.heroPortrait}>
          <span className={styles.heroSlashOrange} aria-hidden="true" />
          <span className={styles.heroSlashCyan} aria-hidden="true" />
          <Image
            src="/images/georgi-hero-portrait.png"
            alt="Georgi Tsvetanski"
            width={330}
            height={285}
            className={styles.heroPortraitImage}
            priority
            unoptimized
          />
        </div>
      </section>

      <nav className={styles.tabBar} aria-label="Project categories">
        {lenses.map((candidate) => {
          const Icon = candidate.icon;
          const selected = candidate.id === activeLens;
          return (
            <button
              key={candidate.id}
              type="button"
              aria-pressed={selected}
              aria-controls="project-panel"
              className={selected ? styles.tabActive : styles.tab}
              onClick={() => setActiveLens(candidate.id)}
            >
              <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
              {candidate.label}
            </button>
          );
        })}
      </nav>

      <section id="project-panel" className={styles.panel} aria-label={lens.label + ' projects'}>
        <div key={lens.id} className={styles.grid}>
          {lensProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
          ))}
        </div>
        <Link href={lens.viewHref} className={styles.viewAll}>
          {lens.viewLabel} <ArrowRight aria-hidden="true" size={18} strokeWidth={1.6} />
        </Link>
      </section>

      <footer id="contact" className={styles.footer}>
        <p className={styles.footerLabel}>Contact</p>
        <nav className={styles.footerLinks} aria-label="Contact Georgi">
          <a href="mailto:georgi@tsvetanski.com">
            <Mail aria-hidden="true" size={20} strokeWidth={1.5} />
            georgi@tsvetanski.com
          </a>
          <a href="https://www.linkedin.com/in/georgitsvetanski-526373234" target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={20} strokeWidth={1.5} />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/v4n_gogo/" target="_blank" rel="noreferrer">
            <Instagram aria-hidden="true" size={20} strokeWidth={1.5} />
            Instagram
          </a>
        </nav>
        <p className={styles.footerMeta}>© 2026 Georgi Tsvetanski</p>
      </footer>
    </main>
  );
}
