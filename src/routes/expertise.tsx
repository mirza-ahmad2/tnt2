import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ActionLink, Micro, Reveal } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import { EXPERTISE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

const TITLE = "Expertise | AI, Machine Learning & Frontier Research Search — TTN Talent";
const DESC =
  "Specialist search across artificial intelligence, machine learning and frontier research — applied AI engineering, ML leadership and research science.";

export const Route = createFileRoute("/expertise")({
  head: () =>
    pageSeo({
      title: TITLE,
      description: DESC,
      path: "/expertise",
      keywords:
        "AI engineer recruitment, ML leadership search, research scientist hiring, applied AI, frontier research search",
    }),
  component: ExpertisePage,
});

const CONTEXT = [
  "Searches are scoped around the actual work: the stack, the stage, the research agenda and the decisions this hire will own.",
  "Hiring happens across individual contributor, staff and leadership levels — and the calibration is different for each.",
  "Market context matters: compensation, competition and who is realistically movable right now.",
];

function ExpertisePage() {
  return (
    <>
      <PageHero
        label="01 / Expertise"
        title={
          <>
            Specialist
            <br />
            by design.
          </>
        }
        body="Three markets, worked properly. TTN Talent does not cover everything in technology — it covers AI, machine learning and frontier research, and understands what the people in those roles actually do."
        meta={["AI · ML · Frontier Research", "IC to leadership", "Startups & scale-ups"]}
      />

      {EXPERTISE.map((e, i) => (
        <section
          key={e.index}
          className={`border-b border-hairline py-16 md:py-24 ${i % 2 === 1 ? "bg-soft" : "bg-background"}`}
        >
          <div className="container-ttn">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <Micro>{`${e.index} / ${e.title.join(" ")}`}</Micro>
                <h2 className="display-lg mt-6 text-ink">
                  {e.title[0]}
                  <br />
                  {e.title[1]}
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-8 h-px w-24 bg-signal"
                />
                <div className="group mt-10 overflow-hidden">
                  <img
                    src={e.image}
                    alt={`${e.title.join(" ")} hiring context at TTN Talent`}
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={600}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
              </Reveal>

              <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
                <Reveal delay={90}>
                  <p className="max-w-xl text-lg leading-relaxed text-ink md:text-xl">
                    {e.body}
                  </p>
                  <p className="micro-label mt-9 block">Typical mandates</p>
                  <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
                    {e.roles.map((r) => (
                      <li
                        key={r}
                        className="group flex items-center justify-between py-3.5 text-sm text-ink/80 transition-colors hover:text-ink"
                      >
                        {r}
                        <span className="h-px w-6 bg-signal transition-all duration-400 group-hover:w-12" />
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {CONTEXT[i]}
                  </p>
                  <div className="mt-8">
                    <ActionLink to="/contact" variant="outline">
                      Discuss a search
                    </ActionLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        label="Next step"
        title={
          <>
            Know the role.
            <br />
            Start the search.
          </>
        }
        body="Tell Dan what you're building and which of these areas you're hiring into."
      />
    </>
  );
}
