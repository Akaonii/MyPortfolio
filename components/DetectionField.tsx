"use client";

import { useEffect, useRef, useState } from "react";

type Labels = {
  hudLabel: string;
  hudHint: string;
  hudHintTouch: string;
  hudDone: string;
  closedLabel: string;
};

type Alert = {
  x: number;
  y: number;
  label: string;
  born: number;
  closedAt: number | null;
};

const GAP = 30;
const SPOTLIGHT = 170;
const CATCH_RADIUS = 64;
const MAX_ALERTS = 4;
const LIFETIME = 7500;
const GOAL = 5;
const FRAME_MS = 33;
const START_DELAY = 900;
const SIGNAL = "200,241,105";
const ALERT = "255,139,77";
const TECHNIQUES = [
  "T1110 brute force",
  "T1078 valid accounts",
  "T1566 phishing",
  "T1190 public exploit",
  "T1059 scripting",
  "T1021 remote services",
  "T1071 C2 channel",
];

export default function DetectionField({ labels }: { labels: Labels }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [count, setCount] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest("section");
    const context = canvas?.getContext("2d");
    if (!canvas || !section || !context) return;
    const ctx = context;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none)").matches;
    queueMicrotask(() => {
      setIsTouch(coarse);
      setEnabled(!reduced);
    });

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let started = false;
    let nextSpawn = 700;
    let qualified = 0;
    const pointer = { x: -9999, y: -9999, seen: 0 };
    const alerts: Alert[] = [];
    const dotLayer = document.createElement("canvas");
    let lastDraw = 0;
    let avoid: DOMRect[] = [];

    function measure() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = section!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const origin = section!.getBoundingClientRect();
      avoid = Array.from(section!.querySelectorAll("[data-avoid]")).map((element) => {
        const box = element.getBoundingClientRect();
        return new DOMRect(box.x - origin.x - 32, box.y - origin.y - 24, box.width + 64, box.height + 48);
      });
    }

    function isFree(x: number, y: number) {
      const labelEnd = x + 170;
      return avoid.every(
        (box) => labelEnd < box.left || x > box.right || y < box.top || y > box.bottom,
      );
    }

    function spawn(now: number) {
      if (alerts.filter((alert) => !alert.closedAt).length >= MAX_ALERTS) return;
      for (let attempt = 0; attempt < 24; attempt += 1) {
        const x = (2 + Math.floor(Math.random() * (width / GAP - 4))) * GAP;
        const y = (3 + Math.floor(Math.random() * (height * 0.82 / GAP - 3))) * GAP;
        const clear = alerts.every((alert) => Math.hypot(alert.x - x, alert.y - y) > 120);
        if (clear && isFree(x, y) && x + 170 < width) {
          const unused = TECHNIQUES.filter((name) => alerts.every((alert) => alert.label !== name));
          const label = unused[Math.floor(Math.random() * unused.length)];
          alerts.push({ x, y, label, born: now, closedAt: null });
          return;
        }
      }
    }

    function buildDotLayer() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dotLayer.width = canvas!.width;
      dotLayer.height = canvas!.height;
      const layer = dotLayer.getContext("2d");
      if (!layer) return;
      layer.setTransform(dpr, 0, 0, dpr, 0, 0);
      layer.fillStyle = "rgba(241,240,235,0.13)";
      for (let col = 0; col <= Math.ceil(width / GAP); col += 1) {
        for (let row = 0; row <= Math.ceil(height / GAP); row += 1) {
          layer.fillRect(col * GAP - 0.7, row * GAP - 0.7, 1.4, 1.4);
        }
      }
    }

    function drawDots() {
      ctx.drawImage(dotLayer, 0, 0, width, height);
      if (pointer.x < 0) return;
      const firstCol = Math.max(0, Math.floor((pointer.x - SPOTLIGHT) / GAP));
      const lastCol = Math.ceil((pointer.x + SPOTLIGHT) / GAP);
      const firstRow = Math.max(0, Math.floor((pointer.y - SPOTLIGHT) / GAP));
      const lastRow = Math.ceil((pointer.y + SPOTLIGHT) / GAP);
      for (let col = firstCol; col <= lastCol; col += 1) {
        for (let row = firstRow; row <= lastRow; row += 1) {
          const x = col * GAP;
          const y = row * GAP;
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          if (distance < SPOTLIGHT) {
            const glow = 1 - distance / SPOTLIGHT;
            ctx.fillStyle = `rgba(${SIGNAL},${0.16 + glow * 0.75})`;
            const size = 1.4 + glow * 1.6;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
          }
        }
      }
    }

    function drawAlert(alert: Alert, now: number) {
      const age = now - alert.born;
      const closing = alert.closedAt !== null ? (now - alert.closedAt) / 1100 : 0;
      const fadeIn = Math.min(age / 260, 1);
      const expiring = alert.closedAt === null ? Math.max(0, (age - LIFETIME + 700) / 700) : 0;
      const alpha = fadeIn * (1 - Math.min(closing, 1)) * (1 - Math.min(expiring, 1));
      const color = alert.closedAt !== null ? SIGNAL : ALERT;
      const { x, y } = alert;

      ctx.fillStyle = `rgba(${color},${alpha})`;
      ctx.fillRect(x - 4, y - 4, 8, 8);

      if (alert.closedAt === null) {
        const phase = (age % 1700) / 1700;
        const radius = 7 + phase * 20;
        ctx.strokeStyle = `rgba(${ALERT},${alpha * (1 - phase) * 0.7})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x - radius, y - radius, radius * 2, radius * 2);
      }

      ctx.font = '11px "Geist Mono", ui-monospace, monospace';
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${color},${alpha * 0.92})`;
      ctx.fillText(alert.closedAt !== null ? labels.closedLabel : alert.label, x + 15, y);
    }

    function tick(now: number) {
      frame = 0;
      if (!visible) return;
      if (now - lastDraw < FRAME_MS) {
        frame = requestAnimationFrame(tick);
        return;
      }
      lastDraw = now;
      ctx.clearRect(0, 0, width, height);
      drawDots();

      if (now > nextSpawn) {
        spawn(now);
        nextSpawn = now + 1300 + Math.random() * 1400;
      }

      for (let index = alerts.length - 1; index >= 0; index -= 1) {
        const alert = alerts[index];
        if (alert.closedAt === null && Math.hypot(alert.x - pointer.x, alert.y - pointer.y) < CATCH_RADIUS) {
          alert.closedAt = now;
          qualified += 1;
          setCount(qualified);
        }
        const gone =
          (alert.closedAt !== null && now - alert.closedAt > 1100) ||
          (alert.closedAt === null && now - alert.born > LIFETIME);
        if (gone) alerts.splice(index, 1);
        else drawAlert(alert, now);
      }

      frame = requestAnimationFrame(tick);
    }

    function start() {
      started = true;
      if (!frame && !reduced) frame = requestAnimationFrame(tick);
    }

    function onPointer(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }

    function onLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function onResize() {
      measure();
      buildDotLayer();
      ctx.clearRect(0, 0, width, height);
      drawDots();
    }

    onResize();
    void document.fonts?.ready.then(onResize);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && started) start();
    });
    observer.observe(section);
    window.addEventListener("resize", onResize);
    section.addEventListener("pointermove", onPointer, { passive: true });
    section.addEventListener("pointerdown", onPointer, { passive: true });
    section.addEventListener("pointerleave", onLeave);
    const startTimer = window.setTimeout(start, START_DELAY);

    console.info(
      "%cTu regardes le code ? Bon réflexe. / Reading the source? Good instinct.\nhttps://github.com/Akaonii/MyPortfolio",
      "color:#c8f169;font-family:monospace",
    );

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      section.removeEventListener("pointermove", onPointer);
      section.removeEventListener("pointerdown", onPointer);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [labels.closedLabel]);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="field-mask absolute inset-0 -z-10" />
      {enabled && (
        <div
          aria-hidden
          className="fade-up pointer-events-auto font-mono text-xs leading-relaxed text-muted lg:text-right"
        >
          <div>
            {labels.hudLabel} <span className="text-ink">{String(count).padStart(2, "0")}</span>
          </div>
          {count >= GOAL ? (
            <a href="#contact" tabIndex={-1} className="text-signal">
              {labels.hudDone}
            </a>
          ) : (
            <div>{isTouch ? labels.hudHintTouch : labels.hudHint}</div>
          )}
        </div>
      )}
    </>
  );
}
