"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  subtitle?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  subtitle,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`flex max-w-[780px] flex-col gap-3 ${alignClass}`}
    >
      {eyebrow ? (
        <span
          className="text-[12px] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "var(--color-primary)" }}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className="text-[44px] font-black leading-[1.1] tracking-[-1px]"
        style={{ color: "var(--color-foreground)" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className="text-[16px] leading-[1.6]"
          style={{ color: "var(--color-foreground-muted)" }}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
