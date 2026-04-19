"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { CtaButton } from "@/components/atoms/CtaButton";

type Contact = { address: string; email: string; phone: string };

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  contact: Contact;
  onSubmit?: () => void;
};

const inputBaseClass =
  "w-full rounded-[12px] border bg-transparent px-4 py-3 text-[14px] placeholder:text-[rgba(255,255,255,0.4)] focus:outline-none transition-colors";

export function ContactSection({
  eyebrow,
  title,
  subtitle,
  contact,
  onSubmit,
}: ContactSectionProps) {
  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-5 flex flex-col gap-8">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex flex-col gap-5"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col gap-1"
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: "var(--color-primary)" }}
              >
                Address
              </span>
              <span
                className="text-[14px] leading-[1.6]"
                style={{ color: "var(--color-foreground)" }}
              >
                {contact.address}
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col gap-1"
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: "var(--color-primary)" }}
              >
                Email
              </span>
              <span
                className="text-[14px]"
                style={{ color: "var(--color-foreground)" }}
              >
                {contact.email}
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col gap-1"
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: "var(--color-primary)" }}
              >
                Phone
              </span>
              <span
                className="text-[14px]"
                style={{ color: "var(--color-foreground)" }}
              >
                {contact.phone}
              </span>
            </motion.li>
          </motion.ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
          className="col-span-7 flex flex-col gap-4 rounded-[24px] border p-8"
          style={{
            borderColor: "var(--color-divider)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className={inputBaseClass}
              style={{
                borderColor: "var(--color-divider)",
                color: "var(--color-foreground)",
              }}
            />
            <input
              type="email"
              placeholder="Your email"
              className={inputBaseClass}
              style={{
                borderColor: "var(--color-divider)",
                color: "var(--color-foreground)",
              }}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={inputBaseClass}
            style={{
              borderColor: "var(--color-divider)",
              color: "var(--color-foreground)",
            }}
          />
          <textarea
            rows={6}
            placeholder="Your message"
            className={`${inputBaseClass} resize-none`}
            style={{
              borderColor: "var(--color-divider)",
              color: "var(--color-foreground)",
            }}
          />
          <div className="flex items-center justify-end pt-2">
            <CtaButton type="submit" className="w-[180px]">
              Send Message
            </CtaButton>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
