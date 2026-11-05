import { notFound } from "next/navigation";
import { content, isLang, links, siteUrl } from "@/content/site";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = content[lang];

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maxime Brucale",
    url: `${siteUrl}/${lang}`,
    jobTitle: t.hero.eyebrow,
    alumniOf: { "@type": "CollegeOrUniversity", name: "ECE Paris" },
    sameAs: [links.linkedin, links.github, links.rootme],
  };

  return (
    <PageShell lang={lang} t={t}>
      <Hero t={t} />
      <Journey t={t} />
      <Projects lang={lang} t={t} />
      <Skills t={t} />
      <Contact t={t} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </PageShell>
  );
}
