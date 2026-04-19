"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{
        x: 4,
        color: "var(--color-primary)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="block text-[12px] font-light leading-[32px] whitespace-nowrap"
      style={{ color: "var(--color-foreground)" }}
    >
      {children}
    </motion.a>
  );
}
