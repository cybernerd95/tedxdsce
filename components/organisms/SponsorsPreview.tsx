"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";

type Sponsor = { name: string; tier: string };

type SponsorsPreviewProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  sponsors: Sponsor[];
};

export function SponsorsPreview({
  eyebrow,
  title,
  subtitle,
  sponsors,
}: SponsorsPreviewProps) {
  return (
    <SectionWrapper id="sponsors">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
              className="flex aspect-[3/1] flex-col items-center justify-center rounded-[14px] border px-4"
              style={{
                borderColor: "var(--color-divider)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span
                className="text-[15px] font-bold"
                style={{ color: "var(--color-foreground)" }}
              >
                {s.name}
              </span>
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-primary)" }}
              >
                {s.tier}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
