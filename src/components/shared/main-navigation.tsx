"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScrollPosition } from "rooks";
import { WordCycleAnimation } from "../typography/hello";
import { Menu } from "./menu";
import { MobileNavigation } from "./menu-drawer";
import { ThemeSwitch } from "./theme-switch";

export const MainNavigation = () => {
  const position = useWindowScrollPosition();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (position.scrollY > 100) {
      console.log("scrolled");
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [position]);

  return (
    <div>
      <div className="fixed top-0 right-0 z-[1000] md:hidden grid place-content-center">
        <MobileNavigation />
      </div>

      <div
        className={`overflow-hidden transition-all flex flex-row h-12 md:h-12 justify-between gap-4 fixed top-0 left-0 right-0 items-center z-[900] ${
          isScrolled ? "bg-background" : ""
        }`}
      >
        <div className="flex-grow font-normal tracking-tight flex uppercase pl-4 md:pl-4 lg:pl-6">
          <Link href={"/"} className="flex">
            Greg Hadala &mdash;&nbsp;
            <WordCycleAnimation
              words={[
                "Designer",
                "Developer",
                "Maker",
                "Problem Solver",
                "Thinker",
                "Doer",
                "Learner",
                "Team Player",
                "Dreamer",
                "Builder",
                "Fixer",
              ]}
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-3">
          <Menu />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
