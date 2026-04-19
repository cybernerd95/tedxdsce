"use client";

import { SiteLayout } from "@/containers/SiteLayout";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { TeamCard } from "@/components/molecules/TeamCard";
import { team, type TeamMember } from "@/lib/siteConfig";

const GROUP_ORDER: TeamMember["group"][] = [
  "Organizers",
  "Heads",
  "Volunteers",
];

const GROUP_COPY: Record<TeamMember["group"], string> = {
  Organizers:
    "Lorem ipsum dolor sit amet. The curators and licensees who set the stage.",
  Heads:
    "Lorem ipsum dolor sit amet. The heads who lead each department of the event.",
  Volunteers:
    "Lorem ipsum dolor sit amet. The volunteers who make the day happen on the ground.",
};

export function TeamContainer() {
  const grouped = GROUP_ORDER.map((group) => ({
    group,
    members: team.filter((m) => m.group === group),
  })).filter((g) => g.members.length > 0);

  return (
    <SiteLayout>
      <SectionWrapper id="team">
        <div className="flex flex-col gap-16">
          <SectionHeading
            eyebrow="Team"
            title="The humans behind the X"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the crew building TEDxDSCE 2026."
          />

          {grouped.map(({ group, members }) => (
            <div key={group} className="flex flex-col gap-8">
              <div className="flex items-end justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {group}
                  </span>
                  <p
                    className="max-w-[520px] text-[14px] leading-[1.6]"
                    style={{ color: "var(--color-foreground-muted)" }}
                  >
                    {GROUP_COPY[group]}
                  </p>
                </div>
                <span
                  className="text-[13px] tabular-nums"
                  style={{ color: "var(--color-foreground-muted)" }}
                >
                  {members.length}{" "}
                  {members.length === 1 ? "member" : "members"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {members.map((m, i) => (
                  <TeamCard
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </SiteLayout>
  );
}
