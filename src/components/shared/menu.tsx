"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const { navItems } = useSiteNavigation();
  const { contextSafe } = useGSAP();

  contextSafe(() => {
    gsap.set(".nav-item", {
      yPercent: 0,
    });
  });

  const pathname = usePathname();
  const linkClass = (href: string) =>
    cn`font-normal tracking-tight uppercase transition-opacity ${
      pathname === href ? "shadow-nav" : "opacity-50 hover:opacity-100"
    }`;
  return (
    <nav className="flex flex-row items-center gap-4">
      {navItems.map(({ label, href }, index) => (
        <Link href={href} key={`nav-item-${index}`} className={linkClass(href)}>
          {label}
        </Link>
      ))}
    </nav>
  );
};
