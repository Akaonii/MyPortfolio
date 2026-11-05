import { ArrowUpRight } from "lucide-react";
import { links, type Content } from "@/content/site";
import SectionTitle from "./Section";

export default function Skills({ t }: { t: Content }) {
  const practice = [
    { label: "Root-Me", href: links.rootme },
    { label: "LetsDefend", href: links.letsdefend },
  ];
  return (
    <section id="skills" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-36">
      <SectionTitle title={t.skills.title} />
      <dl className="focus-list">
        {t.skills.groups.map((group) => (
          <div
            key={group.label}
            className="focus-row reveal grid gap-2 border-t border-line py-6 lg:grid-cols-12 lg:gap-8"
          >
            <dt className="font-mono text-xs text-muted lg:col-span-3 lg:pt-2.5">{group.label}</dt>
            <dd className="font-serif text-[clamp(1.6rem,2.8vw,2.5rem)] leading-tight lg:col-span-9">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
        <div className="grid gap-2 border-y border-line py-6 lg:grid-cols-12 lg:gap-8">
          <dt className="font-mono text-xs text-muted lg:col-span-3 lg:pt-1">{t.skills.practiceLabel}</dt>
          <dd className="flex flex-wrap gap-6 lg:col-span-9">
            {practice.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-signal"
              >
                {item.label}
                <ArrowUpRight size={15} aria-hidden className="text-muted group-hover:text-signal" />
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}
