import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import ProjectCard from '@/components/ui/project-card';
import { categories } from '@/content/categories';
import { getProject, nextInCategory, relatedProjects } from '@/content/project-helpers';
import type { ProjectSlug } from '@/content/projects';
import styles from './case-study.module.css';

export interface TocItem {
  id: string;
  label: string;
}

/**
 * The page body. Long pages pass `toc`: a sticky contents list beside the text on wide
 * screens and a "Jump to a section" disclosure on smaller ones.
 */
export function CaseStudyBody({ toc, children }: { toc?: readonly TocItem[]; children: ReactNode }) {
  if (!toc?.length) return <div className={styles.body}>{children}</div>;

  const links = (
    <ol className={styles.tocList}>
      {toc.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={styles.tocLink}>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <div className={styles.bodyWithToc}>
      <nav className={styles.tocSide} aria-label="On this page">
        <p className={styles.tocHeading}>On this page</p>
        {links}
      </nav>
      <div className={styles.body}>
        <details className={styles.tocInline}>
          <summary className={styles.tocInlineSummary}>Jump to a section</summary>
          <nav aria-label="On this page">{links}</nav>
        </details>
        {children}
      </div>
    </div>
  );
}

/** Next project in the same category, two related ones, and a way back to the category. */
export function CaseStudyFooter({ slug }: { slug: ProjectSlug }) {
  const project = getProject(slug);
  const next = nextInCategory(slug);
  const related = relatedProjects(slug, 2);
  const category = categories[project.primaryCategory];

  return (
    <aside className={styles.footer} aria-labelledby="more-projects">
      <div className={styles.footerHead}>
        <h2 id="more-projects" className={styles.sectionTitle}>
          More projects
        </h2>
        <Link href={`/projects?category=${category.id}`} className={styles.footerAll}>
          All {category.label} projects <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
        </Link>
      </div>
      <ul className={styles.footerGrid}>
        <li>
          <p className={styles.footerLabel}>Next in {category.label}</p>
          <ProjectCard project={next} variant="grid" />
        </li>
        {related.map((item) => (
          <li key={item.slug}>
            <p className={styles.footerLabel}>Related · {categories[item.primaryCategory].label}</p>
            <ProjectCard project={item} variant="grid" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
