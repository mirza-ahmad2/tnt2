import { EMAIL } from "@/lib/site";
import { ActionLink, Micro, Reveal } from "./primitives";

export function CTASection({
  label = "Start a search",
  title = (
    <>
      The right hire
      <br />
      is in the signal.
    </>
  ),
  body = "Tell Dan what you're building and who you need.",
}: {
  label?: string | undefined;
  title?: React.ReactNode | undefined;
  body?: string | undefined;
}) {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-soft py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-px w-full bg-signal/25"
      />
      <div className="container-ttn relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Micro>{label}</Micro>
              <h2 className="display-lg mt-6 text-ink">{title}</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionLink to="/contact">Start a Search</ActionLink>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="micro-label mt-6 inline-block text-ink transition-colors hover:text-signal"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
