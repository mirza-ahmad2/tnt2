import { Link } from "@tanstack/react-router";
import { EMAIL, LINKEDIN_DAN, LINKEDIN_TTN, NAV_LINKS, logoLight } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-ttn py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" aria-label="TTN Talent home" className="inline-block transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
              <img
                src={logoLight}
                alt="TTN Talent"
                width={140}
                height={123}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-7 max-w-sm text-lg leading-snug font-medium text-white">
              Through the noise.
              <br />
              To the right hire.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Specialist executive search across AI, machine learning and frontier
              research.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <p className="micro-label text-white/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group relative inline-block text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="micro-label text-white/40">Direct</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/75 transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_DAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
                >
                  Dan Kirkpatrick · LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_TTN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
                >
                  TTN Talent · LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="micro-label text-white/40">
            © {new Date().getFullYear()} TTN Talent. All rights reserved.
          </p>
          <p className="micro-label text-white/40">
            Powered by{" "}
            <a
              href="https://www.involiq.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline-offset-4 transition-colors hover:text-signal hover:underline focus-visible:outline-none focus-visible:text-signal"
            >
              Involiq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
