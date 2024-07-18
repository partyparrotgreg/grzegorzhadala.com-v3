"use client";


import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div onClick={toggleTheme}>
      <div className="dark:hidden block">
        <MoonIcon className="h-4 w-4" />
      </div>
      <div className="hidden dark:block">
        <SunIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
