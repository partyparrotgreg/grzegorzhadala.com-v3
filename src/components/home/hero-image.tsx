"use client";

import { useTheme } from "next-themes";
import SplineThingy from "./spline";

export const HeroImage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="w-full h-full fixed top-0 left-0 z-0">
      <SplineThingy />
    </div>
  );
};
