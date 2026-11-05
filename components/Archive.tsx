"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content/site";
import VideoButton from "./VideoButton";

export default function Archive({ t }: { t: Content["projects"] }) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!hovered) return;
    const clear = () => setHovered(null);
    window.addEventListener("scroll", clear, { passive: true, once: true });
    return () => window.removeEventListener("scroll", clear);
  }, [hovered]);

  function follow(event: React.PointerEvent, name: string) {
    const preview = previewRef.current;
    if (!preview || event.pointerType !== "mouse") return;
    if ((event.target as Element).closest("dialog, button")) {
      setHovered(null);
      return;
    }
    const x = Math.min(event.clientX + 24, window.innerWidth - 300);
    const y = Math.max(event.clientY - 90, 76);
    preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    setHovered(name);
  }

  return (
    <div className="mt-24 sm:mt-36">
      <h3 className="reveal font-serif text-4xl sm:text-5xl">{t.archiveLabel}</h3>

      <div
        role="table"
        aria-label={t.archiveLabel}
        className="mt-8"
        onPointerLeave={() => setHovered(null)}
      >
        <div
          role="row"
          className="hidden grid-cols-12 gap-6 border-b border-line pb-3 font-mono text-xs text-muted md:grid"
        >
          <span role="columnheader" className="col-span-3">
            {t.archiveColumns.name}
          </span>
          <span role="columnheader" className="col-span-5">
            {t.archiveColumns.description}
          </span>
          <span role="columnheader" className="col-span-2">
            {t.archiveColumns.stack}
          </span>
          <span className="col-span-2" />
        </div>

        <div role="rowgroup" className="focus-list">
          {t.archive.map((item) => (
            <div
              key={item.name}
              role="row"
              onPointerMove={(event) => follow(event, item.name)}
              className="focus-row relative grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-12 md:items-center md:gap-6"
            >
              <div role="cell" className="md:col-span-3">
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 font-serif text-3xl after:absolute after:inset-0"
                >
                  {item.name}
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                  />
                </a>
              </div>
              <p role="cell" className="text-[0.95rem] leading-relaxed text-soft md:col-span-5">
                {item.description}
              </p>
              <p role="cell" className="font-mono text-xs text-muted md:col-span-2">
                {item.stack}
              </p>
              <div role="cell" className="relative md:col-span-2 md:text-right">
                {item.video && (
                  <VideoButton
                    src={item.video}
                    title={item.name}
                    label={t.viewDemo}
                    closeLabel={t.closeVideo}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-signal transition-colors hover:text-ink"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      >
        <div
          className={`relative h-[180px] w-[280px] overflow-hidden rounded-md border border-line bg-raised transition-[opacity,scale] duration-200 ${
            hovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {t.archive.map((item) => (
            <Image
              key={item.name}
              src={item.image}
              alt=""
              fill
              sizes="280px"
              className={`object-cover transition-opacity duration-200 ${
                hovered === item.name ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
