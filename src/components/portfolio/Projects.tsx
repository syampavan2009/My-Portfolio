import { ArrowUpRight, Github, Zap } from "lucide-react";
import { projects } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ElectricBackdrop, Reveal, SectionHeading } from "./shared";

function ProjectVisual({
  index,
  image,
  title,
  isSample,
}: {
  index: number;
  image?: string;
  title: string;
  isSample?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface via-background to-surface">
      {image ? (
        <img
          src={image}
          alt={`Preview of ${title}`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] dark:brightness-[0.85]"
        />
      ) : (
        <>
          <div className="grid-lines absolute inset-0 opacity-80" />
          <div className="absolute right-[12%] top-[18%] h-[52%] w-[34%] rounded-lg border border-electric/40 bg-electric/5 shadow-[0_0_24px_-6px_var(--electric)] transition-transform duration-700 group-hover:-translate-y-2" />
          <div className="absolute right-[30%] top-[34%] h-[44%] w-[30%] rounded-lg border border-cyan/30 bg-cyan/5 transition-transform duration-700 group-hover:-translate-y-1" />
        </>
      )}
      {/* electric glow + readability fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-electric/0 transition-all duration-500 group-hover:ring-electric/50 group-hover:shadow-[inset_0_0_40px_-10px_var(--electric)]" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="font-display text-2xl font-bold text-foreground drop-shadow-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        {isSample && (
          <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            Sample preview
          </span>
        )}
      </div>
    </div>
  );
}

function ActionLink({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300";
  if (!href) {
    return (
      <span
        className={cn(base, "cursor-not-allowed border border-dashed border-border text-muted-foreground")}
        title="Link coming soon"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        base,
        primary
          ? "bg-gradient-to-r from-electric to-cyan text-primary-foreground hover:brightness-110"
          : "border border-border text-foreground hover:border-electric/60 hover:bg-electric/10",
      )}
    >
      {children}
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative isolate overflow-hidden bg-surface py-28 sm:py-36">
      <ElectricBackdrop side="right" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="04"
            eyebrow="Projects"
            title={
              <>
                Selected work, <span className="text-electric-gradient">in progress.</span>
              </>
            }
            description="Project slots ready for my real work — each will be filled in as I ship."
          />
        </div>

        <div className={cn("grid gap-6 md:grid-cols-2", projects.length <= 2 ? "max-w-4xl mx-auto" : "lg:grid-cols-3")}>
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 110}>
              <article className="electric-card group flex h-full flex-col rounded-2xl p-4">
                <ProjectVisual
                  index={i}
                  image={p.image}
                  title={p.title}
                  isSample={p.imageIsSample}
                />
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <ul className="mt-4 flex-1 space-y-1.5">
                    {p.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-sm text-foreground/85">
                        <Zap className="h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={2.2} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <ul className="stagger mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t, ti) => (
                      <li
                        key={t}
                        style={{ "--i": ti } as React.CSSProperties}
                        className="rounded-md bg-background/70 px-2.5 py-1 font-display text-xs text-electric"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    <ActionLink href={p.liveUrl} primary>
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </ActionLink>
                    <ActionLink href={p.githubUrl}>
                      <Github className="h-4 w-4" /> GitHub
                    </ActionLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
