import type { Metadata } from "next";
import { SpeakersContainer } from "@/containers/SpeakersContainer";

export const metadata: Metadata = {
  title: "Speakers — TEDxDSCE",
  description: "Meet the speakers for TEDxDSCE 2026.",
};

export default function SpeakersPage() {
  return <SpeakersContainer />;
}
