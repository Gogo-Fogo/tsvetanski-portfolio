import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ui.module.css';

export interface ProjectCardData {
  title: string;
  href: string;
  summary: string;
  tags: readonly string[];
  card: { src: string; alt: string; position?: string };
}

interface ProjectCardProps {
  project: ProjectCardData;
  /**
   * featured / compact: text over the image (homepage grid).
   * grid: image on top, text below (lists of many projects).
   */
  variant?: 'featured' | 'compact' | 'grid';
  headingLevel?: 'h2' | 'h3';
  priority?: boolean;
  sizes?: string;
}

/** The whole card is one link: title, one sentence, at most two tags, an arrow cue. */
export default function ProjectCard({
  project,
  variant = 'grid',
  headingLevel: Heading = 'h3',
  priority = false,
  sizes,
}: ProjectCardProps) {
  const className = variant === 'featured' ? styles.cardFeatured : variant === 'compact' ? styles.cardCompact : styles.cardGrid;
  const defaultSizes =
    variant === 'featured'
      ? '(min-width: 900px) 62vw, 92vw'
      : variant === 'compact'
        ? '(min-width: 900px) 32vw, 92vw'
        : '(min-width: 1100px) 30vw, (min-width: 640px) 46vw, 92vw';

  return (
    <Link href={project.href} className={className}>
      <span className={styles.cardMedia}>
        <Image
          src={project.card.src}
          alt={project.card.alt}
          fill
          sizes={sizes ?? defaultSizes}
          className={styles.cardImage}
          style={project.card.position ? { objectPosition: project.card.position } : undefined}
          preload={priority}
          unoptimized
        />
      </span>
      <span className={styles.cardCopy}>
        <Heading className={styles.cardTitle}>{project.title}</Heading>
        <span className={styles.cardSummary}>{project.summary}</span>
        <span className={styles.tags}>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </span>
      </span>
      <span className={styles.cardArrow} aria-hidden="true">
        <ArrowRight size={18} strokeWidth={1.8} />
      </span>
    </Link>
  );
}
