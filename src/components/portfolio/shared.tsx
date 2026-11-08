import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sparks } from "./Motion";

export function useInView<T extends Element>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "mb-5 flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.25em] text-electric",
          align === "center" && "justify-center",
        )}
      >
        <span className="text-muted-foreground">{index}</span>
        <span className="draw-line h-px bg-gradient-to-r from-electric to-transparent" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

/**
 * Electric backdrop that echoes the hero image: glowing arcs, a soft
 * blueprint grid and a slow pulse. `side` picks which corner the arc rises from.
 */
export function ElectricBackdrop({ side = "right" }: { side?: "left" | "right" }) {
  const right = side === "right";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-70" />
      <Sparks className="opacity-60" />
      <div
        className={cn(
          "animate-glow-pulse absolute -bottom-40 h-[480px] w-[620px] rounded-full bg-electric/15 blur-[120px]",
          right ? "-right-40" : "-left-40",
        )}
      />
      <div
        className={cn(
          "electric-arc -bottom-[520px] h-[760px] w-[1100px]",
          right ? "-right-[520px] rotate-[-12deg]" : "-left-[520px] rotate-[12deg]",
        )}
      />
      <div
        className={cn(
          "electric-arc -bottom-[600px] h-[820px] w-[1200px] opacity-40",
          right ? "-right-[460px] rotate-[-18deg]" : "-left-[460px] rotate-[18deg]",
        )}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

/** Thin horizontal line with a spark travelling along it. */
export function SparkLine({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px overflow-hidden bg-border", className)}>
      <span className="animate-spark absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan to-transparent" />
    </div>
  );
}
