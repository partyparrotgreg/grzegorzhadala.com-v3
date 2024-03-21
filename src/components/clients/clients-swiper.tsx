"use client";

import { SwiperOptions } from "swiper/types";
import { ThemedImage } from "../shared/themed-image";
import { TypographyHero, TypographyP } from "../typography";
import { UISwiper } from "../ui/swiper";

export const ClientsSwiper = ({
  clients,
  count,
}: {
  clients: any[];
  count: number;
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
    <>
      <div className="min-h-screen overflow-hidden bg-muted">
        <TypographyHero className="uppercase">
          <span className="text-9xl md:text-[24rem] text-brand -translate-x-16 relative">
            {count}
          </span>
          <span className="text-4xl md:text-9xl relative z-auto md:-translate-x-16 inline-block">
            clients
          </span>
          <span className="text-4xl md:text-9xl relative z-auto md:-translate-x-16 inline-block">
            happy
          </span>
        </TypographyHero>
        <TypographyP className="md:max-w-[36rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore
          magni commodi earum perferendis necessitatibus illo modi quidem
          dolores eius architecto ut quas asperiores aperiam soluta nihil,
          molestias odio! Quia!
        </TypographyP>

        <div className="flex flex-row relative">
          <UISwiper
            loop={true}
            autoplay={{ delay: 3000 }}
            spaceBetween={0}
            {...swiperOptions}
            items={clients.map(({ description, logo: logos, id }) => (
              <div key={id} className="content-padding flex flex-col gap-6">
                <ThemedImage images={logos} />
                <div>{description}</div>
              </div>
            ))}
          />
        </div>
      </div>
    </>
  );
};
