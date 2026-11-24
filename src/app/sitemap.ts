import type { MetadataRoute } from 'next';
import { allProjects, SITE_URL } from '@/content/project-helpers';
import { usgPosts, writingPath } from '@/content/usg-writing';

// Generated from the project registry so new case studies are listed automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/projects', '/about', '/creative', '/animation', writingPath];
  const projectRoutes = allProjects().map((project) => project.href);
  const articles = usgPosts.map((post) => `${writingPath}/${post.slug}`);

  return [...pages, ...projectRoutes, ...articles].map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : pages.includes(route) ? 0.8 : 0.7,
  }));
}
