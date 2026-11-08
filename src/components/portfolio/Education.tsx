import { education } from "@/content/portfolio";
import { Reveal, SectionHeading, useInView } from "./shared";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
  const { ref, visible } = useInView<HTMLOListElement>(0.05);
  return (
    <section id="education" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title="The foundations I'm building on."
          description="My academic path so far — each step shaping how I think, analyze, and build."
        />

        <ol ref={ref} className="relative ml-3 border-l border-border sm:ml-4">
          <span
            aria-hidden
            className="absolute -left-px top-0 w-px bg-gradient-to-b from-cyan via-electric to-transparent transition-[height] duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ height: visible ? "100%" : "0%" }}
          />
          {education.map((e, i) => (
            <li key={i} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span aria-hidden className="absolute -left-[7px] top-7 h-3.5 w-3.5">
                <span
                  className="absolute inset-0 animate-ping rounded-full bg-electric/40"
                  style={{ animationDuration: "2.4s", animationDelay: `${i * 400}ms` }}
                />
                <span className="absolute inset-0 rounded-full border-2 border-electric bg-background shadow-[0_0_14px_var(--electric)]" />
              </span>
              <Reveal delay={i * 100}>
                <article className="electric-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-electric/50">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                          {e.institution}
                        </h3>
                        {e.badge && (
                          <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan">
                            {e.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-display text-base font-medium text-electric sm:text-lg">
                        {e.course}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                      <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                        {e.period}
                      </span>
                      <div className="flex items-center gap-2">
                        {e.grade && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-electric/40 bg-electric/15 px-3 py-1 text-xs font-semibold text-foreground shadow-[0_0_12px_rgba(96,165,250,0.25)]">
                            <Award className="h-3.5 w-3.5 text-cyan" />
                            Score: {e.grade}
                          </span>
                        )}
                        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                          {e.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {e.details}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
