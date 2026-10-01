'use client';

import { Search, X } from 'lucide-react';
import { debounce, parseAsString, parseAsStringLiteral, useQueryStates } from 'nuqs';
import { useEffect, useMemo } from 'react';
import CategoryTabs, { type TabValue } from '@/components/ui/category-tabs';
import { categories, categoryIds } from '@/content/categories';
import { allProjects, projectsIn } from '@/content/project-helpers';
import type { Project } from '@/content/projects';
import ProjectGrid from './project-grid';
import styles from './projects.module.css';

const tabValues = ['all', ...categoryIds] as const;

function matches(project: Project, query: string) {
  const haystack = [project.title, project.summary, ...project.tags, ...(project.searchTerms ?? [])]
    .join(' ')
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

const countLabel = (count: number) => `${count} ${count === 1 ? 'project' : 'projects'}`;

export default function ProjectsIndex() {
  const [{ category, q, filter }, setQuery] = useQueryStates(
    {
      category: parseAsStringLiteral(tabValues).withDefault('all'),
      q: parseAsString.withDefault(''),
      // Left over from /career redirects; the redirect already mapped it to `category`.
      filter: parseAsString,
    },
    { history: 'replace', scroll: false }
  );

  useEffect(() => {
    if (filter !== null) void setQuery({ filter: null });
  }, [filter, setQuery]);

  const inCategory = useMemo(() => (category === 'all' ? allProjects() : projectsIn(category)), [category]);
  const query = q.trim();
  const results = useMemo(
    () => (query ? inCategory.filter((project) => matches(project, query)) : inCategory),
    [inCategory, query]
  );

  const counts = useMemo(() => {
    const all: Partial<Record<TabValue, number>> = { all: allProjects().length };
    for (const id of categoryIds) all[id] = projectsIn(id).length;
    return all;
  }, []);

  const categoryName = category === 'all' ? 'all projects' : categories[category].label;
  const status = query
    ? `${countLabel(results.length)} match “${query}” in ${categoryName}`
    : `${countLabel(results.length)}${category === 'all' ? '' : ` in ${categoryName}`}`;

  return (
    <>
      <div className={styles.controls}>
        <CategoryTabs
          value={category}
          onChange={(value) => setQuery({ category: value === 'all' ? null : value })}
          counts={counts}
          controls="project-results"
        />
        <div className={styles.searchRow}>
          <label className={styles.search}>
            <span className={styles.searchLabel}>Search projects</span>
            <span className={styles.searchField}>
              <Search aria-hidden="true" size={17} strokeWidth={1.8} />
              <input
                type="search"
                value={q}
                placeholder="Engine, genre or name"
                autoComplete="off"
                onChange={(event) =>
                  setQuery({ q: event.target.value || null }, { limitUrlUpdates: debounce(300) })
                }
              />
              {q ? (
                <button type="button" className={styles.clearButton} onClick={() => setQuery({ q: null })} aria-label="Clear search">
                  <X aria-hidden="true" size={16} strokeWidth={2} />
                </button>
              ) : null}
            </span>
          </label>
          <p className={styles.status} role="status" aria-live="polite">
            {status}
          </p>
        </div>
      </div>

      <section id="project-results" aria-label={`Results: ${categoryName}`}>
        {results.length ? (
          <ProjectGrid projects={results} showGalleryCard={!query && (category === 'creative' || category === 'all')} />
        ) : (
          <div className={styles.empty}>
            <h2 className={styles.emptyTitle}>No projects match “{query}”</h2>
            <p>
              Nothing in {categoryName} mentions that. Try a broader word, like an engine (Unity, Unreal) or a genre.
            </p>
            <div className={styles.emptyActions}>
              <button type="button" className={styles.emptyButton} onClick={() => setQuery({ q: null })}>
                Clear search
              </button>
              {category !== 'all' ? (
                <button type="button" className={styles.emptyButton} onClick={() => setQuery({ category: null })}>
                  Search all projects
                </button>
              ) : null}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
