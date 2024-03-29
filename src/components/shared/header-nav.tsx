"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { UnderlineLink } from "./underline-link";
import { ThemeToggle } from "./theme-toggle";

export const HeaderNav = () => {
  const { navItems } = useSiteNavigation();
  return (
    <div className="flex flex-row justify-between z-50 relative">
      <div className=" text-base font-medium text-foreground">GREG HADALA</div>
      <div className="hidden justify-start items-center gap-8 md:flex">
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <UnderlineLink key={item.href} href={item.href}>
              {item.label}
            </UnderlineLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
};