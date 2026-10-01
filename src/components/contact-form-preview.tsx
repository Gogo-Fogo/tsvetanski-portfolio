"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EMAIL = "georgi@tsvetanski.com";

type ContactFormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const fieldClass =
  "min-h-11 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base text-[var(--foreground)] transition-colors focus:border-[var(--brand-cyan)] aria-[invalid=true]:border-red-500";
const labelClass = "text-sm font-medium text-[var(--foreground)]";
const errorClass = "text-sm text-red-600 dark:text-red-400";

/** Builds an email draft in the visitor's mail app; nothing is sent from the site. */
export default function ContactFormPreview() {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", topic: "XR + Simulation", message: "" },
  });

  const onSubmit = handleSubmit((values) => {
    const subject = `[Portfolio] ${values.topic}`;
    const body = [`Name: ${values.name}`, `Email: ${values.email}`, "", values.message].join("\n");
    try {
      window.location.assign(`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      toast.success("Your email app should open with the draft", {
        description: `If nothing opened, write to ${EMAIL}.`,
      });
    } catch {
      toast.error("Couldn't open your email app", { description: `Write to ${EMAIL} instead.` });
    }
  });

  const describedBy = (field: keyof ContactFormValues) => (errors[field] ? `${id}-${field}-error` : undefined);

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className={labelClass}>Name</span>
          <input
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            {...register("name", { required: "Add your name." })}
          />
          {errors.name ? <span id={`${id}-name-error`} className={errorClass}>{errors.name.message}</span> : null}
        </label>

        <label className="grid gap-1.5">
          <span className={labelClass}>Email</span>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            {...register("email", {
              required: "Add your email so I can reply.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Check the email address, e.g. name@company.com." },
            })}
          />
          {errors.email ? <span id={`${id}-email-error`} className={errorClass}>{errors.email.message}</span> : null}
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className={labelClass}>Topic</span>
        <select className={fieldClass} {...register("topic")}>
          <option>XR + Simulation</option>
          <option>Gameplay Systems</option>
          <option>Tools & AI</option>
          <option>Creative</option>
          <option>A role or interview</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className={labelClass}>Message</span>
        <textarea
          rows={4}
          className={fieldClass}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          {...register("message", { required: "Add a short message." })}
        />
        {errors.message ? <span id={`${id}-message-error`} className={errorClass}>{errors.message.message}</span> : null}
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] bg-[var(--brand-orange)] px-5 text-sm font-semibold text-[var(--brand-on-orange)] transition-shadow hover:shadow-[0_0_0_4px_color-mix(in_srgb,var(--brand-orange)_25%,transparent)]"
        >
          Open email draft
        </button>
        <span className="text-sm text-[var(--muted)]">Opens in your email app.</span>
      </div>
    </form>
  );
}
