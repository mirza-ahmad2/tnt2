import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Micro, Reveal } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { EMAIL, LINKEDIN_DAN } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

const TITLE = "Contact | Start an AI or ML Search — TTN Talent";
const DESC =
  "Start a specialist AI, machine learning or frontier research search with Dan Kirkpatrick. Direct contact, no account managers, 3–5 live assignments at a time.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { role?: string } =>
    typeof search["role"] === "string" ? { role: search["role"] } : {},
  head: () =>
    pageSeo({
      title: TITLE,
      description: DESC,
      path: "/contact",
      keywords:
        "contact TTN Talent, start AI search, hire ML engineer, research scientist recruitment, Dan Kirkpatrick contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { role } = Route.useSearch();

  return (
    <>
      <PageHero
        label="04 / Contact"
        title={
          <>
            Start a
            <br />
            search.
          </>
        }
        body="Tell Dan what you're building and who you need to find. You'll hear back directly — there are no account managers in between."
        meta={["Direct to Dan", "3–5 live assignments", "Response within 1 working day"]}
      />

      <section className="border-b border-hairline bg-background py-16 md:py-24">
        <div className="container-ttn">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <Micro>The brief</Micro>
              <h2 className="display-md mt-6 text-ink">A few details.</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Sending this opens a pre-filled email to Dan so you can review it before
                it leaves your inbox.
              </p>
              <div className="mt-11">
                <ContactForm initialRole={role} />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
              <aside className="border border-hairline p-7 transition-[border-color,box-shadow] duration-400 hover:border-signal/30 hover:shadow-[0_12px_40px_-28px_rgba(10,16,32,0.35)]">
                <Micro>Direct</Micro>
                <ul className="mt-6 space-y-6">
                  <li>
                    <p className="micro-label">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1.5 block text-base text-ink transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
                    >
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <p className="micro-label">LinkedIn</p>
                    <a
                      href={LINKEDIN_DAN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 block text-base text-ink transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
                    >
                      Dan Kirkpatrick
                    </a>
                  </li>
                </ul>
              </aside>

              <aside className="mt-5 border border-hairline p-7 transition-[border-color,box-shadow] duration-400 hover:border-signal/30 hover:shadow-[0_12px_40px_-28px_rgba(10,16,32,0.35)]">
                <Micro>Good to know</Micro>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Only 3–5 searches run at a time, so some months are full.</li>
                  <li>Every enquiry is read by Dan, not a screening tool.</li>
                  <li>
                    If TTN Talent isn't the right fit, you'll get an honest answer quickly.
                  </li>
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
