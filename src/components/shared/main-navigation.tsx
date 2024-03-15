"use client";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

export const MainNavigation = () => {
  return (
    <div className="flex flex-row content-padding justify-between gap-4 fixed top-0 left-0 right-0 items-center z-[100]">
      <div className="flex-grow font-medium tracking-tight">
        <Link href={"/"}>Greg Hadala &mdash; Designer & Developer</Link>
      </div>
      <nav className="flex flex-row items-center gap-4">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/sandbox">sandbox</a>
      </nav>
      <ThemeSwitch />
    </div>
  );
};
