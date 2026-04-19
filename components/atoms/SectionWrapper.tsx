import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-[var(--header-height)] ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[80px] py-[120px]">
        {children}
      </div>
    </section>
  );
}
