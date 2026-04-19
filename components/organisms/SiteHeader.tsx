"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import { CtaButton } from "@/components/atoms/CtaButton";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  nav: NavItem[];
  ctaLabel: string;
  onCtaClick?: () => void;
};

const isActiveRoute = (pathname: string, href: string) => {
  // Hash targets on home count as active only when on home.
  if (href.startsWith("/#")) return pathname === "/";
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export function SiteHeader({ nav, ctaLabel, onCtaClick }: SiteHeaderProps) {
  const pathname = usePathname() ?? "/";
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
      style={{
        height: "var(--header-height)",
        backgroundColor: "var(--color-background)",
        boxShadow: "var(--shadow-glow)",
      }}
    >
      <div className="relative mx-auto flex h-full w-full max-w-[var(--container-max)] items-center justify-between px-[80px]">
        <Logo />
        <nav className="flex items-center gap-[28px]">
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
            className="flex items-center gap-[28px]"
          >
            {nav.map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <NavLink
                  href={item.href}
                  active={isActiveRoute(pathname, item.href)}
                >
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <CtaButton onClick={onCtaClick}>{ctaLabel}</CtaButton>
        </nav>
      </div>
    </motion.header>
  );
}
