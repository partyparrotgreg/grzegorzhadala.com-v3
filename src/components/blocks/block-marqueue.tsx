"use client";

import { InfiniteMovingCards } from "../ui/infinite-marquee";

export function BlockMarqueue({
  items,
}: {
  items: string[] | React.ComponentType[] | React.ReactNode[];
}) {
  return (
    <div className="h-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={items} direction="left" speed="slow" />
    </div>
  );
}
