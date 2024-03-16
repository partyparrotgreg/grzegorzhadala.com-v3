"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScrollPosition, useWindowSize } from "rooks";
import { ThemeSwitch } from "./theme-switch";
import { Menu } from "./menu";
import { WordCycleAnimation } from "../typography/hello";

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
    <div
      className={`overflow-hidden transition-all flex flex-row h-12 justify-between gap-4 fixed top-0 left-0 right-0 items-center z-[900] ${
        isScrolled ? "bg-background" : ""
      }`}
    >
      <div className="flex-grow font-normal tracking-tight flex uppercase pl-6">
        {/* <div className="text-brand ml-4">HELLO!</div> */}

        <Link href={"/"} className="flex">
          Greg Hadala &mdash;&nbsp;
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
        </Link>
      </div>
      <Menu />
      <ThemeSwitch />
    </div>
  );
};
