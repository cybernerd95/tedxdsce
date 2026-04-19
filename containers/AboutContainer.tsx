"use client";

import { motion } from "framer-motion";
import { SiteLayout } from "@/containers/SiteLayout";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { aboutPageContent, eventInfo } from "@/lib/siteConfig";

function PageHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-background)",
        boxShadow: "var(--shadow-glow)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 40%, rgba(235,0,40,0.25), transparent 55%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-[80px] py-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-w-[720px] flex-col gap-4"
        >
          <span
            className="text-[13px] font-semibold uppercase tracking-[0.4em]"
            style={{ color: "var(--color-primary)" }}
          >
            About
          </span>
          <h1
            className="text-[72px] font-black leading-[1.02] tracking-[-2px]"
            style={{ color: "var(--color-foreground)" }}
          >
            Ideas worth{" "}
            <span style={{ color: "var(--color-primary)" }}>spreading</span>
          </h1>
          <p
            className="max-w-[620px] text-[17px] leading-[1.6]"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            {eventInfo.name} · {eventInfo.theme}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutContainer() {
  return (
    <SiteLayout>
      <PageHero />

      {aboutPageContent.sections.map((section, idx) => (
        <SectionWrapper
          key={section.eyebrow}
          id={section.eyebrow.toLowerCase().replace(/\s+/g, "-")}
          className={idx % 2 === 1 ? "bg-[var(--color-surface)]" : ""}
        >
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4">
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="col-span-8 flex flex-col gap-5"
            >
              {section.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[1.75]"
                  style={{ color: "var(--color-foreground-muted)" }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>
      ))}
    </SiteLayout>
  );
}
