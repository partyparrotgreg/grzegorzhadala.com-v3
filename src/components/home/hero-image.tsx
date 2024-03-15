"use client";

import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useMemo } from "react";

export const HeroImage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  //   const resolvedImage = useMemo(() => {
  //     return isDark ? "/images/head4-dark.jpg" : "/images/head4-light.jpg";
  //   }, [isDark]);
  const imageClasses = cn(
    "absolute top-0 left-0 z-0",
    isDark ? "filter invert-100" : "filter invert"
  );
  return (
    <div className="w-full h-full fixed top-0 left-0 z-0">
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-gradient-to-t from-background to-transparent" />
      <Image
        src={"/images/head4-dark.jpg"}
        width={1920}
        height={1080}
        alt=""
        className={imageClasses}
      />
    </div>
  );
};
