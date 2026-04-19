"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import {
  siteNav,
  siteFooterColumns,
  siteContact,
  siteSocials,
  siteCopyright,
} from "@/lib/siteConfig";

type SiteLayoutProps = {
  children: ReactNode;
  onCtaClick?: () => void;
};

export function SiteLayout({ children, onCtaClick }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <SiteHeader
        nav={siteNav}
        ctaLabel="Buy Ticket"
        onCtaClick={onCtaClick}
      />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter
        columns={siteFooterColumns}
        contact={siteContact}
        socials={siteSocials}
        copyright={siteCopyright}
      />
    </div>
  );
}
