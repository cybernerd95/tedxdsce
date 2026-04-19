"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type CountdownProps = {
  /** Target date as ISO string. */
  targetIso: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function computeRemaining(targetMs: number): Remaining {
  const diff = targetMs - Date.now();
  if (diff <= 0) return ZERO;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown({ targetIso }: CountdownProps) {
  const targetMs = new Date(targetIso).getTime();
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(computeRemaining(targetMs));
    const id = window.setInterval(() => {
      setRemaining(computeRemaining(targetMs));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  // SSR / first paint: render a neutral placeholder to avoid hydration drift.
  const segments = remaining
    ? [
        { label: "Days", value: remaining.days },
        { label: "Hours", value: remaining.hours },
        { label: "Minutes", value: remaining.minutes },
        { label: "Seconds", value: remaining.seconds },
      ]
    : [
        { label: "Days", value: 0 },
        { label: "Hours", value: 0 },
        { label: "Minutes", value: 0 },
        { label: "Seconds", value: 0 },
      ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {segments.map((seg) => {
        const display =
          seg.label === "Days" ? seg.value.toString() : pad(seg.value);
        return (
          <div
            key={seg.label}
            className="flex flex-col items-center gap-2 rounded-[20px] border px-4 py-6"
            style={{
              borderColor: "var(--color-divider)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <div className="relative h-[56px] w-full overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={display}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center text-[44px] font-black tabular-nums tracking-[-1px]"
                  style={{ color: "var(--color-primary)" }}
                >
                  {display}
                </motion.span>
              </AnimatePresence>
            </div>
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--color-foreground-muted)" }}
            >
              {seg.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
