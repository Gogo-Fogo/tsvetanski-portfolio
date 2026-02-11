"use client";

import { Mail } from "lucide-react";
import { toast } from "sonner";

type CopyEmailButtonProps = {
  email: string;
};

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard", {
        description: "Want to draft now? Open your default email app.",
        action: {
          label: "Open Email App",
          onClick: () => {
            window.location.href = `mailto:${email}`;
          },
        },
      });
    } catch {
      toast.error("Could not copy email. Please copy it manually.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--foreground)] text-[var(--foreground)] p-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
      aria-label="Copy Email"
      title="Copy Email"
    >
      <Mail className="h-4 w-4" />
    </button>
  );
}
