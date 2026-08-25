"use client";

import LightboxImage from '@/components/lightbox-image';
import { HoverCard } from '@/components/floating-ui-primitives';
import { MotionPage } from '@/components/motion-safe';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUp, Gamepad2, Grid2X2, Search, Wrench, type LucideIcon, type LucideProps } from 'lucide-react';
import { forwardRef, Suspense, useEffect, useMemo, useState } from 'react';
import { parseAsString, parseAsStringLiteral, useQueryStates } from 'nuqs';

type ProjectFilter = 'all' | 'xr' | 'games' | 'tools';
type LegacyProjectFacet = 'engineering' | 'xr' | 'ai-product' | 'art-storytelling';

interface Project {
  title: string;
  description: string;
  status: 'Released' | 'Delivered' | 'Completed' | 'Playable' | 'Prototype' | 'In development' | 'Concept';
  tags: string[];
  searchTerms?: string[];
  facets: LegacyProjectFacet[];
  rank?: Partial<Record<LegacyProjectFacet | 'all', number>>;
  href?: string;
  external?: boolean;
  bannerImage?: string;
  bannerAlt?: string;
  bannerWidth?: number;
  bannerHeight?: number;
  bannerBorderClass?: string;
}

const VrHeadset = forwardRef<SVGSVGElement, LucideProps>(function VrHeadset(
  { color = 'currentColor', size = 24, strokeWidth = 2, className, ...props },
  ref
) {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M3.5 10.25c0-2.6 2.1-4.75 4.7-4.75h7.6c2.6 0 4.7 2.15 4.7 4.75V13c0 1.9-1.5 3.5-3.4 3.5h-1.2c-1.1 0-2.1-.7-2.5-1.8l-.4-1.2h-4.8l-.4 1.2c-.4 1.1-1.4 1.8-2.5 1.8H6.9c-1.9 0-3.4-1.6-3.4-3.5z" />
      <path d="M6 5.75C6.85 4.6 8.15 4 9.6 4h4.8c1.45 0 2.75.6 3.6 1.75" />
      <rect x="5.5" y="9.2" width="5.3" height="4.1" rx="1.3" />
      <rect x="13.2" y="9.2" width="5.3" height="4.1" rx="1.3" />
      <path d="M10.8 11.25h2.4M3.5 10.5H2.5M20.5 10.5h1" />
    </svg>
  );
});

const filterOptions: { value: ProjectFilter; label: string; Icon: LucideIcon }[] = [
  { value: 'all', label: 'All Projects', Icon: Grid2X2 },
  { value: 'xr', label: 'XR', Icon: VrHeadset },
  { value: 'games', label: 'Games', Icon: Gamepad2 },
  { value: 'tools', label: 'Tools', Icon: Wrench },
];

const projects: Project[] = [
  {
    title: "ComfyUI Production Pipeline",
    description: "Local-first AI media pipeline for lookdev, asset cleanup, and demo-safe delivery.",
    status: 'Prototype',
    tags: ["ComfyUI", "AI Art Pipeline", "Asset Workflow"],
    searchTerms: ["comfyui", "comfy", "ai art", "workflow", "image generation", "black dice", "prince of persia", "asset cleanup", "local media"],
    facets: ['ai-product', 'art-storytelling', 'engineering'],
    rank: { all: 7, 'ai-product': 3, 'art-storytelling': 4, engineering: 12 },
    href: "/projects/comfyui-production-pipeline",
    bannerImage: "/images/projects/comfyui-production-pipeline/workflow-ronin-identity-graph.png",
    bannerAlt: "ComfyUI character workflow graph for Shogun-style asset iteration",
    bannerWidth: 1920,
    bannerHeight: 1080
  },
  {
    title: "Black Dice Engine",
    description: "Local-first AI Game Master for collaborative TTRPG campaigns.",
    status: 'Prototype',
    tags: ["Local-First AI", "Runtime Architecture", "Rules Engine"],
    searchTerms: ["black dice", "dice engine", "ai game master", "ttrpg", "tabletop", "rpg", "gm dashboard", "player companion", "campaign memory", "comfyui", "local first"],
    facets: ['ai-product', 'engineering'],
    rank: { all: 2, 'ai-product': 1, engineering: 2 },
    href: "/projects/black-dice-engine",
    bannerImage: "/images/projects/black-dice-engine/black-dice-engine-banner.png",
    bannerAlt: "Black Dice Engine banner showing dark fantasy character and dice branding",
    bannerWidth: 1672,
    bannerHeight: 941
  },
  {
    title: "Shinobi Story",
    description: "Custom Naruto MMORPG with 1M+ downloads and $110K revenue.",
    status: 'Released',
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
    description: "Networked social deduction game with proximity voice and spatial audio.",
    status: 'Prototype',
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
    description: "Accessible VR dirt-bike safety prototype for mobile headsets.",
    status: 'Prototype',
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
    description: "VR drift simulator with tuned vehicle physics and cockpit feedback.",
    status: 'Prototype',
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
    description: "VR crisis-response study focused on evidence review and situation awareness.",
    status: 'Delivered',
    tags: ["Defense Research", "Crisis Response UX", "Spatial Evidence Review"],
    searchTerms: ["mumosa", "army research laboratory", "devcom", "crisis response", "situational awareness", "forensic training", "schema graph", "3d reconstruction", "vr evidence review"],
    facets: ['ai-product', 'engineering', 'xr'],
    rank: { all: 3, 'ai-product': 3, engineering: 7, xr: 1 },
    href: "/projects/mumosa-crisis-response-vr",
    bannerImage: "/images/projects/mumosa-crisis-response-vr/mumosa-banner.png",
    bannerAlt: "MUMOSA dashboard figure showing multimodal question answering, evidence panels, schema graphs, and simulation evidence",
    bannerWidth: 995,
    bannerHeight: 645
  },
  {
    title: "Birdwatching VR",
    description: "Unity XR wildlife prototype with camera, scoring, tools, and comfort systems.",
    status: 'Prototype',
    tags: ["Unity XR Prototype", "Camera Systems", "Comfort Design"],
    searchTerms: ["birdwatching", "vr", "unity", "unity 6", "xr", "bird photography", "ornithologist", "post-nuclear", "bingo book", "render texture", "wildlife exploration", "camera capture", "quest", "openxr", "felix", "talulla"],
    facets: ['xr', 'engineering'],
    rank: { all: 10, engineering: 9, xr: 2 },
    href: "/projects/birdwatching",
    bannerImage: "/images/projects/birdwatching/birdwatching-bird-closeup-qa-20260505.png",
    bannerAlt: "Close-up bird model from the Birdwatching VR Unity prototype",
    bannerWidth: 1009,
    bannerHeight: 706
  },
  {
    title: "Shonen Showdown",    description: "Multiplayer first-person TCG with a reusable rules engine and networked cards.",
    status: 'Prototype',
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
    description: "Fallout 4 interior level focused on production, merges, and visual polish.",
    status: 'Completed',
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
    description: "First-person bug survival prototype with swarming enemy AI.",
    status: 'Playable',
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
    description: "Mobile tactical RPG prototype with grid combat, skills, and progression.",
    status: 'In development',
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
    description: "Local-first research companion with grounded retrieval and portable delivery.",
    status: 'Delivered',
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
    description: "Fire Emblem Heroes companion app with synced barracks and release tooling.",
    status: 'In development',
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
    description: "Slay the Spire 2 character mod with rewinds and a Sand economy.",
    status: 'Playable',
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
    description: "Split-screen pug multiplayer built in one week for Global Game Jam.",
    status: 'Completed',
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
    description: "Solo first-person pug game with reactive AI, UI, and WebGL deployment.",
    status: 'Playable',
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
    description: "Sci-fi board game with modular exploration and evolving enemy behavior.",
    status: 'Completed',
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
    description: "Dystopian 2050 design document about poverty, jobs, and inflation.",
    status: 'Concept',
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
    title: "Patapon VR: The First Beat",
    description: "VR rhythm-strategy design concept based on Patapon; not yet implemented.",
    status: 'Concept',
    tags: ["VR GDD", "Rhythm Interaction", "Strategy"],
    searchTerms: ["patapon", "rhythm", "strategy", "experimental input"],
    facets: ['xr', 'art-storytelling'],
    rank: { all: 19, xr: 3, 'art-storytelling': 9 },
    href: '/projects/patapon-vr-the-first-beat',
    bannerImage: '/images/projects/patapon-vr/patapon-boss-battle.png',
    bannerAlt: 'Patapon VR boss battle concept art',
    bannerWidth: 799,
    bannerHeight: 421
  },
];

const categoryProjectOrder: Record<Exclude<ProjectFilter, 'all'>, readonly string[]> = {
  xr: [
    'Birdwatching VR',
    'MUMOSA Crisis Response VR Study',
    'VR Dirt Bike Game',
    'VR Car Drift Simulator',
    'Patapon VR: The First Beat',
  ],
  games: [
    'Shinobi Story',
    'Shonen Showdown',
    'Prince of Persia: Warrior Within Mod',
    'Guilty As Arrr',
    'Black Dice Engine',
    'Shogun: Flowers Fall in Blood',
    'Totally Bugged Out',
    'Cranky (Game Jam 2024)',
    'Cranky: The Squirrel Annihilator',
    'The Signal',
    'The Last Paycheck',
    'Patapon VR: The First Beat',
  ],
  tools: [
    'Black Dice Engine',
    'Ami',
    'FEH Barracks Manager',
    'ComfyUI Production Pipeline',
    'MUMOSA Crisis Response VR Study',
  ],
};

const projectBelongsToCategory = (project: Project, category: Exclude<ProjectFilter, 'all'>) =>
  categoryProjectOrder[category].includes(project.title);

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
    if (filter !== 'all') {
      const order = categoryProjectOrder[filter];
      const firstRank = order.indexOf(first.title);
      const secondRank = order.indexOf(second.title);

      if (firstRank !== secondRank) {
        return firstRank - secondRank;
      }
    } else {
      const firstRank = first.rank?.all ?? Number.MAX_SAFE_INTEGER;
      const secondRank = second.rank?.all ?? Number.MAX_SAFE_INTEGER;

      if (firstRank !== secondRank) {
        return firstRank - secondRank;
      }
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
  const [{ filter: activeFilter, q: searchQuery }, setArchiveQuery] = useQueryStates({
    filter: parseAsStringLiteral<ProjectFilter>(['all', 'xr', 'games', 'tools']).withDefault('all'),
    q: parseAsString,
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 560);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resolvedFilter: ProjectFilter =
    activeFilter && filterOptions.some((option) => option.value === activeFilter)
      ? activeFilter
      : 'all';

  const filteredProjects = useMemo(() => {
    const normalizedQuery = (searchQuery ?? '').trim();

    const baseList =
      resolvedFilter === 'all'
        ? projects
        : projects.filter((project) => projectBelongsToCategory(project, resolvedFilter));
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

  const filterCounts: Record<ProjectFilter, number> = {
    all: projects.length,
    xr: projects.filter((project) => projectBelongsToCategory(project, 'xr')).length,
    games: projects.filter((project) => projectBelongsToCategory(project, 'games')).length,
    tools: projects.filter((project) => projectBelongsToCategory(project, 'tools')).length,
  };
  const hasActiveQuery = (searchQuery ?? '').trim().length > 0;

  return (
    <main className="min-h-screen bg-[var(--archive-background)] px-6 py-8 font-sans text-[var(--archive-foreground)] sm:px-8 md:py-9 lg:px-6 2xl:px-0">
      <MotionPage className="mx-auto max-w-[1396px]">
        <header className="mb-5 md:mb-5">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--archive-subtle)] transition-colors hover:text-[var(--archive-cyan)]"
          >
            <ArrowLeft aria-hidden="true" size={15} strokeWidth={1.8} />
            Back to portfolio
          </Link>
          <div>
            <h1 className="text-[30px] font-bold leading-none tracking-[-0.035em] sm:text-[56px]">Project Archive</h1>
            <p className="mt-4 text-xl font-medium leading-none tracking-[-0.01em] text-[var(--archive-accent)] sm:text-2xl">XR · Games · Tools</p>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:mt-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="flex flex-wrap items-center gap-3">
              {filterOptions.map((option) => {
                const active = option.value === resolvedFilter;
                const Icon = option.Icon;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setArchiveQuery({ filter: option.value })}
                    className={`inline-flex cursor-pointer items-center gap-3 rounded-md border px-4 py-2.5 text-xs font-normal tracking-normal transition-colors sm:py-3 sm:text-sm ${
                      option.value === 'all'
                        ? 'sm:min-w-[160px] sm:px-5'
                        : option.value === 'xr'
                          ? 'sm:min-w-[112px] sm:px-5'
                          : option.value === 'games'
                            ? 'sm:min-w-[140px] sm:px-5'
                            : 'sm:min-w-[150px] sm:px-5'
                    } ${
                      active
                        ? 'border-[var(--archive-cyan-border)] bg-[var(--archive-active-background)] text-[var(--archive-cyan)] shadow-[0_0_0_1px_rgba(22,200,238,0.12)]'
                        : 'border-[var(--archive-border)] bg-[var(--archive-control-background)] text-[var(--archive-control-text)] hover:border-[var(--archive-border-strong)] hover:text-[var(--archive-foreground)]'
                    }`}
                    aria-pressed={active}
                    aria-label={`${option.label}: ${filterCounts[option.value]} projects`}
                  >
                    <Icon aria-hidden="true" size={option.value === 'xr' ? 24 : 18} strokeWidth={option.value === 'xr' ? 1.8 : 1.7} />
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
              <div className="relative w-full sm:w-[348px]">
                <Search
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.6}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--archive-muted)]"
                />
                <input
                  type="search"
                  value={searchQuery ?? ''}
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    setArchiveQuery({ q: nextValue.length > 0 ? nextValue : null });
                  }}
                  placeholder="Search projects…"
                  className="h-[47px] w-full rounded-md border border-[var(--archive-border)] bg-[var(--archive-control-background)] py-2.5 pl-11 pr-4 text-sm text-[var(--archive-foreground)] outline-none transition-colors placeholder:text-[var(--archive-placeholder)] focus:border-[var(--archive-cyan-border)]"
                  aria-label="Search projects"
                />
              </div>
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <p className="text-sm text-[var(--archive-control-text)] sm:whitespace-nowrap" aria-live="polite">
                  {filteredProjects.length} projects
                </p>
                {hasActiveQuery ? (
                  <button
                    type="button"
                    onClick={() => setArchiveQuery({ filter: 'all', q: null })}
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--archive-accent)] hover:underline underline-offset-4"
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const isEarlyStage = project.status === 'Prototype' || project.status === 'In development' || project.status === 'Concept';

            return (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[var(--archive-border)] bg-[var(--archive-surface)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--archive-border-strong)] hover:shadow-[var(--archive-card-shadow)]"
              >
                <div className="relative aspect-[2.55] w-full overflow-hidden border-b border-[var(--archive-border)] bg-[var(--archive-surface)]">
                  {project.bannerImage ? (
                    <>
                      <Link
                        href={project.href ?? '#'}
                        target={project.external ? '_blank' : undefined}
                        rel={project.external ? 'noreferrer noopener' : undefined}
                        className="relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--archive-cyan-border)]"
                        aria-label={`View ${project.title} case study`}
                      >
                        <Image
                          src={project.bannerImage}
                          alt={project.bannerAlt ?? `${project.title} banner`}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </Link>
                      <div className="absolute right-5 top-4 z-10">
                        <LightboxImage
                          src={project.bannerImage}
                          alt={project.bannerAlt ?? `${project.title} banner`}
                          width={project.bannerWidth ?? 1600}
                          height={project.bannerHeight ?? 900}
                          triggerVariant="preview-icon"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-[var(--archive-muted)]">
                      Banner coming soon
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-[4px] border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] ${
                        isEarlyStage
                          ? 'border-[var(--archive-prototype)] text-[var(--archive-prototype)]'
                          : 'border-[var(--archive-shipped)] text-[var(--archive-shipped)]'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h2 className="mt-2 line-clamp-1 text-[18px] font-semibold uppercase leading-[1.15] tracking-[0.015em] sm:text-[19px]">{project.title}</h2>
                  <p className="mt-1 text-sm leading-[1.4] text-[var(--archive-muted)]">{project.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <HoverCard key={i} title={tag} compact showInfoIcon={false} description={tagDescriptions[tag] ?? 'Core competency applied in this case study.'}>
                        {tag}
                      </HoverCard>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                    {project.href ? (
                      <Link
                        href={project.href}
                        target={project.external ? "_blank" : undefined}
                        rel={project.external ? "noreferrer noopener" : undefined}
                        className="ml-auto text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--archive-accent)] transition-colors hover:text-[var(--archive-foreground)] hover:underline underline-offset-4"
                        aria-label={`View ${project.title} case study`}
                      >
                        View case study →
                      </Link>
                    ) : (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--archive-muted)]">
                        Case study coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 text-sm text-[var(--muted)]">No projects in this filter yet. Try another category.</p>
        ) : null}

        {showScrollTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--archive-border)] bg-[var(--archive-surface)] text-[var(--archive-muted)] shadow-[var(--archive-card-shadow)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--archive-cyan-border)] hover:text-[var(--archive-cyan)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--archive-cyan-border)]/50 sm:bottom-6 sm:right-[5.5rem]"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
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


















































