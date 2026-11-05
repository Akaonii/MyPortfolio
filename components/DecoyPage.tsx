"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { guessTool, type Content, type Lang } from "@/content/site";

export default function DecoyPage({ lang, t }: { lang: Lang; t: Content["decoy"] }) {
  const [visit, setVisit] = useState<{ time: string; agent: string; tool: string } | null>(null);

  useEffect(() => {
    const tool = guessTool(navigator.userAgent);
    queueMicrotask(() =>
      setVisit({
        time: new Date().toLocaleTimeString(undefined, { hour12: false }),
        agent: navigator.userAgent,
        tool: tool === "browser" ? t.browserTool : tool === "unknown" ? t.unknownTool : tool,
      }),
    );
  }, [t.browserTool, t.unknownTool]);

  const rows = [
    { label: t.rows.time, value: visit?.time ?? "…" },
    { label: t.rows.path, value: "/admin" },
    { label: t.rows.agent, value: visit?.agent ?? "…" },
    { label: t.rows.tool, value: visit?.tool ?? "…", accent: true },
  ];

  return (
    <main className="mx-auto flex min-h-svh max-w-[900px] flex-col justify-center px-5 py-16 sm:px-8">
      <p className="flex items-center gap-3 font-mono text-sm text-alert">
        <span aria-hidden className="block size-2 bg-alert" />
        {t.label}
      </p>
      <h1 className="mt-6 font-serif text-[clamp(3.25rem,10vw,7.5rem)] leading-none tracking-[-0.02em]">
        {t.title}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-soft">{t.text}</p>

      <dl className="mt-10 border-t border-line font-mono text-sm">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="text-muted">{row.label}</dt>
            <dd className={`break-words ${row.accent ? "text-alert" : ""}`}>{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={`/${lang}`}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-signal"
        >
          {t.back}
        </Link>
        <Link
          href={`/${lang}/projects/honeylink`}
          className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-signal hover:text-signal"
        >
          {t.seeProject}
        </Link>
      </div>
    </main>
  );
}
