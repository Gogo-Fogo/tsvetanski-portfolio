type ProjectFact = {
  label: string;
  value: string;
};

type ProjectAtAGlanceProps = {
  items: readonly ProjectFact[];
};

export default function ProjectAtAGlance({ items }: ProjectAtAGlanceProps) {
  return (
    <section id="at-a-glance" aria-labelledby="at-a-glance-heading" className="-mt-6 sm:mt-0">
      <h2
        id="at-a-glance-heading"
        className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted)]"
      >
        At a glance
      </h2>
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent sm:shadow-none xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-b border-[var(--border)] p-4 last:border-b-0 sm:rounded-2xl sm:border sm:bg-[var(--surface)] sm:p-5 sm:shadow-[var(--shadow)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-snug text-[var(--foreground)] sm:leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
