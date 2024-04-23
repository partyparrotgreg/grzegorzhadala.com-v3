"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const RedDot = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "100px 100px 100px 100px",
    once: false,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      //   slideControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <motion.div
      className="w-4 h-4 bg-foreground rounded-full"
      ref={ref}
      variants={{
        hidden: {
          x: 0,
        },
        visible: { x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 3,
        type: "spring",
      }}
    />
  );
};
