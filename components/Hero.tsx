import { ArrowDown, ArrowDownToLine } from "lucide-react";
import type { Content } from "@/content/site";
import DetectionField from "./DetectionField";

export default function Hero({ t }: { t: Content }) {
  const { hero, proof } = t;
  return (
    <>
      <section
        id="top"
        className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-28 sm:pb-12"
      >
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <p data-avoid className="fade-up mb-6 font-mono text-xs text-soft sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1
            data-avoid
            className="font-serif text-[clamp(3.25rem,10.6vw,10.25rem)] leading-[0.98] tracking-[-0.02em]"
          >
            <span className="line-mask">
              <span className="line-rise">{hero.line1}</span>
            </span>
            <span className="line-mask">
              <span className="line-rise line-delay-1">
                {hero.line2Start}
                <em className="text-signal">{hero.line2Accent}</em>
              </span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end">
            <div data-avoid className="fade-up lg:col-span-5">
              <p className="max-w-xl text-lg leading-relaxed text-soft">{hero.intro}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-signal"
                >
                  {hero.ctaProjects}
                  <ArrowDown
                    size={16}
                    aria-hidden
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href={t.cvFile}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm backdrop-blur-sm transition-colors hover:border-signal hover:text-signal"
                >
                  <ArrowDownToLine size={16} aria-hidden />
                  {hero.ctaCv}
                </a>
              </div>
            </div>

            <div data-avoid className="fade-up grid gap-5 sm:grid-cols-2 lg:col-span-5">
              <div>
                <p className="mb-1.5 flex items-center gap-2.5 font-mono text-xs text-muted">
                  <span className="pulse-dot" />
                  {hero.statusLabel}
                </p>
                <p>{hero.status}</p>
                <p className="mt-0.5 text-sm text-soft">{hero.statusDetail}</p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-xs text-muted">{hero.targetsLabel}</p>
                <p>{hero.targets}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <DetectionField labels={hero} />
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-line">
        <dl className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-4">
          {proof.map((item, index) => (
            <div
              key={item.label}
              className={`px-5 py-7 sm:px-8 ${index % 2 === 1 ? "border-l border-line" : ""} ${
                index > 1 ? "border-t border-line lg:border-t-0" : ""
              } ${index === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="text-5xl font-light leading-none tracking-tight">{item.value}</dt>
              <dd className="mt-3 max-w-[26ch] text-sm leading-snug text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
