"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => getSystemTheme());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(getSystemTheme());

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const getAriaLabel = () =>
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  if (!mounted) {
    return null;
  }

  return (
    <div className="group fixed right-4 top-4 z-50 flex items-center">
      <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-3 py-2 shadow-[var(--shadow-strong)] backdrop-blur">
        <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--foreground)]/80">
          Theme
        </span>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={getAriaLabel()}
          className={`inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--foreground)]/30 bg-[var(--surface)]/90 text-[var(--foreground)] shadow-[var(--shadow-strong)] ring-2 ring-[var(--accent-cyan)]/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--foreground)]/60 hover:ring-[var(--accent-cyan)]/55 ${theme === "dark" ? "animate-[themePulseDark_4.5s_ease-in-out_infinite]" : "animate-[themePulseLight_4.5s_ease-in-out_infinite]"}`}
        >
          {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>
      <span className="pointer-events-none absolute -bottom-8 right-0 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)] opacity-0 shadow-[var(--shadow)] transition group-hover:opacity-100">
        {theme === "dark" ? "Dark mode" : "Light mode"}
      </span>
    </div>
  );
}


















