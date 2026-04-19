import type { Metadata } from "next";
import { TeamContainer } from "@/containers/TeamContainer";

export const metadata: Metadata = {
  title: "Team — TEDxDSCE",
  description:
    "Meet the organizers, heads, and volunteers behind TEDxDSCE 2026.",
};

export default function TeamPage() {
  return <TeamContainer />;
}
