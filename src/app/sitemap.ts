import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tsvetanski.com',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/career',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/about',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/creative',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/resume',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/projects/repo-x',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/projects/vr-interaction-lab',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/projects/trash-been',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/projects/fallout-level-design',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/projects/vr-microgames',
      lastModified: new Date()
    },
    {
      url: 'https://tsvetanski.com/virtual-lab',
      lastModified: new Date()
    }
  ];
}