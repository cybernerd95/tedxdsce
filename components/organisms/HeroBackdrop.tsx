"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

type HeroBackdropProps = {
  imageSrc: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function HeroBackdrop({
  imageSrc,
  imageAlt = "",
  children,
}: HeroBackdropProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "720px",
        backgroundColor: "var(--color-background)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover pointer-events-none select-none"
        />
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[var(--container-max)] items-center px-[80px]">
        {children}
      </div>
    </section>
  );
}
