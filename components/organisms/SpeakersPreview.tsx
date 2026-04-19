"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { SpeakerCard } from "@/components/molecules/SpeakerCard";

type Speaker = { name: string; role: string; bio: string };

type SpeakersPreviewProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  speakers: Speaker[];
  allHref: string;
};

export function SpeakersPreview({
  eyebrow,
  title,
  subtitle,
  speakers,
  allHref,
}: SpeakersPreviewProps) {
  return (
    <SectionWrapper id="speakers-preview">
      <div className="flex flex-col gap-10">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <Link
            href={allHref}
            className="group hidden items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em] md:inline-flex"
            style={{ color: "var(--color-primary)" }}
          >
            <span>All speakers</span>
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <SpeakerCard
              key={s.name}
              name={s.name}
              role={s.role}
              bio={s.bio}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
