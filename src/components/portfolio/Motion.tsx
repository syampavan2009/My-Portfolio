import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Thin electric bar at the very top that fills as you scroll. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={ref}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-electric to-cyan shadow-[0_0_12px_var(--electric)]"
      />
    </div>
  );
}

/** Soft electric glow that follows the mouse (desktop only). */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let cx = x;
    let cy = y;
    let raf = 0;
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
        ref.current.style.opacity = "1";
      }
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--electric) 12%, transparent) 0%, transparent 60%)",
      }}
    />
  );
}

/** Splits text into words that rise in one after another. */
export function WordReveal({
  text,
  className,
  wordClassName,
  startDelay = 0,
  step = 110,
}: {
  text: string;
  className?: string;
  wordClassName?: (index: number, total: number) => string | undefined;
  startDelay?: number;
  step?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span
            className={cn("animate-word-in inline-block", wordClassName?.(i, words.length))}
            style={{ animationDelay: `${startDelay + i * step}ms` }}
          >
            {w}
          </span>
          {i < words.length - 1 && "\u00a0"}
        </span>
      ))}
    </span>
  );
}

/** Cycles through words with a rise-in animation. */
export function RotatingWords({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span key={i} className="animate-rise-in inline-block text-electric-gradient font-semibold">
        {words[i]}
      </span>
    </span>
  );
}

/** Tilts its content in 3D toward the cursor. */
export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
    >
      {children}
    </div>
  );
}

// Deterministic "random" positions so server and browser render the same sparks.
// Integer-only PRNG (mulberry32): identical results in every JS engine.
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(42);
const SPARKS = Array.from({ length: 22 }, () => ({
  left: `${(rand() * 100).toFixed(1)}%`,
  top: `${(rand() * 100).toFixed(1)}%`,
  size: `${2 + Math.round(rand() * 3)}px`,
  dur: `${(6 + rand() * 8).toFixed(1)}s`,
  delay: `${(-rand() * 10).toFixed(1)}s`,
  dx: `${Math.round((rand() - 0.5) * 40)}px`,
  dy: `${-Math.round(20 + rand() * 50)}px`,
}));

/** Drifting electric sparks for backgrounds. */
export function Sparks({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {SPARKS.map((s, i) => (
        <span
          key={i}
          className="animate-drift absolute rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              "--dur": s.dur,
              "--dx": s.dx,
              "--dy": s.dy,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/** Electric arcs that draw themselves, with sparks racing along them. */
export function ElectricArcs({ className }: { className?: string }) {
  const paths = [
    "M 620 900 C 860 620, 1120 470, 1440 430",
    "M 760 900 C 980 680, 1180 580, 1440 560",
    "M 980 900 C 1120 780, 1280 720, 1440 700",
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMaxYMax slice"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient id="arc-grad" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="var(--electric)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--electric)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
        <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((d, i) => (
        <g key={d}>
          <path
            id={`arc-${i}`}
            d={d}
            pathLength={1}
            fill="none"
            stroke="url(#arc-grad)"
            strokeWidth={i === 0 ? 2 : 1.25}
            strokeLinecap="round"
            filter="url(#arc-glow)"
            className="animate-draw"
            style={{ animationDelay: `${300 + i * 350}ms`, opacity: 1 - i * 0.25 }}
          />
          <circle r={i === 0 ? 3.5 : 2.5} fill="var(--cyan)" filter="url(#arc-glow)" opacity={0}>
            <animateMotion
              dur={`${4 + i * 1.3}s`}
              begin={`${2.4 + i * 0.6}s`}
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
            >
              <mpath href={`#arc-${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.85;1"
              dur={`${4 + i * 1.3}s`}
              begin={`${2.4 + i * 0.6}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
