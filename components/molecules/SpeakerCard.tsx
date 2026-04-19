"use client";

import { motion } from "framer-motion";

type SpeakerCardProps = {
  name: string;
  role: string;
  bio: string;
  index: number;
  onClick?: () => void;
};

export function SpeakerCard({
  name,
  role,
  bio,
  index,
  onClick,
}: SpeakerCardProps) {
  const Root = onClick ? motion.button : motion.article;

  return (
    <Root
      onClick={onClick}
      type={onClick ? "button" : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={`group flex flex-col gap-4 overflow-hidden rounded-[20px] border text-left ${
        onClick ? "cursor-pointer" : ""
      }`}
      style={{
        borderColor: "var(--color-divider)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(235,0,40,0.18) 0%, #000 65%)",
        }}
      >
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center text-[140px] font-black leading-none tracking-[-8px]"
          style={{ color: "var(--color-primary)", opacity: 0.5 }}
        >
          {name.charAt(0)}
        </motion.span>
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
          }}
        />
      </div>

      <div className="flex flex-col gap-2 px-5 pb-5">
        <h3
          className="text-[20px] font-bold leading-tight"
          style={{ color: "var(--color-foreground)" }}
        >
          {name}
        </h3>
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--color-primary)" }}
        >
          {role}
        </p>
        <p
          className="mt-1 text-[13px] leading-[1.6]"
          style={{ color: "var(--color-foreground-muted)" }}
        >
          {bio}
        </p>
      </div>
    </Root>
  );
}
