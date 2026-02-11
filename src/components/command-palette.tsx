"use client";

import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

type PaletteItem = {
  id: string;
  label: string;
  section: "Navigate" | "Quick Actions";
  shortcut?: string;
  keywords?: string;
  run: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const items = useMemo<PaletteItem[]>(
    () => [
      {
        id: "nav-home",
        label: "Go to Home",
        section: "Navigate",
        shortcut: "G H",
        keywords: "home landing",
        run: () => router.push("/"),
      },
      {
        id: "nav-career",
        label: "Go to Career",
        section: "Navigate",
        shortcut: "G C",
        keywords: "projects portfolio",
        run: () => router.push("/career"),
      },
      {
        id: "nav-creative",
        label: "Go to Creative",
        section: "Navigate",
        shortcut: "G V",
        keywords: "video storytelling",
        run: () => router.push("/creative"),
      },
      {
        id: "nav-about",
        label: "Go to About",
        section: "Navigate",
        shortcut: "G A",
        keywords: "about bio",
        run: () => router.push("/about"),
      },
      {
        id: "nav-resume",
        label: "Go to Resume",
        section: "Navigate",
        shortcut: "G R",
        keywords: "cv resume",
        run: () => router.push("/resume"),
      },
      {
        id: "quick-copy-email",
        label: "Copy email address",
        section: "Quick Actions",
        shortcut: "C E",
        keywords: "contact mail",
        run: async () => {
          try {
            await navigator.clipboard.writeText("georgi@tsvetanski.com");
            toast.success("Email copied to clipboard");
          } catch {
            toast.error("Could not copy email");
          }
        },
      },
      {
        id: "quick-open-email",
        label: "Open email app",
        section: "Quick Actions",
        shortcut: "O E",
        keywords: "mailto contact",
        run: () => {
          window.location.href = "mailto:georgi@tsvetanski.com";
        },
      },
    ],
    [router],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const runCommand = (run: () => void) => {
    setOpen(false);
    run();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)]"
        aria-label="Open command palette"
      >
        <span>Command</span>
        <span className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] tracking-[0.1em] text-[var(--muted)]">
          Ctrl/⌘ K
        </span>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-[18%] z-[80] w-[92vw] max-w-xl -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-0 shadow-[var(--shadow-strong)] outline-none">
            <Dialog.Title className="sr-only">Command palette</Dialog.Title>

            <Command className="w-full">
              <Command.Input
                placeholder="Type a command or search a page..."
                className="h-12 w-full border-b border-[var(--border)] bg-transparent px-4 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
              />
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-sm text-[var(--muted)]">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigate" className="mb-2">
                  {items
                    .filter((item) => item.section === "Navigate")
                    .map((item) => (
                      <Command.Item
                        key={item.id}
                        value={`${item.label} ${item.keywords ?? ""}`}
                        onSelect={() => runCommand(item.run)}
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-[var(--foreground)] data-[selected=true]:bg-[var(--surface-muted)]"
                      >
                        <span>{item.label}</span>
                        {item.shortcut ? (
                          <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                            {item.shortcut}
                          </span>
                        ) : null}
                      </Command.Item>
                    ))}
                </Command.Group>

                <Command.Group heading="Quick Actions">
                  {items
                    .filter((item) => item.section === "Quick Actions")
                    .map((item) => (
                      <Command.Item
                        key={item.id}
                        value={`${item.label} ${item.keywords ?? ""}`}
                        onSelect={() => runCommand(item.run)}
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-[var(--foreground)] data-[selected=true]:bg-[var(--surface-muted)]"
                      >
                        <span>{item.label}</span>
                        {item.shortcut ? (
                          <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                            {item.shortcut}
                          </span>
                        ) : null}
                      </Command.Item>
                    ))}
                </Command.Group>
              </Command.List>
            </Command>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
