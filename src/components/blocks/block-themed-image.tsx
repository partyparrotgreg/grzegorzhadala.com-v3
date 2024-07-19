"use client";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ThemedImageBlockRecord } from "@/gql/graphql";
import { useIsDark } from "@/hooks/useIsDark";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "../shared/theme-switch";

export const BlockThemedImage = ({
  block,
}: {
  block: ThemedImageBlockRecord;
}) => {
  const isDark = useIsDark();
  const images = block.images;
  if (!images || images.length === 0 || !images[0].responsiveImage) return null;
  if (images.length === 1 && images[0].responsiveImage) {
      return (
        <div className={cn(block.contentPadding && "content-padding")}>
          <ReactDatocmsImage
            data={images[0].responsiveImage as ResponsiveImageType}
            lazyLoad
            layout="responsive"
          />
        </div>
      );
  }
  const lightImage = images[0].responsiveImage as ResponsiveImageType;
  const darkImage = images[1].responsiveImage as ResponsiveImageType;
  return (
    <div className={cn(block.contentPadding && "content-padding")}>
      <div className="group relative">
        <div className="group-hover:opacity-100 opacity-0 -translate-y-20 group-hover:translate-y-0 absolute z-10 right-2 top-2 rounded-full transition-all bg-background/70 backdrop-blur-lg p-1 mix-blend-difference">
          <ThemeSwitch />
        </div>
        <ReactDatocmsImage
          data={isDark ? darkImage : lightImage}
          lazyLoad
          layout="responsive"
        />
      </div>
    </div>
  );
};
