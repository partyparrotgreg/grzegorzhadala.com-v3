"use client";


import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

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
      <Button
        className="dark:hidden flex text-center"
        size={"icon"}
        variant={"ghost"}
      >
        <MoonIcon className="h-4 w-4" />
      </Button>
      <Button className="hidden dark:flex" size={"icon"} variant={"ghost"}>
        <SunIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
