"use client";

import { motion } from "framer-motion";
import DatoImage from "../shared/dato-image";
import { cn } from "@/lib/utils";

export const FlowGrid = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: any[];
}) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 bg-muted">
      {images.map((image, index) => {
        return (
          <motion.div
            key={index}
            className={cn(index === 0 ? "md:col-span-2 md:row-span-2" : "")}
          >
            <DatoImage
              pictureClassName="relative object-cover w-full h-full aspect-square"
              layout="responsive"
              fragment={image.responsiveImage}
            />
          </motion.div>
        );
      })}
      <TextTemplateCard title={title} description={description} />
    </div>
  );
};

const TextTemplateCard = ({
  title,
  description,
}: {
  title?: string;
  description: string;
}) => {
  return (
    <div className={"content-padding grid place-content-center h-full"}>
      {title && <h1 className="text-xl font-bold ">{title}</h1>}
      <p className="line-clamp-4 max-w-[60ch]">{description}</p>
    </div>
  );
};
