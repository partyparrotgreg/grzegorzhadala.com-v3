"use client";

// Import Swiper React components
import { cn } from "@/lib/utils";
import React from "react";
import "swiper/css";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

export const UISwiper = ({
  items,
  className,
  options,
  ...props
}: {
  items: React.ReactNode[];
  className?: string;
  options?: SwiperOptions;
} & SwiperProps) => {
  const mergedClassName = cn("w-full", className);

  return items ? (
    <div className="min-w-full">
      <Swiper className={mergedClassName} {...props} {...options}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div>No items</div>
  );
};

