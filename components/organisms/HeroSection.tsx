"use client";

import { motion } from "framer-motion";
import { HeroBackdrop } from "@/components/organisms/HeroBackdrop";
import { CtaButton } from "@/components/atoms/CtaButton";

type HeroSectionProps = {
  eventName: string;
  theme: string;
  date: string;
  venue: string;
  lede: string;
  primaryCta: string;
  secondaryCta: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export function HeroSection({
  eventName,
  theme,
  date,
  venue,
  lede,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <div id="home">
      <HeroBackdrop
        imageSrc="/assets/images/hero-pattern.png"
        imageAlt="TEDxDSCE X pattern backdrop"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
          className="flex max-w-[760px] flex-col gap-6"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[13px] font-semibold uppercase tracking-[0.4em]"
            style={{ color: "var(--color-primary)" }}
          >
            {eventName}
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[76px] font-black leading-[1.02] tracking-[-2.5px]"
            style={{ color: "var(--color-foreground)" }}
          >
            {theme.split(" ").map((word, i, arr) => (
              <span key={`${word}-${i}`}>
                {i === arr.length - 1 ? (
                  <span style={{ color: "var(--color-primary)" }}>{word}</span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-medium"
            style={{ color: "var(--color-foreground)" }}
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              {date}
            </span>
            <span
              className="h-3 w-px"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              aria-hidden
            />
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              {venue}
            </span>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[580px] text-[17px] leading-[1.6]"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            {lede}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-2 flex items-center gap-4"
          >
            <CtaButton onClick={onPrimaryClick} className="w-[200px]">
              {primaryCta}
            </CtaButton>
            <motion.button
              type="button"
              onClick={onSecondaryClick}
              whileHover={{ scale: 1.04, borderColor: "var(--color-primary)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="inline-flex h-[50px] items-center justify-center rounded-full border-[1.5px] px-6 text-[16px] font-medium"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "var(--color-foreground)",
                backgroundColor: "transparent",
              }}
            >
              {secondaryCta}
            </motion.button>
          </motion.div>
        </motion.div>
      </HeroBackdrop>
    </div>
  );
}
