import { links, type Content } from "@/content/site";

export default function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Maxime Brucale</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={t.cvFile} download className="transition-colors hover:text-ink">
            {t.footer.cv}
          </a>
          <a href={`mailto:${links.email}`} className="transition-colors hover:text-ink">
            {links.email}
          </a>
          <a href={links.repo} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
            {t.footer.code}
          </a>
          <a href="/.well-known/security.txt" className="transition-colors hover:text-ink">
            security.txt
          </a>
          <a href="/robots.txt" className="transition-colors hover:text-ink">
            {t.footer.curious}
          </a>
        </div>
      </div>
    </footer>
  );
}
