"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import styles from "@/components/site/site.module.css";

type CopyEmailButtonProps = {
  email: string;
};

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy the email address:", email);
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={styles.copyButton}>
      {copied ? <Check aria-hidden="true" size={16} strokeWidth={2} /> : <Copy aria-hidden="true" size={16} strokeWidth={1.8} />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
