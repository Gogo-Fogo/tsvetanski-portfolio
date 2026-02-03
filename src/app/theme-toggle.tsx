"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "tsvetanski-theme";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return "dark";
};

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const preferred = getPreferredTheme();
    setTheme(preferred);
    applyTheme(preferred);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div className="group fixed right-4 top-4 z-50 flex items-center">
      <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-3 py-2 shadow-[var(--shadow-strong)] backdrop-blur">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--foreground)]/80">
          Theme
        </span>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to comfort mode" : "Switch to dark mode"}
          className={`inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--foreground)]/30 bg-[var(--surface)]/90 text-[var(--foreground)] shadow-[var(--shadow-strong)] ring-2 ring-[var(--accent-cyan)]/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--foreground)]/60 hover:ring-[var(--accent-cyan)]/55 ${theme === "dark" ? "animate-[themePulseDark_4.5s_ease-in-out_infinite]" : "animate-[themePulseLight_4.5s_ease-in-out_infinite]"}`}
        >
          {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>
      <span className="pointer-events-none absolute -bottom-8 right-0 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)] opacity-0 shadow-[var(--shadow)] transition group-hover:opacity-100">
        {theme === "dark" ? "Dark mode" : "Comfort mode"}
      </span>
    </div>
  );
}












