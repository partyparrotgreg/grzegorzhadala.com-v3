import { LogoNextjs } from "@/assets/logos/nextjs";
import { ClientsGrid } from "@/components/clients/clients-grid";
import { UICard } from "@/components/shared/card";
import { InfiniteMovingCardsDemo } from "@/components/shared/marquee-logos";
import { TypographyDemo } from "@/components/typography";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-marquee";
import { UISwiper } from "@/components/ui/swiper";
import { clientsLogos } from "@/constants/clients";
import { ArrowRightIcon } from "lucide-react";
import { SwiperOptions } from "swiper/types";

export default function Page() {
  const words = ["DESIGN", "DEVELOP", "DEPLOY", "TEST", "LAUNCH"];
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
    <div>
      <TypographyDemo />
      <SectionTitle
        action={
          <Button size="sm" variant={"link"}>
            Read all <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        }
      >
        Challenges
      </SectionTitle>
      <LogoNextjs className="h-14 w-14" />
      <UICard title="NextJS by Vercel" description="Framework">
        asdad
      </UICard>
      <InfiniteMovingCardsDemo />
      <div className="h-[10rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={words.map((word, index) => (
            <div key={index} className="flex items-center">
              <div className="text-9xl">{word}</div>
              <div className="w-4 h-4 bg-brand ml-20 rounded-full" />
            </div>
          ))}
          direction="left"
          speed="slow"
        />
      </div>
      <ClientsGrid />
      <SectionTitle>Clients</SectionTitle>
      <div className="flex flex-row relative">
        <UISwiper
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={0}
          {...swiperOptions}
          items={clientsLogos.map((Logo, index) => (
            <div key={index} className="content-padding flex flex-col gap-6">
              <Logo />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                aliquam provident tempore earum quisquam vitae consequatur
                minima in! Possimus minus autem debitis quam libero praesentium
                vitae dicta neque quae magni?
              </div>
            </div>
          ))}
        />
      </div>
    </div>
  );
}
