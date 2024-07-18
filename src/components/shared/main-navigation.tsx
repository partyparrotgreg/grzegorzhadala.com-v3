"use client";

import { usePathname } from "next/navigation";
import { CustomLink } from "./custom-link";
import { TheDot } from "./the-dot";
import { ThemeToggle } from "./theme-toggle";

export const MainNavigation = () => {
  const pathname = usePathname();
  return pathname === "/" || pathname === "/about" ? (
    <div className="sticky bottom-0 lg:top-0 bg-background left-0 right-0 flex flex-row gap-4 justify-between z-[800] items-center uppercase border-b section-padding">
      <TheDot />
      <CustomLink href="/">Home</CustomLink>
      <CustomLink href="/about">About</CustomLink>
      <ThemeToggle />
    </div>
  ) : null;
};
