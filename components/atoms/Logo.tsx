import type { CSSProperties } from "react";

type LogoProps = {
  /** Muted variant is used in the footer where the DSCE text is slightly dimmed. */
  variant?: "default" | "muted";
  className?: string;
};

export function Logo({ variant = "default", className }: LogoProps) {
  const wordmarkColor: CSSProperties["color"] =
    variant === "muted"
      ? "var(--color-foreground-muted)"
      : "var(--color-foreground)";
  const taglineColor: CSSProperties["color"] =
    variant === "muted"
      ? "var(--color-foreground-muted)"
      : "var(--color-foreground)";

  return (
    <div className={`flex flex-col gap-1 select-none ${className ?? ""}`}>
      <p
        className="text-[36px] font-black leading-[1.1] tracking-[-0.72px]"
        style={{ color: "var(--color-primary)" }}
      >
        TEDx{" "}
        <span
          className="font-light tracking-[-1.44px]"
          style={{ color: wordmarkColor }}
        >
          DSCE
        </span>
      </p>
      <p
        className="text-[12px] leading-normal"
        style={{ color: taglineColor }}
      >
        <span
          className="font-black"
          style={{ color: "var(--color-primary)" }}
        >
          x
        </span>
        {" = Independently organised TED event"}
      </p>
    </div>
  );
}
