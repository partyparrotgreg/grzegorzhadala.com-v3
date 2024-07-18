"use client";

import { menu } from "@/lib/nav";
import { usePathname } from "next/navigation";
import { CustomLink } from "./custom-link";
import { TheDot } from "./the-dot";
import { ThemeToggle } from "./theme-toggle";

export const MainNavigation = () => {
  const pathname = usePathname();
  return pathname === "/" || pathname === "/about" || pathname === "/lab" ? (
    <div className="fixed lg:sticky bottom-0 lg:top-0 bg-background left-0 right-0 flex flex-row gap-4 justify-between z-[800] items-center uppercase border-t lg:border-b section-padding lg:border-t-0">
      <TheDot />
      {menu.map((item) => (
        <CustomLink
          key={item.id}
          href={item.href}
          className="text-sm tracking-wider"
        >
          {item.label}
        </CustomLink>
      ))}
      <ThemeToggle />
    </div>
  ) : null;
};
