import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/career',
    '/cpse',
    '/creative',
    '/projects/ami-research-companion',
    '/projects/birdwatching',
    '/projects/bg3-toolkit-modding',
    '/projects/black-dice-engine',
    '/projects/breda',
    '/projects/comfyui-production-pipeline',
    '/projects/cranky-game-jam',
    '/projects/cranky-squirrel-annihilator',
    '/projects/fallout-level-design',
    '/projects/feh-barracks-manager',
    '/projects/figuresmith',
    '/projects/horror-vn-kit',
    '/projects/legion-go-console-dock',
    '/projects/lizard-wizard',
    '/projects/mumosa-crisis-response-vr',
    '/projects/patapon-vr-the-first-beat',
    '/projects/prince-of-persia-warrior-within-mod',
    '/projects/repo-x',
    '/projects/shinobi-story',
    '/projects/shinobi-story-2',
    '/projects/shogun-flowers-fall-in-blood',
    '/projects/shonen-showdown',
    '/projects/the-last-paycheck',
    '/projects/the-signal',
    '/projects/totally-bugged-out',
    '/projects/trash-been',
    '/projects/tur-workout-tracker',
    '/projects/vr-interaction-lab',
    '/projects/vr-microgames',
  ];

  return routes.map((route) => ({
    url: `https://tsvetanski.com${route}`,
    lastModified: new Date(),
  }));
}
