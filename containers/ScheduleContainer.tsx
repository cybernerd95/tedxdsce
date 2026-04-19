"use client";

import { SiteLayout } from "@/containers/SiteLayout";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ScheduleRow } from "@/components/molecules/ScheduleRow";
import { schedule, eventInfo } from "@/lib/siteConfig";

export function ScheduleContainer() {
  return (
    <SiteLayout>
      <SectionWrapper id="schedule">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Schedule"
            title="A full day of big ideas"
            subtitle={`${eventInfo.date} · ${eventInfo.venue}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />
          <div className="max-w-[820px]">
            {schedule.map((item, i) => (
              <ScheduleRow
                key={item.time + item.title}
                time={item.time}
                title={item.title}
                description={item.description}
                kind={item.kind}
                index={i}
                isLast={i === schedule.length - 1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SiteLayout>
  );
}
