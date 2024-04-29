"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { Button } from "../ui/button";
import { TheDot } from "./the-dot";
import { ThemeSwitch } from "./theme-switch";
import { UnderlineLink } from "./underline-link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeaderNav = () => {
  const pathname = usePathname();
  const { navItems } = useSiteNavigation();
  const isProjectPage = pathname.includes("/project");
  return (
    <div className="z-50 fixed bottom-0 lg:p-4 p-0 lg:left-1/2 lg:-translate-x-1/2 left-0 right-0">
      <div className="flex flex-row justify-between font-medium uppercase gap-8 text-xs tracking-wider px-2 py-2 max-w-[96rem] mx-auto bg-white/75 dark:bg-black/75 backdrop-blur-2xl lg:rounded-full rounded-t-2xl">
        <Link
          href="/"
          className={cn(
            "flex flex-row gap-4 items-center absolute transition-all animate-in",
            isProjectPage ? "scale-100" : "scale-0"
          )}
          onClickCapture={() => {
            posthog.capture("underline_link_clicked", {
              href: "/",
              label: "Greg Hadala",
            });
          }}
        >
          <Button variant="filled" size="icon">
            <ArrowLeft className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </Link>

        <Link
          href="/"
          className="flex flex-row gap-4 items-center ml-2"
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
