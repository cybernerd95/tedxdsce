import type { Metadata } from "next";
import { ScheduleContainer } from "@/containers/ScheduleContainer";

export const metadata: Metadata = {
  title: "Schedule — TEDxDSCE",
  description: "The full day schedule for TEDxDSCE 2026.",
};

export default function SchedulePage() {
  return <ScheduleContainer />;
}
