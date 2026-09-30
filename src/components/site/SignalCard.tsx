import { Reveal } from "./primitives";

export type SignalCardData = {
  index: string;
  value: string;
  valueSub?: string | undefined;
  title: string;
  body: string;
};

export function SignalCard({ data, delay = 0 }: { data: SignalCardData; delay?: number | undefined }) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="group relative flex min-h-[19rem] flex-col justify-between border border-hairline bg-background p-7 shadow-[0_0_0_0_transparent] transition-[transform,background-color,border-color,box-shadow] duration-400 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:border-signal/35 hover:bg-accent hover:shadow-[0_18px_40px_-28px_rgba(10,16,32,0.35)] md:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--signal) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 100%",
        }}
      />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.18em] text-signal">
          {data.index}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="size-4 translate-x-[-4px] text-signal opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path
            d="M6 18 18 6m0 0H8m10 0v10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </svg>
      </div>

      <div className="relative mt-10">
        <p className="text-[clamp(2.75rem,5vw,4rem)] leading-[0.9] font-semibold tracking-[-0.04em] text-ink transition-transform duration-400 group-hover:-translate-y-1">
          {data.value}
        </p>
        {data.valueSub && (
          <p className="mt-1 text-xl font-medium tracking-tight text-cool">
            {data.valueSub}
          </p>
        )}
        <div
          aria-hidden="true"
          className="mt-5 h-px w-10 origin-left bg-signal transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-[5]"
        />
        <h3 className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.body}</p>
      </div>
    </Reveal>
  );
}
