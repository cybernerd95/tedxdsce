"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Speaker } from "@/lib/siteConfig";

type SpeakerDetailModalProps = {
  speaker: Speaker | null;
  onClose: () => void;
};

export function SpeakerDetailModal({
  speaker,
  onClose,
}: SpeakerDetailModalProps) {
  useEffect(() => {
    if (!speaker) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [speaker, onClose]);

  return (
    <AnimatePresence>
      {speaker ? (
        <motion.div
          key="modal-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${speaker.name} — speaker details`}
        >
          <motion.button
            type="button"
            aria-label="Close"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full cursor-pointer"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="relative z-10 grid w-full max-w-[960px] grid-cols-12 gap-0 overflow-hidden rounded-[24px] border"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[18px] font-black transition-colors"
              style={{
                color: "var(--color-foreground)",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            >
              ×
            </button>

            <div
              className="relative col-span-5 aspect-square"
              style={{
                background:
                  "linear-gradient(160deg, rgba(235,0,40,0.28) 0%, #000 70%)",
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center text-[200px] font-black leading-none tracking-[-10px]"
                style={{ color: "var(--color-primary)", opacity: 0.55 }}
              >
                {speaker.name.charAt(0)}
              </span>
            </div>

            <div className="col-span-7 flex flex-col gap-4 p-10">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: "var(--color-primary)" }}
              >
                {speaker.role}
              </span>
              <h2
                className="text-[40px] font-black leading-[1.05] tracking-[-1px]"
                style={{ color: "var(--color-foreground)" }}
              >
                {speaker.name}
              </h2>
              <p
                className="text-[15px] leading-[1.7]"
                style={{ color: "var(--color-foreground)" }}
              >
                {speaker.oneLiner}
              </p>
              <p
                className="text-[14px] leading-[1.75]"
                style={{ color: "var(--color-foreground-muted)" }}
              >
                {speaker.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
