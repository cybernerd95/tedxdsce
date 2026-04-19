import type { Metadata } from "next";
import { AboutContainer } from "@/containers/AboutContainer";

export const metadata: Metadata = {
  title: "About — TEDxDSCE",
  description:
    "About TED, TEDx, and the TEDxDSCE chapter at Dayananda Sagar College of Engineering.",
};

export default function AboutPage() {
  return <AboutContainer />;
}
