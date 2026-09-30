import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, logoInk } from "@/lib/site";
import { Arrow } from "./primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
          scrolled
            ? "border-b border-hairline bg-background/90 shadow-[0_1px_24px_-12px_rgba(10,16,32,0.4)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "container-ttn flex items-center justify-between transition-all duration-400",
            scrolled ? "h-16" : "h-20 md:h-24",
          )}
        >
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
            aria-label="TTN Talent home"
          >
            <img
              src={logoInk}
              alt="TTN Talent"
              width={120}
              height={105}
              className={cn(
                "w-auto object-contain transition-all duration-400",
                scrolled ? "h-10" : "h-11 md:h-12",
              )}
            />
            <span className="hidden h-6 w-px bg-hairline sm:block" aria-hidden="true" />
            <span className="micro-label hidden sm:block">Specialist AI Search</span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/75 transition-colors hover:text-ink focus-visible:outline-none focus-visible:text-ink"
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-signal transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="group relative inline-flex min-h-11 items-center gap-3 overflow-hidden bg-signal px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-shadow duration-300 hover:shadow-[0_10px_28px_-14px_rgba(37,99,235,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-ink before:transition-transform before:duration-400 before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100"
            >
              <span className="relative z-10">Start a Search</span>
              <Arrow className="relative z-10" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 flex-col items-center justify-center gap-1.5 border border-hairline transition-colors hover:border-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 lg:hidden"
          >
            <span
              className={cn(
                "h-px w-5 bg-ink transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-ink transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </nav>
      </div>

      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
        className={cn(
          "overflow-hidden border-b border-hairline bg-background transition-[max-height,opacity] duration-400 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container-ttn flex flex-col py-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? "page" : undefined}
              className="flex min-h-12 items-center justify-between border-b border-hairline py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
            >
              {l.label}
              <Arrow />
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-5 flex min-h-12 items-center justify-center gap-3 bg-signal px-5 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Start a Search
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
