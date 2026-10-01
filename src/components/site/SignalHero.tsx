import { useMemo } from "react";
import { ActionLink, Micro } from "./primitives";
import { TRUST } from "@/lib/site";

/** Deterministic pseudo-random so SSR and client markup match. */
function noiseLines(count: number) {
  const out: { top: number; left: number; width: number; opacity: number }[] = [];
  let seed = 8675309;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  for (let i = 0; i < count; i++) {
    out.push({
      top: rand() * 100,
      left: rand() * 70,
      width: 4 + rand() * 18,
      opacity: 0.05 + rand() * 0.16,
    });
  }
  return out;
}

export function SignalHero() {
  const lines = useMemo(() => noiseLines(64), []);

  return (
    <section
      className="hero-screen relative flex flex-col overflow-x-clip bg-background"
      aria-label="Introduction"
    >
      {/* technical grid — behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "clamp(70px, 8vw, 120px) 100%",
          opacity: 0.55,
        }}
      />

      {/* Decorative noise — far right only, never overlays headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[28%] xl:block"
      >
        {lines.map((l, i) => (
          <span
            key={i}
            className="absolute h-px bg-ink"
            style={{
              top: `${l.top}%`,
              left: `${l.left}%`,
              width: `${l.width}%`,
              opacity: l.opacity,
            }}
          />
        ))}
      </div>

      <div className="container-ttn relative z-10 flex flex-1 flex-col pt-[5.5rem] md:pt-28">
        <div className="flex flex-1 flex-col justify-center py-8 md:py-10">
          <div className="max-w-4xl">
            <div className="hero-fade">
              <Micro>AI · Machine Learning · Frontier Research</Micro>
            </div>

            <h1 className="mt-5 text-[clamp(2.35rem,6.8vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-ink uppercase md:mt-6">
              <span className="hero-fade block" style={{ animationDelay: "80ms" }}>
                Through
              </span>
              <span className="hero-fade block" style={{ animationDelay: "140ms" }}>
                the noise.
              </span>
              <span
                className="hero-fade mt-1 block text-cool"
                style={{ animationDelay: "200ms" }}
              >
                To the
              </span>
              <span className="hero-fade block text-ink" style={{ animationDelay: "260ms" }}>
                right hire.
              </span>
            </h1>

            <div
              aria-hidden="true"
              className="mt-6 h-px w-full max-w-3xl origin-left bg-signal md:mt-8"
              style={{ animation: "signal-draw 900ms cubic-bezier(.22,1,.36,1) 320ms both" }}
            />

            <div className="hero-fade mt-6 flex flex-col gap-5 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8" style={{ animationDelay: "360ms" }}>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                Specialist executive search for startups and scale-ups hiring across AI,
                machine learning and frontier research.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <ActionLink to="/contact">Start a Search</ActionLink>
                <ActionLink to="/how-i-work" variant="outline">
                  See how I work
                </ActionLink>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-fade mt-auto w-full pb-6 md:pb-8" style={{ animationDelay: "420ms" }}>
          <div className="grid divide-hairline border-y border-hairline sm:grid-cols-3 sm:divide-x">
            {TRUST.map((t, i) => (
              <div
                key={t.label}
                className="group flex items-baseline gap-3 border-b border-hairline px-0 py-4 last:border-b-0 sm:border-b-0 sm:gap-4 sm:px-6 sm:py-5 sm:first:pl-0"
              >
                <span className="font-mono text-[10px] text-signal">0{i + 1}</span>
                <span className="text-xl font-semibold tracking-tight text-ink md:text-2xl lg:text-3xl">
                  {t.value}
                </span>
                <span className="micro-label leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
