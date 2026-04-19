"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  index: number;
};

export function FaqItem({ question, answer, index }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      className="overflow-hidden rounded-[16px] border"
      style={{
        borderColor: open ? "var(--color-primary)" : "var(--color-divider)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        <span
          className="text-[16px] font-semibold leading-snug"
          style={{ color: "var(--color-foreground)" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[18px] font-black"
          style={{
            color: "var(--color-primary)",
            backgroundColor: "rgba(235,0,40,0.12)",
          }}
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-6 text-[14px] leading-[1.7]"
              style={{ color: "var(--color-foreground-muted)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
