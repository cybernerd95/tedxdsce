"use client";

import { motion } from "framer-motion";

type ScheduleRowProps = {
  time: string;
  title: string;
  description: string;
  kind?: "session" | "break";
  index: number;
  isLast: boolean;
};

export function ScheduleRow({
  time,
  title,
  description,
  kind = "session",
  index,
  isLast,
}: ScheduleRowProps) {
  const isBreak = kind === "break";

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
      className="relative grid grid-cols-[120px_32px_1fr] items-start gap-6 pb-10"
    >
      <div
        className="pt-1 text-[20px] font-bold tabular-nums"
        style={{
          color: isBreak
            ? "var(--color-foreground-muted)"
            : "var(--color-primary)",
        }}
      >
        {time}
      </div>

      <div className="relative flex flex-col items-center">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
            delay: index * 0.06 + 0.1,
          }}
          className="z-10 h-3 w-3 rounded-full"
          style={{
            backgroundColor: isBreak
              ? "var(--color-surface)"
              : "var(--color-primary)",
            border: isBreak
              ? "2px solid var(--color-divider)"
              : "2px solid transparent",
            boxShadow: isBreak ? "none" : "0 0 0 4px rgba(235,0,40,0.18)",
          }}
        />
        {!isLast && (
          <span
            className="absolute left-1/2 top-3 h-full w-px -translate-x-1/2"
            style={{ backgroundColor: "var(--color-divider)" }}
          />
        )}
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-center gap-3">
          <h3
            className="text-[20px] font-bold leading-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            {title}
          </h3>
          {isBreak ? (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{
                color: "var(--color-foreground-muted)",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              Break
            </span>
          ) : null}
        </div>
        <p
          className="max-w-[540px] text-[14px] leading-[1.6]"
          style={{ color: "var(--color-foreground-muted)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
