"use client";

import { useState } from "react";
import { guessTool, type Content } from "@/content/site";

const agents = [
  { id: "curl", agent: "curl/8.7.1" },
  { id: "nmap", agent: "Mozilla/5.0 (compatible; Nmap Scripting Engine)" },
  { id: "sqlmap", agent: "sqlmap/1.8.4#stable" },
  { id: "browser", agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
] as const;

type Hit = { key: number; time: string; tool: string; path: string };

function createHit(agent: string, browserLabel: string): Hit {
  const tool = guessTool(agent);
  return {
    key: Date.now(),
    time: new Date().toLocaleTimeString(undefined, { hour12: false }),
    tool: tool === "browser" ? browserLabel : tool,
    path: `GET /t/${Math.random().toString(16).slice(2, 6)}`,
  };
}

export default function DecoyDemo({ t }: { t: Content["demo"] }) {
  const [hits, setHits] = useState<Hit[]>([]);

  function trigger(agent: string) {
    const hit = createHit(agent, t.browser);
    setHits((current) => [hit, ...current].slice(0, 4));
  }

  return (
    <div className="mt-4 rounded-lg border border-line bg-raised p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-serif text-2xl">{t.title}</p>
        <p className="font-mono text-xs text-muted">{t.hint}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-soft">{t.prompt}</span>
        {agents.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => trigger(item.agent)}
            className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs transition-colors hover:border-alert hover:text-alert"
          >
            {item.id === "browser" ? t.browser : item.id}
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[8.5rem] font-mono text-xs" aria-live="polite">
        <div className="grid grid-cols-[4.5rem_1fr_auto] gap-3 border-b border-line pb-2 text-muted sm:grid-cols-[5.5rem_1fr_7rem]">
          <span>{t.columns.time}</span>
          <span>{t.columns.request}</span>
          <span>{t.columns.detected}</span>
        </div>
        {hits.length === 0 ? (
          <p className="pt-3 text-muted">{t.empty}</p>
        ) : (
          <ul>
            {hits.map((hit) => (
              <li
                key={hit.key}
                className="grid grid-cols-[4.5rem_1fr_auto] gap-3 border-b border-line/60 py-2 sm:grid-cols-[5.5rem_1fr_7rem]"
              >
                <span className="text-muted">{hit.time}</span>
                <span className="truncate">
                  {hit.path} <span className="text-muted">→ {t.response}</span>
                </span>
                <span className="text-alert">{hit.tool}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
