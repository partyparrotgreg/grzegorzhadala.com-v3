"use client";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { usePathname } from "next/navigation";
import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { cn } from "@/lib/utils";
import { ScrollTopButton } from "./scroll-top";

export const BottomNav = () => {
  const pathname = usePathname();
  const { navItems } = useSiteNavigation();
  return (
    <div className="fixed bg-brand left-0 right-0 -bottom-px h-12 z-[999]">
      <div className="flex flex-row justify-between items-center">
        <ThemeSwitch />

        <nav
          role="navigation"
          className="flex-grow items-center justify-center flex"
        >
          <ul className="list-none flex flex-row gap-4">
            {navItems.map((item, index) => (
              <li className="inline-flex" key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    pathname === item.href
                      ? "text-white"
                      : "text-white opacity-50",
                    "md:text-xl font-medium  uppercase hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ScrollTopButton />
      </div>
    </div>
  );
};
