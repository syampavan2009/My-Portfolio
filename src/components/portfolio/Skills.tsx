import { Code2, Layers, Wrench } from "lucide-react";
import { skills } from "@/content/portfolio";
import { Reveal, SectionHeading } from "./shared";

const icons = [Code2, Layers, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="Tools and languages I work with."
          description="A focused toolkit I use and keep sharpening."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={group.category} delay={i * 100}>
                <div className="electric-card group h-full rounded-2xl p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-electric/30 bg-electric/10 text-electric">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-display text-sm text-muted-foreground">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{group.category}</h3>
                  <ul className="stagger mt-6 flex flex-wrap gap-2">
                    {group.items.map((s, si) => (
                      <li
                        key={s}
                        style={{ "--i": si } as React.CSSProperties}
                        className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground transition-colors duration-300 hover:border-electric/60 hover:text-cyan"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
