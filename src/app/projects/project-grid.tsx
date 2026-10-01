import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from '@/components/ui/project-card';
import type { Project } from '@/content/projects';
import styles from './projects.module.css';

interface ProjectGridProps {
  projects: Project[];
  /** Adds a link card to the creative gallery (Creative category and the full list). */
  showGalleryCard?: boolean;
}

/** Plain list of project cards; rendered on the server as the fallback and by the client index. */
export default function ProjectGrid({ projects, showGalleryCard = false }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project, index) => (
        <li key={project.slug}>
          <ProjectCard project={project} variant="grid" headingLevel="h2" priority={index < 3} />
        </li>
      ))}
      {showGalleryCard ? (
        <li>
          <Link href="/creative" className={styles.galleryCard}>
            <span className={styles.galleryTitle}>Creative gallery</span>
            <span className={styles.gallerySummary}>Videos, animation, 3D and illustration that aren&apos;t full case studies.</span>
            <span className={styles.galleryCta}>
              Browse the gallery <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </span>
          </Link>
        </li>
      ) : null}
    </ul>
  );
}
