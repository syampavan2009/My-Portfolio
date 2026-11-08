import { Cpu, GraduationCap, Rocket, Sparkles } from "lucide-react";
import { about, profile } from "@/content/portfolio";
import { ElectricBackdrop, Reveal, SectionHeading, SparkLine } from "./shared";

const cardIcons = [GraduationCap, Cpu, Sparkles, Rocket];

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-background py-28 sm:py-36">
      <ElectricBackdrop side="left" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About me" title={about.heading} />

        {/* Top Split: Bio Card with Photo */}
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12 items-stretch">
          <Reveal>
            <div className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 sm:p-10">
              <div className="electric-arc -right-[300px] -top-[330px] h-[420px] w-[620px] rotate-180 opacity-60" />
              
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-display text-xs uppercase tracking-[0.25em] text-electric">
                    Personal Introduction
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    1st-Year B.Tech · Joy University
                  </span>
                </div>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {about.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <SparkLine className="my-6" />
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                  <span className="text-muted-foreground">
                    Based in <span className="font-medium text-foreground">{profile.location}</span>
                  </span>
                  <span className="text-muted-foreground">
                    Status <span className="font-medium text-foreground">{profile.status}</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Profile Photo Presentation */}
          <Reveal delay={100}>
            <div className="electric-card group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl p-6 sm:p-8 text-center">
              <div className="relative mb-6 aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-electric/40 p-1 shadow-[0_0_30px_rgba(96,165,250,0.25)] transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full rounded-xl object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground">
                {profile.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-electric">
                {profile.title}
              </p>
              <p className="mt-2 text-xs text-muted-foreground max-w-xs">
                Specializing in AI · Crafting the future of human & machine synergy
              </p>
            </div>
          </Reveal>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.cards.map((c, i) => {
            const Icon = cardIcons[i % cardIcons.length]!;
            return (
              <Reveal key={c.label} delay={i * 80}>
                <div className="electric-card group flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/60 hover:shadow-[var(--shadow-glow)]">
                  <div>
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-electric/30 bg-electric/10 text-electric transition-colors duration-300 group-hover:bg-cyan/10 group-hover:text-cyan">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                      {c.value}
                    </p>
                  </div>
                  {c.subtitle && (
                    <p className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                      {c.subtitle}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Learning Journey Roadmap */}
        {about.journey && (
          <div className="mt-16">
            <Reveal>
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-cyan">
                    Continuous Skill Evolution
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    My Learning Journey
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 self-start rounded-full border border-electric/30 bg-electric/10 px-3.5 py-1 text-xs font-medium text-electric sm:self-auto">
                  <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
                  Practical Experimentation & Growth
                </span>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {about.journey.map((item, idx) => (
                <Reveal key={item.step} delay={idx * 100}>
                  <div className="electric-card group relative flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/50">
                    <div>
                      <div className="flex items-center justify-between border-b border-border/60 pb-3">
                        <span className="font-display text-2xl font-black text-electric/40 transition-colors duration-300 group-hover:text-cyan">
                          {item.step}
                        </span>
                        <span className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="mt-4 font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-cyan">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
