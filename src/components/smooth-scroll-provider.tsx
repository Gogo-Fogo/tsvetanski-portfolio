"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Move focus to an in-page target so keyboard and screen-reader users land there too. */
function focusTarget(target: HTMLElement) {
  if (!target.hasAttribute("tabindex") && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(target.tagName)) {
    target.setAttribute("tabindex", "-1");
  }
  target.focus({ preventScroll: true });
}

export default function SmoothScrollProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = prefersReducedMotion
      ? null
      : new Lenis({ autoRaf: false, duration: 1, smoothWheel: true });

    let frameId = 0;
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };
      frameId = window.requestAnimationFrame(raf);
    }

    // Same-page anchor links: honour the header offset (scroll-margin-top), update the hash
    // and move focus. Links to other pages are left to the router.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const id = decodeURIComponent(link.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();
      const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      if (lenis) {
        lenis.scrollTo(target, { offset: -offset });
      } else {
        target.scrollIntoView({ block: "start" });
      }
      history.pushState(null, "", `#${id}`);
      focusTarget(target);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.cancelAnimationFrame(frameId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
