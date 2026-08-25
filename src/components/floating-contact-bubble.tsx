"use client";

import { Mail, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closePanel = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50">
      {open ? (
        <div
          id="quick-contact-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="quick-contact-title"
          className="absolute bottom-[calc(100%+0.75rem)] right-0 max-h-[calc(100dvh-6.5rem)] w-[min(calc(100vw-2rem),30rem)] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-strong)] backdrop-blur"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <p id="quick-contact-title" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Quick Contact
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={closePanel}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Close contact form"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ContactFormPreview compact />
        </div>
      ) : null}

      <div className="relative h-14 w-14">
        <span aria-hidden="true" className="contact-bubble-ring contact-bubble-ring-a" />
        <span aria-hidden="true" className="contact-bubble-ring contact-bubble-ring-b" />
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`contact-bubble-btn relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--foreground)]/30 bg-[var(--surface)]/90 text-[var(--foreground)] shadow-[var(--shadow-strong)] ring-2 ring-[var(--accent-cyan)]/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--foreground)]/60 hover:ring-[var(--accent-cyan)]/55 ${
            theme === "dark"
              ? "animate-[themePulseDark_4.5s_ease-in-out_infinite]"
              : "animate-[themePulseLight_4.5s_ease-in-out_infinite]"
          }`}
          aria-expanded={open}
          aria-controls={open ? "quick-contact-panel" : undefined}
          aria-label={open ? "Hide contact form" : "Open contact form"}
          title="Contact"
        >
          <Mail className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
