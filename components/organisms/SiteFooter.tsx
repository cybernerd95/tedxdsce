"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Logo } from "@/components/atoms/Logo";
import { FooterLink } from "@/components/atoms/FooterLink";

type FooterColumn = {
  items: { label: string; href: string }[];
};

type FooterContact = {
  address: string;
  email: string;
  phone: string;
};

type SiteFooterProps = {
  columns: FooterColumn[];
  contact: FooterContact;
  socials: { label: string; href: string; icon: string }[];
  copyright: string;
};

export function SiteFooter({
  columns,
  contact,
  socials,
  copyright,
}: SiteFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden"
      style={{
        height: "var(--footer-height)",
        backgroundColor: "var(--color-background)",
        boxShadow: "var(--shadow-glow-up)",
      }}
    >
      <div className="relative mx-auto h-full w-full max-w-[var(--container-max)] px-[80px] pt-[70px]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-6">
            <Logo variant="muted" />
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, rotate: -4 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="inline-flex h-9 w-9 items-center justify-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  <Image
                    src={s.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              {col.items.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          ))}

          <div
            className="flex w-[284px] flex-col gap-1 text-[12px] font-light leading-normal"
            style={{ color: "var(--color-foreground)" }}
          >
            <p>{contact.address}</p>
            <p className="mt-4">{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
        </div>

        <p
          className="absolute bottom-[70px] right-[80px] text-[12px] font-medium"
          style={{ color: "var(--color-foreground)" }}
        >
          <span className="font-light">{copyright}</span>{" "}
          <span
            className="font-black"
            style={{ color: "var(--color-primary)" }}
          >
            TEDx
          </span>{" "}
          <span className="font-light">DSCE. All rights reserved.</span>
        </p>
      </div>
    </motion.footer>
  );
}
