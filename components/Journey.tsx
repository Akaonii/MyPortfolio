import { ArrowUpRight } from "lucide-react";
import type { Content, TimelineItem } from "@/content/site";
import SectionTitle from "./Section";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-8">
      <h3 className="font-mono text-xs text-muted lg:col-span-3 lg:pt-1.5">{label}</h3>
      <div className="lg:col-span-9">{children}</div>
    </div>
  );
}

function Rows({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="focus-list space-y-10">
      {items.map((item) => (
        <li key={`${item.date}-${item.title}`} className="focus-row reveal grid gap-2 md:grid-cols-9 md:gap-8">
          <p className="font-mono text-xs leading-relaxed text-muted md:col-span-3 md:pt-1">{item.date}</p>
          <div className="md:col-span-6">
            <p className="text-xl leading-snug tracking-tight">{item.title}</p>
            <p className="mt-1 text-soft">{item.org}</p>
            {item.points.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-soft">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {item.tags && (
              <p className="mt-3 font-mono text-xs text-signal/90">{item.tags.join(" · ")}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Journey({ t }: { t: Content }) {
  const j = t.journey;
  return (
    <section id="journey" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-36">
      <SectionTitle title={j.title} intro={j.intro} />
      <Block label={j.experienceLabel}>
        <Rows items={j.experience} />
      </Block>
      <Block label={j.educationLabel}>
        <Rows items={j.education} />
      </Block>
      <Block label={j.certificationsLabel}>
        <ul className="grid gap-x-8 gap-y-5 md:grid-cols-2">
          {j.certifications.map((cert) => (
            <li key={cert.title}>
              {cert.href ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-1.5 transition-colors hover:text-signal"
                >
                  {cert.title}
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="mt-1 flex-none text-muted transition-colors group-hover:text-signal"
                  />
                </a>
              ) : (
                cert.title
              )}
              <p className="mt-0.5 flex items-center gap-2 font-mono text-xs text-muted">
                {cert.org}
                {cert.inProgress && (
                  <span className="flex items-center gap-2 text-signal">
                    <span className="pulse-dot" />
                    {j.inProgress}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </Block>
      <Block label={j.activitiesLabel}>
        <Rows items={j.activities} />
      </Block>
      <Block label={j.languagesLabel}>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
          {j.languages.map((language) => (
            <li key={language.name}>
              {language.name}
              <p className="mt-0.5 font-mono text-xs text-muted">{language.level}</p>
            </li>
          ))}
        </ul>
      </Block>
    </section>
  );
}
