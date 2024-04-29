"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import Link from "next/link";
import { TheDot } from "./the-dot";
import { ThemeSwitch } from "./theme-switch";
import { UnderlineLink } from "./underline-link";
import posthog from "posthog-js";

export const HeaderNav = () => {
  const { navItems } = useSiteNavigation();
  return (
    <div className="z-50 fixed bottom-0 lg:top-0 lg:bottom-full left-0 right-0 p-2">
      <div className="flex flex-row justify-between font-medium uppercase text-xs tracking-wider px-4 lg:px-6 py-2 max-w-[96rem] mx-auto bg-white/75 dark:bg-black/75 backdrop-blur-2xl rounded-2xl">
        <Link
          href="/"
          className="flex flex-row gap-4 items-center"
          onClickCapture={() => {
            posthog.capture("underline_link_clicked", {
              href: "/",
              label: "Greg Hadala",
            });
          }}
        >
          <TheDot />
          <span>Greg Hadala</span>
          <span className="hidden lg:inline text-foreground/75">
            Product Designer & UI Engineer
          </span>
        </Link>
        <div className="justify-center items-center gap-8 flex flex-row">
          <nav className="flex gap-8">
            {navItems.map((item) => (
              <UnderlineLink key={item.href} href={item.href}>
                {item.label}
              </UnderlineLink>
            ))}
          </nav>
          {/* <ThemeToggle /> */}
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
