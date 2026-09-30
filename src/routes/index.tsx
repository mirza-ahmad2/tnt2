import { createFileRoute, Link } from "@tanstack/react-router";
import { SignalHero } from "@/components/site/SignalHero";
import { SignalCard } from "@/components/site/SignalCard";
import { ExpertiseRows } from "@/components/site/ExpertiseRows";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { CTASection } from "@/components/site/CTASection";
import {
  ActionLink,
  Micro,
  Reveal,
  SectionHeader,
} from "@/components/site/primitives";
import { EMAIL, LINKEDIN_DAN, ROLE_CHIPS, founderPhoto } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

const TITLE = "TTN Talent | Specialist AI, ML & Frontier Research Search";
const DESC =
  "Specialist executive search for startups and scale-ups hiring across AI, machine learning and frontier research. Low volume, high attention, human throughout.";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: TITLE,
      description: DESC,
      path: "/",
      keywords:
        "AI recruitment, ML executive search, frontier research hiring, specialist AI search, TTN Talent",
    }),
  component: Index,
});

const DIFFERENCE = [
  {
    index: "01",
    value: "3–5",
    title: "Assignments at a time",
    body: "Focused attention instead of high-volume recruitment. Every search gets dedicated time, not a place in a queue.",
  },
  {
    index: "02",
    value: "100%",
    title: "Human review",
    body: "Every résumé reviewed with context and judgement. No keyword filters deciding who reaches your shortlist.",
  },
  {
    index: "03",
    value: "Since",
    valueSub: "2005",
    title: "AI recruitment experience",
    body: "Two decades of AI, ML and data science relationships — built long before the current AI hiring boom.",
  },
];

function Index() {
  return (
    <>
      <SignalHero />

      {/* PROBLEM */}
      <section className="border-t border-hairline bg-background py-20 md:py-28">
        <div className="container-ttn">
          <SectionHeader
            align="split"
            label="The problem"
            title={
              <>
                More applications.
                <br />
                Less signal.
              </>
            }
            body="One-click applications made volume explode — they didn't make matching easier. AI-polished résumés and keyword screening filter for phrasing, not for the researcher who will change the trajectory of your team."
          />

          {/* noise → signal metaphor */}
          <Reveal delay={120} className="mt-16">
            <div className="grid items-center gap-10 border border-hairline p-6 md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <Micro>100+ inbound applications</Micro>
                <div className="mt-5 flex h-36 flex-col justify-between gap-[3px] overflow-hidden">
                  {Array.from({ length: 26 }).map((_, i) => (
                    <span
                      key={i}
                      className="block h-px bg-ink"
                      style={{
                        width: `${28 + ((i * 37) % 70)}%`,
                        opacity: 0.1 + ((i * 13) % 9) / 90,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 md:flex md:justify-center">
                <span className="micro-label text-signal">→</span>
              </div>
              <div className="md:col-span-4">
                <Micro>3 shortlisted signals</Micro>
                <div className="mt-5 flex h-36 flex-col justify-center gap-7">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="flex items-center gap-3">
                      <span className="size-[5px] bg-signal" />
                      <span className="h-px flex-1 bg-signal" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="border-t border-hairline bg-soft py-20 md:py-28">
        <div className="container-ttn">
          <SectionHeader
            label="The difference"
            title={
              <>
                Less volume.
                <br />
                More judgement.
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {DIFFERENCE.map((d, i) => (
              <SignalCard key={d.index} data={d} delay={i * 90} />
            ))}
          </div>
          <Reveal delay={200} className="mt-12">
            <ActionLink to="/how-i-work" variant="outline">
              See how I work
            </ActionLink>
          </Reveal>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="border-t border-hairline bg-background py-20 md:py-28">
        <div className="container-ttn">
          <SectionHeader
            label="Focus areas"
            title={
              <>
                Where the
                <br />
                searches happen.
              </>
            }
          />
          <div className="mt-14">
            <ExpertiseRows />
          </div>
          <Reveal delay={150} className="mt-12">
            <ActionLink to="/expertise" variant="outline">
              Explore expertise
            </ActionLink>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-t border-hairline bg-ink py-20 text-white md:py-28">
        <div className="container-ttn">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="group relative aspect-square max-w-md overflow-hidden bg-white">
                <img
                  src={founderPhoto}
                  alt="Dan Kirkpatrick, founder of TTN Talent"
                  width={900}
                  height={900}
                  decoding="async"
                  className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-2/3 origin-left bg-signal"
                />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
              <Reveal delay={90}>
                <Micro className="text-white/50">Founder &amp; search partner</Micro>
                <h2 className="display-lg mt-6 text-white">
                  Dan
                  <br />
                  Kirkpatrick.
                </h2>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                  Hiring AI talent since 2005. 22+ years building specialist technology
                  recruitment capability, most recently as VP, Data Science &amp; Machine
                  Learning Recruitment at JAM Recruitment.
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
                  TTN Talent is deliberately smaller: one specialist search partner, a
                  handful of assignments, and two decades of relationships.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ActionLink to="/about">Meet Dan</ActionLink>
                  <ActionLink href={LINKEDIN_DAN} variant="ink">
                    LinkedIn
                  </ActionLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-t border-hairline bg-background py-20 md:py-28">
        <div className="container-ttn">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Micro>The credibility</Micro>
              <blockquote className="mt-7 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.15] font-medium tracking-[-0.03em] text-ink">
                “Low volume.
                <br />
                <span className="text-signal">High attention.</span>
                <br />
                Human throughout.”
              </blockquote>
              <p className="micro-label mt-8">
                Dan Kirkpatrick — Founder, TTN Talent
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {[
                  ["9K+", "LinkedIn followers"],
                  ["22+", "Years, one specialism"],
                  ["2005", "Hiring AI talent since"],
                ].map(([v, l]) => (
                  <li key={l} className="flex items-baseline gap-4 py-4">
                    <span className="text-2xl font-semibold tracking-tight text-ink">
                      {v}
                    </span>
                    <span className="micro-label">{l}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-hairline bg-soft py-20 md:py-28">
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
          <Reveal delay={150} className="mt-12">
            <ActionLink to="/how-i-work" variant="outline">
              See how I work
            </ActionLink>
          </Reveal>
        </div>
      </section>

      {/* CRO */}
      <section className="border-t border-hairline bg-background py-20 md:py-28">
        <div className="container-ttn">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Micro>Hiring now?</Micro>
              <h2 className="display-lg mt-6 text-ink">
                Who do you
                <br />
                need to find?
              </h2>
            </Reveal>
            <Reveal delay={110} className="lg:col-span-5 lg:col-start-8 lg:self-end">
              <div className="flex flex-wrap gap-2">
                {ROLE_CHIPS.map((c) => (
                  <Link
                    key={c}
                    to="/contact"
                    search={{ role: c }}
                    className="min-h-10 border border-hairline px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] uppercase text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
                  >
                    {c}
                  </Link>
                ))}
              </div>
              <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                Direct to Dan. No account managers. Only 3–5 live assignments at a time.
              </p>
              <div className="mt-6">
                <ActionLink to="/contact">Start a Search</ActionLink>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="micro-label mt-5 inline-block text-ink transition-colors hover:text-signal"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
