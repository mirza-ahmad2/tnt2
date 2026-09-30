import { useEffect, useRef, useState } from "react";
import { PROCESS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="relative h-px w-full bg-hairline">
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-y-0 left-0 origin-left bg-signal transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)]",
            inView ? "scale-x-100" : "scale-x-0",
          )}
          style={{ width: "100%" }}
        />
      </div>

      <ol className="grid md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => (
          <li
            key={p.index}
            className={cn(
              "group relative border-b border-hairline py-9 transition-colors duration-500 lg:border-b-0 lg:pr-8",
              i !== 0 && "lg:border-l lg:border-hairline lg:pl-8",
            )}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(18px)",
              transition: `opacity 600ms ease ${200 + i * 140}ms, transform 600ms cubic-bezier(.22,1,.36,1) ${200 + i * 140}ms`,
            }}
          >
            <span
              aria-hidden="true"
              className="absolute -top-[3px] left-0 block size-[5px] bg-signal"
            />
            <span className="font-mono text-[11px] tracking-[0.18em] text-signal">
              {p.index}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink uppercase md:text-2xl">
              {p.title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
