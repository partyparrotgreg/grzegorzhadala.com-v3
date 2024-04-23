"use client";
import { useIsDark } from "@/hooks/useIsDark";
import { ThemedImageType } from "@/types";
import Image from "next/image";

export const ThemedImage = ({
  images,
  className,
  inverted,
}: {
  images: ThemedImageType[];
  className?: string;
  inverted?: boolean;
}) => {
  const isDark = useIsDark();

  const darkImage = inverted ? 0 : 1;
  const lightImage = inverted ? 1 : 0;
  return (
    <Image
      src={images[isDark ? darkImage : lightImage].url}
      alt=""
      width={images[0].width}
      height={images[0].height}
      className={className}
    />
  );
};
