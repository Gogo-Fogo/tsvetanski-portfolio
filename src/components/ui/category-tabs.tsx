'use client';

import { BrainCircuit, Clapperboard, Gamepad2, LayoutGrid, RectangleGoggles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { categories, categoryIds, type Category, type CategoryId } from '@/content/categories';
import styles from './ui.module.css';

const icons: Record<Category['icon'], LucideIcon> = {
  goggles: RectangleGoggles,
  gamepad: Gamepad2,
  brain: BrainCircuit,
  clapperboard: Clapperboard,
};

export type TabValue = 'all' | CategoryId;

interface CategoryTabsProps {
  value: TabValue;
  onChange: (value: TabValue) => void;
  /** Shown beside each label when given (Projects page). */
  counts?: Partial<Record<TabValue, number>>;
  /** id of the region the tabs update. */
  controls: string;
  label?: string;
}

/**
 * Toggle buttons that swap a list in place. Same labels everywhere (categories.ts).
 * On narrow screens the row scrolls sideways with an edge fade; the selected tab is kept in view.
 */
export default function CategoryTabs({ value, onChange, counts, controls, label = 'Project categories' }: CategoryTabsProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    const wrap = wrapRef.current;
    if (!row || !wrap) return;
    const update = () => {
      const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
      wrap.style.setProperty('--tabs-fade', atEnd ? '0' : '1');
    };
    update();
    row.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      row.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    // Scroll the row only (never the page) so the selected tab is fully visible.
    const row = rowRef.current;
    const selected = row?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!row || !selected) return;
    const left = selected.offsetLeft - row.offsetLeft;
    const right = left + selected.offsetWidth;
    if (left < row.scrollLeft) row.scrollTo({ left: left - 16 });
    else if (right > row.scrollLeft + row.clientWidth) row.scrollTo({ left: right - row.clientWidth + 16 });
  }, [value]);

  const options: { id: TabValue; label: string; Icon: LucideIcon }[] = [
    { id: 'all', label: 'All Projects', Icon: LayoutGrid },
    ...categoryIds.map((id) => ({ id, label: categories[id].label, Icon: icons[categories[id].icon] })),
  ];

  return (
    <div ref={wrapRef} className={styles.tabsWrap}>
      <div ref={rowRef} role="group" aria-label={label} className={styles.tabs}>
        {options.map(({ id, label: optionLabel, Icon }) => (
          <button
            key={id}
            type="button"
            className={styles.tab}
            aria-pressed={value === id}
            aria-controls={controls}
            onClick={() => onChange(id)}
          >
            <Icon aria-hidden="true" size={19} strokeWidth={1.6} />
            {optionLabel}
            {counts?.[id] !== undefined ? <span className={styles.tabCount}>{counts[id]}</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
