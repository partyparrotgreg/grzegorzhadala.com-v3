"use client";
import { Image as ReactDatocmsImage } from "react-datocms";

import { ThemedImageBlockRecord } from "@/gql/graphql";
import { useIsDark } from "@/hooks/useIsDark";
import { ThemeToggle } from "../shared/theme-toggle";
import posthog from "posthog-js";

export const BlockProjectSlider = ({
  blocks,
}: {
  blocks: ThemedImageBlockRecord[];
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2%]">
      {blocks.map((block) => (
        <ImageDescriptionBlock
          key={block.id}
          block={block as ThemedImageBlockRecord}
        />
      ))}
    </div>
  );
};

export const ImageDescriptionBlock = ({
  block,
}: {
  block: ThemedImageBlockRecord;
}) => {
  return (
    <div
      key={block.id}
      className="flex flex-col overflow-hidden p-6 lg:p-24 bg-foreground/5 gap-[2%]"
      onClickCapture={() => {
        posthog.capture("slider_photo_clicked", {
          id: block.id,
          image: block.images[0]?.responsiveImage?.title,
          label: block.description,
        });
      }}
    >
      <div>
        <ThemedDatoImage images={block.images} />
      </div>
      <div className="flex justify-center">{block.description}</div>
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
        pictureStyle={{ filter: "drop-shadow(0 0 0.75rem crimson)" }}
      />
    );
  }
  const lightImage = images[0].responsiveImage;
  const darkImage = images[1].responsiveImage;
  return (
    <div className="overflow-hidden rounded-3xl h-full w-full relative group">
      <div className="group-hover:opacity-100 opacity-0 -translate-y-20 group-hover:translate-y-0 absolute z-10 right-2 top-2 rounded-full transition-all bg-foreground/70 backdrop-blur-lg p-1">
        <ThemeToggle isInverted />
      </div>
      <ReactDatocmsImage
        data={isDark ? darkImage : lightImage}
        lazyLoad
        layout="responsive"
      />
    </div>
  );
};
