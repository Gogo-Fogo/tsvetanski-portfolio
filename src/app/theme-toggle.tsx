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
      <span className="pointer-events-none absolute right-14 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)] opacity-0 shadow-[var(--shadow)] transition group-hover:opacity-100">
        {theme === "dark" ? "Comfort" : "Dark"}
      </span>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to comfort mode" : "Switch to dark mode"}
        className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/80 text-[var(--foreground)] shadow-[var(--shadow)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--foreground)] ${theme === "dark" ? "animate-[themePulseDark_6s_ease-in-out_infinite]" : "animate-[themePulseLight_6s_ease-in-out_infinite]"}`}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </div>
  );
}










