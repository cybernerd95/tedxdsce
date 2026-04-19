"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";

type AboutSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
};

export function AboutSection({
  eyebrow,
  title,
  paragraphs,
  stats,
}: AboutSectionProps) {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col gap-8">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="flex max-w-[620px] flex-col gap-5"
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.75]"
                style={{ color: "var(--color-foreground-muted)" }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="col-span-5 flex flex-col gap-4"
        >
          <div
            className="relative aspect-square w-full overflow-hidden rounded-[24px] border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(235,0,40,0.35), transparent 55%), linear-gradient(135deg, #0a0a0a 0%, #000 100%)",
              }}
            />
            <p
              className="absolute bottom-6 left-6 right-6 text-[120px] font-black leading-[0.9] tracking-[-6px]"
              style={{ color: "var(--color-primary)" }}
            >
              X
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="flex flex-col items-start gap-1 rounded-[16px] border px-4 py-4"
                style={{
                  borderColor: "var(--color-divider)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <span
                  className="text-[28px] font-black leading-none"
                  style={{ color: "var(--color-primary)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-foreground-muted)" }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
