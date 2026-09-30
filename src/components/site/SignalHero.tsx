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
      left: rand() * 82,
      width: 3 + rand() * 16,
      opacity: 0.06 + rand() * 0.2,
    });
  }
  return out;
}

export function SignalHero() {
  const lines = useMemo(() => noiseLines(90), []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-background pt-24 pb-10 md:pt-28 md:pb-14">
      {/* technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "clamp(70px, 8vw, 120px) 100%",
          opacity: 0.6,
        }}
      />

      {/* noise field resolving into signal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block"
        style={{ animation: "noise-settle 1600ms ease-out 200ms both" }}
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
              animation: `drift ${5 + (i % 7)}s ease-in-out ${i % 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="container-ttn relative flex flex-1 flex-col justify-center py-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div style={{ animation: "resolve-in 600ms cubic-bezier(.22,1,.36,1) both" }}>
              <Micro>AI · Machine Learning · Frontier Research</Micro>
            </div>

            <h1 className="display-xl mt-6 text-ink md:mt-8">
              <span
                className="block"
                style={{
                  animation: "resolve-in 750ms cubic-bezier(.22,1,.36,1) 120ms both",
                }}
              >
                Through
              </span>
              <span
                className="block"
                style={{
                  animation: "resolve-in 750ms cubic-bezier(.22,1,.36,1) 220ms both",
                }}
              >
                the noise.
              </span>
              <span
                className="mt-2 block text-cool"
                style={{
                  animation: "resolve-in 750ms cubic-bezier(.22,1,.36,1) 340ms both",
                }}
              >
                To the
              </span>
              <span
                className="block text-ink"
                style={{
                  animation: "resolve-in 750ms cubic-bezier(.22,1,.36,1) 440ms both",
                }}
              >
                right hire.
              </span>
            </h1>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-full origin-left bg-signal md:mt-10"
              style={{
                animation: "signal-draw 1100ms cubic-bezier(.22,1,.36,1) 620ms both",
              }}
            />

            <div className="mt-7 flex flex-col gap-6 md:mt-9 md:flex-row md:items-end md:justify-between">
              <p
                className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
                style={{
                  animation: "resolve-in 700ms cubic-bezier(.22,1,.36,1) 700ms both",
                }}
              >
                Specialist executive search for startups and scale-ups hiring across AI,
                machine learning and frontier research.
              </p>
              <div
                className="flex flex-wrap gap-3"
                style={{
                  animation: "resolve-in 700ms cubic-bezier(.22,1,.36,1) 800ms both",
                }}
              >
                <ActionLink to="/contact">Start a Search</ActionLink>
                <ActionLink to="/how-i-work" variant="outline">
                  See how I work
                </ActionLink>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 grid divide-hairline border-y border-hairline sm:mt-14 sm:grid-cols-3 sm:divide-x md:mt-16"
          style={{ animation: "resolve-in 700ms cubic-bezier(.22,1,.36,1) 900ms both" }}
        >
          {TRUST.map((t, i) => (
            <div
              key={t.label}
              className="group flex items-baseline gap-4 border-b border-hairline px-0 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0"
            >
              <span className="font-mono text-[10px] text-signal">0{i + 1}</span>
              <span className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {t.value}
              </span>
              <span className="micro-label leading-snug">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
