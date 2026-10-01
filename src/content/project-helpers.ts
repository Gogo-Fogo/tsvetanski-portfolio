import type { Metadata } from 'next';
import { categories, type CategoryId } from './categories';
import { allOrder, projects, type Project, type ProjectSlug } from './projects';

export const SITE_URL = 'https://www.tsvetanski.com';
export const SITE_NAME = 'Georgi Tsvetanski';
export const SITE_ROLE = 'Simulation · XR · Gameplay Systems';

export function getProject(slug: ProjectSlug): Project {
  return projects[slug];
}

/** Every listed project, in the site-wide order. */
export function allProjects(): Project[] {
  return allOrder.map((slug) => projects[slug]);
}

/** Projects in a category, keeping the site-wide order. */
export function projectsIn(category: CategoryId): Project[] {
  return allProjects().filter((project) => project.categories.includes(category));
}

/** The project after this one in its primary category, wrapping around. */
export function nextInCategory(slug: ProjectSlug): Project {
  const project = projects[slug];
  const list = projectsIn(project.primaryCategory);
  const index = list.findIndex((candidate) => candidate.slug === slug);
  return list[(index + 1) % list.length];
}

/**
 * Two related projects: others that share a category, preferring the primary category,
 * skipping the "next" project so the footer never repeats a card.
 */
export function relatedProjects(slug: ProjectSlug, count = 2): Project[] {
  const project = projects[slug];
  const next = nextInCategory(slug);
  const exclude = new Set<ProjectSlug>([slug, next.slug]);
  const primary = projectsIn(project.primaryCategory).filter((p) => !exclude.has(p.slug));
  const secondary = allProjects().filter(
    (p) =>
      !exclude.has(p.slug) &&
      p.primaryCategory !== project.primaryCategory &&
      p.categories.some((category) => project.categories.includes(category))
  );
  // A project in several categories can sit in both lists; keep each one once.
  const seen = new Set<ProjectSlug>();
  return [...secondary, ...primary]
    .filter((candidate) => !seen.has(candidate.slug) && seen.add(candidate.slug))
    .slice(0, count);
}

export function categoryLabel(id: CategoryId): string {
  return categories[id].label;
}

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Full metadata for any page, including Open Graph and Twitter blocks (they don't merge). */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      // Page-level openGraph replaces the root block, so the shared card is listed explicitly.
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${SITE_NAME}: ${SITE_ROLE}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ['/opengraph-image'],
    },
  };
}

/** Metadata for a case study, from the registry. `description` overrides the card summary. */
export function projectMetadata(slug: ProjectSlug, description?: string): Metadata {
  const project = projects[slug];
  return pageMetadata({
    title: project.title,
    description: description ?? project.summary,
    path: project.href,
  });
}
