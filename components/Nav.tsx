"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import type { Content, Lang } from "@/content/site";

const sectionIds = ["journey", "projects", "skills", "contact"] as const;

export default function Nav({ lang, t, path = "" }: { lang: Lang; t: Content; path?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const hero = document.getElementById("top");
    const targets = [hero, ...sectionIds.map((id) => document.getElementById(id))];
    targets.forEach((target) => target && observer.observe(target));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const items = [
    { id: "journey", label: t.nav.journey },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  const other: Lang = lang === "fr" ? "en" : "fr";
  const hash = active && active !== "top" ? `#${active}` : "";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span aria-hidden className="block size-2 bg-signal" />
          Maxime Brucale
        </Link>

        <nav aria-label={t.nav.label} className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/${lang}#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`text-sm transition-colors hover:text-ink ${
                active === item.id ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            href={`/${other}${path}${hash}`}
            hrefLang={other}
            lang={other}
            aria-label={t.nav.switchLang}
            className="rounded-full px-2.5 py-1.5 font-mono text-xs uppercase text-muted transition-colors hover:text-ink"
          >
            {other}
          </Link>
          <a
            href={t.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-sm transition-colors hover:border-signal hover:text-signal sm:px-4"
          >
            <ArrowDownToLine size={15} aria-hidden />
            {t.nav.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            className="flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={t.nav.label} className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/${lang}#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 font-serif text-3xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
