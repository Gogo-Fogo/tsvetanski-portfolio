'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Box, BrainCircuit, Gamepad2, RectangleGoggles } from 'lucide-react';
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
    image: '/images/ShinobiStoryHeroClean.png',
    imageAlt: 'Shinobi Story character charging through a forest',
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
    icon: RectangleGoggles,
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
    icon: BrainCircuit,
    viewFilter: 'tools',
    projects: [projects.blackDice, projects.ami, projects.feh],
  },
];

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
  nodeRef: (element: HTMLButtonElement | null) => void;
}

function LensNode({ lens, active, onSelect, nodeRef }: LensNodeProps) {
  const Icon = lens.icon;
  return (
    <button
      ref={nodeRef}
      type="button"
      className={active ? styles.nodeActive : styles.node}
      aria-pressed={active}
      onClick={() => onSelect(lens.id)}
    >
      {lens.id === 'xr' ? (
        <Image
          src="/images/reference-xr-headset.png"
          alt=""
          width={64}
          height={52}
          className={styles.xrReferenceIcon}
          aria-hidden="true"
        />
      ) : (
        <Icon aria-hidden="true" size={30} strokeWidth={1.4} />
      )}
      <span>{lens.label}</span>
    </button>
  );
}

interface ConnectorFrame {
  width: number;
  height: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export default function PortfolioScrollHome() {
  const [activeLens, setActiveLens] = useState<LensId>('simulation');
  const [activeProject, setActiveProject] = useState(0);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const projectPanelRef = useRef<HTMLElement | null>(null);
  const projectRefs = useRef<Array<HTMLElement | null>>([]);
  const connectorLayerRef = useRef<SVGSVGElement | null>(null);
  const connectorGlowRef = useRef<SVGPathElement | null>(null);
  const connectorPathRef = useRef<SVGPathElement | null>(null);
  const connectorStartRef = useRef<SVGCircleElement | null>(null);
  const connectorEndRef = useRef<SVGCircleElement | null>(null);
  const connectorTargetRef = useRef<ConnectorFrame | null>(null);
  const activeProjectRef = useRef(0);
  const nodeRefs = useRef<Record<LensId, HTMLButtonElement | null>>({
    xr: null,
    simulation: null,
    gameplay: null,
    tools: null,
  });


  const selectedLens = lenses.find((lens) => lens.id === activeLens) as Lens;

  useEffect(() => {
    let animationFrame = 0;
    let renderedFrame: ConnectorFrame | null = null;

    const drawConnector = (frame: ConnectorFrame) => {
      const layer = connectorLayerRef.current;
      const glow = connectorGlowRef.current;
      const path = connectorPathRef.current;
      const startDot = connectorStartRef.current;
      const endDot = connectorEndRef.current;
      if (!layer || !glow || !path || !startDot || !endDot) return;

      const curveReach = Math.max(74, (frame.endX - frame.startX) * 0.48);
      const pathData = 'M ' + frame.startX + ' ' + frame.startY + ' C ' + (frame.startX + curveReach) + ' ' + frame.startY + ', ' + (frame.endX - curveReach) + ' ' + frame.endY + ', ' + frame.endX + ' ' + frame.endY;

      layer.setAttribute('width', String(frame.width));
      layer.setAttribute('height', String(frame.height));
      layer.setAttribute('viewBox', '0 0 ' + frame.width + ' ' + frame.height);
      layer.style.opacity = '1';
      glow.setAttribute('d', pathData);
      path.setAttribute('d', pathData);
      startDot.setAttribute('cx', String(frame.startX));
      startDot.setAttribute('cy', String(frame.startY));
      endDot.setAttribute('cx', String(frame.endX));
      endDot.setAttribute('cy', String(frame.endY));
    };

    const animate = () => {
      const target = connectorTargetRef.current;
      if (!target) {
        animationFrame = 0;
        return;
      }

      if (!renderedFrame) renderedFrame = target;

      // Keep the connector visually attached while the browser reports a
      // large wheel delta in one frame. The target can jump; the rendered
      // frame eases toward it so the curve glides between project centers.
      const smoothing = 0.2;
      const nextFrame: ConnectorFrame = {
        width: renderedFrame.width + (target.width - renderedFrame.width) * smoothing,
        height: renderedFrame.height + (target.height - renderedFrame.height) * smoothing,
        startX: renderedFrame.startX + (target.startX - renderedFrame.startX) * smoothing,
        startY: renderedFrame.startY + (target.startY - renderedFrame.startY) * smoothing,
        endX: renderedFrame.endX + (target.endX - renderedFrame.endX) * smoothing,
        endY: renderedFrame.endY + (target.endY - renderedFrame.endY) * smoothing,
      };
      const settled = Math.abs(target.endY - nextFrame.endY) < 0.5
        && Math.abs(target.endX - nextFrame.endX) < 0.5
        && Math.abs(target.startY - nextFrame.startY) < 0.5;
      renderedFrame = settled ? target : nextFrame;
      drawConnector(renderedFrame);

      if (settled) {
        animationFrame = 0;
      } else {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const scheduleAnimation = () => {
      if (animationFrame === 0) animationFrame = window.requestAnimationFrame(animate);
    };

    const measure = () => {
      const layout = layoutRef.current;
      const node = nodeRefs.current[activeLens];
      const cards = projectRefs.current.filter((card): card is HTMLElement => card !== null);

      if (!layout || !node || cards.length === 0 || window.innerWidth <= 700) {
        connectorTargetRef.current = null;
        if (connectorLayerRef.current) connectorLayerRef.current.style.opacity = '0';
        return;
      }

      const focusY = Math.min(window.innerHeight * 0.42, 460);
      const layoutRect = layout.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const projectAnchors = cards.map((card) => {
        const rect = card.getBoundingClientRect();
        const viewportY = rect.top + rect.height / 2;
        return {
          x: rect.left - layoutRect.left,
          y: viewportY - layoutRect.top,
          viewportY,
        };
      });
      const closestProject = projectAnchors.reduce((closest, anchor, index) => {
        const distance = Math.abs(anchor.viewportY - focusY);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });

      if (activeProjectRef.current !== closestProject.index) {
        activeProjectRef.current = closestProject.index;
        setActiveProject(closestProject.index);
      }

      // Anchor to the center of the project currently under the focus line.
      // The animation above eases this target when a wheel tick changes cards.
      const endX = projectAnchors[closestProject.index].x;
      const endY = projectAnchors[closestProject.index].y;

      const startX = nodeRect.right - layoutRect.left + 8;
      const startY = nodeRect.top + nodeRect.height / 2 - layoutRect.top;

      connectorTargetRef.current = {
        width: layout.clientWidth,
        height: layout.scrollHeight,
        startX,
        startY,
        endX,
        endY,
      };

      scheduleAnimation();
    };

    const resizeObserver = new ResizeObserver(measure);
    if (layoutRef.current) resizeObserver.observe(layoutRef.current);
    projectRefs.current.forEach((card) => {
      if (card) resizeObserver.observe(card);
    });

    const projectPanel = projectPanelRef.current;
    window.addEventListener('scroll', measure, { passive: true });
    projectPanel?.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    measure();

    return () => {
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', measure);
      projectPanel?.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [activeLens]);

  const selectLens = (id: LensId) => {
    if (id !== activeLens) {
      setActiveLens(id);
      setActiveProject(0);
      activeProjectRef.current = 0;
    }
    window.history.replaceState(null, '', '#lens-' + id);
    window.requestAnimationFrame(() => {
      projectPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.identity} aria-label="Georgi Tsvetanski homepage">
          <span className={styles.portrait}>
            <Image
              src="/images/Georgi-portrait-cutout.png"
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
          <Link href="/about" className={styles.aboutLink}>About <ArrowRight aria-hidden="true" size={22} strokeWidth={1.5} /></Link>
        </nav>
      </header>

      <div ref={layoutRef} className={styles.referenceLayout}>
        <svg
          ref={connectorLayerRef}
          className={styles.connectorLayer}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path ref={connectorGlowRef} className={styles.connectorPathGlow} />
          <path ref={connectorPathRef} className={styles.connectorPath} />
          <circle ref={connectorStartRef} className={styles.connectorStart} r="4" />
          <circle ref={connectorEndRef} className={styles.connectorEnd} r="7" />
        </svg>

        <aside className={styles.nodeRail} aria-label="Explore work">
          <nav className={styles.nodeList}>
            {lenses.map((lens) => (
              <LensNode
                key={lens.id}
                lens={lens}
                active={activeLens === lens.id}
                onSelect={selectLens}
                nodeRef={(element) => { nodeRefs.current[lens.id] = element; }}
              />
            ))}
          </nav>
        </aside>

        <section
          key={selectedLens.id}
          id={'lens-' + selectedLens.id}
          ref={projectPanelRef}
          className={styles.projectPanel}
          aria-labelledby="selected-lens-heading"
        >
          <h2 id="selected-lens-heading" className={styles.srOnly}>{selectedLens.label} projects</h2>
          <div className={styles.projectStack}>
            {selectedLens.projects.map((project, index) => (
              <article
                key={project.title}
                ref={(element) => { projectRefs.current[index] = element; }}
                className={index === activeProject ? styles.projectTrackItemActive : styles.projectTrackItem}
              >
                <ProjectCard project={project} featured={index === 0} priority={index === 0} />
              </article>
            ))}
          </div>
          <Link href={'/career?filter=' + selectedLens.viewFilter} className={styles.viewAllLink}>
            View all {selectedLens.label} work <ArrowRight aria-hidden="true" size={22} strokeWidth={1.5} />
          </Link>
        </section>
      </div>

      <footer className={styles.footer}>
        <a href="mailto:georgi@tsvetanski.com">georgi@tsvetanski.com <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} /></a>
        <span>Available for XR, game systems, and tools.</span>
      </footer>
    </main>
  );
}
