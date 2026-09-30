import { useEffect, useId, useState } from "react";
import { ROLE_CHIPS, EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SubmitButton } from "./primitives";

const fieldClass =
  "w-full min-h-11 border-b border-hairline bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-cool focus:border-signal focus-visible:border-signal";

export function ContactForm({ initialRole }: { initialRole?: string | undefined }) {
  const [role, setRole] = useState(initialRole ?? "");
  const [sent, setSent] = useState(false);
  const formId = useId();
  const rolesHintId = `${formId}-roles-hint`;
  const statusId = `${formId}-status`;

  useEffect(() => {
    if (initialRole) setRole(initialRole);
  }, [initialRole]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("name")}`,
      `Company: ${fd.get("company")}`,
      `Work email: ${fd.get("email")}`,
      `Role(s) hiring: ${fd.get("roles")}`,
      `Timeline: ${fd.get("timeline")}`,
      "",
      `${fd.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New search enquiry — ${fd.get("company") || fd.get("name") || "TTN"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-9" noValidate={false} aria-describedby={statusId}>
      <div className="grid gap-9 sm:grid-cols-2">
        <label className="block">
          <span className="micro-label">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={cn(fieldClass, "mt-2")}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="micro-label">Company</span>
          <input
            name="company"
            required
            autoComplete="organization"
            className={cn(fieldClass, "mt-2")}
            placeholder="Company name"
          />
        </label>
      </div>

      <label className="block">
        <span className="micro-label">Work email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={cn(fieldClass, "mt-2")}
          placeholder="you@company.com"
        />
      </label>

      <fieldset>
        <legend className="micro-label">Role(s) you&apos;re hiring</legend>
        <div
          className="mt-3 flex flex-wrap gap-2"
          role="group"
          aria-label="Select a role focus"
        >
          {ROLE_CHIPS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setRole(c)}
              aria-pressed={role === c}
              className={cn(
                "min-h-10 border px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2",
                role === c
                  ? "border-signal bg-signal text-primary-foreground shadow-[0_8px_20px_-12px_rgba(37,99,235,0.65)]"
                  : "border-hairline text-ink/70 hover:-translate-y-0.5 hover:border-signal hover:text-signal",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="mt-4 block">
          <span className="sr-only">Role details</span>
          <input
            name="roles"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            aria-describedby={rolesHintId}
            className={fieldClass}
            placeholder="e.g. Senior ML Engineer, Head of Research"
          />
        </label>
        <p id={rolesHintId} className="sr-only">
          Choose a chip above or type the role you are hiring for.
        </p>
      </fieldset>

      <label className="block">
        <span className="micro-label">Hiring timeline</span>
        <select
          name="timeline"
          className={cn(fieldClass, "mt-2")}
          defaultValue="Next 1–3 months"
          aria-label="Hiring timeline"
        >
          <option>Immediately</option>
          <option>Next 1–3 months</option>
          <option>Next 3–6 months</option>
          <option>Exploratory</option>
        </select>
      </label>

      <label className="block">
        <span className="micro-label">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className={cn(fieldClass, "mt-2 resize-y min-h-[7rem]")}
          placeholder="What are you building, and who do you need?"
        />
      </label>

      <div className="flex flex-wrap items-center gap-5">
        <SubmitButton type="submit">Start a Search</SubmitButton>
        <p id={statusId} className="micro-label text-signal" aria-live="polite">
          {sent ? `Opening your email client — or write to ${EMAIL}` : ""}
        </p>
      </div>
    </form>
  );
}
