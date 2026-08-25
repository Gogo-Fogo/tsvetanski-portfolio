import Link from 'next/link';
import BackButton from '@/components/back-button';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const parentItem = items.length > 1 ? items[items.length - 2] : undefined;

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <BackButton fallbackHref={parentItem?.href ?? '/'} />
      <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-[var(--foreground)]">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-[var(--foreground)]' : ''}>{item.label}</span>
                )}
                {!isLast ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
