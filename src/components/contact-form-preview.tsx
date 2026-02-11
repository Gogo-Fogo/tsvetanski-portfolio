"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ContactFormValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type ContactFormPreviewProps = {
  compact?: boolean;
};

export default function ContactFormPreview({ compact = false }: ContactFormPreviewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      projectType: "xr-simulation",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);

      const subject = `[Portfolio Inquiry] ${values.projectType}`;
      const body = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Project Type: ${values.projectType}`,
        "",
        "Message:",
        values.message,
      ].join("\n");

      const mailtoUrl = `mailto:georgi@tsvetanski.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      toast.success("Draft opened in your email app", {
        description: "Review and send when ready.",
      });

      reset({
        name: values.name,
        email: values.email,
        projectType: values.projectType,
        message: values.message,
      });
    } catch {
      toast.error("Could not open email app", {
        description: "You can still copy the email from the Connect section.",
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className={`${compact ? "mt-0" : "mt-6"} grid gap-4`} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-left">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Name</span>
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--foreground)]"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name looks too short" },
            })}
          />
          {errors.name ? <span className="text-xs text-red-500">{errors.name.message}</span> : null}
        </label>

        <label className="grid gap-1.5 text-left">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Email</span>
          <input
            type="email"
            placeholder="you@email.com"
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--foreground)]"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email ? <span className="text-xs text-red-500">{errors.email.message}</span> : null}
        </label>
      </div>

      <label className="grid gap-1.5 text-left">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Project Type</span>
        <select
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--foreground)]"
          {...register("projectType")}
        >
          <option value="xr-simulation">XR / Simulation</option>
          <option value="gameplay-prototyping">Gameplay Prototyping</option>
          <option value="creative-media">Creative / Media Collaboration</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="grid gap-1.5 text-left">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Message</span>
        <textarea
          rows={4}
          placeholder="Tell me about your goals, timeline, and scope..."
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--foreground)]"
          {...register("message", {
            required: "Please add a short message",
            minLength: { value: 12, message: "A little more detail helps" },
          })}
        />
        {errors.message ? <span className="text-xs text-red-500">{errors.message.message}</span> : null}
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Opening..." : "Send Inquiry"}
        </button>
        <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Opens Email Draft</span>
      </div>
    </form>
  );
}
