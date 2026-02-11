"use client";

import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  safePolygon,
} from "@floating-ui/react";
import { useState, type ReactNode } from "react";

type TooltipProps = {
  label: ReactNode;
  children: ReactNode;
};

export function Tooltip({ label, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null);
  const [floatingEl, setFloatingEl] = useState<HTMLElement | null>(null);

  const { floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    elements: {
      reference: referenceEl,
      floating: floatingEl,
    },
    middleware: [offset(10), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <span
        ref={setReferenceEl}
        className="inline-flex"
        {...getReferenceProps()}
      >
        {children}
      </span>

      {open ? (
        <FloatingPortal>
          <div
            ref={setFloatingEl}
            style={floatingStyles}
            className="z-50 max-w-xs rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--foreground)] shadow-[var(--shadow-strong)]"
            {...getFloatingProps()}
          >
            {label}
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
}

type HoverCardProps = {
  title: string;
  description: ReactNode;
  children: ReactNode;
};

export function HoverCard({ title, description, children }: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null);
  const [floatingEl, setFloatingEl] = useState<HTMLElement | null>(null);

  const { floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    elements: {
      reference: referenceEl,
      floating: floatingEl,
    },
    middleware: [offset(12), flip(), shift({ padding: 10 })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const focus = useFocus(context);
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "dialog" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <span
        ref={setReferenceEl}
        tabIndex={0}
        className="inline-flex items-center rounded-full border border-[var(--border)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/40"
        {...getReferenceProps()}
      >
        {children}
      </span>

      {open ? (
        <FloatingPortal>
          <div
            ref={setFloatingEl}
            style={floatingStyles}
            className="z-50 max-w-sm rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-strong)]"
            {...getFloatingProps()}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
              {title}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              {description}
            </p>
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
}
