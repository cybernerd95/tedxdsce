"use client";

import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { SpeakerCard } from "@/components/molecules/SpeakerCard";

type Speaker = { name: string; role: string; bio: string };

type SpeakersSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  speakers: Speaker[];
};

export function SpeakersSection({
  eyebrow,
  title,
  subtitle,
  speakers,
}: SpeakersSectionProps) {
  return (
    <SectionWrapper id="speakers">
      <div className="flex flex-col gap-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
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
