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
    <div className="grid grid-cols-1 lg:grid-cols-3 content-padding">
      {blocks.map((block) => (
        <div
          className=" group relative"
          key={block.id}
          onClickCapture={() => {
            posthog.capture("slider_photo_clicked", {
              id: block.id,
              image: block.images[0]?.responsiveImage?.title,
              label: block.description,
            });
          }}
        >
          <div className="h-full">
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
    <div className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-3xl group relative">
      <div className="group-hover:opacity-100 opacity-0 -translate-y-20 group-hover:translate-y-0 absolute z-10 right-2 top-2 rounded-full transition-all bg-background/70 backdrop-blur-lg p-1">
        <ThemeSwitch />
      </div>
      <ReactDatocmsImage
        data={isDark ? darkImage : lightImage}
        lazyLoad
        layout="responsive"
      />
    </div>
  );
};
