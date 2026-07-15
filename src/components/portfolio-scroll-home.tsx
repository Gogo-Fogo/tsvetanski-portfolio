'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './portfolio-scroll-home.module.css';

type CategoryId = 'xr' | 'games' | 'tools';

interface FeaturedProject {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  evidence: string;
  summary: string;
}

interface ProjectCategory {
  id: CategoryId;
  number: string;
  label: string;
  kicker: string;
  projects: readonly [FeaturedProject, FeaturedProject, FeaturedProject];
}

const categories: readonly ProjectCategory[] = [
  {
    id: 'xr',
    number: '01',
    label: 'XR',
    kicker: 'Spatial interaction, embodied controls, and real-world constraints.',
    projects: [
      {
        title: 'Birdwatching VR',
        href: '/projects/birdwatching',
        image: '/images/projects/birdwatching/birdwatching-bird-closeup-qa-20260505.png',
        imageAlt: 'Close-up bird model from the playable Birdwatching VR prototype',
        evidence: 'Unity 6 · PCVR / Quest',
        summary: 'A physical camera-to-field-guide loop with scoring, tools, comfort settings, and persistent progress.',
      },
      {
        title: 'MUMOSA Crisis Response',
        href: '/projects/mumosa-crisis-response-vr',
        image: '/images/projects/mumosa-crisis-response-vr/mumosa-banner.png',
        imageAlt: 'MUMOSA crisis-response interface and spatial evidence prototype',
        evidence: 'Client research · Unreal',
        summary: 'A spatial evidence-review direction grounded in crisis-response research and a client-facing prototype.',
      },
      {
        title: 'Shift Culture VR',
        href: '/projects/vr-microgames',
        image: '/images/B360_bike_simulator.png',
        imageAlt: 'B-360 dirt bike safety simulator prototype',
        evidence: 'Community UX · Mobile VR',
        summary: 'An accessible dirt-bike safety experience designed around inexpensive hardware and first-time VR users.',
      },
    ],
  },
  {
    id: 'games',
    number: '02',
    label: 'Games',
    kicker: 'Rules, multiplayer, combat, and systems that create readable choices.',
    projects: [
      {
        title: 'Shinobi Story',
        href: '/projects/shinobi-story',
        image: '/images/ShinobiStoryBanner.jpg',
        imageAlt: 'Shinobi Story project banner',
        evidence: 'Live game · 5 years',
        summary: 'Long-term work across implementation, content, animation, events, community, and live operations.',
      },
      {
        title: 'Shonen Showdown',
        href: '/projects/shonen-showdown',
        image: '/images/projects/shonen-showdown/duel-fp-01.png',
        imageAlt: 'First-person duel view from Shonen Showdown',
        evidence: 'Unity 6 · Photon Fusion 2',
        summary: 'A networked first-person card game built around a reusable rules engine and data-driven content.',
      },
      {
        title: 'Prince of Persia Mod',
        href: '/projects/prince-of-persia-warrior-within-mod',
        image: '/images/projects/prince-of-persia-warrior-within-mod/prince-character-select-current-20260505.png',
        imageAlt: 'Prince of Persia Warrior Within character mod selection screen',
        evidence: 'Godot / C# · Solo mod',
        summary: 'A complete character mod with rewind mechanics, a custom resource economy, combat, and presentation.',
      },
    ],
  },
  {
    id: 'tools',
    number: '03',
    label: 'Tools',
    kicker: 'Useful products, local-first workflows, and technical pipelines.',
    projects: [
      {
        title: 'Black Dice Engine',
        href: '/projects/black-dice-engine',
        image: '/images/projects/black-dice-engine/black-dice-engine-banner.png',
        imageAlt: 'Black Dice Engine dark fantasy banner',
        evidence: 'Local-first AI · Runtime tools',
        summary: 'A local game-master engine coordinating campaign state, rules, memory, media, and player tools.',
      },
      {
        title: 'Ami',
        href: '/projects/ami-research-companion',
        image: '/images/projects/ami/ami-banner.png',
        imageAlt: 'Ami research companion interface',
        evidence: 'Grounded research · macOS',
        summary: 'A calm research companion built for a real user, with source-grounded answers and portable delivery.',
      },
      {
        title: 'FEH Barracks Manager',
        href: '/projects/feh-barracks-manager',
        image: '/images/projects/feh-barracks/feh-login-screen.png',
        imageAlt: 'FEH Barracks Manager application screen',
        evidence: 'Data pipeline · Release tooling',
        summary: 'A solo companion app with scraping, reconciliation, synced collections, exports, and release bundles.',
      },
    ],
  },
];

interface ProjectCardProps {
  project: FeaturedProject;
  featured?: boolean;
  index: number;
}

function ProjectCard({ project, featured = false, index }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className={`${styles.projectCard} ${featured ? styles.projectCardFeatured : ''}`}
      aria-label={`View ${project.title} case study`}
    >
      <div className={styles.projectImage}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? '(min-width: 1100px) 65vw, 100vw' : '(min-width: 900px) 32vw, 100vw'}
          className={styles.projectImageAsset}
          priority={index === 0}
        />
        <div className={styles.projectShade} />
        <span className={styles.projectIndex}>0{index + 1}</span>
      </div>
      <div className={styles.projectCopy}>
        <p className={styles.projectEvidence}>{project.evidence}</p>
        <div className={styles.projectTitleRow}>
          <h3>{project.title}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p className={styles.projectSummary}>{project.summary}</p>
      </div>
    </Link>
  );
}

export default function PortfolioScrollHome() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('xr');
  const categoryElements = useRef<Record<CategoryId, HTMLElement | null>>({
    xr: null,
    games: null,
    tools: null,
  });

  useEffect(() => {
    const elements = categories
      .map((category) => categoryElements.current[category.id])
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveCategory(visibleEntry.target.id as CategoryId);
        }
      },
      {
        rootMargin: '-22% 0px -48% 0px',
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.identity} aria-label="Georgi Tsvetanski homepage">
          <span className={styles.portrait}>
            <Image
              src="/images/Tsvetanski_Georgi_Headshot.jpeg"
              alt="Georgi Tsvetanski"
              fill
              sizes="48px"
              className={styles.portraitImage}
              priority
            />
          </span>
          <span>
            <strong>Georgi Tsvetanski</strong>
            <small>Simulation · XR · Gameplay Systems</small>
          </span>
        </Link>

        <nav className={styles.headerNav} aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <Link href="/resume.pdf" target="_blank" className={styles.resumeLink}>
            Résumé <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <section className={styles.intro} aria-labelledby="home-heading">
        <p className={styles.eyebrow}>Selected work · 2021–2026</p>
        <h1 id="home-heading">Systems built to be felt, played, and used.</h1>
        <p className={styles.introLine}>XR <span>·</span> Games <span>·</span> Tools</p>
      </section>

      <div className={styles.workLayout}>
        <aside className={styles.categoryRail} aria-label="Project categories">
          <p className={styles.railLabel}>Explore</p>
          <nav>
            {categories.map((category) => {
              const active = activeCategory === category.id;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={active ? styles.categoryLinkActive : styles.categoryLink}
                  aria-current={active ? 'location' : undefined}
                >
                  <span>{category.number}</span>
                  <strong>{category.label}</strong>
                </a>
              );
            })}
          </nav>
          <span className={styles.railLine} aria-hidden="true" />
        </aside>

        <div className={styles.categoryStack}>
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              ref={(element) => {
                categoryElements.current[category.id] = element;
              }}
              className={styles.categorySection}
              aria-labelledby={`${category.id}-heading`}
            >
              <div className={styles.categoryHeading}>
                <p>{category.number} / 03</p>
                <div>
                  <h2 id={`${category.id}-heading`}>{category.label}</h2>
                  <p>{category.kicker}</p>
                </div>
              </div>

              <ProjectCard project={category.projects[0]} featured index={0} />

              <div className={styles.secondaryGrid}>
                <ProjectCard project={category.projects[1]} index={1} />
                <ProjectCard project={category.projects[2]} index={2} />
              </div>

              <Link href={`/career?filter=${category.id}`} className={styles.viewAllLink}>
                View all {category.label} projects <span aria-hidden="true">→</span>
              </Link>
            </section>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <p className={styles.eyebrow}>Have a role or project in mind?</p>
          <h2>Let&apos;s build something responsive.</h2>
        </div>
        <a href="mailto:georgi@tsvetanski.com">georgi@tsvetanski.com <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
