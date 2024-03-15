"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScrollPosition, useWindowSize } from "rooks";
import { ThemeSwitch } from "./theme-switch";
export const MainNavigation = () => {
  const position = useWindowScrollPosition();
  const size = useWindowSize();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (!size) return;
    if (position.scrollY > (size.innerHeight || 0) - 48) setIsScrolled(true);
    else setIsScrolled(false);
  }, [position.scrollY, size]);

  return (
    <div
      className={`transition-all flex flex-row h-12 p-2 justify-between gap-4 fixed top-0 left-0 right-0 items-center z-[800] ${
        isScrolled ? "bg-background" : ""
      }`}
    >
      <div className="flex-grow font-normal tracking-tight flex gap-4 uppercase">
        <div className="text-brand ml-2">HELLO!</div>
        <Link href={"/"}>Greg Hadala &mdash; Designer & Developer</Link>
      </div>
      <nav className="flex flex-row items-center gap-4 uppercase transition-all">
        <Link href="/" className="shadow-brand shadow-nav">
          Start
        </Link>
        <Link href="/projects">Work</Link>
        <Link href="/challenges">Challenges</Link>
        <Link href="/sandbox">Sandbox</Link>
      </nav>
      <ThemeSwitch />
    </div>
  );
};
