/** Theme storage shared by the head bootstrap script and the header button. */
export const THEME_STORAGE_KEY = 'portfolio-theme';

export type Theme = 'light' | 'dark';

/**
 * Runs in <head> before paint: stored choice first, then the system setting. Keep it
 * dependency-free; it is inlined as a string.
 */
export const themeBootstrapScript = `
(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try {
    const stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (stored === 'light' || stored === 'dark') {
      theme = stored;
    } else {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  } catch {}
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
`;
