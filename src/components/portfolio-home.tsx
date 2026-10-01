'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { useState } from 'react';
import CategoryTabs, { type TabValue } from '@/components/ui/category-tabs';
import ProjectCard, { type ProjectCardData } from '@/components/ui/project-card';
import ui from '@/components/ui/ui.module.css';
import { categories } from '@/content/categories';
import { projects } from '@/content/projects';
import styles from './portfolio-home.module.css';

/** Creative highlights that aren't full case studies. */
const shinobiTrailer: ProjectCardData = {
  title: 'Shinobi Story Highlight',
  href: '/projects/shinobi-story',
  summary: 'A trailer cut from five years of live-game footage.',
  tags: ['Trailer', 'Editing'],
  card: { src: 'https://img.youtube.com/vi/bPsGUDkz6-0/maxresdefault.jpg', alt: 'Shinobi Story featured video highlight' },
};

const alienWalk: ProjectCardData = {
  title: 'Alien Walk Cycle',
  href: '/creative#animation',
  summary: 'A motion study in weight, rhythm and posing.',
  tags: ['3D animation', 'Walk cycle'],
  card: {
    src: '/images/projects/creative/alien-walk-wide.png',
    alt: 'Alien walking animation study in an extended grayscale street scene',
  },
};

/** One featured card plus two smaller ones per tab. */
const lenses: Record<TabValue, readonly [ProjectCardData, ProjectCardData, ProjectCardData]> = {
  all: [projects['mumosa-crisis-response-vr'], projects['shinobi-story'], projects['black-dice-engine']],
  xr: [projects['mumosa-crisis-response-vr'], projects['shift-culture-vr'], projects.birdwatching],
  gameplay: [projects['shinobi-story'], projects['shonen-showdown'], projects['cranky-game-jam']],
  tools: [projects['black-dice-engine'], projects['ami-research-companion'], projects['feh-barracks-manager']],
  creative: [projects.cpse, shinobiTrailer, alienWalk],
};

const viewAll: Record<TabValue, { href: string; label: string }> = {
  all: { href: '/projects', label: 'See all projects' },
  xr: { href: '/projects?category=xr', label: `All ${categories.xr.label} projects` },
  gameplay: { href: '/projects?category=gameplay', label: `All ${categories.gameplay.label} projects` },
  tools: { href: '/projects?category=tools', label: `All ${categories.tools.label} projects` },
  creative: { href: '/projects?category=creative', label: `All ${categories.creative.label} projects` },
};

interface PortfolioHomeProps {
  shinobiVideoStatsText?: string | null;
}

export default function PortfolioHome({ shinobiVideoStatsText }: PortfolioHomeProps) {
  const [activeLens, setActiveLens] = useState<TabValue>('all');

  // Live view counts replace the generic second tag on the Shinobi trailer card.
  const views = shinobiVideoStatsText?.split(' · ')[0];
  const lensProjects = lenses[activeLens].map((project) =>
    project === shinobiTrailer && views ? { ...project, tags: [project.tags[0], views] } : project
  );
  const label = activeLens === 'all' ? 'Selected' : categories[activeLens].label;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-name">
        <div className={styles.heroCopy}>
          <h1 id="hero-name" className={styles.heroName}>
            Georgi <span>Tsvetanski</span>
          </h1>
          <p className={styles.heroRole}>
            <span>Simulation · XR ·</span> <span>Gameplay Systems</span>
          </p>
          <p className={styles.heroLine}>I build interactive experiences that bridge research and play.</p>
          <div className={styles.heroActions}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={ui.buttonPrimary}>
              <FileText aria-hidden="true" size={18} strokeWidth={1.8} />
              View Resume
            </a>
            <a href="#contact" className={ui.buttonSecondary}>
              <Send aria-hidden="true" size={17} strokeWidth={1.8} />
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.heroPortrait}>
          <span className={styles.heroSlashOrange} aria-hidden="true" />
          <span className={styles.heroSlashCyan} aria-hidden="true" />
          <Image
            src="/images/georgi-hero-portrait.webp"
            alt="Georgi Tsvetanski"
            width={863}
            height={745}
            className={styles.heroPortraitImage}
            preload
            unoptimized
          />
        </div>
      </section>

      <div className={styles.tabBar}>
        <CategoryTabs value={activeLens} onChange={setActiveLens} controls="project-panel" />
      </div>

      <section id="project-panel" className={styles.panel} aria-label={`${label} projects`}>
        <div key={activeLens} className={styles.grid}>
          {lensProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              variant={index === 0 ? 'featured' : 'compact'}
              priority={index === 0}
            />
          ))}
        </div>
        <Link href={viewAll[activeLens].href} className={styles.viewAll}>
          {viewAll[activeLens].label} <ArrowRight aria-hidden="true" size={18} strokeWidth={1.6} />
        </Link>
      </section>
    </main>
  );
}
