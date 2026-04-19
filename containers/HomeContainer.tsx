"use client";

import { useRouter } from "next/navigation";
import { SiteLayout } from "@/containers/SiteLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutPreview } from "@/components/organisms/AboutPreview";
import { ThemeHighlight } from "@/components/organisms/ThemeHighlight";
import { SpeakersPreview } from "@/components/organisms/SpeakersPreview";
import { CountdownSection } from "@/components/organisms/CountdownSection";
import { SponsorsPreview } from "@/components/organisms/SponsorsPreview";
import { ContactSection } from "@/components/organisms/ContactSection";
import { FaqSection } from "@/components/organisms/FaqSection";
import {
  eventInfo,
  heroCopy,
  speakers,
  sponsors,
  siteContact,
  faqs,
} from "@/lib/siteConfig";

export function HomeContainer() {
  const router = useRouter();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SiteLayout onCtaClick={() => scrollTo("contact")}>
      <HeroSection
        eventName={eventInfo.name}
        theme={eventInfo.theme}
        date={eventInfo.date}
        venue={eventInfo.venue}
        lede={heroCopy.lede}
        primaryCta={heroCopy.primaryCta}
        secondaryCta={heroCopy.secondaryCta}
        onPrimaryClick={() => scrollTo("contact")}
        onSecondaryClick={() => scrollTo("countdown")}
      />

      <AboutPreview
        eyebrow="About"
        title="TEDXDSCE"
        blurb="TEDxDSCE 2026 brings together innovators, thinkers, and creators to explore ideas that inspire change and shape the future. Join us for a day of powerful talks and meaningful conversations."
        href="/about"
      />

      <ThemeHighlight
        eyebrow="2026 Theme"
        year={eventInfo.name.split(" ").pop() ?? "2026"}
        theme={eventInfo.theme}
        tagline=" At TEDxDSCE 2026, we explore The Idea Effect — how a single idea can spark change, influence minds, and create lasting impact. Join us for a day of powerful talks, bold perspectives, and transformative stories."
        learnMoreHref="/about"
      />

      <SpeakersPreview
        eyebrow="Speakers"
        title="Voices on the stage"
        subtitle="A preview of the speakers joining us."
        speakers={speakers.slice(0, 3)}
        allHref="/speakers"
      />

      <CountdownSection
        eyebrow="Countdown"
        title="The stage opens in"
        subtitle={`Save the date — ${eventInfo.date} at ${eventInfo.venue}.`}
        targetIso={eventInfo.dateIso}
      />

      <SponsorsPreview
        eyebrow="Partners"
        title="Made possible by"
        subtitle="Our partners who help spread the ideas."
        sponsors={sponsors}
      />

      <ContactSection
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Questions, partnerships, or press — drop us a note."
        contact={siteContact}
        onSubmit={() => router.refresh()}
      />

      <FaqSection
        eyebrow="FAQs"
        title="Questions, answered"
        subtitle="The essentials before you join us."
        items={faqs}
      />
    </SiteLayout>
  );
}
