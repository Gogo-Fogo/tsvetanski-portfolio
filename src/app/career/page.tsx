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
  rank?: Partial<Record<ProjectFilter, number>>;
  type?: 'commercial' | 'prototype';
  href?: string;
  external?: boolean;
  bannerImage?: string;
  bannerAlt?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerBorderClass?: string;
}

type ProjectFilter = 'all' | 'engineering' | 'xr' | 'ai-product' | 'art-storytelling';

const filterOptions: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'engineering', label: 'Engineering & Systems' },
  { value: 'xr', label: 'VR & Spatial Projects' },
  { value: 'ai-product', label: 'AI & Product Tools' },
  { value: 'art-storytelling', label: 'Design & Storytelling' },
];

const projects: Project[] = [
  {
    title: "ComfyUI Production Pipeline",
    description: "Cross-project local AI media pipeline — ComfyUI workflow routing, demo-safe asset boundaries, dark fantasy lookdev, and downstream game-asset cleanup.",
    tags: ["ComfyUI", "AI Art Pipeline", "Asset Workflow"],
    searchTerms: ["comfyui", "comfy", "ai art", "workflow", "image generation", "black dice", "prince of persia", "asset cleanup", "local media"],
    facets: ['ai-product', 'art-storytelling', 'engineering'],
    rank: { all: 7, 'ai-product': 3, 'art-storytelling': 4, engineering: 12 },
    href: "/projects/comfyui-production-pipeline",
    bannerImage: "/images/projects/comfyui-production-pipeline/workflow-ronin-identity-graph.png",
    bannerAlt: "ComfyUI character workflow graph for Shogun-style asset iteration",
    bannerWidth: 1920,
    bannerHeight: 1080,
    type: 'prototype'
  },
  {
    title: "Black Dice Engine",
    description: "Local-first AI Game Master engine for dark collaborative TTRPG campaigns — GM dashboard, player companion, deterministic state tools, memory, and local media routing.",
    tags: ["Local-First AI", "Runtime Architecture", "Rules Engine"],
    searchTerms: ["black dice", "dice engine", "ai game master", "ttrpg", "tabletop", "rpg", "gm dashboard", "player companion", "campaign memory", "comfyui", "local first"],
    facets: ['ai-product', 'engineering'],
    rank: { all: 2, 'ai-product': 1, engineering: 2 },
    href: "/projects/black-dice-engine",
    bannerImage: "/images/projects/black-dice-engine/black-dice-engine-banner.png",
    bannerAlt: "Black Dice Engine banner showing dark fantasy character and dice branding",
    bannerWidth: 1672,
    bannerHeight: 941,
    type: 'prototype'
  },
  {
    title: "Shinobi Story",
    description: "Fully custom Naruto MMORPG — complete WoW client overhaul, original animations. $110K in revenue, 1M+ downloads. Led content strategy and community over five years.",
    tags: ["Live Game Operations", "Community Growth", "Content Strategy"],
    searchTerms: ["shinobi", "narrative action", "content strategy", "marketing", "player engagement"],
    facets: ['engineering', 'art-storytelling'],
    rank: { all: 1, engineering: 6, 'art-storytelling': 1 },
    href: "/projects/shinobi-story",
    bannerImage: "/images/ShinobiStoryBanner.jpg",
    bannerAlt: "Shinobi Story banner",
    bannerWidth: 2048,
    bannerHeight: 1280,
    bannerBorderClass: "border-2 border-[#D8B33C]"
  },
  {
    title: "Guilty As Arrr",
    description: "Led multiplayer implementation, session flow, and proximity voice logic for a multi-user social deduction game with real-time spatial audio attenuation.",
    tags: ["Photon Fusion", "Networked Multiplayer", "Spatial Audio"],
    searchTerms: ["pirate", "social deduction", "photon voice", "fusion networking"],
    facets: ['engineering'],
    rank: { all: 8, engineering: 5 },
    href: "/projects/repo-x",
    bannerImage: "/images/GuiltyAsArr_Playtest.png",
    bannerAlt: "Guilty As Arrr — playtest highlight image",
    bannerWidth: 2705,
    bannerHeight: 1097
  },
  {
    title: "VR Dirt Bike Game",
    description: "Community-focused VR safety prototype for B-360, optimized for accessible mobile headsets.",
    tags: ["VR Safety Simulation", "Community UX", "Human Factors"],
    searchTerms: ["dirt bike", "safety training", "education", "riding"],
    facets: ['engineering', 'xr'],
    rank: { all: 12, engineering: 11, xr: 4 },
    href: "/projects/vr-microgames",
    bannerImage: "/images/B360_bike_simulator.png",
    bannerAlt: "B-360 VR dirt bike simulator preview",
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "VR Car Drift Simulator",
    description: "Physics-driven spatial interaction prototype — tuned vehicle drift dynamics and real-time cockpit feedback in a night city environment.",
    tags: ["Vehicle Physics", "VR Driving Simulation", "Spatial Interaction"],
    searchTerms: ["car drift", "driving", "vehicle dynamics", "simulator"],
    facets: ['engineering', 'xr'],
    rank: { all: 13, engineering: 10, xr: 5 },
    href: "/projects/vr-interaction-lab",
    bannerImage: "/images/DriftImmersive_Banner.png",
    bannerAlt: "Chase-camera drift shot on a lit city expressway",
    bannerWidth: 1366,
    bannerHeight: 768
  },
  {
    title: "MUMOSA Crisis Response VR Study",
    description: "Graduate client project for DEVCOM Army Research Laboratory / MUMOSA — multimodal situation-awareness research, crisis-response heuristics, client report, and Unreal spatial-review proof of concept.",
    tags: ["Defense Research", "Crisis Response UX", "Spatial Evidence Review"],
    searchTerms: ["mumosa", "army research laboratory", "devcom", "crisis response", "situational awareness", "forensic training", "schema graph", "3d reconstruction", "vr evidence review"],
    facets: ['ai-product', 'engineering', 'xr'],
    rank: { all: 3, 'ai-product': 3, engineering: 7, xr: 1 },
    href: "/projects/mumosa-crisis-response-vr",
    bannerImage: "/images/projects/mumosa-crisis-response-vr/mumosa-banner.png",
    bannerAlt: "MUMOSA dashboard figure showing multimodal question answering, evidence panels, schema graphs, and simulation evidence",
    bannerWidth: 995,
    bannerHeight: 645,
    type: 'prototype'
  },
  {
    title: "Birdwatching VR",
    description: "Unity 6 XR prototype with a physical camera, bird detection, star-rated photo scoring, persistent bingo-book progress, backpack tools, feeding-stick interaction, and comfort settings.",
    tags: ["Unity XR Prototype", "Camera Systems", "Comfort Design"],
    searchTerms: ["birdwatching", "vr", "unity", "unity 6", "xr", "bird photography", "ornithologist", "post-nuclear", "bingo book", "render texture", "wildlife exploration", "camera capture", "quest", "openxr", "felix", "talulla"],
    facets: ['xr', 'engineering'],
    rank: { all: 10, engineering: 9, xr: 2 },
    href: "/projects/birdwatching",
    bannerImage: "/images/projects/birdwatching/birdwatching-bird-closeup-qa-20260505.png",
    bannerAlt: "Close-up bird model from the Birdwatching VR Unity prototype",
    bannerWidth: 1009,
    bannerHeight: 706,
    type: 'prototype'
  },
  {
    title: "Shonen Showdown",    description: "Lead developer on a multiplayer first-person TCG in Unity 6 — full rules engine, Photon Fusion 2 networking, and ScriptableObject-driven card data.",
    tags: ["Rules Engine", "Photon Fusion 2", "ScriptableObject Data"],
    searchTerms: ["card game", "tcg", "anime", "prototype", "shonen", "unity", "networking"],
    facets: ['engineering', 'art-storytelling'],
    rank: { all: 6, engineering: 4, 'art-storytelling': 7 },
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
    rank: { all: 14, 'art-storytelling': 5 },
    href: "/projects/fallout-level-design",
    bannerImage: "/images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png",
    bannerAlt: "Hall of Idols puzzle chamber — Fallout 4 level design",
    bannerWidth: 2048,
    bannerHeight: 959
  },
  {
    title: "Totally Bugged Out",
    description: "First-person bug survival prototype — universal throw system and swarming enemy AI that traverses walls and ceilings.",
    tags: ["Enemy AI", "First-Person Combat", "Unity"],
    searchTerms: ["bugs", "survival", "first-person", "balkan", "swarm ai"],
    facets: ['art-storytelling', 'engineering'],
    rank: { all: 15, engineering: 13, 'art-storytelling': 8 },
    href: '/projects/totally-bugged-out',
    bannerImage: '/images/Totally Bugged Out_banner.png',
    bannerAlt: 'Totally Bugged Out project banner',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "Shogun: Flowers Fall in Blood",
    description: "Mobile tactical RPG prototype — grid-based combat, gesture-driven skills, progression, enemy AI, and gacha simulation.",
    tags: ["Tactical RPG", "Mobile Systems", "Gacha Simulation"],
    searchTerms: ["shogun", "naruto", "tactical rpg", "gacha", "mobile"],
    facets: ['art-storytelling', 'engineering'],
    rank: { all: 11, engineering: 8, 'art-storytelling': 3 },
    href: '/projects/shogun-flowers-fall-in-blood',
    bannerImage: '/images/ShogunFlowersFallinBlood_banner.png',
    bannerAlt: 'Shogun: Flowers Fall in Blood — samurai character art',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "Ami",
    description: "Local-first research companion built for my mother — grounded source retrieval, personal-record support, Codex-backed synthesis, and portable macOS delivery.",
    tags: ["Local-First AI", "Healthcare UX", "Cross-Platform Packaging"],
    searchTerms: ["ami", "research companion", "mom", "medical research", "codex", "mac app", "local-first", "evidence retrieval"],
    facets: ['ai-product', 'engineering'],
    rank: { all: 4, 'ai-product': 2, engineering: 3 },
    href: '/projects/ami-research-companion',
    bannerImage: '/images/projects/ami/ami-banner.png',
    bannerAlt: 'Ami interface showing grounded answer layout, saved chats, and document preview card',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "FEH Barracks Manager",
    description: "Solo-built Fire Emblem Heroes companion app with synced barracks, custom hero-data scraping, AI export, and a portable launcher fed by GitHub release bundles.",
    tags: ["Live-Service Tooling", "Data Pipeline", "Release Engineering"],
    searchTerms: ["feh", "fire emblem heroes", "barracks", "manager", "supabase", "scraper", "launcher", "release bundles", "live-service", "collection manager"],
    facets: ['ai-product', 'engineering'],
    rank: { all: 5, 'ai-product': 4, engineering: 1 },
    href: '/projects/feh-barracks-manager',
    bannerImage: '/images/projects/feh-barracks/feh-login-screen.png',
    bannerAlt: 'FEH Barracks Manager login and presentation screen',
    bannerWidth: 1024,
    bannerHeight: 768
  },
  {
    title: "Prince of Persia: Warrior Within Mod",
    description: "Solo Slay the Spire 2 character mod in Godot/C# with Medallion of Time rewinds, Sand economy, Dahaka escape pressure, and custom Warrior Within audio/presentation.",
    tags: ["Game Modding", "Combat Systems", "Reverse Engineering"],
    searchTerms: ["prince of persia", "warrior within", "slay the spire 2", "mod", "godot", "c#", "harmony", "baselib", "dahaka", "rewind", "sand", "character mod"],
    facets: ['engineering', 'art-storytelling'],
    rank: { all: 9, engineering: 6, 'art-storytelling': 2 },
    href: '/projects/prince-of-persia-warrior-within-mod',
    bannerImage: '/images/projects/prince-of-persia-warrior-within-mod/prince-character-select-current-20260505.png',
    bannerAlt: 'Current Prince of Persia Warrior Within mod character select screen',
    bannerWidth: 1920,
    bannerHeight: 1080
  },
  {
    title: "Cranky (Game Jam 2024)",
    description: "Chaotic split-screen local multiplayer where two pugs chase squirrels — built in one week for Global Game Jam.",
    tags: ["Local Multiplayer", "Rapid Prototyping", "Unity"],
    searchTerms: ["cranky", "pug", "squirrels", "global game jam", "local multiplayer"],
    facets: ['engineering', 'art-storytelling'],
    rank: { all: 18, engineering: 15, 'art-storytelling': 10 },
    href: '/projects/cranky-game-jam',
    bannerImage: '/images/Cranky_GameJam_Banner_2024.jpg',
    bannerAlt: 'Cranky Game Jam 2024 banner',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "Cranky: The Squirrel Annihilator",
    description: "Solo expansion of the jam — first-person pug movement, reactive squirrel/rooster AI, full UI, and WebGL deployment.",
    tags: ["Enemy AI", "WebGL Deployment", "Solo Build"],
    searchTerms: ["cranky", "squirrel annihilator", "dog chase", "webgl", "ai"],
    facets: ['engineering'],
    rank: { all: 17, engineering: 14 },
    href: '/projects/cranky-squirrel-annihilator',
    bannerImage: '/images/CrankyTheSquirrelAnnihilator_banner.png',
    bannerAlt: 'Cranky The Squirrel Annihilator banner',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "The Signal",
    description: "Sci-fi board game with modular exploration, evolving enemy behavior, class customization, and co-op/competitive win paths.",
    tags: ["Board Game Design", "Systems Design", "Co-op Design"],
    searchTerms: ["board game", "sci-fi", "co-op", "class customization", "modular exploration"],
    facets: ['art-storytelling'],
    rank: { all: 16, 'art-storytelling': 6 },
    href: '/projects/the-signal',
    bannerImage: '/images/Banner_TheSignal.jpg',
    bannerAlt: 'The Signal board game banner',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "The Last Paycheck",
    description: "Dystopian 2050 design document — poverty, survival, unstable jobs, and inflation pressure as player emotional engagement.",
    tags: ["Narrative Design", "Systems Design", "Design Document"],
    searchTerms: ["dystopian", "2050", "poverty", "survival", "systems design"],
    facets: ['art-storytelling'],
    rank: { all: 20, 'art-storytelling': 11 },
    href: '/projects/the-last-paycheck',
    bannerImage: '/images/TheLastPaycheck_Banner.png',
    bannerAlt: 'The Last Paycheck banner',
    bannerWidth: 2048,
    bannerHeight: 1280
  },
  {
    title: "VR Patapon Game",
    description: "Designing a VR rhythm-strategy game based on Patapon — timing-based tactics in immersive space.",
    tags: ["VR GDD", "Rhythm Interaction", "Strategy"],
    searchTerms: ["patapon", "rhythm", "strategy", "experimental input"],
    facets: ['xr', 'art-storytelling'],
    rank: { all: 19, xr: 3, 'art-storytelling': 9 },
    href: '/projects/patapon-vr-the-first-beat',
    bannerImage: '/images/projects/patapon-vr/patapon-boss-battle.png',
    bannerAlt: 'Patapon VR boss battle concept art',
    bannerWidth: 799,
    bannerHeight: 421,
    type: 'prototype'
  },
];

const tagDescriptions: Record<string, string> = {
  'Photon Fusion': 'Host/client networking framework used for synchronized multiplayer gameplay.',
  'Networked Multiplayer': 'Systems designed for low-latency shared interactions between players.',
  'Spatial Audio': 'Positional voice/sound cues that reinforce proximity and game tension.',
  'Logistics Simulation': 'System modeling focused on routing, throughput, and constraint balancing.',
  'System Design': 'Designing mechanics and rules that create clear, replayable player loops.',
  'Runtime Architecture': 'Coordinating services, health checks, permissions, and recovery paths in a running local app.',
  ComfyUI: 'Node-based local image/video generation system used for controlled creative workflows and media jobs.',
  'AI Art Pipeline': 'A production workflow around generated imagery: prompts, references, approvals, metadata, cleanup, and disclosure.',
  'Asset Workflow': 'Steps that turn concept or generated source material into organized, usable game/UI/presentation assets.',
  Unity: 'Primary game engine used for rapid prototyping and iteration.',
  'VR Safety Simulation': 'XR scenarios focused on safe habits and behavior transfer.',
  'Community UX': 'Interaction design shaped around a real partner, learner group, or public-service context.',
  'Educational VR': 'Immersive modules designed for guided learning outcomes.',
  'Human Factors': 'Interaction decisions informed by user behavior and ergonomics.',
  'Defense Research': 'Client-facing research and prototype work for defense, crisis response, or high-stakes analysis contexts.',
  'Crisis Response UX': 'Interface design for emergency response, investigation, training, and complex-event sensemaking.',
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
  'Live Game Operations': 'Running and evolving a live game/community over time: content, players, updates, and communication.',
  'Community Growth': 'Building player trust, audience momentum, and long-term participation around a project.',
  'Game Marketing': 'Audience positioning, campaign rollouts, and engagement planning.',
  'Figurine Sculpting': 'Physical and digital character form development for collectible-scale figure concepts.',
  'Concept Development': 'Turning early visual ideas into coherent style, shape language, and production-ready direction.',
  'Visual Storytelling': 'Communicating narrative and personality through composition, form, and art direction.',
  '3D Multiplayer TCG': 'Card game mechanics translated into a networked 3D play space.',
  'Game Systems Design': 'Ruleset architecture, progression curves, and balance foundations.',
  'Unity XR Prototype': 'Unity-based XR work focused on interaction loops, comfort, and fast spatial prototyping.',
  'Photon Fusion 2': 'Realtime multiplayer networking for synchronized Unity gameplay and shared game state.',
  'Rules Engine': 'Reusable gameplay logic for resolving actions, modifiers, turn flow, and outcomes consistently.',
  'ScriptableObject Data': 'Unity data-authoring workflow where designers can create and tune content without code edits.',
  'Deterministic Simulation': 'Systems structured so the same inputs produce inspectable, repeatable outcomes.',
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
  'First-Person Combat': 'Combat interactions built around embodied player perspective, aim, timing, and readable feedback.',
  'Reverse Engineering': 'Working from engine behavior, runtime constraints, and decompiled references when official abstractions are incomplete.',
  'Spatial Evidence Review': 'Using 3D/spatial context to inspect evidence, hazards, timelines, and source-grounded claims.',
  'Camera Systems': 'Capture, scoring, feedback, and collection mechanics built around in-game photography.',
  'Comfort Design': 'XR interaction choices that reduce disorientation, fatigue, and motion discomfort.',
  'Enemy AI': 'Behavior systems for adversaries, swarms, targeting, movement, and reactive encounters.',
  'Tactical RPG': 'Grid, turn, unit, ability, and progression systems designed for tactical decision-making.',
  'Mobile Systems': 'Gameplay and UI systems designed around mobile constraints, session length, and touch-first play.',
  'Gacha Simulation': 'Progression and acquisition systems modeled around rarity, collection, and live-game economy patterns.',
  'Rapid Prototyping': 'Fast playable iteration with clear scope control and quick learning loops.',
  'Local Multiplayer': 'Same-device multiplayer systems built around shared-screen play, controller flow, and quick social readability.',
  'WebGL Deployment': 'Packaging and shipping playable browser builds with web runtime constraints.',
  'Solo Build': 'End-to-end implementation, design, UI, and deployment owned by one developer.',
  'Board Game Design': 'Physical or tabletop rules design focused on turns, roles, components, pacing, and group decisions.',
  'Systems Design': 'Interlocking mechanics, economies, constraints, and feedback loops that shape player decisions.',
  'Co-op Design': 'Shared-goal systems that coordinate player roles, tension, and group decision-making.',
  'Design Document': 'A structured concept document that communicates setting, mechanics, player experience, and production direction.',
};

const sortProjectsForFilter = (items: Project[], filter: ProjectFilter) =>
  [...items].sort((first, second) => {
    const firstRank = first.rank?.[filter] ?? first.rank?.all ?? Number.MAX_SAFE_INTEGER;
    const secondRank = second.rank?.[filter] ?? second.rank?.all ?? Number.MAX_SAFE_INTEGER;

    if (firstRank !== secondRank) {
      return firstRank - secondRank;
    }

    return first.title.localeCompare(second.title);
  });

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
    parseAsStringLiteral<ProjectFilter>(['all', 'engineering', 'xr', 'ai-product', 'art-storytelling']).withDefault('all')
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
    const rankedList = sortProjectsForFilter(baseList, resolvedFilter);

    if (normalizedQuery.length === 0) {
      return rankedList;
    }

    return rankedList.filter((project) => {
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
            <p className="text-[var(--muted)] mt-3 font-medium tracking-[0.2em] text-xs uppercase">Engineering · VR Projects · AI Tools · Design & Storytelling</p>
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


















































