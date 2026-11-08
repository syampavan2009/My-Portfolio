import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const stripRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Keep the active topic visible in the phone strip.
  useEffect(() => {
    const strip = stripRef.current;
    const link = strip?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!strip || !link || strip.scrollWidth <= strip.clientWidth) return;
    const left = link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2;
    strip.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 animate-in fade-in slide-in-from-top-4 transition-all duration-700",
        scrolled ? "border-b border-border/60 bg-background/75 backdrop-blur-xl" : "bg-background/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-20 sm:px-8">
        <a href="#home" className="group flex shrink-0 items-center gap-3" aria-label="Back to top">
          <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-electric/40 bg-card font-display text-sm font-bold text-foreground shadow-[var(--shadow-glow)]">
            {profile.initials}
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-foreground md:hidden xl:block">
            {profile.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-2.5 py-2 text-sm transition-colors duration-300 lg:px-3.5",
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-2.5 -bottom-0.5 h-px bg-gradient-to-r from-electric to-cyan transition-opacity duration-300 lg:inset-x-3.5",
                    active === l.id ? "opacity-100" : "opacity-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full border border-electric/40 px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-electric hover:bg-electric/10 hover:shadow-[var(--shadow-glow)] xl:inline-flex"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Phone: all topics in a swipeable row */}
      <div className="border-t border-border/50 md:hidden">
        <ul
          ref={stripRef}
          className="flex gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map((l) => (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                data-id={l.id}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "block rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300",
                  active === l.id
                    ? "border-electric/50 bg-electric/10 text-foreground shadow-[var(--shadow-glow)]"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
