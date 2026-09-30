import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ActionLink, Micro, Reveal, SectionHeader } from "@/components/site/primitives";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { CTASection } from "@/components/site/CTASection";

import { pageSeo } from "@/lib/seo";

const TITLE = "How I Work | Low-Volume AI Executive Search — TTN Talent";
const DESC =
  "Three to five live searches at a time. Every résumé read by a human, direct access to Dan, a focused shortlist and hands-on support through close.";

export const Route = createFileRoute("/how-i-work")({
  head: () =>
    pageSeo({
      title: TITLE,
      description: DESC,
      path: "/how-i-work",
      keywords:
        "low volume recruitment, human review hiring, AI executive search process, specialist search model, TTN Talent",
    }),
  component: HowIWorkPage,
});

const COMPARE = [
  {
    label: "High-volume recruitment",
    metric: "Throughput",
    points: [
      "Many assignments running in parallel",
      "Keyword and algorithmic screening",
      "Candidates handed between account managers",
      "Long lists sent quickly",
    ],
    tone: "muted" as const,
  },
  {
    label: "TTN Talent",
    metric: "Attention · Judgement · Context",
    points: [
      "3–5 live assignments at a time",
      "Every résumé read by a human",
      "Direct access to Dan throughout",
      "A focused shortlist, worked to close",
    ],
    tone: "signal" as const,
  },
];

function HowIWorkPage() {
  return (
    <>
      <PageHero
        label="02 / Search model"
        title={
          <>
            Three to five
            <br />
            searches.
            <br />
            Not thirty.
          </>
        }
        body="The model is the product. A deliberately small number of live assignments is what makes human review, real market mapping and honest advice possible."
        meta={["Low volume", "High attention", "Human throughout"]}
      />

      <section className="border-b border-hairline bg-background py-20 md:py-28">
        <div className="container-ttn">
          <SectionHeader
            label="The process"
            title={
              <>
                Four steps.
                <br />
                No shortcuts.
              </>
            }
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-soft py-20 md:py-28">
        <div className="container-ttn">
          <SectionHeader
            align="split"
            label="The comparison"
            title={
              <>
                Two different
                <br />
                objectives.
              </>
            }
            body="Both models exist for a reason. High-volume recruitment optimises for throughput. TTN Talent optimises for the judgement that senior AI and research hiring actually needs."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {COMPARE.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 110}
                as="article"
                className={`border p-7 transition-[transform,border-color,box-shadow] duration-400 ease-[cubic-bezier(.22,1,.36,1)] md:p-10 ${
                  c.tone === "signal"
                    ? "border-signal/40 bg-background hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_18px_40px_-28px_rgba(37,99,235,0.35)]"
                    : "border-hairline bg-background/60 hover:-translate-y-0.5 hover:border-ink/20"
                }`}
              >
                <Micro
                  className={c.tone === "signal" ? "text-signal" : undefined}
                  withDot={c.tone === "signal"}
                >
                  {c.label}
                </Micro>
                <p
                  className={`mt-6 text-2xl font-semibold tracking-tight md:text-3xl ${
                    c.tone === "signal" ? "text-ink" : "text-cool"
                  }`}
                >
                  {c.metric}
                </p>
                <ul className="mt-8 space-y-3.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-4 text-sm leading-relaxed">
                      <span
                        className={`mt-2 h-px w-5 shrink-0 ${
                          c.tone === "signal" ? "bg-signal" : "bg-cool"
                        }`}
                      />
                      <span
                        className={c.tone === "signal" ? "text-ink/85" : "text-muted-foreground"}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              No criticism of volume recruiters intended — it is simply a different
              service. If you need fifty CVs this week, TTN Talent is the wrong partner.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-background py-20 md:py-28">
        <div className="container-ttn">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Micro>What you get</Micro>
              <h2 className="display-md mt-6 text-ink">The commitments.</h2>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {[
                  ["01", "Every résumé read by a human", "No algorithmic screening at any point in the process."],
                  ["02", "Direct access to Dan", "The person you brief is the person running the search."],
                  ["03", "A focused shortlist", "Fewer, better candidates with context on each one."],
                  ["04", "Hands-on through close", "Interview support, offer guidance and honest expectation setting."],
                ].map(([n, t, b], i) => (
                  <Reveal key={n} delay={i * 80} as="li">
                    <div className="group flex gap-6 py-6">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-signal">
                        {n}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">{t}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={260} className="mt-10">
                <ActionLink to="/contact">Start a Search</ActionLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
