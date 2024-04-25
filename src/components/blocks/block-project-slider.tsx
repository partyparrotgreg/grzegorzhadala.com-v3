"use client";
import { Image as ReactDatocmsImage } from "react-datocms";

import { ThemedImageBlockRecord } from "@/gql/graphql";
import { useIsDark } from "@/hooks/useIsDark";
import { UISwiper } from "../ui/swiper";
import { SwiperOptions } from "swiper/types";
import { ThemeToggle } from "../shared/theme-toggle";

export const BlockProjectSlider = ({
  blocks,
}: {
  blocks: ThemedImageBlockRecord[];
}) => {
  const swiperOptions: SwiperOptions = {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3.2,
      },
    },
  };
  return (
    <UISwiper
      autoplay={{ delay: 3000 }}
      grabCursor
      spaceBetween={64}
      {...swiperOptions}
      items={blocks.map((block) => (
        <ImageDescriptionBlock
          key={block.id}
          block={block as ThemedImageBlockRecord}
        />
      ))}
    />
  );
};

export const ImageDescriptionBlock = ({
  block,
}: {
  block: ThemedImageBlockRecord;
}) => {
  return (
    <div key={block.id} className="flex flex-col overflow-hidden">
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
