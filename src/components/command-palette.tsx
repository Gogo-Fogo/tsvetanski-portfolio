"use client";

import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { categories, categoryIds } from "@/content/categories";
import { allProjects } from "@/content/project-helpers";

const EMAIL = "georgi@tsvetanski.com";

interface PaletteItem {
  id: string;
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const itemClass =
  "flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm text-[var(--foreground)] data-[selected=true]:bg-[var(--surface-muted)]";
const groupClass =
  "mb-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--muted)]";

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();

  const go = (href: string) => () => router.push(href);

  const pages: PaletteItem[] = [
    { id: "home", label: "Home", keywords: "start landing", run: go("/") },
    { id: "projects", label: "All projects", keywords: "work portfolio archive career", run: go("/projects") },
    ...categoryIds.map((id) => ({
      id: `category-${id}`,
      label: `${categories[id].label} projects`,
      keywords: categories[id].description,
      run: go(`/projects?category=${id}`),
    })),
    { id: "creative", label: "Creative gallery", keywords: "video animation art illustration", run: go("/creative") },
    { id: "about", label: "About", keywords: "bio experience education degrees", run: go("/about") },
  ];

  const projectItems: PaletteItem[] = allProjects().map((project) => ({
    id: project.slug,
    label: project.title,
    hint: categories[project.primaryCategory].label,
    keywords: [project.summary, ...project.tags, ...(project.searchTerms ?? [])].join(" "),
    run: go(project.href),
  }));

  const contact: PaletteItem[] = [
    {
      id: "copy-email",
      label: "Copy email address",
      hint: EMAIL,
      keywords: "contact mail",
      run: async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          toast.success("Email address copied");
        } catch {
          toast.error(`Couldn't copy. The address is ${EMAIL}`);
        }
      },
    },
    { id: "email", label: "Write an email", keywords: "mailto contact", run: () => window.location.assign(`mailto:${EMAIL}`) },
    { id: "resume", label: "Open resume (PDF)", keywords: "cv resume", run: () => window.open("/resume.pdf", "_blank", "noopener") },
  ];

  const runCommand = (run: () => void) => {
    onOpenChange(false);
    run();
  };

  const renderGroup = (heading: string, items: PaletteItem[]) => (
    <Command.Group heading={heading} className={groupClass}>
      {items.map((item) => (
        <Command.Item
          key={item.id}
          value={`${item.label} ${item.keywords ?? ""}`}
          onSelect={() => runCommand(item.run)}
          className={itemClass}
        >
          <span>{item.label}</span>
          {item.hint ? <span className="shrink-0 text-xs text-[var(--muted)]">{item.hint}</span> : null}
        </Command.Item>
      ))}
    </Command.Group>
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[12%] z-[80] w-[92vw] max-w-xl -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-0 shadow-[var(--shadow-strong)] outline-none">
          <Dialog.Title className="sr-only">Search the site</Dialog.Title>
          <Dialog.Description className="sr-only">
            Type to find a page or project, then press Enter to open it.
          </Dialog.Description>

          <Command className="w-full" loop>
            <Command.Input
              placeholder="Search projects and pages…"
              aria-label="Search projects and pages"
              className="h-12 w-full rounded-t-2xl border-b border-[var(--border)] bg-transparent px-4 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
            />
            <Command.List data-lenis-prevent className="max-h-[60vh] overflow-y-auto overscroll-contain p-2">
              <Command.Empty className="px-3 py-6 text-sm text-[var(--muted)]">
                Nothing matches. Try an engine, a genre or a project name.
              </Command.Empty>
              {renderGroup("Pages", pages)}
              {renderGroup("Projects", projectItems)}
              {renderGroup("Contact", contact)}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
