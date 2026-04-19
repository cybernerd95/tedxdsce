"use client";

import { useState } from "react";
import { SiteLayout } from "@/containers/SiteLayout";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { SpeakerCard } from "@/components/molecules/SpeakerCard";
import { SpeakerDetailModal } from "@/components/molecules/SpeakerDetailModal";
import { speakers, type Speaker } from "@/lib/siteConfig";

export function SpeakersContainer() {
  const [active, setActive] = useState<Speaker | null>(null);

  return (
    <SiteLayout>
      <SectionWrapper id="speakers">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Speakers"
            title="The 2026 lineup"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet every voice on stage this year — click a card for the full bio."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s, i) => (
              <SpeakerCard
                key={s.slug}
                name={s.name}
                role={s.role}
                bio={s.oneLiner}
                index={i}
                onClick={() => setActive(s)}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SpeakerDetailModal speaker={active} onClose={() => setActive(null)} />
    </SiteLayout>
  );
}
