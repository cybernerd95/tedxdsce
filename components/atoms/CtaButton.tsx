"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type CtaButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

export function CtaButton({ children, className, ...rest }: CtaButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.04,
        boxShadow: "4px 8px 24px 4px rgba(235, 0, 40, 0.45)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`inline-flex h-[50px] w-[150px] items-center justify-center rounded-full border-[1.5px] border-solid text-[20px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className ?? ""}`}
      style={{
        backgroundColor: "var(--color-primary)",
        borderColor: "var(--color-primary)",
        boxShadow: "var(--shadow-cta)",
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
