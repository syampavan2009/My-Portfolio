import { ArrowRight, MapPin, UserRound } from "lucide-react";
import background from "@/assets/electric-arc-background.jpg.asset.json";
import backgroundLight from "@/assets/electric-arc-background-light.jpg.asset.json";
import { profile } from "@/content/portfolio";
import { ElectricArcs, RotatingWords, Sparks, Tilt, WordReveal } from "./Motion";

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const nameWords = profile.name.split(" ").length;
  const afterName = 350 + nameWords * 110;

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Electric arc background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={backgroundLight.url}
          alt=""
          className="h-full w-full animate-in fade-in zoom-in-105 object-cover object-[70%_center] duration-[2000ms] dark:hidden"
          fetchPriority="high"
        />
        <img
          src={background.url}
          alt=""
          className="hidden h-full w-full animate-in fade-in zoom-in-105 object-cover object-[70%_center] duration-[2000ms] dark:block"
        />
        <ElectricArcs />
        <Sparks />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="animate-glow-pulse absolute bottom-[10%] right-[15%] h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10 lg:pt-28">
        {/* Text */}
        <div>
          <div
            className="animate-rise-in mb-8 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
            style={d(100)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {profile.status}
          </div>

          <p className="animate-rise-in font-display text-lg text-muted-foreground" style={d(220)}>
            {profile.greeting}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            <WordReveal
              text={profile.name}
              startDelay={350}
              wordClassName={(i, total) => (i > 0 ? "text-electric-gradient" : undefined)}
            />
          </h1>

          <div className="animate-rise-in mt-6 flex items-center gap-4" style={d(afterName)}>
            <span className="h-px w-12 bg-gradient-to-r from-electric to-cyan" />
            <p className="font-display text-base font-medium tracking-wide text-cyan sm:text-lg">
              {profile.title}
            </p>
          </div>

          <p
            className="animate-rise-in mt-4 font-display text-base text-muted-foreground sm:text-lg"
            style={d(afterName + 120)}
          >
            I work with <RotatingWords words={profile.rotatingWords} />
          </p>

          <p
            className="animate-rise-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={d(afterName + 240)}
          >
            {profile.intro}
          </p>

          <div
            className="animate-rise-in mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={d(afterName + 380)}
          >
            <a
              href="#projects"
              className="shine group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile visual */}
        <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-90 slide-in-from-right-8 duration-1000 lg:max-w-none">
          <div className="animate-float-slow relative">
            <div className="animate-glow-pulse absolute -inset-6 rounded-[2rem] bg-electric/20 blur-3xl" />
            <Tilt>
              <div className="glass relative overflow-hidden rounded-[1.75rem] p-3 shadow-[var(--shadow-glow)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-card to-background">
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                      <div className="relative grid h-24 w-24 place-items-center">
                        {/* orbiting rings */}
                        <span className="animate-orbit absolute -inset-5 rounded-full border border-dashed border-electric/40">
                          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_10px_var(--cyan)]" />
                        </span>
                        <span className="animate-orbit absolute -inset-10 rounded-full border border-electric/15 [animation-direction:reverse] [animation-duration:22s]">
                          <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
                        </span>
                        <span className="grid h-24 w-24 place-items-center rounded-full border border-electric/40 bg-electric/10">
                          <UserRound className="h-10 w-10 text-electric" strokeWidth={1.4} />
                        </span>
                      </div>
                      <p className="mt-6 font-display text-sm font-medium text-foreground">
                        Your photo goes here
                      </p>
                      <p className="max-w-[14rem] text-xs text-muted-foreground">
                        A clear, well-lit portrait works best
                      </p>
                    </div>
                  )}
                  <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
                  <div className="animate-glow-pulse electric-arc -bottom-[260px] left-1/2 h-[340px] w-[520px] -translate-x-1/2" />
                  <span className="animate-spark absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
                </div>

                <div className="mt-3 flex items-center justify-between rounded-xl border border-border/80 bg-background/60 px-4 py-3">
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      {profile.shortName}
                    </p>
                    <p className="text-xs text-muted-foreground">{profile.title}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-electric" />
                    {profile.location}
                  </span>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[float-slow_2s_ease-in-out_infinite] bg-gradient-to-b from-electric to-cyan" />
        </span>
      </a>
    </section>
  );
}
