import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import { categories } from '@/content/categories';
import { getProject } from '@/content/project-helpers';
import type { ProjectSlug } from '@/content/projects';
import styles from './case-study.module.css';

/*
 * Building blocks for case-study pages. Every page reads:
 * header (breadcrumbs, categories, title, one sentence, hero proof, at a glance)
 * → sections → footer (next project, related projects).
 */

export function CaseStudyShell({ children }: { children: ReactNode }) {
  return <main className={styles.page}>{children}</main>;
}

export interface GlanceItem {
  label: string;
  value: ReactNode;
}

interface CaseStudyHeaderProps {
  slug: ProjectSlug;
  /** One or two plain-English sentences: what it is and what Georgi did. */
  lede: ReactNode;
  /** The strongest proof: an image, video or embed. Shown above the fold. */
  hero?: ReactNode;
  heroCaption?: ReactNode;
  /** Let the hero run edge to edge on phones (embeds that need the width). */
  heroBleed?: boolean;
  /** Four facts: My role, Team, Built with, Status/Result. */
  glance: readonly GlanceItem[];
  /** Optional links shown under the lede (play, repo, video). */
  actions?: ReactNode;
}

export function CaseStudyHeader({ slug, lede, hero, heroCaption, heroBleed = false, glance, actions }: CaseStudyHeaderProps) {
  const project = getProject(slug);
  return (
    <header className={styles.header}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
      />
      <ul className={styles.chips} aria-label="Categories">
        {project.categories.map((id) => (
          <li key={id}>
            <Link href={`/projects?category=${id}`} className={styles.chip}>
              {categories[id].label}
            </Link>
          </li>
        ))}
        <li className={styles.status}>{project.status}</li>
      </ul>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.lede}>{lede}</div>
      {actions ? <div className={styles.headerActions}>{actions}</div> : null}
      {hero ? (
        <figure className={heroBleed ? `${styles.hero} ${styles.heroBleed}` : styles.hero}>
          <div className={styles.heroMedia}>{hero}</div>
          {heroCaption ? <figcaption className={styles.caption}>{heroCaption}</figcaption> : null}
        </figure>
      ) : null}
      <dl className={styles.glance} aria-label="At a glance">
        {glance.map((item) => (
          <div key={item.label} className={styles.glanceItem}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

interface SectionProps {
  id?: string;
  title: string;
  /** Short lead-in shown under the heading. */
  intro?: ReactNode;
  children?: ReactNode;
}

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={id ? `${id}-title` : undefined}>
      <h2 id={id ? `${id}-title` : undefined} className={styles.sectionTitle}>
        {title}
      </h2>
      {intro ? <div className={styles.prose}>{intro}</div> : null}
      {children}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className={styles.prose}>{children}</div>;
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: readonly { title: ReactNode; body: ReactNode }[];
  columns?: 1 | 2 | 3 | 4;
}) {
  return (
    <ul className={styles.cardGrid} data-columns={columns}>
      {items.map((item, index) => (
        <li key={index} className={styles.miniCard}>
          <h3 className={styles.miniTitle}>{item.title}</h3>
          <div className={styles.miniBody}>{item.body}</div>
        </li>
      ))}
    </ul>
  );
}

/** A captioned piece of media. `wide` spans the full content width. */
export function Figure({ children, caption, wide = false }: { children: ReactNode; caption?: ReactNode; wide?: boolean }) {
  return (
    <figure className={wide ? styles.figureWide : styles.figure}>
      <div className={styles.figureMedia}>{children}</div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}

export function MediaGrid({ children, columns = 2 }: { children: ReactNode; columns?: 2 | 3 }) {
  return (
    <div className={styles.mediaGrid} data-columns={columns}>
      {children}
    </div>
  );
}

/** Text beside media; stacks on phones. */
export function Split({ media, children, reverse = false }: { media: ReactNode; children: ReactNode; reverse?: boolean }) {
  return (
    <div className={styles.split} data-reverse={reverse || undefined}>
      <div className={styles.prose}>{children}</div>
      <div>{media}</div>
    </div>
  );
}

/** Secondary process detail, collapsed by default. Never put outcomes in here. */
export function DeepDive({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className={styles.deepDive}>
      <summary className={styles.deepDiveSummary}>
        <span>{summary}</span>
        <span className={styles.deepDiveHint} aria-hidden="true">
          Show
        </span>
      </summary>
      <div className={styles.deepDiveBody}>{children}</div>
    </details>
  );
}

export interface ActionLink {
  href: string;
  label: string;
  primary?: boolean;
}

/** Outbound links (play, watch, source). External links open in a new tab. */
export function ActionLinks({ links }: { links: readonly ActionLink[] }) {
  return (
    <ul className={styles.actions}>
      {links.map((link) => {
        const external = /^https?:/.test(link.href) || link.href.endsWith('.pdf');
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={link.primary ? styles.actionPrimary : styles.action}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {link.label}
              {external ? <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} /> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function BulletList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
