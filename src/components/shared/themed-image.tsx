"use client";
import { ThemedImageType } from "@/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThemedImage = ({ images }: { images: ThemedImageType }) => {
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark" || theme === "dark");
  }, [resolvedTheme, theme]);

  return (
    <Image
      src={images[isDark ? 1 : 0].url}
      alt=""
      width={images[0].width}
      height={images[0].height}
    />
  );
};
