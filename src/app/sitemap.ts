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
    '/projects/black-dice-engine',
    '/projects/breda',
    '/projects/comfyui-production-pipeline',
    '/projects/cranky-game-jam',
    '/projects/cranky-squirrel-annihilator',
    '/projects/fallout-level-design',
    '/projects/figuresmith',
    '/projects/feh-barracks-manager',
    '/projects/mumosa-crisis-response-vr',
    '/projects/patapon-vr-the-first-beat',
    '/projects/prince-of-persia-warrior-within-mod',
    '/projects/repo-x',
    '/projects/shinobi-story',
    '/projects/shogun-flowers-fall-in-blood',
    '/projects/shonen-showdown',
    '/projects/the-last-paycheck',
    '/projects/the-signal',
    '/projects/totally-bugged-out',
    '/projects/trash-been',
    '/projects/vr-interaction-lab',
    '/projects/vr-microgames',
  ];

  return routes.map((route) => ({
    url: `https://tsvetanski.com${route}`,
    lastModified: new Date(),
  }));
}
