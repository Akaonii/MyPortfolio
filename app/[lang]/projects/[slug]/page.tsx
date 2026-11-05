import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { content, isLang, links } from "@/content/site";
import PageShell from "@/components/PageShell";
import ProjectLinks from "@/components/ProjectLinks";
import DecoyDemo from "@/components/DecoyDemo";
import { ProjectStatus } from "@/components/Projects";

type Props = { params: Promise<{ lang: string; slug: string }> };

function findProject(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const t = content[lang];
  const index = t.projects.list.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return { lang, t, project: t.projects.list[index], index };
}

export function generateStaticParams() {
  return content.fr.projects.list.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const found = findProject(lang, slug);
  if (!found) return {};
  const { project } = found;
  const title = `${project.name} · Maxime Brucale`;
  return {
    title,
    description: project.summary,
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: { fr: `/fr/projects/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: {
      type: "article",
      url: `/${lang}/projects/${slug}`,
      siteName: "Maxime Brucale",
      title,
      description: project.summary,
      images: [{ url: project.image.src, width: project.image.width, height: project.image.height }],
    },
    twitter: { card: "summary_large_image", title, description: project.summary, images: [project.image.src] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  const found = findProject(lang, slug);
  if (!found) notFound();
  const { t, project, index } = found;
  const p = t.projects;
  const next = p.list[(index + 1) % p.list.length];

  return (
    <PageShell lang={found.lang} t={t} path={`/projects/${slug}`}>
      <article className="mx-auto max-w-[1320px] px-5 pt-28 sm:px-8 sm:pt-36">
        <Link
          href={`/${lang}#projects`}
          className="group mb-10 inline-flex items-center gap-2 text-sm text-soft transition-colors hover:text-signal"
        >
          <ArrowLeft size={15} aria-hidden className="transition-transform group-hover:-translate-x-0.5" />
          {p.backToProjects}
        </Link>

        <ProjectStatus project={project} />

        <h1 className="mt-7 max-w-[17ch] font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.98] tracking-[-0.02em]">
          {project.headline}
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <p className="text-lg leading-relaxed text-soft lg:col-span-7">{project.summary}</p>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-1.5">
            <ProjectLinks project={project} t={p} />
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-line bg-raised">
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            sizes="(min-width: 1320px) 1256px, 100vw"
            priority
            className="h-auto w-full"
          />
        </div>

        <dl className="mt-px grid grid-cols-2 border-b border-line lg:grid-cols-4">
          {project.metrics.map((metric, position) => (
            <div
              key={`${metric.value}-${metric.label}`}
              className={`py-7 pr-5 ${position % 2 === 1 ? "border-l border-line pl-5" : ""} ${
                position === 2 ? "border-line lg:border-l lg:pl-5" : ""
              }`}
            >
              <dt className="text-5xl font-light leading-none tracking-tight">{metric.value}</dt>
              <dd className="mt-3 max-w-[24ch] text-sm leading-snug text-muted">{metric.label}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <section className="reveal">
            <h2 className="mb-4 font-mono text-xs text-muted">{p.problemLabel}</h2>
            <p className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.18]">{project.problem}</p>
          </section>
          <section className="reveal">
            <h2 className="mb-4 font-mono text-xs text-muted">{p.approachLabel}</h2>
            <p className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.18]">{project.approach}</p>
          </section>
        </div>

        <section>
          <h2 className="mb-6 font-mono text-xs text-muted">{p.highlightsLabel}</h2>
          <ul className="focus-list">
            {project.highlights.map((highlight) => (
              <li
                key={highlight.title}
                className="focus-row reveal grid gap-3 border-t border-line py-7 lg:grid-cols-12 lg:gap-8"
              >
                <h3 className="font-serif text-3xl leading-tight lg:col-span-5">{highlight.title}</h3>
                <p className="leading-relaxed text-soft lg:col-span-6 lg:col-start-7">{highlight.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {slug === "honeylink" && (
          <section className="pt-16">
            <DecoyDemo t={t.demo} />
          </section>
        )}

        {project.video && (
          <section className="pt-20 sm:pt-28">
            <h2 className="mb-6 font-mono text-xs text-muted">{p.demoLabel}</h2>
            <video
              src={project.video}
              poster={project.image.src}
              controls
              playsInline
              preload="none"
              aria-label={`${p.demoLabel} : ${project.name}`}
              className="w-full rounded-lg border border-line bg-black"
            />
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="pt-20 sm:pt-28">
            <h2 className="mb-6 font-mono text-xs text-muted">{p.galleryLabel}</h2>
            <div className="space-y-12">
              {project.gallery.map((figure) => (
                <figure key={figure.src} className="reveal">
                  <div className="overflow-hidden rounded-lg border border-line bg-raised">
                    <Image
                      src={figure.src}
                      width={figure.width}
                      height={figure.height}
                      alt={figure.alt}
                      sizes="(min-width: 1320px) 1256px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted">{figure.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20 border-t border-line py-10 sm:mt-28">
          <h2 className="mb-2 font-mono text-xs text-muted">{p.stackLabel}</h2>
          <p className="font-serif text-[clamp(1.6rem,2.8vw,2.5rem)] leading-tight">{project.tags.join(", ")}</p>
        </section>

        <div className="grid gap-px border-y border-line pb-px lg:grid-cols-2">
          <Link href={`/${lang}/projects/${next.slug}`} className="group block py-10 lg:pr-8">
            <p className="font-mono text-xs text-muted">{p.nextLabel}</p>
            <p className="mt-3 flex items-center gap-3 font-serif text-4xl transition-colors group-hover:text-signal sm:text-5xl">
              {next.name}
              <ArrowRight size={28} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
          <div className="border-t border-line py-10 lg:border-l lg:border-t-0 lg:pl-8">
            <p className="font-mono text-xs text-muted">{p.ctaTitle}</p>
            <a
              href={`mailto:${links.email}?subject=${encodeURIComponent(project.name)}`}
              className="mt-3 block font-serif text-4xl transition-colors hover:text-signal sm:text-5xl"
            >
              {p.ctaButton}
            </a>
          </div>
        </div>
        <div className="h-16" />
      </article>
    </PageShell>
  );
}
