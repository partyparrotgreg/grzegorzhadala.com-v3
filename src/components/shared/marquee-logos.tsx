"use client";

import { clientsLogos } from "@/constants/clients";
import { InfiniteMovingCards } from "../ui/infinite-marquee";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={clientsLogos} direction="left" speed="slow" />
    </div>
  );
}
