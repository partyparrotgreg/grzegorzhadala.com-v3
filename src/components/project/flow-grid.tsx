"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { ReactNode, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "framer-motion";

const dummyUnsplash =
  "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type CardContentProps = {
  type: "image" | "video" | "text" | "gif";
  title?: ReactNode;
  description?: ReactNode;
  thumbnail?: string | StaticImport;
  fullImage?: string | StaticImport;
  colSpan?: number;
  rowSpan?: number;
  span?: string;
  aspectRatio?: string;
};

const cards: CardContentProps[] = [
  {
    type: "image",
    fullImage: dummyUnsplash,
    thumbnail: dummyUnsplash,
    title: "FreeBird Watch",
    description: "A watch that helps you fly",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    fullImage: dummyUnsplash,
    thumbnail: dummyUnsplash,
    title: "FreeBird Watch",
    description: "A watch that helps you fly",
  },
  {
    type: "image",
    fullImage: dummyUnsplash,
    thumbnail: dummyUnsplash,
    title: "FreeBird Watch",
    description: "A watch that helps you fly",
  },
  {
    type: "text",
    title: "FreeBird Watch",
    description: "A watch that helps you fly",
    span: "md:col-span-2",
  },
];

export const FlowGrid = () => {
  return (
    <div className="flex flex-col gap-2 content-padding sm:grid sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
      {cards.map((card, index) => {
        const cardType = card.type;
        return (
          <motion.div
            key={index}
            className={cn(
              card.span,
              card.aspectRatio,
              cardType === "text" ? "" : "aspect-square"
            )}
          >
            {cardType === "image" && <ImageTemplateCard card={card} />}
            {cardType === "text" && <TextTemplateCard card={card} />}
          </motion.div>
        );
      })}
    </div>
  );
};

const TextTemplateCard = ({ card }: { card: CardContentProps }) => {
  return (
    <div className={"content-padding grid place-content-center h-full"}>
      {card.title && <h1 className="text-xl font-bold ">{card.title}</h1>}
      <p className="line-clamp-4 max-w-[60ch]">{card.description}</p>
    </div>
  );
};

const ImageTemplateCard = ({ card }: { card: CardContentProps }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={"relative bg-muted w-full h-full"}>
      <Image
        src={card.thumbnail!}
        height="500"
        width="500"
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          loaded ? "blur-none" : "blur-md"
        )}
        alt="thumbnail"
      />
    </div>
  );
};
