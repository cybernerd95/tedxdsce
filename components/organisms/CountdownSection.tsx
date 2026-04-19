"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Countdown } from "@/components/atoms/Countdown";

type CountdownSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  targetIso: string;
};

export function CountdownSection({
  eyebrow,
  title,
  subtitle,
  targetIso,
}: CountdownSectionProps) {
  return (
    <SectionWrapper id="countdown">
      <div className="grid grid-cols-12 items-center gap-10">
        <div className="col-span-5">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="col-span-7"
        >
          <Countdown targetIso={targetIso} />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
