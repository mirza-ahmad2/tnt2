import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ActionLink, Micro, Reveal } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import { LINKEDIN_DAN, founderPhoto } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

const TITLE = "About Dan Kirkpatrick | Founder, TTN Talent";
const DESC =
  "Dan Kirkpatrick has been hiring AI talent since 2005, with 22+ years at JAM Recruitment, most recently as VP, Data Science & Machine Learning Recruitment.";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageSeo({
      title: TITLE,
      description: DESC,
      path: "/about",
      type: "profile",
      keywords:
        "Dan Kirkpatrick, TTN Talent founder, AI recruiter, ML recruitment specialist, executive search partner",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dan Kirkpatrick",
          jobTitle: "Founder & Search Partner, TTN Talent",
          worksFor: { "@type": "Organization", name: "TTN Talent" },
          sameAs: ["https://www.linkedin.com/in/dankirkpatrick/"],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  ["2005", "Started hiring AI / ML talent", "Specialist AI, machine learning and data science recruitment, long before it became a category."],
  ["22+ Years", "JAM Recruitment", "Group Director, and most recently VP, Data Science & Machine Learning Recruitment."],
  ["2026", "TTN Talent", "A deliberately small specialist search practice: 3–5 live assignments, human throughout."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        label="03 / Founder"
        title={
          <>
            Experience
            <br />
            before the
            <br />
            hype.
          </>
        }
        body="TTN Talent is one person with two decades of specialist relationships — not a platform, not a team of account managers."
        meta={["Dan Kirkpatrick", "Founder & Search Partner", "Hiring AI talent since 2005"]}
      />

      <section className="border-b border-hairline bg-background py-16 md:py-24">
        <div className="container-ttn">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="group relative aspect-square overflow-hidden bg-soft">
                <img
                  src={founderPhoto}
                  alt="Portrait of Dan Kirkpatrick, founder of TTN Talent"
                  width={900}
                  height={900}
                  decoding="async"
                  fetchPriority="high"
                  className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-2/3 bg-signal"
                />
              </div>
              <p className="micro-label mt-5 block">Dan Kirkpatrick · Founder</p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={90}>
                <Micro>The background</Micro>
                <h2 className="display-md mt-6 text-ink">
                  Twenty-two years,
                  <br />
                  one specialism.
                </h2>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    Dan has been recruiting in artificial intelligence, machine learning
                    and data science since 2005 — before &ldquo;AI hiring&rdquo; existed as
                    a category, and long before every company had an AI roadmap.
                  </p>
                  <p>
                    He spent 22+ years at JAM Recruitment building specialist technology
                    recruitment capability, serving as Group Director and most recently as
                    VP, Data Science &amp; Machine Learning Recruitment.
                  </p>
                  <p>
                    That run is technical as much as commercial: understanding the
                    quantitative work, the research agendas and the engineering realities
                    behind the job titles is what makes a shortlist credible to a founder
                    or a head of research.
                  </p>
                  <p>
                    TTN Talent is the practice built on that: one specialist search
                    partner, a handful of assignments at a time, and relationships that
                    took two decades to build.
                  </p>
                </div>
                <div className="mt-9">
                  <ActionLink href={LINKEDIN_DAN}>Connect on LinkedIn</ActionLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-soft py-20 md:py-28">
        <div className="container-ttn">
          <Reveal>
            <Micro>The track record</Micro>
            <h2 className="display-md mt-6 text-ink">A long run, not a pivot.</h2>
          </Reveal>
          <ol className="mt-14 grid border-t border-hairline md:grid-cols-3">
            {TIMELINE.map(([year, title, body], i) => (
              <Reveal
                key={year}
                delay={i * 110}
                as="li"
                className={`relative border-b border-hairline py-9 md:border-b-0 md:pr-8 ${
                  i !== 0 ? "md:border-l md:border-hairline md:pl-8" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[3px] left-0 block size-[5px] bg-signal"
                />
                <p className="text-2xl font-semibold tracking-tight text-signal md:text-3xl">
                  {year}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink uppercase">
                  {title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        label="Work with Dan"
        title={
          <>
            One partner.
            <br />
            Full attention.
          </>
        }
        body="Tell Dan what you're building and who you need. If it's a fit, we'll start."
      />
    </>
  );
}
