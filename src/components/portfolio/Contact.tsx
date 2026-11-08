import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import background from "@/assets/electric-arc-background.jpg.asset.json";
import backgroundLight from "@/assets/electric-arc-background-light.jpg.asset.json";
import { contact, navLinks, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SparkLine } from "./shared";
import { ContactForm } from "./ContactForm";

const channels = [
  { key: "email", label: "Email", icon: Mail, value: contact.email, href: contact.email ? `mailto:${contact.email}` : "" },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, value: contact.linkedinDisplay || contact.linkedin, href: contact.linkedin },
  { key: "github", label: "GitHub", icon: Github, value: contact.github, href: contact.github },
];

function Channel({ c }: { c: (typeof channels)[number] }) {
  const Icon = c.icon;
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-electric/30 bg-electric/10 text-electric transition-colors duration-300 group-hover:text-cyan">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {c.label}
        </span>
        <span
          className={cn(
            "mt-1 block truncate font-display text-base",
            c.value ? "text-foreground" : "italic text-muted-foreground",
          )}
        >
          {c.value || `Add your ${c.label}`}
        </span>
      </span>
      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
    </>
  );
  const cls =
    "group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-4 transition-all duration-300 hover:border-electric/60 hover:bg-electric/5 hover:shadow-[var(--shadow-glow)]";
  return c.href ? (
    <a href={c.href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cn(cls, "cursor-default")} title="Coming soon">
      {inner}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-28 sm:py-36">
      {/* Reuse the electric arc artwork, mirrored, to bookend the page */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={backgroundLight.url}
          alt=""
          loading="lazy"
          className="h-full w-full -scale-x-100 object-cover object-[70%_bottom] opacity-80 dark:hidden"
        />
        <img
          src={background.url}
          alt=""
          loading="lazy"
          className="hidden h-full w-full -scale-x-100 object-cover object-[70%_bottom] opacity-70 dark:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background/40" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-6 shadow-[var(--shadow-glow)] sm:p-12">
            <div className="electric-arc -bottom-[420px] left-1/2 h-[480px] w-[1000px] -translate-x-1/2 opacity-80" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
              <div>
                <div className="mb-5 flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.25em] text-electric">
                  <span className="text-muted-foreground">07</span>
                  <span className="draw-line h-px bg-gradient-to-r from-electric to-transparent" />
                  Contact
                </div>
                <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                  {contact.heading}
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{contact.text}</p>
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                  >
                    Say hello <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <div className="mt-8 flex flex-col gap-3">
                  {channels.map((c) => (
                    <Channel key={c.key} c={c} />
                  ))}
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-background">
      <SparkLine />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{profile.tagline}</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          {channels.map((c) => {
            const Icon = c.icon;
            const cls =
              "grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-electric/60 hover:text-cyan";
            return c.href ? (
              <a key={c.key} href={c.href} target="_blank" rel="noreferrer" aria-label={c.label} className={cls}>
                <Icon className="h-4 w-4" />
              </a>
            ) : (
              <span key={c.key} aria-label={`${c.label} (coming soon)`} title="Coming soon" className={cn(cls, "opacity-60")}>
                <Icon className="h-4 w-4" />
              </span>
            );
          })}
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
