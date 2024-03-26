import { LogoNextjs } from "@/assets/logos/nextjs";
import { UICard } from "@/components/shared/card";
import { GsapTest } from "@/components/shared/gsap-test";
import { InfiniteMovingCardsDemo } from "@/components/shared/marquee-logos";
import { TypographyDemo } from "@/components/typography";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-marquee";
import { ArrowRightIcon } from "lucide-react";

export default function Page() {
  const words = ["DESIGN", "DEVELOP", "DEPLOY", "TEST", "LAUNCH"];

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
      <GsapTest />
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
    </div>
  );
}
