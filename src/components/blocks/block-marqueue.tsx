"use client";

import { InfiniteMovingCards } from "../ui/infinite-marquee";

export function BlockMarqueue({
  items,
}: {
  items: string[] | React.ComponentType[] | React.ReactNode[];
}) {
  return <InfiniteMovingCards items={items} direction="left" speed="slow" />;
}
