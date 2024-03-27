"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import { useState } from "react";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [hover, setHover] = useState(false);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const containerSize = cn("w-10 h-[22px] rounded-full p-[3px] cursor-pointer");

  const ligtClassContainer = cn(
    containerSize,
    "bg-white justify-start items-center gap-2 inline-flex"
  );

  const darkClassContainer = cn(
    containerSize,
    "border border-white justify-end items-center gap-2 inline-flex"
  );

  const dotContainer = cn(
    isDark ? "bg-white" : "bg-black",
    "aspect-square w-4 rounded-full"
  );

  return (
    <motion.div
      className="w-10 flex flex-row justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        onClick={toggleTheme}
        className={isDark ? darkClassContainer : ligtClassContainer}
        layout
        transition={spring}
        animate={{ width: hover ? 40 : 22 }}
      >
        <motion.div
          className={dotContainer}
          layout
          transition={spring}
          animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
