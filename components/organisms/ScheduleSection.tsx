"use client";

import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ScheduleRow } from "@/components/molecules/ScheduleRow";

type ScheduleItem = { time: string; title: string; description: string };

type ScheduleSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: ScheduleItem[];
};

export function ScheduleSection({
  eyebrow,
  title,
  subtitle,
  items,
}: ScheduleSectionProps) {
  return (
    <SectionWrapper id="schedule">
      <div className="flex flex-col gap-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="max-w-[820px]">
          {items.map((item, i) => (
            <ScheduleRow
              key={item.time + item.title}
              time={item.time}
              title={item.title}
              description={item.description}
              index={i}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
