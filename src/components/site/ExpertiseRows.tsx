import { useState } from "react";
import { EXPERTISE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

export function ExpertiseRows() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <ul className="border-t border-hairline">
          {EXPERTISE.map((e, i) => (
            <li key={e.index}>
              <Reveal delay={i * 70}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={active === i}
                  aria-label={`${e.title.join(" ")} expertise`}
                  className="group relative block w-full cursor-pointer border-b border-hairline py-8 text-left outline-none transition-colors focus-visible:bg-soft/60 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal md:py-10"
                >
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 left-0 w-px bg-signal transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                      active === i ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                  <div className="flex items-start gap-5 pl-4 md:gap-8 md:pl-7">
                    <span className="mt-2 font-mono text-[11px] tracking-[0.18em] text-signal">
                      {e.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={cn(
                          "display-md transition-colors duration-300",
                          active === i ? "text-ink" : "text-ink/45",
                        )}
                      >
                        {e.title[0]}
                        <br />
                        {e.title[1]}
                      </h3>
                      <div
                        className={cn(
                          "overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                          active === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <p className="micro-label mt-5 block">{e.descriptor}</p>
                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                          {e.body}
                        </p>
                      </div>
                    </div>
                    <img
                      src={e.image}
                      alt={`${e.title.join(" ")} search context`}
                      loading="lazy"
                      decoding="async"
                      width={96}
                      height={64}
                      className="h-16 w-24 shrink-0 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 lg:hidden"
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-ink">
          {EXPERTISE.map((e, i) => (
            <img
              key={e.index}
              src={e.image}
              alt={`${e.title.join(" ")} search context`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              width={800}
              height={1000}
              className={cn(
                "absolute inset-0 size-full object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
                active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
              )}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
            <div className="h-px w-full origin-left bg-signal" aria-hidden="true" />
            <p className="micro-label mt-4 text-white/70">
              {EXPERTISE[active]?.descriptor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
