"use client";

import LightboxImage from '@/components/lightbox-image';
import Breadcrumbs from '@/components/breadcrumbs';
import { HoverCard } from '@/components/floating-ui-primitives';
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
  external?: boolean;
  bannerImage?: string;
  bannerAlt?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerBorderClass?: string;
}

type ProjectFilter = 'all' | 'engineering' | 'xr' | 'art-storytelling';

const filterOptions: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'engineering', label: 'Game Engineering' },
  { value: 'xr', label: 'VR/XR Interaction' },
  { value: 'art-storytelling', label: 'Design & Storytelling' },
];

const projects: Project[] = [
  {
    title: "Shinobi Story",
    description: "Fully custom Naruto MMORPG — complete WoW client overhaul, original animations. $110K in revenue, 1M+ downloads. Led content strategy and community over five years.",
    tags: ["Narrative Design", "Content Strategy", "Game Marketing"],
    searchTerms: ["shinobi", "narrative action", "content strategy", "marketing", "player engagement"],
    facets: ['engineering', 'art-storytelling'],
    href: "/projects/shinobi-story",
    bannerImage: "/images/ShinobiStoryBanner.jpg",
    bannerAlt: "Shinobi Story banner",
    bannerWidth: 1600,
    bannerHeight: 900,
    bannerBorderClass: "border-2 border-[#D8B33C]"
  },
  {
    title: "Guilty As Arrr",
    description: "Led multiplayer implementation, session flow, and proximity voice logic for a multi-user social deduction game with real-time spatial audio attenuation.",
    tags: ["Photon Fusion", "Networked Multiplayer", "Spatial Audio"],
    searchTerms: ["pirate", "social deduction", "photon voice", "fusion networking"],
    facets: ['engineering'],
    href: "/projects/repo-x",
    bannerImage: "/images/GuiltyAsArr_Playtest.png",
    bannerAlt: "Guilty As Arrr — playtest highlight image",
    bannerWidth: 2705,
    bannerHeight: 1097
  },
  {
    title: "VR Dirt Bike Game",
    description: "Community-focused VR safety prototype for B-360, optimized for accessible mobile headsets.",
    tags: ["VR Safety Simulation", "Educational VR", "Human Factors"],
    searchTerms: ["dirt bike", "safety training", "education", "riding"],
    facets: ['engineering', 'xr'],
    href: "/projects/vr-microgames",
    bannerImage: "/images/B360_bike_simulator.png",
    bannerAlt: "B-360 VR dirt bike simulator preview",
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "VR Car Drift Simulator",
    description: "Physics-driven spatial interaction prototype — tuned vehicle drift dynamics and real-time cockpit feedback in a night city environment.",
    tags: ["VR Driving Simulation", "Vehicle Physics", "Spatial Interaction"],
    searchTerms: ["car drift", "driving", "vehicle dynamics", "simulator"],
    facets: ['engineering', 'xr'],
    href: "/projects/vr-interaction-lab",
    bannerImage: "/images/DriftImmersive_Banner.png",
    bannerAlt: "Chase-camera drift shot on a lit city expressway",
    bannerWidth: 1366,
    bannerHeight: 768
  },
  {
    title: "Shonen Showdown",
    description: "Lead developer on a multiplayer first-person TCG in Unity 6 — full rules engine, Photon Fusion 2 networking, and ScriptableObject-driven card data.",
    tags: ["3D Multiplayer TCG", "Game Systems Design", "Photon Fusion 2"],
    searchTerms: ["card game", "tcg", "anime", "prototype", "shonen", "unity", "networking"],
    facets: ['engineering', 'art-storytelling'],
    href: "/projects/shonen-showdown",
    bannerImage: "/images/projects/shonen-showdown/duel-fp-01.png",
    bannerAlt: "Shonen Showdown — first-person duel view",
    bannerWidth: 1705,
    bannerHeight: 691
  },
  {
    title: "Fallout Mod (Level Design)",
    description: "Team-built Fallout 4 interior level — joined mid-project as third-floor lead, handling interior production, merge stability, and visual optimization.",
    tags: ["Level Design", "Environmental Storytelling", "Team Collaboration"],
    searchTerms: ["fallout", "modding", "level overhaul", "world building"],
    facets: ['art-storytelling'],
    href: "/projects/fallout-level-design",
    bannerImage: "/images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png",
    bannerAlt: "Hall of Idols puzzle chamber — Fallout 4 level design",
    bannerWidth: 2048,
    bannerHeight: 959
  },
  {
    title: "Totally Bugged Out",
    description: "First-person bug survival prototype — universal throw system and swarming enemy AI that traverses walls and ceilings.",
    tags: ["Swarm AI", "First-Person Combat", "Unity"],
    searchTerms: ["bugs", "survival", "first-person", "balkan", "swarm ai"],
    facets: ['art-storytelling', 'engineering'],
    href: '/projects/totally-bugged-out',
    bannerImage: '/images/Totally Bugged Out_banner.png',
    bannerAlt: 'Totally Bugged Out project banner',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "Shogun: Flowers Fall in Blood",
    description: "Mobile tactical RPG prototype — grid-based combat, gesture-driven skills, progression, enemy AI, and gacha simulation.",
    tags: ["Tactical RPG", "Gacha Systems", "Mobile"],
    searchTerms: ["shogun", "naruto", "tactical rpg", "gacha", "mobile"],
    facets: ['art-storytelling', 'engineering'],
    href: '/projects/shogun-flowers-fall-in-blood',
    bannerImage: '/images/ShogunFlowersFallinBlood_banner.png',
    bannerAlt: 'Shogun: Flowers Fall in Blood — samurai character art',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "Ami",
    description: "Local-first research companion built for my mother — grounded source retrieval, personal-record support, Codex-backed synthesis, and portable macOS delivery.",
    tags: ["Local-First AI", "Healthcare UX", "Cross-Platform Packaging"],
    searchTerms: ["ami", "research companion", "mom", "medical research", "codex", "mac app", "local-first", "evidence retrieval"],
    facets: ['engineering'],
    href: '/projects/ami-research-companion',
    bannerImage: '/images/projects/ami/ami-banner.png',
    bannerAlt: 'Ami research companion banner',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "FEH Barracks Manager",
    description: "Solo-built Fire Emblem Heroes companion app with synced barracks, custom hero-data scraping, AI export, and a portable launcher fed by GitHub release bundles.",
    tags: ["Live-Service Tooling", "Data Pipeline", "Release Engineering"],
    searchTerms: ["feh", "fire emblem heroes", "barracks", "manager", "supabase", "scraper", "launcher", "release bundles", "live-service", "collection manager"],
    facets: ['engineering'],
    href: '/projects/feh-barracks-manager',
    bannerImage: '/images/projects/feh-barracks/feh-login-screen.png',
    bannerAlt: 'FEH Barracks Manager login and presentation screen',
    bannerWidth: 1024,
    bannerHeight: 768
  },
  {
    title: "Prince of Persia: Warrior Within Mod",
    description: "Solo Slay the Spire 2 character mod in Godot/C# with Dagger of Time rewinds, Sand economy, Dahaka pursuit, and custom Warrior Within audio/presentation.",
    tags: ["Game Modding", "Combat Systems", "Reverse Engineering"],
    searchTerms: ["prince of persia", "warrior within", "slay the spire 2", "mod", "godot", "c#", "harmony", "baselib", "dahaka", "rewind", "sand", "character mod"],
    facets: ['engineering', 'art-storytelling'],
    href: '/projects/prince-of-persia-warrior-within-mod',
    bannerImage: '/images/projects/prince-of-persia-warrior-within-mod/prince-banner.png',
    bannerAlt: 'Prince of Persia Warrior Within mod banner',
    bannerWidth: 1536,
    bannerHeight: 828
  },
  {
    title: "Cranky (Game Jam 2024)",
    description: "Chaotic split-screen local multiplayer where two pugs chase squirrels — built in one week for Global Game Jam.",
    tags: ["Local Multiplayer", "Game Jam", "Unity"],
    searchTerms: ["cranky", "pug", "squirrels", "global game jam", "local multiplayer"],
    facets: ['engineering', 'art-storytelling'],
    href: '/projects/cranky-game-jam',
    bannerImage: '/images/Cranky_GameJam_Banner_2024.jpg',
    bannerAlt: 'Cranky Game Jam 2024 banner',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "Cranky: The Squirrel Annihilator",
    description: "Solo expansion of the jam — first-person pug movement, reactive squirrel/rooster AI, full UI, and WebGL deployment.",
    tags: ["Enemy AI", "WebGL", "Solo Build"],
    searchTerms: ["cranky", "squirrel annihilator", "dog chase", "webgl", "ai"],
    facets: ['engineering'],
    href: '/projects/cranky-squirrel-annihilator',
    bannerImage: '/images/CrankyTheSquirrelAnnihilator_banner.png',
    bannerAlt: 'Cranky The Squirrel Annihilator banner',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "The Signal",
    description: "Sci-fi board game with modular exploration, evolving enemy behavior, class customization, and co-op/competitive win paths.",
    tags: ["Board Game Design", "Systems Design", "Co-op"],
    searchTerms: ["board game", "sci-fi", "co-op", "class customization", "modular exploration"],
    facets: ['art-storytelling'],
    href: '/projects/the-signal',
    bannerImage: '/images/Banner_TheSignal.jpg',
    bannerAlt: 'The Signal board game banner',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "The Last Paycheck",
    description: "Dystopian 2050 design document — poverty, survival, unstable jobs, and inflation pressure as player emotional engagement.",
    tags: ["Narrative Design", "Systems Design", "Design Document"],
    searchTerms: ["dystopian", "2050", "poverty", "survival", "systems design"],
    facets: ['art-storytelling'],
    href: '/projects/the-last-paycheck',
    bannerImage: '/images/TheLastPaycheck_Banner.png',
    bannerAlt: 'The Last Paycheck banner',
    bannerWidth: 1600,
    bannerHeight: 900
  },
  {
    title: "VR Patapon Game",
    description: "Designing a VR rhythm-strategy game based on Patapon — timing-based tactics in immersive space.",
    tags: ["VR GDD", "Rhythm Interaction", "Strategy"],
    searchTerms: ["patapon", "rhythm", "strategy", "experimental input"],
    facets: ['xr', 'art-storytelling'],
    href: '/projects/patapon-vr-the-first-beat',
    type: 'prototype'
  },
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
  'Community Game Design': 'Design process grounded in local partner needs and real-world deployment constraints.',
  'Public Impact': 'Work focused on measurable value for communities and partner organizations.',
  'VR Driving Simulation': 'Vehicle handling and drift-focused training in immersive contexts.',
  'Vehicle Physics': 'Motion tuning and physical response systems for believable control.',
  'Spatial Interaction': 'User actions mapped to 3D space, affordances, and feedback loops.',
  'Level Design': 'Layout and encounter flow shaping player movement and pacing.',
  'Environmental Storytelling': 'Using space, props, and composition to communicate narrative context.',
  'Team Collaboration': 'Cross-discipline workflow with shared ownership and iteration.',
  'Content Strategy': 'Content planning, cadence, and message alignment for growth.',
  'Narrative Design': 'Story structure, beats, and player-facing narrative framing.',
  'Game Marketing': 'Audience positioning, campaign rollouts, and engagement planning.',
  'Figurine Sculpting': 'Physical and digital character form development for collectible-scale figure concepts.',
  'Concept Development': 'Turning early visual ideas into coherent style, shape language, and production-ready direction.',
  'Visual Storytelling': 'Communicating narrative and personality through composition, form, and art direction.',
  '3D Multiplayer TCG': 'Card game mechanics translated into a networked 3D play space.',
  'Game Systems Design': 'Ruleset architecture, progression curves, and balance foundations.',
  Prototyping: 'Fast concept validation through iterative, playable experiments.',
  'VR GDD': 'Concept planning and technical scoping for VR-first gameplay.',
  'Rhythm Interaction': 'Timing-based inputs and feedback for expressive play.',
  Strategy: 'Decision-heavy loops emphasizing planning, tradeoffs, and adaptation.',
  'Local-First AI': 'AI workflow built around local files, local indexing, and grounded evidence instead of cloud-only dependency.',
  'Healthcare UX': 'Calm interaction design for stressful, evidence-heavy health research and record review.',
  'Cross-Platform Packaging': 'Turning development code into a portable end-user app that can be handed off and used outside the dev machine.',
  'Live-Service Tooling': 'Tooling and product work built around a game that keeps changing underneath the app.',
  'Data Pipeline': 'Scraping, normalization, reconciliation, and import flows that keep the product data usable.',
  'Release Engineering': 'Packaging, deployment, asset-bundle management, and update delivery for real users.',
  'Game Modding': 'Building new characters, systems, and content inside an existing game without control over the full engine surface.',
  'Combat Systems': 'Designing and implementing readable combat loops, resources, encounter pressure, and player decision flow.',
  'Reverse Engineering': 'Working from engine behavior, runtime constraints, and decompiled references when official abstractions are incomplete.',
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
            <p className="text-[var(--muted)] mt-3 font-medium tracking-[0.2em] text-xs uppercase">Game Engineering · VR/XR Interaction · Design & Storytelling</p>
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
              {project.href ? (
                <Link
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noreferrer noopener" : undefined}
                  className={`group relative block h-full rounded-2xl border bg-[var(--surface)] p-8 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-strong),0_0_28px_var(--accent-cyan)] flex flex-col justify-between ${
                    project.type === 'prototype'
                      ? 'border-dashed border-[var(--border)] opacity-85'
                      : 'border-[var(--border)]'
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
                </Link>
              ) : (
                <div className="group relative p-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] flex flex-col justify-between opacity-85 cursor-default">
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
















































