"use client";
import { useIsDark } from "@/hooks/useIsDark";
import { ThemedImageType } from "@/types";
import Image from "next/image";

export const ThemedImage = ({ images }: { images: ThemedImageType }) => {
  const isDark = useIsDark();

  return (
    <Image
      src={images[isDark ? 1 : 0].url}
      alt=""
      width={images[0].width}
      height={images[0].height}
    />
  );
};
