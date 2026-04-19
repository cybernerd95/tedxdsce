"use client";

import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { TeamCard } from "@/components/molecules/TeamCard";

type TeamMember = { name: string; role: string };

type TeamSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  members: TeamMember[];
};

export function TeamSection({
  eyebrow,
  title,
  subtitle,
  members,
}: TeamSectionProps) {
  return (
    <SectionWrapper id="team">
      <div className="flex flex-col gap-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m, i) => (
            <TeamCard key={m.name} name={m.name} role={m.role} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
