"use client";

import { motion, useScroll } from "framer-motion";

export const PageProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed h-1 left-0 top-0 lg:bottom-0 w-full z-[910] flex items-center justify-center bg-brand"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
    />
  );
};
