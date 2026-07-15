'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Box, Gamepad2, Headset, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './portfolio-scroll-home.module.css';

type LensId = 'xr' | 'simulation' | 'gameplay' | 'tools';

interface Project {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  evidence: string;
  summary: string;
}

interface Lens {
  id: LensId;
  label: string;
  icon: LucideIcon;
  viewFilter: string;
  projects: readonly [Project, Project, Project];
}

const projects = {
  birdwatching: {
    title: 'Birdwatching VR',
    href: '/projects/birdwatching',
    image: '/images/projects/birdwatching/birdwatching-igda-showcase-demo-01.jpeg',
    imageAlt: 'Player wearing a VR headset in the Birdwatching VR prototype',
    evidence: 'Unity 6 · PCVR / Quest',
    summary: 'A camera-to-field-guide loop with scoring, tools, comfort settings, and persistent progress.',
  },
  mumosa: {
    title: 'MUMOSA Crisis Response',
    href: '/projects/mumosa-crisis-response-vr',
    image: '/images/projects/mumosa-crisis-response-vr/mumosa-banner.png',
    imageAlt: 'MUMOSA crisis-response interface and spatial evidence prototype',
    evidence: 'Client research · Unreal',
    summary: 'A spatial evidence-review direction grounded in crisis-response research and a client-facing prototype.',
  },
  shift: {
    title: 'Shift Culture VR',
    href: '/projects/vr-microgames',
    image: '/images/B360_bike_simulator.png',
    imageAlt: 'B-360 dirt bike safety simulator prototype',
    evidence: 'Community UX · Mobile VR',
    summary: 'An accessible dirt-bike safety experience designed for inexpensive hardware and first-time VR users.',
  },
  shinobi: {
    title: 'Shinobi Story',
    href: '/projects/shinobi-story',
    image: '/images/ShinobiStoryBanner.jpg',
    imageAlt: 'Shinobi Story project banner',
    evidence: 'Live game · 5 years',
    summary: 'Long-term work across implementation, content, animation, events, community, and live operations.',
  },
  shonen: {
    title: 'Shonen Showdown',
    href: '/projects/shonen-showdown',
    image: '/images/projects/shonen-showdown/duel-fp-01.png',
    imageAlt: 'First-person duel view from Shonen Showdown',
    evidence: 'Unity 6 · Photon Fusion 2',
    summary: 'A networked first-person card game built around a reusable rules engine and data-driven content.',
  },
  prince: {
    title: 'Prince of Persia Mod',
    href: '/projects/prince-of-persia-warrior-within-mod',
    image: '/images/projects/prince-of-persia-warrior-within-mod/prince-character-select-current-20260505.png',
    imageAlt: 'Prince of Persia Warrior Within character mod selection screen',
    evidence: 'Godot / C# · Solo mod',
    summary: 'A complete character mod with rewind mechanics, a custom resource economy, combat, and presentation.',
  },
  blackDice: {
    title: 'Black Dice Engine',
    href: '/projects/black-dice-engine',
    image: '/images/projects/black-dice-engine/black-dice-engine-banner.png',
    imageAlt: 'Black Dice Engine dark fantasy banner',
    evidence: 'Local-first AI · Runtime tools',
    summary: 'A local game-master engine coordinating campaign state, rules, memory, media, and player tools.',
  },
  ami: {
    title: 'Ami',
    href: '/projects/ami-research-companion',
    image: '/images/projects/ami/ami-banner.png',
    imageAlt: 'Ami research companion interface',
    evidence: 'Grounded research · macOS',
    summary: 'A calm research companion built for a real user, with source-grounded answers and portable delivery.',
  },
  feh: {
    title: 'FEH Barracks Manager',
    href: '/projects/feh-barracks-manager',
    image: '/images/projects/feh-barracks/feh-login-screen.png',
    imageAlt: 'FEH Barracks Manager application screen',
    evidence: 'Data pipeline · Release tooling',
    summary: 'A solo companion app with scraping, reconciliation, synced collections, exports, and release bundles.',
  },
} satisfies Record<string, Project>;

const lenses: readonly Lens[] = [
  {
    id: 'xr',
    label: 'XR',
    icon: Headset,
    viewFilter: 'xr',
    projects: [projects.birdwatching, projects.mumosa, projects.shift],
  },
  {
    id: 'simulation',
    label: 'Simulation',
    icon: Box,
    viewFilter: 'games',
    projects: [projects.shinobi, projects.birdwatching, projects.blackDice],
  },
  {
    id: 'gameplay',
    label: 'Gameplay',
    icon: Gamepad2,
    viewFilter: 'games',
    projects: [projects.shonen, projects.shinobi, projects.prince],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    viewFilter: 'tools',
    projects: [projects.blackDice, projects.ami, projects.feh],
  },
];

const lensStackOrder: readonly LensId[] = ['simulation', 'xr', 'gameplay', 'tools'];

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}

function ProjectCard({ project, featured = false, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className={featured ? styles.featureCard : styles.secondaryCard}
      aria-label={'View ' + project.title + ' case study'}
    >
      <div className={featured ? styles.featureCopy : styles.secondaryCopy}>
        {featured ? <p className={styles.featureKicker}>Selected Work</p> : null}
        <div className={styles.cardTitleRow}>
          <h3>{project.title}</h3>
          {!featured ? <ArrowRight aria-hidden="true" size={24} strokeWidth={1.5} /> : null}
        </div>
        <p className={styles.cardSummary}>{project.summary}</p>
        {featured ? (
          <span className={styles.viewProject}>View project <ArrowRight aria-hidden="true" size={20} strokeWidth={1.7} /></span>
        ) : null}
      </div>
      <div className={featured ? styles.featureImage : styles.secondaryImage}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? '(min-width: 900px) 55vw, 92vw' : '(min-width: 900px) 50vw, 92vw'}
          className={styles.cardImage}
          priority={priority}
          unoptimized
        />
      </div>
    </Link>
  );
}

interface LensNodeProps {
  lens: Lens;
  active: boolean;
  onSelect: (id: LensId) => void;
}

function LensNode({ lens, active, onSelect }: LensNodeProps) {
  const Icon = lens.icon;
  return (
    <a
      href={'#lens-' + lens.id}
      className={active ? styles.nodeActive : styles.node}
      aria-current={active ? 'location' : undefined}
      onClick={() => onSelect(lens.id)}
    >
      <Icon aria-hidden="true" size={30} strokeWidth={1.4} />
      <span>{lens.label}</span>
    </a>
  );
}

export default function PortfolioScrollHome() {
  const [activeLens, setActiveLens] = useState<LensId>('simulation');
  const lensElements = useRef<Record<LensId, HTMLElement | null>>({
    xr: null,
    simulation: null,
    gameplay: null,
    tools: null,
  });

  useEffect(() => {
    const elements = lensStackOrder
      .map((id) => lensElements.current[id])
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveLens(visibleEntry.target.id.replace('lens-', '') as LensId);
        }
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0.1, 0.3, 0.55] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const orderedLenses = lensStackOrder.map((id) => lenses.find((lens) => lens.id === id) as Lens);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.identity} aria-label="Georgi Tsvetanski homepage">
          <span className={styles.portrait}>
            <Image
              src="/images/Tsvetanski_Georgi_Headshot.jpeg"
              alt="Georgi Tsvetanski"
              fill
              sizes="76px"
              className={styles.portraitImage}
              priority
              unoptimized
            />
          </span>
          <span className={styles.identityWords}>
            <strong>Georgi Tsvetanski</strong>
            <small>Simulation · XR · Gameplay Systems</small>
          </span>
        </Link>

        <nav className={styles.headerNav} aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <Link href="/career" className={styles.allWorkLink}>All work <ArrowRight aria-hidden="true" size={22} strokeWidth={1.5} /></Link>
        </nav>
      </header>

      <div className={styles.referenceLayout}>
        <aside className={styles.nodeRail} aria-label="Explore work">
          <nav className={styles.nodeList}>
            {lenses.map((lens) => <LensNode key={lens.id} lens={lens} active={activeLens === lens.id} onSelect={setActiveLens} />)}
          </nav>
        </aside>

        <div className={styles.lensStack}>
          {orderedLenses.map((lens) => (
            <section
              key={lens.id}
              id={'lens-' + lens.id}
              ref={(element) => { lensElements.current[lens.id] = element; }}
              className={styles.lensSection}
              aria-labelledby={'lens-heading-' + lens.id}
            >
              <h2 id={'lens-heading-' + lens.id} className={styles.srOnly}>{lens.label} projects</h2>
              <div className={activeLens === lens.id ? styles.featureWrapActive : styles.featureWrap}>
                <span className={styles.connectorDot} aria-hidden="true" />
                <span className={styles.connectorCurve} aria-hidden="true" />
                <ProjectCard project={lens.projects[0]} featured priority={lens.id === 'simulation'} />
              </div>
              <div className={styles.secondaryStack}>
                {lens.projects.slice(1).map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
              <Link href={'/career?filter=' + lens.viewFilter} className={styles.viewAllLink}>
                View all {lens.label} work <ArrowRight aria-hidden="true" size={22} strokeWidth={1.5} />
              </Link>
            </section>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <a href="mailto:georgi@tsvetanski.com">georgi@tsvetanski.com <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} /></a>
        <span>Available for XR, game systems, and tools.</span>
      </footer>
    </main>
  );
}
