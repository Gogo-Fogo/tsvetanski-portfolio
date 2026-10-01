'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Clapperboard, Gamepad2, Instagram, Linkedin, Mail, RectangleGoggles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './portfolio-scroll-home.module.css';

type LensId = 'xr' | 'gameplay' | 'tools' | 'creative';

interface Project {
  title: string;
  href: string;
  mobileImage?: string;
  mobileImageAlt?: string;
  image: string;
  imageAlt: string;
  evidence: string;
  summary: string;
  statsText?: string | null;
}

interface Lens {
  id: LensId;
  label: string;
  icon: LucideIcon;
  viewFilter: string;
  viewHref?: string;
  viewAllLabel?: string;
  projects: readonly [Project, Project, Project];
}

const projects = {
  birdwatching: {
    title: 'Birdwatching VR',
    href: '/projects/birdwatching',
    image: '/images/projects/birdwatching/birdwatching-forest-hero.jpg',
    imageAlt: 'Stylized forest environment from Birdwatching VR',
    evidence: 'Unity 6 · PCVR / Quest',
    summary: 'A camera-to-field-guide loop with scoring, tools, comfort settings, and persistent progress.',
  },
  mumosa: {
    title: 'MUMOSA Crisis Response',
    href: '/projects/mumosa-crisis-response-vr',
    image: '/images/projects/mumosa-crisis-response-vr/mumosa-vr-evidence-selection.png',
    imageAlt: 'MUMOSA spatial evidence selection inside an Unreal crisis-response scene',
    mobileImage: '/images/projects/mumosa-crisis-response-vr/mumosa-vr-spatial-marker.png',
    mobileImageAlt: 'MUMOSA spatial evidence marker inside an Unreal crisis-response scene',
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
  cranky: {
    title: 'Cranky',
    href: '/projects/cranky-game-jam',
    image: '/images/CRANKY_Animation_Blender_Rigging.png',
    imageAlt: 'Cranky pug character rig and animation controls in Blender',
    evidence: 'Global Game Jam 2024 · 1 week',
    summary: 'A chaotic split-screen multiplayer prototype built with a team in one week for Global Game Jam.',
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
    image: '/images/projects/ami/ami-chat-evidence-illustrated.png',
    imageAlt: 'Ami research companion answering a question with illustrated visual evidence',
    evidence: 'Grounded research · macOS',
    summary: 'A calm research companion built for a real user, with source-grounded answers and portable delivery.',
  },
  feh: {
    title: 'FEH Barracks Manager',
    href: '/projects/feh-barracks-manager',
    image: '/images/projects/feh-barracks/feh-hero-library.png',
    imageAlt: 'FEH Barracks Manager searchable hero library and collection controls',
    evidence: 'Data pipeline · Release tooling',
    summary: 'A solo companion app with scraping, reconciliation, synced collections, exports, and release bundles.',
  },

  cpseVideo: {
    title: 'UMD CPSE Summer Program',
    href: '/cpse',
    image: 'https://img.youtube.com/vi/YP9sqDBSWdo/maxresdefault.jpg',
    imageAlt: 'UMD CPSE Summer Program 2024 video',
    evidence: 'Videography · Editing · Interviews',
    summary: 'A program highlight produced from planning through filming and post-production for UMD CPSE.',
  },
  shinobiVideo: {
    title: 'Shinobi Story: Featured Highlight',
    href: '/projects/shinobi-story',
    image: 'https://img.youtube.com/vi/bPsGUDkz6-0/maxresdefault.jpg',
    imageAlt: 'Shinobi Story featured video highlight',
    evidence: 'Trailer editing · Live-game storytelling',
    summary: 'A focused video showcase drawn from five years of content, animation, events, and live operations.',
  },
  alienWalk: {
    title: 'Alien Walking Animation',
    href: '/creative#animation',
    image: '/images/projects/creative/alien-walk-wide.png',
    imageAlt: 'Alien walking animation study in an extended grayscale street scene',
    evidence: '3D animation · Walk cycle',
    summary: 'A character-motion study exploring weight, rhythm, posing, and a readable looping walk cycle.',
  },
} satisfies Record<string, Project>;

const lenses: readonly Lens[] = [
  {
    id: 'xr',
    label: 'XR + Simulation',
    icon: RectangleGoggles,
    viewFilter: 'xr',
    projects: [projects.mumosa, projects.shift, projects.birdwatching],
  },
  {
    id: 'gameplay',
    label: 'Gameplay Systems',
    icon: Gamepad2,
    viewFilter: 'games',
    projects: [projects.shinobi, projects.shonen, projects.cranky],
  },
  {
    id: 'tools',
    label: 'Tools & AI',
    icon: BrainCircuit,
    viewFilter: 'tools',
    projects: [projects.blackDice, projects.feh, projects.ami],
  },
  {
    id: 'creative',
    label: 'Creative Media Works',
    icon: Clapperboard,
    viewFilter: 'creative',
    viewHref: '/creative',
    viewAllLabel: 'View all Creative Media Works',
    projects: [projects.cpseVideo, projects.shinobiVideo, projects.alienWalk],
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
        {project.statsText ? <p className={styles.videoStats}>{project.statsText}</p> : null}
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
          className={`${styles.cardImage} ${project.mobileImage ? styles.cardImageDesktop : ''}`}
          priority={priority}
          unoptimized
        />
        {project.mobileImage ? (
          <Image
            src={project.mobileImage}
            alt={project.mobileImageAlt ?? project.imageAlt}
            fill
            sizes="92vw"
            className={`${styles.cardImage} ${styles.cardImageMobile}`}
            priority={priority}
            unoptimized
          />
        ) : null}
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
      <Icon aria-hidden="true" size={30} strokeWidth={1.4} className={lens.id === 'xr' ? styles.xrIcon : undefined} />
      <span>{lens.id === 'xr' ? 'XR + Sim' : lens.label}</span>
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

interface PortfolioScrollHomeProps {
  shinobiVideoStatsText?: string | null;
}

export default function PortfolioScrollHome({ shinobiVideoStatsText }: PortfolioScrollHomeProps) {
  const [activeLens, setActiveLens] = useState<LensId>('xr');
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
    // Simulation projects are included in the XR lens.
    gameplay: null,
    tools: null,
    creative: null,
  });

  const selectedLens = lenses.find((lens) => lens.id === activeLens) as Lens;
  const selectedProjects = selectedLens.projects.map((project) =>
    project === projects.shinobiVideo ? { ...project, statsText: shinobiVideoStatsText } : project
  );

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

  useEffect(() => {
    const forwardWheelToProjects = (event: WheelEvent) => {
      const projectPanel = projectPanelRef.current;
      if (!projectPanel || window.innerWidth <= 700 || event.ctrlKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      let scrollParent = event.target instanceof HTMLElement ? event.target : null;
      while (scrollParent && scrollParent !== document.body) {
        if (scrollParent === projectPanel) break;
        const overflowY = window.getComputedStyle(scrollParent).overflowY;
        if (/auto|scroll/.test(overflowY) && scrollParent.scrollHeight > scrollParent.clientHeight) return;
        scrollParent = scrollParent.parentElement;
      }

      const deltaMultiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? projectPanel.clientHeight
          : 1;
      const delta = event.deltaY * deltaMultiplier;
      if (delta === 0) return;

      event.preventDefault();
      projectPanel.scrollTop += delta;
    };

    window.addEventListener('wheel', forwardWheelToProjects, { passive: false });
    return () => window.removeEventListener('wheel', forwardWheelToProjects);
  }, []);

  const selectLens = (id: LensId) => {
    if (id !== activeLens) {
      setActiveLens(id);
      setActiveProject(0);
      activeProjectRef.current = 0;
    }
    window.history.replaceState(null, '', '#lens-' + id);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.requestAnimationFrame(() => {
      projectPanelRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.identity} aria-label="Georgi Tsvetanski homepage">
          <span className={styles.portrait}>
            <Image
              src="/images/Georgi-portrait-cutout-v4.png"
              alt="Georgi Tsvetanski"
              fill
              sizes="76px"
              className={styles.portraitImage}
              priority
              unoptimized
            />
          </span>
          <h1 className={styles.identityWords}>
            <strong>Georgi Tsvetanski</strong>
            <small>Simulation · XR · Gameplay Systems</small>
          </h1>
        </Link>

          <nav className={styles.headerNav} aria-label="Primary navigation">
            <Link href="/about" className={styles.aboutLink}>About <ArrowRight aria-hidden="true" size={22} strokeWidth={1.5} /></Link>
          </nav>
        </div>
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
            {selectedProjects.map((project, index) => (
              <article
                key={project.title}
                ref={(element) => { projectRefs.current[index] = element; }}
                className={index === activeProject ? styles.projectTrackItemActive : styles.projectTrackItem}
              >
                <ProjectCard project={project} featured={index === 0} priority={index === 0} />
              </article>
            ))}
          </div>
          <Link href={selectedLens.viewHref ?? '/career?filter=' + selectedLens.viewFilter} className={styles.viewAllLink}>
            {selectedLens.viewAllLabel ?? `View all ${selectedLens.label} work`} <ArrowRight aria-hidden="true" size={22} strokeWidth={1.5} />
          </Link>
          <footer id="connect" className={styles.connectSection}>
            <div className={styles.connectCard}>
              <p className={styles.connectEyebrow}>Connect</p>
              <nav className={styles.connectLinks} aria-label="Connect with Georgi">
                <a href="mailto:georgi@tsvetanski.com" aria-label="Email Georgi">
                  <span className={styles.connectIcon}><Mail aria-hidden="true" size={22} strokeWidth={1.5} /></span>
                  <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/georgitsvetanski-526373234" target="_blank" rel="noreferrer" aria-label="Georgi on LinkedIn">
                  <span className={styles.connectIcon}><Linkedin aria-hidden="true" size={22} strokeWidth={1.5} /></span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/v4n_gogo/" target="_blank" rel="noreferrer" aria-label="Georgi on Instagram">
                  <span className={styles.connectIcon}><Instagram aria-hidden="true" size={18} strokeWidth={1.5} /></span>
                  <span>Instagram</span>
                </a>
              </nav>
            </div>
            <p className={styles.connectMeta}>© 2026 Georgi Tsvetanski</p>
          </footer>
        </section>
      </div>

    </main>
  );
}
