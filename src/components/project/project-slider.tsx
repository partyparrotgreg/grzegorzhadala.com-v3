"use client";
import { Image as ReactDatocmsImage } from "react-datocms";

import { ThemedImageBlockRecord } from "@/gql/graphql";
import { useIsDark } from "@/hooks/useIsDark";
import { UISwiper } from "../ui/swiper";
import { SwiperOptions } from "swiper/types";

export const ProjectSlider = ({
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
        slidesPerView: 4.2,
      },
    },
  };
  return (
    <UISwiper
      autoplay={{ delay: 3000 }}
      grabCursor
      spaceBetween={0}
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
    <div
      key={block.id}
      className="bg-neutral-50 dark:bg-neutral-900 flex flex-col overflow-hidden"
    >
      <div className="pl-4 pt-4 pr-4 pb-0">
        <ThemedDatoImage images={block.images} />
      </div>
      <div className="p-4 text-foreground/50 flex justify-center">
        {block.description}
      </div>
    </div>
  );
};

export const ThemedDatoImage = ({ images }: { images: any[] }) => {
  const isDark = useIsDark();
  const lightImage = images[0].responsiveImage;
  const darkImage = images[1].responsiveImage;
  return (
    <div className="overflow-hidden rounded-2xl h-full w-full relative">
      <ReactDatocmsImage
        data={isDark ? darkImage : lightImage}
        lazyLoad
        layout="responsive"
      />
    </div>
  );
};
