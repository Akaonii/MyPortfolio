import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Content, Lang, Project } from "@/content/site";
import SectionTitle from "./Section";
import ProjectLinks from "./ProjectLinks";
import DecoyDemo from "./DecoyDemo";
import Archive from "./Archive";

export function ProjectStatus({ project }: { project: Project }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
        <span className="text-ink">{project.name}</span>
        <span className={`flex items-center gap-2 ${project.active ? "text-signal" : "text-muted"}`}>
          {project.active && <span className="pulse-dot" />}
          {project.status}
        </span>
      </div>
      <p className="mt-2 font-mono text-xs text-muted">{project.context}</p>
    </div>
  );
}

function ProjectCard({
  project,
  lang,
  t,
  index,
}: {
  project: Project;
  lang: Lang;
  t: Content;
  index: number;
}) {
  const flipped = index % 2 === 1;
  const href = `/${lang}/projects/${project.slug}`;
  return (
    <article
      id={project.slug}
      className="grid scroll-mt-24 gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
        <div className="lg:sticky lg:top-24">
          <ProjectStatus project={project} />

          <h3 className="mt-7 font-serif text-[clamp(2.4rem,4.2vw,3.75rem)] leading-[1.04] tracking-[-0.015em]">
            <Link href={href} className="transition-colors hover:text-signal">
              {project.headline}
            </Link>
          </h3>
          <p className="mt-6 leading-relaxed text-soft">{project.summary}</p>

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
            {project.metrics.slice(0, 4).map((metric) => (
              <div key={`${metric.value}-${metric.label}`}>
                <dt className="text-3xl font-light leading-none tracking-tight">{metric.value}</dt>
                <dd className="mt-1.5 text-xs leading-snug text-muted">{metric.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Link
              href={href}
              className="group mb-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-signal"
            >
              {t.projects.readCase}
              <ArrowRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <ProjectLinks project={project} t={t.projects} />
          </div>
        </div>
      </div>

      <div className={`lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
        <Link href={href} tabIndex={-1} aria-hidden className="block overflow-hidden rounded-lg border border-line bg-raised">
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt=""
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="settle h-auto w-full"
          />
        </Link>
        {project.slug === "honeylink" && <DecoyDemo t={t.demo} />}
      </div>
    </article>
  );
}

export default function Projects({ lang, t }: { lang: Lang; t: Content }) {
  return (
    <section id="projects" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-36">
      <SectionTitle title={t.projects.title} intro={t.projects.intro} />
      <div className="space-y-20 sm:space-y-32">
        {t.projects.list.map((project, index) => (
          <ProjectCard key={project.slug} project={project} lang={lang} t={t} index={index} />
        ))}
      </div>
      <Archive t={t.projects} />
    </section>
  );
}
