"use client";

import LightboxImage from '@/components/lightbox-image';
import Breadcrumbs from '@/components/breadcrumbs';
import { HoverCard, Tooltip } from '@/components/floating-ui-primitives';
import { MotionPage } from '@/components/motion-safe';
import Link from 'next/link';
import { Suspense, useMemo } from 'react';
import { parseAsString, parseAsStringLiteral, useQueryState } from 'nuqs';

interface Project {
  title: string;
  description: string;
  tags: string[];
  searchTerms?: string[];
  facets: ProjectFilter[];
  type?: 'commercial' | 'prototype';
  href?: string;
  bannerImage?: string;
  bannerAlt?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerBorderClass?: string;
}

interface SideProjectCard {
  title: string;
  subtitle: string;
  description: string;
  searchTerms?: string[];
  roles?: string;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  href?: string;
  bannerWidth?: number;
  bannerHeight?: number;
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
    description: "Real-time spatial audio attenuation for multi-user social deduction.",
    tags: ["Photon Fusion", "Networked Multiplayer", "Spatial Audio"],
    searchTerms: ["pirate", "social deduction", "photon voice", "fusion networking"],
    facets: ['engineering', 'xr'],
    href: "/projects/repo-x"
  },
  {
    title: "VR Dirt Bike Game",
    description: "Immersive training for smart and safe driving practices.",
    tags: ["VR Safety Simulation", "Educational VR", "Human Factors"],
    searchTerms: ["dirt bike", "safety training", "education", "riding"],
    facets: ['engineering', 'xr'],
    href: "/projects/vr-microgames"
  },
  {
    title: "VR Car Drift Simulator",
    description: "High-fidelity spatial interaction and vehicle dynamics in a night city environment.",
    tags: ["VR Driving Simulation", "Vehicle Physics", "Spatial Interaction"],
    searchTerms: ["car drift", "driving", "vehicle dynamics", "simulator"],
    facets: ['engineering', 'xr'],
    href: "/projects/vr-interaction-lab"
  },
  {
    title: "Fallout Mod (Level Design)",
    description: "Overhauled game level demonstrating world-building and existing IP adaptation.",
    tags: ["Level Design", "Environmental Storytelling", "Team Collaboration"],
    searchTerms: ["fallout", "modding", "level overhaul", "world building"],
    facets: ['art-storytelling'],
    href: "/projects/fallout-level-design"
  },
  {
    title: "Shonen TCG Game",
    description: "Developing a robust 3D multiplayer trading card game prototype.",
    tags: ["3D Multiplayer TCG", "Game Systems Design", "Prototyping"],
    searchTerms: ["card game", "tcg", "anime", "prototype"],
    facets: ['engineering', 'art-storytelling'],
    type: 'prototype'
  },
  {
    title: "VR Patapon Game",
    description: "Conceptualizing an innovative VR rhythm-strategy game.",
    tags: ["VR GDD", "Rhythm Interaction", "Strategy"],
    searchTerms: ["patapon", "rhythm", "strategy", "experimental input"],
    facets: ['xr', 'art-storytelling'],
    type: 'prototype'
  }
];

const sideProjects: SideProjectCard[] = [
  {
    title: 'Totally Bugged Out',
    subtitle: 'Solo Project — First-Person Bug Survival Game',
    description:
      'Set in a bug-infested Balkan house, this prototype uses a universal throw system and swarming enemy behavior that can traverse walls and ceilings.',
    searchTerms: ['bugs', 'survival', 'first-person', 'balkan', 'swarm ai'],
    image: '/images/Totally Bugged Out_banner.png',
    imageAlt: 'Totally Bugged Out project banner',
    ctaLabel: 'View Case Study',
    href: '/projects/totally-bugged-out'
  },
  {
    title: 'Cranky (Game Jam 2024)',
    subtitle: 'Prototype / Local Multiplayer — Unity (1 Week)',
    description:
      'Built for Global Game Jam as a chaotic split-screen experience where two pugs chase squirrels in fast, goofy matches.',
    searchTerms: ['cranky', 'pug', 'squirrels', 'global game jam', 'local multiplayer'],
    roles: 'Roles: Lead Animator, Co-Designer',
    image: '/images/Cranky_GameJam_Banner_2024.jpg',
    imageAlt: 'Cranky Game Jam 2024 banner',
    ctaLabel: 'View Case Study',
    href: '/projects/cranky-game-jam'
  },
  {
    title: 'Cranky: The Squirrel Annihilator',
    subtitle: 'Solo Project — First-Person Dog Chase Game',
    description:
      'A solo expansion of the jam concept with first-person pug movement, reactive squirrel/rooster AI, full UI, and WebGL-ready deployment.',
    searchTerms: ['cranky', 'squirrel annihilator', 'dog chase', 'webgl', 'ai'],
    image: '/images/CrankyTheSquirrelAnnihilator_banner.png',
    imageAlt: 'Cranky The Squirrel Annihilator banner',
    ctaLabel: 'View Case Study',
    href: '/projects/cranky-squirrel-annihilator'
  },
  {
    title: 'Shogun: Flowers Fall in Blood',
    subtitle: 'Solo Project — Tactical RPG / Unity',
    description:
      'Mobile tactical RPG prototype combining grid-based combat, gesture-driven skills, progression systems, enemy AI, and gacha simulation.',
    searchTerms: ['shogun', 'naruto', 'tactical rpg', 'gacha', 'mobile'],
    roles: 'Role: Solo Developer',
    ctaLabel: 'View Case Study',
    href: '/projects/shogun-flowers-fall-in-blood'
  },
  {
    title: 'The Signal',
    subtitle: 'Team Project — Narrative Board Game Design',
    description:
      'Sci-fi board game with modular exploration, evolving enemy behavior, class customization, and cooperative/competitive win paths.',
    searchTerms: ['board game', 'sci-fi', 'co-op', 'class customization', 'modular exploration'],
    roles: 'Team Roles: Design, Systems, Lore Writing, Visual Assets',
    image: '/images/Banner_TheSignal.jpg',
    imageAlt: 'The Signal board game banner',
    ctaLabel: 'View Case Study',
    href: '/projects/the-signal'
  },
  {
    title: 'The Last Paycheck',
    subtitle: 'Solo Project — Narrative + Systems Design',
    description:
      'A dystopian 2050 design document focused on poverty, survival, unstable jobs, inflation pressure, and player emotional engagement.',
    searchTerms: ['dystopian', '2050', 'poverty', 'survival', 'systems design'],
    image: '/images/TheLastPaycheck_Banner.png',
    imageAlt: 'The Last Paycheck banner',
    ctaLabel: 'View Case Study',
    href: '/projects/the-last-paycheck'
  }
];

const tagDescriptions: Record<string, string> = {
  'Photon Fusion': 'Host/client networking framework used for synchronized multiplayer gameplay.',
  'Networked Multiplayer': 'Systems designed for low-latency shared interactions between players.',
  'Spatial Audio': 'Positional voice/sound cues that reinforce proximity and game tension.',
  'Logistics Simulation': 'System modeling focused on routing, throughput, and constraint balancing.',
  'System Design': 'Designing mechanics and rules that create clear, replayable player loops.',
  Unity: 'Primary game engine used for rapid prototyping and iteration.',
  'VR Safety Simulation': 'XR scenarios focused on safe habits and behavior transfer.',
  'Educational VR': 'Immersive modules designed for guided learning outcomes.',
  'Human Factors': 'Interaction decisions informed by user behavior and ergonomics.',
  'VR Driving Simulation': 'Vehicle handling and drift-focused training in immersive contexts.',
  'Vehicle Physics': 'Motion tuning and physical response systems for believable control.',
  'Spatial Interaction': 'User actions mapped to 3D space, affordances, and feedback loops.',
  'Level Design': 'Layout and encounter flow shaping player movement and pacing.',
  'Environmental Storytelling': 'Using space, props, and composition to communicate narrative context.',
  'Team Collaboration': 'Cross-discipline workflow with shared ownership and iteration.',
  'Content Strategy': 'Content planning, cadence, and message alignment for growth.',
  'Narrative Design': 'Story structure, beats, and player-facing narrative framing.',
  'Game Marketing': 'Audience positioning, campaign rollouts, and engagement planning.',
  '3D Multiplayer TCG': 'Card game mechanics translated into a networked 3D play space.',
  'Game Systems Design': 'Ruleset architecture, progression curves, and balance foundations.',
  Prototyping: 'Fast concept validation through iterative, playable experiments.',
  'VR GDD': 'Concept planning and technical scoping for VR-first gameplay.',
  'Rhythm Interaction': 'Timing-based inputs and feedback for expressive play.',
  Strategy: 'Decision-heavy loops emphasizing planning, tradeoffs, and adaptation.',
};

const normalizeForSearch = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const matchesSearch = (haystack: string, query: string) => {
  const normalizedHaystack = normalizeForSearch(haystack);
  const tokens = normalizeForSearch(query)
    .split(' ')
    .filter(Boolean);

  if (tokens.length === 0) {
    return true;
  }

  return tokens.every((token) => normalizedHaystack.includes(token));
};

function CareerContent() {
  const [activeFilter, setActiveFilter] = useQueryState(
    'filter',
    parseAsStringLiteral<ProjectFilter>(['all', 'engineering', 'xr', 'art-storytelling']).withDefault('all')
  );
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    parseAsString
  );

  const resolvedFilter: ProjectFilter =
    activeFilter && filterOptions.some((option) => option.value === activeFilter)
      ? activeFilter
      : 'all';

  const filteredProjects = useMemo(() => {
    const normalizedQuery = (searchQuery ?? '').trim();

    const baseList =
      resolvedFilter === 'all'
        ? projects
        : projects.filter((project) => project.facets.includes(resolvedFilter));

    if (normalizedQuery.length === 0) {
      return baseList;
    }

    return baseList.filter((project) => {
      const haystack = [
        project.title,
        project.description,
        project.tags.join(' '),
        project.searchTerms?.join(' ') ?? '',
        project.href ?? '',
      ]
        .join(' ');

      return matchesSearch(haystack, normalizedQuery);
    });
  }, [resolvedFilter, searchQuery]);

  const filteredSideProjects = useMemo(() => {
    const normalizedQuery = (searchQuery ?? '').trim();

    if (normalizedQuery.length === 0) {
      return sideProjects;
    }

    return sideProjects.filter((project) => {
      const haystack = [
        project.title,
        project.subtitle,
        project.description,
        project.roles ?? '',
        project.searchTerms?.join(' ') ?? '',
        project.href ?? '',
      ].join(' ');

      return matchesSearch(haystack, normalizedQuery);
    });
  }, [searchQuery]);
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
      <MotionPage className="max-w-6xl mx-auto">
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
              const active = option.value === resolvedFilter;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setActiveFilter(option.value)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
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

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="search"
              value={searchQuery ?? ''}
              onChange={(event) => {
                const nextValue = event.target.value;
                setSearchQuery(nextValue.length > 0 ? nextValue : null);
              }}
              placeholder="Search projects by title, skill, or keyword"
              className="w-full max-w-xl rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
              aria-label="Search projects"
            />
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Results: {filteredProjects.length}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.title}>
              {project.href && project.type !== 'prototype' ? (
                <Link
                  href={project.href}
                  className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                      {project.bannerImage ? (
                        <LightboxImage
                          src={project.bannerImage}
                          alt={project.bannerAlt ?? `${project.title} banner`}
                          width={project.bannerWidth ?? 1600}
                          height={project.bannerHeight ?? 900}
                          className="h-auto w-full object-cover"
                          roundedClassName="rounded-none"
                        />
                      ) : (
                        <div className="flex h-48 w-full items-center justify-center bg-[var(--surface)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
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
                      <HoverCard key={i} title={tag} description={tagDescriptions[tag] ?? 'Core competency applied in this case study.'}>
                        {tag}
                      </HoverCard>
                    ))}
                  </div>
                </Link>
              ) : (
                <div
                  className={`group relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] flex flex-col justify-between ${
                    project.type === 'prototype'
                      ? 'border-dashed opacity-85 cursor-default'
                      : ''
                  }`}
                >
                  {project.type === 'prototype' ? (
                    <span className="absolute right-6 top-6 rounded-full border border-[var(--border)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      Concept
                    </span>
                  ) : null}
                  <div>
                    <div className="mb-6 w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                      {project.bannerImage ? (
                        <LightboxImage
                          src={project.bannerImage}
                          alt={project.bannerAlt ?? `${project.title} banner`}
                          width={project.bannerWidth ?? 1600}
                          height={project.bannerHeight ?? 900}
                          className="h-auto w-full object-cover"
                          roundedClassName="rounded-none"
                        />
                      ) : (
                        <div className="flex h-48 w-full items-center justify-center bg-[var(--surface)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
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
                      <HoverCard key={i} title={tag} description={tagDescriptions[tag] ?? 'Core competency applied in this case study.'}>
                        {tag}
                      </HoverCard>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 text-sm text-[var(--muted)]">No projects in this filter yet. Try another category.</p>
        ) : null}

        <section className="mt-16 border border-[var(--border)] bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow)]">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)] mb-4">Side Projects</h2>
          <p className="text-sm text-[var(--muted)] max-w-3xl">
            Experimental prototypes and independent builds that combine 3D art, game systems design, and rapid technical iteration.
            These projects are where I test mechanics, interaction ideas, and production workflows before moving concepts into more formal case studies.
          </p>

          <h3 className="mt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Explore My Creations</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSideProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)]"
              >
                <div className="mb-4 w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                  {project.image ? (
                    <LightboxImage
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} banner`}
                      width={project.bannerWidth ?? 1600}
                      height={project.bannerHeight ?? 900}
                      className="h-auto w-full object-cover"
                      roundedClassName="rounded-none"
                    />
                  ) : (
                    <div className="flex h-28 items-center justify-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                      Banner coming soon
                    </div>
                  )}
                </div>

                <h4 className="text-base font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h4>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{project.subtitle}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{project.description}</p>
                {project.roles ? <p className="mt-3 text-xs text-[var(--muted)]">{project.roles}</p> : null}

                {project.href ? (
                  <Tooltip label="Open full case study">
                    <Link
                      href={project.href}
                      className="mt-4 inline-flex items-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)]"
                    >
                      {project.ctaLabel ?? 'View'}
                    </Link>
                  </Tooltip>
                ) : (
                  <Tooltip label="Work in progress; case study coming soon">
                    <span className="mt-4 inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]">
                      {project.ctaLabel ?? 'Details soon'}
                    </span>
                  </Tooltip>
                )}
              </article>
            ))}
          </div>

          {filteredSideProjects.length === 0 ? (
            <p className="mt-6 text-sm text-[var(--muted)]">No side projects match this search yet.</p>
          ) : null}
        </section>

      </MotionPage>
    </main>
  );
}

export default function Career() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 font-sans">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-[var(--muted)]">Loading projects…</p>
          </div>
        </main>
      }
    >
      <CareerContent />
    </Suspense>
  );
}














































