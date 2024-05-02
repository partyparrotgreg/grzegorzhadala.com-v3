"use client";
import { Image as ReactDatocmsImage } from "react-datocms";

import { ThemedImageBlockRecord } from "@/gql/graphql";
import { useIsDark } from "@/hooks/useIsDark";
import posthog from "posthog-js";
import { ThemeSwitch } from "../shared/theme-switch";

export const BlockProjectSlider = ({
  blocks,
}: {
  blocks: ThemedImageBlockRecord[];
}) => {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      {blocks.map((block) => (
        <div
          className="w-full lg:w-[calc(calc(100%/3)-1.5rem)] group relative"
          key={block.id}
          onClickCapture={() => {
            posthog.capture("slider_photo_clicked", {
              id: block.id,
              image: block.images[0]?.responsiveImage?.title,
              label: block.description,
            });
          }}
        >
          <div className="filter drop-shadow-lg h-full">
            <ThemedDatoImage images={block.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ThemedDatoImage = ({ images }: { images: any[] }) => {
  const isDark = useIsDark();
  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <ReactDatocmsImage
        data={images[0].responsiveImage}
        lazyLoad
        layout="responsive"
      />
    );
  }
  const lightImage = images[0].responsiveImage;
  const darkImage = images[1].responsiveImage;
  return (
    <div className="overflow-hidden rounded-3xl group">
      <div className="group-hover:opacity-100 opacity-0 -translate-y-20 group-hover:translate-y-0 absolute z-10 right-2 top-2 rounded-full transition-all bg-background/70 backdrop-blur-lg p-1">
        <ThemeSwitch />
      </div>
      <ReactDatocmsImage
        data={isDark ? darkImage : lightImage}
        lazyLoad
        layout="responsive"
        className="filter drop-shadow-2xl"
      />
    </div>
  );
};
