import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contact } from "@/content/portfolio";
import { contactMessageSchema } from "@/lib/contact-schema";
import { sendContactMessage } from "@/lib/contact.functions";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "subject" | "message";
const empty = { name: "", email: "", subject: "", message: "", website: "" };

const inputCls =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-electric focus:bg-background focus:shadow-[var(--shadow-glow)]";

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k as Field]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactMessageSchema.safeParse(values);
    if (!parsed.success) {
      const fe: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as Field;
        if (!fe[k]) fe[k] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setStatus("sending");
    setServerError("");
    try {
      await send({ data: parsed.data });
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("error");
      setServerError("Your message couldn't be sent. Please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[22rem] flex-col items-center justify-center rounded-2xl border border-electric/40 bg-background/60 p-8 text-center animate-in fade-in zoom-in-95 duration-500"
      >
        <span className="relative grid h-16 w-16 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan/20" />
          <CheckCircle2 className="relative h-12 w-12 text-cyan" strokeWidth={1.6} />
        </span>
        <p className="mt-5 font-display text-xl font-semibold text-foreground">{contact.form.successTitle}</p>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">{contact.form.successText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-electric/60 hover:bg-electric/10"
        >
          Send another
        </button>
      </div>
    );
  }

  const err = (k: Field) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-2xl border border-border bg-background/50 p-5 backdrop-blur sm:p-6"
      aria-label="Contact form"
    >
      <p className="font-display text-lg font-semibold text-foreground">{contact.form.heading}</p>
      <p className="mt-1 text-sm text-muted-foreground">{contact.form.note}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Name
          </label>
          <input
            id="cf-name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            maxLength={100}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputCls, errors.name && "border-destructive")}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            maxLength={255}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputCls, errors.email && "border-destructive")}
          />
          {err("email")}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-subject" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Subject <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="cf-subject"
          value={values.subject}
          onChange={set("subject")}
          maxLength={150}
          placeholder="Internship, project, collaboration…"
          className={cn(inputCls, errors.subject && "border-destructive")}
        />
        {err("subject")}
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          maxLength={2000}
          placeholder="Tell me a little about the opportunity or idea…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputCls, "resize-none", errors.message && "border-destructive")}
        />
        <div className="flex items-start justify-between gap-3">
          {err("message") ?? <span />}
          <span className="mt-1.5 text-[11px] text-muted-foreground">{values.message.length}/2000</span>
        </div>
      </div>

      {/* Honeypot: hidden from people, bots fill it in */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={set("website")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="shine group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            {contact.form.submit}
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
