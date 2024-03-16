"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScrollPosition, useWindowSize } from "rooks";
import { ThemeSwitch } from "./theme-switch";
import { Menu } from "./menu";
import { WordCycleAnimation } from "../typography/hello";

export const MainNavigation = () => {
  const position = useWindowScrollPosition();
  const size = useWindowSize();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (!size) return;
    if (position.scrollY > (size.innerHeight || 0)) setIsScrolled(true);
    else setIsScrolled(false);
  }, [position.scrollY, size]);

  return (
    <div
      className={`overflow-hidden transition-all flex flex-row h-12 justify-between gap-4 fixed top-0 left-0 right-0 items-center z-[800] ${
        isScrolled ? "bg-background" : ""
      }`}
    >
      <div className="flex-grow font-normal tracking-tight flex uppercase pl-6">
        {/* <div className="text-brand ml-4">HELLO!</div> */}

        <Link href={"/"}>Greg Hadala &mdash;&nbsp;</Link>
        <WordCycleAnimation
          words={[
            "Designer",
            "Developer",
            "Creator",
            "Maker",
            "Problem Solver",
            "Thinker",
            "Doer",
            "Learner",
            "Teacher",
            "Leader",
            "Team Player",
            "Visionary",
            "Dreamer",
            "Builder",
            "Fixer",
            "Tinkerer",
            "Craftsman",
          ]}
        />
      </div>
      <Menu />
      <ThemeSwitch />
    </div>
  );
};
