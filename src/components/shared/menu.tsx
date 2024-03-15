"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const pathname = usePathname();
  const linkClass = (href: string) =>
    cn`font-normal tracking-tight uppercase transition-opacity ${
      pathname === href ? "shadow-nav" : "opacity-50 hover:opacity-100"
    }`;
  return (
    <nav className="flex flex-row items-center gap-4 uppercase  transition-opacity">
      <Link href="/" className={linkClass("/")}>
        <div>Start</div>
      </Link>
      <Link href="/projects" className={linkClass("/projects")}>
        Work
      </Link>
      <Link href="/challenges" className={linkClass("/challenges")}>
        Challenges
      </Link>
      <Link href="/sandbox" className={linkClass("/sandbox")}>
        Sandbox
      </Link>
    </nav>
  );
};
