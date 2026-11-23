'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  Clapperboard,
  FileText,
  Gamepad2,
  LayoutGrid,
  RectangleGoggles,
  Search,
  Send,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { useCommandPalette } from '@/components/site/command-palette-provider';
import CategoryTabs, { type TabValue } from '@/components/ui/category-tabs';
import ProjectCard, { type ProjectCardData } from '@/components/ui/project-card';
import ui from '@/components/ui/ui.module.css';
import { categories, categoryIds, type Category } from '@/content/categories';
import { allProjects, projectsIn } from '@/content/project-helpers';
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
  href: '/animation',
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

/** Phones: every category is a direct way into the full list, with its size up front. */
const categoryIcons: Record<Category['icon'], LucideIcon> = {
  goggles: RectangleGoggles,
  gamepad: Gamepad2,
  brain: BrainCircuit,
  clapperboard: Clapperboard,
};

const browseRows = categoryIds.map((id) => ({
  id,
  href: `/projects?category=${id}`,
  label: categories[id].label,
  description: categories[id].description,
  count: projectsIn(id).length,
  Icon: categoryIcons[categories[id].icon],
}));

const totalProjects = allProjects().length;

interface PortfolioHomeProps {
  shinobiVideoStatsText?: string | null;
}

export default function PortfolioHome({ shinobiVideoStatsText }: PortfolioHomeProps) {
  const [activeLens, setActiveLens] = useState<TabValue>('all');
  const { openPalette, preloadPalette } = useCommandPalette();

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
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={`${ui.buttonPrimary} ${ui.buttonIconTurn}`}>
              <FileText aria-hidden="true" size={18} strokeWidth={1.8} />
              View Resume
            </a>
            <a href="#contact" className={`${ui.buttonSecondary} ${ui.buttonIconTurn}`}>
              <Send aria-hidden="true" size={17} strokeWidth={1.8} />
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.heroPortrait}>
          <span className={styles.heroSlashOrange} aria-hidden="true" />
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

      <h2 className={styles.phoneHeading}>Selected work</h2>

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

      <nav className={styles.browse} aria-labelledby="browse-heading">
        <h2 id="browse-heading" className={styles.phoneHeading}>
          Browse by category
        </h2>
        <ul className={styles.browseList}>
          {browseRows.map(({ id, href, label: rowLabel, description, count, Icon }) => (
            <li key={id}>
              <Link href={href} className={styles.browseRow}>
                <span className={styles.browseIcon} aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className={styles.browseText}>
                  <span className={styles.browseLabel}>{rowLabel}</span>
                  <span className={styles.browseDescription}>{description}</span>
                </span>
                <span className={styles.browseCount}>
                  {count}
                  <span className="sr-only"> projects</span>
                </span>
                <ChevronRight aria-hidden="true" size={18} strokeWidth={1.6} className={styles.browseChevron} />
              </Link>
            </li>
          ))}
          <li>
            <Link href="/projects" className={styles.browseRow}>
              <span className={styles.browseIcon} aria-hidden="true">
                <LayoutGrid size={20} strokeWidth={1.6} />
              </span>
              <span className={styles.browseText}>
                <span className={styles.browseLabel}>All projects</span>
              </span>
              <span className={styles.browseCount}>
                {totalProjects}
                <span className="sr-only"> projects</span>
              </span>
              <ChevronRight aria-hidden="true" size={18} strokeWidth={1.6} className={styles.browseChevron} />
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={styles.browseSearch}
          onClick={openPalette}
          onPointerEnter={preloadPalette}
          onFocus={preloadPalette}
        >
          <Search aria-hidden="true" size={18} strokeWidth={1.8} />
          Search projects and pages
        </button>
      </nav>
    </main>
  );
}
