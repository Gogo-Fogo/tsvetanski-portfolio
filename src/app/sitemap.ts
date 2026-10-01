import type { MetadataRoute } from 'next';
import { allProjects, SITE_URL } from '@/content/project-helpers';

// Generated from the project registry so new case studies are listed automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/projects', '/about', '/creative'];
  const projectRoutes = allProjects().map((project) => project.href);

  return [...pages, ...projectRoutes].map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : pages.includes(route) ? 0.8 : 0.7,
  }));
}
