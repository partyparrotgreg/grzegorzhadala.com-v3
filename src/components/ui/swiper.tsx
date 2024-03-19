"use client";

// Import Swiper React components
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import React, {
  CSSProperties,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "swiper/css";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperEvents, SwiperOptions } from "swiper/types";

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
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const mergedClassName = cn("w-full", className);

  useEffect(() => {
    if (isHovering) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isHovering]);

  return items ? (
    <>
      <AnimatePresence>
        {isHovering && <CustomCursor x={cursorPos.x} y={cursorPos.y} />}
      </AnimatePresence>
      <Swiper className={mergedClassName} {...props} {...options}>
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            // onMouseEnter={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
            onMouseMove={isHovering ? handleMouseMove : undefined}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    <div>No items</div>
  );
};

const CustomCursor = ({ x, y }: { x: number; y: number }) => {
  const cursorStyle: CSSProperties = {
    top: `${y}px`,
    left: `${x}px`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      style={cursorStyle}
      className="custom-cursor bg-brand w-12 h-12 fixed z-[999] rounded-full grid place-content-center"
    >
      <ArrowLeftRight size={16} />
    </motion.div>
  );
};
