"use client";

import { Mail, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ContactFormPreview from "@/components/contact-form-preview";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function FloatingContactBubble() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => getSystemTheme());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(getSystemTheme());

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-4 z-50 flex items-end gap-3">
      <div
        className={`origin-bottom-right transition-all duration-300 ${
          open
            ? "pointer-events-auto w-[min(92vw,30rem)] scale-100 opacity-100"
            : "pointer-events-none w-0 scale-95 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-strong)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Quick Contact
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Close contact form"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ContactFormPreview compact />
        </div>
      </div>

      <div className="relative h-14 w-14">
        <span aria-hidden="true" className="contact-bubble-ring contact-bubble-ring-a" />
        <span aria-hidden="true" className="contact-bubble-ring contact-bubble-ring-b" />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`contact-bubble-btn relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--foreground)]/30 bg-[var(--surface)]/90 text-[var(--foreground)] shadow-[var(--shadow-strong)] ring-2 ring-[var(--accent-cyan)]/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--foreground)]/60 hover:ring-[var(--accent-cyan)]/55 ${
            theme === "dark"
              ? "animate-[themePulseDark_4.5s_ease-in-out_infinite]"
              : "animate-[themePulseLight_4.5s_ease-in-out_infinite]"
          }`}
          aria-expanded={open}
          aria-label={open ? "Hide contact form" : "Open contact form"}
          title="Contact"
        >
          <Mail className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
