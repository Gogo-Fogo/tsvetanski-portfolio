import { Suspense } from 'react';
import { allProjects, pageMetadata } from '@/content/project-helpers';
import ui from '@/components/ui/ui.module.css';
import ProjectGrid from './project-grid';
import ProjectsIndex from './projects-index';

export const metadata = pageMetadata({
  title: 'Projects',
  description:
    'Every project by Georgi Tsvetanski: XR simulations, gameplay systems, tools and creative work, with what he built on each.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <main className={ui.page}>
      <p className={ui.eyebrow}>Simulation · XR · Gameplay Systems</p>
      <h1 className={ui.pageTitle}>Projects</h1>
      <p className={ui.pageLede}>
        Shipped games, research prototypes, tools and side projects. Each page says what I built and who I built it with.
      </p>

      {/* Static HTML lists every project; the interactive filter takes over once loaded. */}
      <Suspense fallback={<ProjectGrid projects={allProjects()} showGalleryCard />}>
        <ProjectsIndex />
      </Suspense>
    </main>
  );
}
