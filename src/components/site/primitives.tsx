import { Link } from "@tanstack/react-router";
import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number | undefined;
  className?: string | undefined;
  as?: "div" | "section" | "li" | "article" | "span" | undefined;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal-init", shown && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------- Label ---------------------------------- */

export function Micro({
  children,
  className,
  withDot = true,
}: {
  children: ReactNode;
  className?: string | undefined;
  withDot?: boolean | undefined;
}) {
  return (
    <span className={cn("micro-label inline-flex items-center gap-2", className)}>
      {withDot && (
        <span className="inline-block size-[5px] shrink-0 bg-signal" aria-hidden="true" />
      )}
      {children}
    </span>
  );
}

/* --------------------------------- Buttons --------------------------------- */

const baseBtn =
  "group relative inline-flex min-h-11 items-center justify-center gap-3 overflow-hidden px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-[colors,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 active:scale-[0.985]";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn(
        "size-3.5 transition-transform duration-300 group-hover:translate-x-1.5",
        className,
      )}
    >
      <path
        d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

type BtnProps = {
  to?: string | undefined;
  href?: string | undefined;
  children: ReactNode;
  variant?: "signal" | "outline" | "ink" | undefined;
  className?: string | undefined;
  search?: Record<string, string> | undefined;
};

function btnClasses(variant: BtnProps["variant"]) {
  if (variant === "outline")
    return cn(
      baseBtn,
      "border border-ink/20 text-ink hover:text-primary-foreground",
      "before:absolute before:inset-0 before:-z-0 before:origin-left before:scale-x-0 before:bg-signal before:transition-transform before:duration-400 before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100 hover:border-signal",
    );
  if (variant === "ink")
    return cn(
      baseBtn,
      "border border-white/20 text-white",
      "before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-signal before:transition-transform before:duration-400 before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100 hover:border-signal",
    );
  return cn(
    baseBtn,
    "bg-signal text-primary-foreground hover:shadow-[0_12px_28px_-14px_rgba(37,99,235,0.65)]",
    "before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-ink before:transition-transform before:duration-400 before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100",
  );
}

export function ActionLink({
  to,
  href,
  children,
  variant = "signal",
  className,
  search,
}: BtnProps) {
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <Arrow className="relative z-10" />
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(btnClasses(variant), className)}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link
      to={to ?? "/"}
      search={search as never}
      className={cn(btnClasses(variant), className)}
    >
      {inner}
    </Link>
  );
}

export function SubmitButton({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button {...rest} className={cn(btnClasses("signal"), className)}>
      <span className="relative z-10">{children}</span>
      <Arrow className="relative z-10" />
    </button>
  );
}

/* ------------------------------ Section header ----------------------------- */

export function SectionHeader({
  label,
  title,
  body,
  align = "left",
  className,
}: {
  label: string;
  title: ReactNode;
  body?: ReactNode | undefined;
  align?: "left" | "split" | undefined;
  className?: string | undefined;
}) {
  if (align === "split") {
    return (
      <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-16", className)}>
        <div className="lg:col-span-5">
          <Reveal>
            <Micro>{label}</Micro>
            <h2 className="display-lg mt-6 text-ink">{title}</h2>
          </Reveal>
        </div>
        {body && (
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <Reveal delay={90}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {body}
              </p>
            </Reveal>
          </div>
        )}
      </div>
    );
  }
  return (
    <Reveal className={className}>
      <Micro>{label}</Micro>
      <h2 className="display-lg mt-6 max-w-4xl text-ink">{title}</h2>
      {body && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {body}
        </p>
      )}
    </Reveal>
  );
}

/* --------------------------------- PageHero -------------------------------- */

export function PageHero({
  label,
  title,
  body,
  meta,
}: {
  label: string;
  title: ReactNode;
  body?: ReactNode | undefined;
  meta?: string[] | undefined;
}) {
  return (
    <header className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-hairline bg-background pt-24 pb-12 md:pt-28 md:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "clamp(70px, 8vw, 120px) 100%",
        }}
      />
      <div className="container-ttn relative flex flex-1 flex-col justify-center py-8">
        <Reveal>
          <Micro>{label}</Micro>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl mt-6 max-w-5xl text-ink md:mt-7">{title}</h1>
        </Reveal>
        <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-12">
          {body && (
            <Reveal delay={150} className="lg:col-span-6">
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {body}
              </p>
            </Reveal>
          )}
          {meta && (
            <Reveal delay={220} className="lg:col-span-4 lg:col-start-9">
              <ul className="space-y-3 border-t border-hairline pt-5">
                {meta.map((m) => (
                  <li key={m} className="micro-label flex items-center gap-3 text-ink/70">
                    <span className="h-px w-6 bg-signal" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-2/3 origin-left bg-signal"
        style={{ animation: "signal-draw 1100ms cubic-bezier(.22,1,.36,1) 200ms both" }}
      />
    </header>
  );
}
