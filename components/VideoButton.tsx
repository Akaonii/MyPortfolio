"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

type Props = {
  src: string;
  title: string;
  label: string;
  closeLabel: string;
  className?: string;
  iconOnly?: boolean;
};

export default function VideoButton({ src, title, label, closeLabel, className, iconOnly }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={iconOnly ? `${label}, ${title}` : undefined}
        className={className}
      >
        <Play size={15} aria-hidden />
        {!iconOnly && label}
      </button>
      {open && (
        <dialog
          ref={dialogRef}
          aria-label={title}
          onClose={() => setOpen(false)}
          onClick={(event) => {
            if (event.target === dialogRef.current) dialogRef.current?.close();
          }}
          className="m-auto w-[min(92vw,1100px)] overflow-visible bg-transparent text-ink"
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="font-mono text-sm">{title}</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={closeLabel}
              className="flex size-10 items-center justify-center rounded-full border border-line bg-bg transition-colors hover:border-signal hover:text-signal"
            >
              <X size={18} aria-hidden />
            </button>
          </div>
          <video
            src={src}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="max-h-[80svh] w-full rounded-lg bg-black"
          />
        </dialog>
      )}
    </>
  );
}
