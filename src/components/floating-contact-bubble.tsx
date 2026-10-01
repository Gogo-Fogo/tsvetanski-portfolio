"use client";

import { Mail, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ContactFormPreview from "@/components/contact-form-preview";

/**
 * Quick contact on inner pages. It hides while the page footer (which has the same contact
 * links) is on screen, so it never sits on top of them.
 */
export default function FloatingContactBubble() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const footer = document.getElementById("contact");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closePanel = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  if (pathname === "/" || (footerVisible && !open)) {
    return null;
  }

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40">
      {open ? (
        <div
          id="quick-contact-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="quick-contact-title"
          data-lenis-prevent
          className="absolute bottom-[calc(100%+0.75rem)] right-0 max-h-[calc(100dvh-6rem)] w-[min(calc(100vw-2rem),28rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-strong)]"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 id="quick-contact-title" className="text-lg font-semibold">
              Write to Georgi
            </h2>
            <button
              ref={closeRef}
              type="button"
              onClick={closePanel}
              className="inline-grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Close contact form"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <ContactFormPreview />
        </div>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-strong)] transition-colors hover:border-[var(--brand-cyan)]"
        aria-expanded={open}
        aria-controls={open ? "quick-contact-panel" : undefined}
        aria-label={open ? "Hide contact form" : "Contact Georgi"}
      >
        <Mail aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  );
}
