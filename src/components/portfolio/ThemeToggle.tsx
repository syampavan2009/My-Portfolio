import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const THEME_STORAGE_KEY = "portfolio-theme";

/** Runs before paint (inlined in <head>) so the saved theme never flashes. */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

/**
 * Light/dark switch styled as an "electric" toggle: a day/night track with
 * drifting stars, a knob that morphs sun → moon, and a spark burst. The page
 * switches with a circular reveal that expands from the toggle.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [burst, setBurst] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const apply = (next: boolean) => {
    flushSync(() => setDark(next));
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };

  const toggle = () => {
    const next = !dark;
    setBurst((b) => b + 1);
    const doc = document as ViewTransitionDoc;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduce || !ref.current) {
      apply(next);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = doc.startViewTransition(() => apply(next));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 750,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggle}
      aria-label={dark ? "Switch to light background" : "Switch to dark background"}
      title={dark ? "Light background" : "Dark background"}
      className={cn(
        "group relative h-9 w-[4.25rem] shrink-0 rounded-full border p-1 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        dark
          ? "border-electric/40 bg-[linear-gradient(135deg,var(--background),var(--card))]"
          : "border-electric/30 bg-[linear-gradient(135deg,var(--card),var(--accent))] shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {/* Track: day glow / night stars */}
      <span aria-hidden className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className={cn(
            "absolute -left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-cyan/25 blur-md transition-opacity duration-500",
            dark ? "opacity-0" : "opacity-100",
          )}
        />
        {[
          "left-[18%] top-[30%] h-0.5 w-0.5",
          "left-[34%] top-[62%] h-1 w-1",
          "left-[26%] top-[18%] h-0.5 w-0.5",
        ].map((pos, i) => (
          <span
            key={pos}
            className={cn(
              "absolute rounded-full bg-cyan transition-all duration-700",
              pos,
              dark ? "scale-100 opacity-90" : "scale-0 opacity-0",
            )}
            style={{ transitionDelay: dark ? `${150 + i * 90}ms` : "0ms" }}
          />
        ))}
        <span
          className={cn(
            "electric-arc -bottom-6 left-1/2 h-8 w-16 -translate-x-1/2 transition-opacity duration-500",
            dark ? "opacity-70" : "opacity-30",
          )}
        />
      </span>

      {/* Knob */}
      <span
        aria-hidden
        className={cn(
          "relative z-10 grid h-7 w-7 place-items-center rounded-full shadow-[var(--shadow-glow)] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-105 group-active:scale-95",
          dark
            ? "translate-x-8 bg-card text-cyan"
            : "translate-x-0 bg-gradient-to-br from-electric to-cyan text-primary-foreground",
        )}
      >
        <Sun
          className={cn(
            "absolute h-4 w-4 transition-all duration-500",
            dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
          )}
          strokeWidth={2}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 transition-all duration-500",
            dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
          )}
          strokeWidth={2}
        />
      </span>

      {/* Spark burst on each click */}
      {burst > 0 && (
        <span key={burst} aria-hidden className="pointer-events-none absolute inset-0">
          <span className="animate-toggle-ring absolute inset-0 rounded-full border border-cyan" />
          <Zap
            className={cn(
              "animate-toggle-zap absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 fill-cyan text-cyan",
              dark ? "left-1" : "right-1",
            )}
          />
        </span>
      )}
    </button>
  );
}
