"use client";

interface GraphTooltipProps {
  x: number;
  y: number;
  title: string;
  description?: string;
  visible: boolean;
}

export default function GraphTooltip({ x, y, title, description, visible }: GraphTooltipProps) {
  if (!visible) return null;

  return (
    <div
      className="absolute z-50 pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -120%)",
      }}
    >
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-lg p-3 min-w-[200px] backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-[var(--foreground)]">{title}</h3>
        {description && (
          <p className="text-xs text-[var(--muted)] mt-1">{description}</p>
        )}
        <div className="absolute left-1/2 bottom-0 w-2 h-2 bg-[var(--surface)] border-r border-b border-[var(--border)] transform translate-y-1/2 -translate-x-1/2 rotate-45" />
      </div>
    </div>
  );
}