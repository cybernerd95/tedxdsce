"use client";

import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  role: string;
  index: number;
};

export function TeamCard({ name, role, index }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-3 rounded-[18px] border p-5"
      style={{
        borderColor: "var(--color-divider)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div
        className="flex aspect-square w-full items-center justify-center rounded-[12px] text-[44px] font-black tracking-[-2px]"
        style={{
          background:
            "linear-gradient(140deg, rgba(235,0,40,0.28) 0%, rgba(0,0,0,0.8) 100%)",
          color: "var(--color-primary)",
        }}
      >
        {initials}
      </div>
      <div className="flex flex-col gap-0.5">
        <h3
          className="text-[16px] font-bold leading-tight"
          style={{ color: "var(--color-foreground)" }}
        >
          {name}
        </h3>
        <p
          className="text-[12px] font-medium uppercase tracking-[0.16em]"
          style={{ color: "var(--color-primary)" }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
}
