"use client";

import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { FaqItem } from "@/components/molecules/FaqItem";

type Faq = { question: string; answer: string };

type FaqSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: Faq[];
};

export function FaqSection({
  eyebrow,
  title,
  subtitle,
  items,
}: FaqSectionProps) {
  return (
    <SectionWrapper id="faqs">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-5">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </div>
        <div className="col-span-7 flex flex-col gap-3">
          {items.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
