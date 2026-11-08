import { Award, BookMarked, Flag, Presentation, Trophy } from "lucide-react";
import { achievements, interests } from "@/content/portfolio";
import { Brain, Code, Target, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const achievementIcons = [Award, BookMarked, Presentation, Trophy, Flag];
const interestIcons = [Brain, Code, Target, TrendingUp];

export function Achievements() {
  return (
    <section id="achievements" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Achievements"
          title="Milestones along the way."
          description="Certifications, workshops and wins — added as they happen."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {achievements.map((a, i) => {
            const Icon = achievementIcons[i % achievementIcons.length]!;
            return (
              <Reveal key={`${a.type}-${i}`} delay={i * 80}>
                <div className="electric-card group h-full rounded-2xl p-6">
                  <Icon
                    className="h-6 w-6 text-electric transition-colors duration-300 group-hover:text-cyan"
                    strokeWidth={1.5}
                  />
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {a.type}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Interests() {
  return (
    <section id="interests" className="relative bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Interests & goals"
          title="Where my curiosity is heading."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((it, i) => {
            const Icon = interestIcons[i % interestIcons.length]!;
            return (
              <div
                key={it.kind}
                className="group relative bg-surface p-7 transition-colors duration-500 hover:bg-card"
              >
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-electric to-cyan transition-transform duration-500 group-hover:scale-x-100" />
                <Icon className="h-6 w-6 text-electric" strokeWidth={1.5} />
                <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {it.kind}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
