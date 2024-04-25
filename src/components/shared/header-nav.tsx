"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { UnderlineLink } from "./underline-link";

export const HeaderNav = () => {
  const { navItems } = useSiteNavigation();
  return (
    <div className="flex flex-row justify-between z-50 relative">
      <Link href="/" className="flex flex-row gap-2">
        Greg Hadala{" "}
        <span className="hidden lg:inline text-foreground/75">
          &mdash; Product Designer & UI Engineer
        </span>
      </Link>
      <div className="hidden justify-center items-center gap-8 md:flex">
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
