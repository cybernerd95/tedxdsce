"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";

type AboutPreviewProps = {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
};

export function AboutPreview({
  eyebrow,
  title,
  blurb,
  href,
}: AboutPreviewProps) {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="max-w-[620px] text-[16px] leading-[1.75]"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            {blurb}
          </motion.p>
          <Link
            href={href}
            className="group mt-2 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: "var(--color-primary)" }}
          >
            <span>About TEDxDSCE</span>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="col-span-5 flex items-center justify-center rounded-[24px] border"
          style={{
            borderColor: "var(--color-border)",
            minHeight: "320px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(235,0,40,0.35), transparent 55%), linear-gradient(135deg, #0a0a0a 0%, #000 100%)",
          }}
        >
          <span
            className="text-[180px] font-black leading-none tracking-[-10px]"
            style={{ color: "var(--color-primary)" }}
          >
            x
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
