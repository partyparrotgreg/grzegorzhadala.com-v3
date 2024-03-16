"use client";

import { SplineEvent } from "@splinetool/react-spline";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useWindowScrollPosition, useWindowSize } from "rooks";
import { SplineThingy } from "./spline";
import { AnimatePresence, motion } from "framer-motion";

export const HeroImage = () => {
  const [isMounted, setIsMounted] = useState(true);
  const position = useWindowScrollPosition();
  const size = useWindowSize();

  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splineRef.current && size.innerHeight) {
      if (position.scrollY > size.innerHeight) setIsMounted(false);
      else setIsMounted(true);
    }
    return () => {};
  }, [position, size.innerHeight]);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-0" ref={splineRef}>
      {isMounted && <SplineThingy />}
    </div>
  );
};
