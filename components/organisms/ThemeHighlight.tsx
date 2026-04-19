"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";

type ThemeHighlightProps = {
  eyebrow: string;
  theme: string;
  tagline: string;
  learnMoreHref: string;
  year: string;
};

export function ThemeHighlight({
  eyebrow,
  theme,
  tagline,
  learnMoreHref,
  year,
}: ThemeHighlightProps) {
  return (
    <SectionWrapper id="theme">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[32px] border"
        style={{
          borderColor: "var(--color-border)",
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(235,0,40,0.35) 0%, transparent 55%), linear-gradient(135deg, #140003 0%, #000 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute -right-16 -top-20 text-[420px] font-black leading-none tracking-[-20px] opacity-[0.08] select-none"
          style={{ color: "var(--color-primary)" }}
          aria-hidden
        >
          X
        </span>

        <div className="relative z-10 flex flex-col gap-6 px-12 py-16">
          <span
            className="text-[12px] font-semibold uppercase tracking-[0.32em]"
            style={{ color: "var(--color-primary)" }}
          >
            {eyebrow} · {year}
          </span>
          <h2
            className="max-w-[820px] text-[72px] font-black leading-[1.02] tracking-[-2px]"
            style={{ color: "var(--color-foreground)" }}
          >
            {theme}
          </h2>
          <p
            className="max-w-[640px] text-[18px] leading-[1.6]"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            {tagline}
          </p>
          <Link
            href={learnMoreHref}
            className="group mt-4 inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: "var(--color-primary)" }}
          >
            <span>Read the theme</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              aria-hidden
            >
              →
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
