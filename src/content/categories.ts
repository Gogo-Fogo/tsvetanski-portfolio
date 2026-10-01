/**
 * The four project categories. These labels are used everywhere: homepage tabs, the Projects
 * page filter, case-study chips and the command palette. Change them here only.
 */
export const categoryIds = ['xr', 'gameplay', 'tools', 'creative'] as const;

export type CategoryId = (typeof categoryIds)[number];

export interface Category {
  id: CategoryId;
  label: string;
  /** Key for the icon map in the client tab component (keeps this file free of React). */
  icon: 'goggles' | 'gamepad' | 'brain' | 'clapperboard';
  description: string;
}

export const categories: Record<CategoryId, Category> = {
  xr: {
    id: 'xr',
    label: 'XR + Simulation',
    icon: 'goggles',
    description: 'VR prototypes, simulators and spatial research tools.',
  },
  gameplay: {
    id: 'gameplay',
    label: 'Gameplay Systems',
    icon: 'gamepad',
    description: 'Games, mods and the systems that make them play.',
  },
  tools: {
    id: 'tools',
    label: 'Tools & AI',
    icon: 'brain',
    description: 'Apps, pipelines and engines built for other people to use.',
  },
  creative: {
    id: 'creative',
    label: 'Creative',
    icon: 'clapperboard',
    description: 'Video, animation, art and making.',
  },
};

export function isCategoryId(value: unknown): value is CategoryId {
  return typeof value === 'string' && (categoryIds as readonly string[]).includes(value);
}
