"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const { navItems } = useSiteNavigation();

  const pathname = usePathname();
  const linkClass = (href: string) =>
    cn`font-normal tracking-tight uppercase transition-opacity ${
      pathname === href ? "shadow-nav" : "opacity-50 hover:opacity-100"
    }`;
  return (
    <nav className="flex flex-row items-center gap-4 uppercase  transition-opacity">
      {navItems.map(({ label, href }, index) => (
        <Link href={href} className={linkClass(href)} key={`nav-item-${index}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
};
