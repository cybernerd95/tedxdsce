"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  active?: boolean;
};

export function NavLink({ href, children, active = false }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="relative inline-flex items-center whitespace-nowrap text-[16px] leading-normal"
      style={{
        color: active ? "var(--color-primary)" : "var(--color-foreground)",
        fontWeight: active ? 600 : 400,
      }}
    >
      {children}
      <motion.span
        aria-hidden
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute -bottom-1 left-0 block h-[2px] w-full origin-left"
        style={{ backgroundColor: "var(--color-primary)" }}
      />
    </motion.a>
  );
}
