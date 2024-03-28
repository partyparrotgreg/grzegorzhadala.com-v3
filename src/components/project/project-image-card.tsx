"use client";

import Mockup1 from "@/assets/mock1.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
export const ProjectImageCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="isolate w-full h-auto relative overflow-hidden rounded-3xl bg-slate-300 aspect-video cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="p-4 bottom-5 left-5 absolute bg-white bg-opacity-70 rounded-2xl backdrop-blur-2xl flex-col justify-center items-start inline-flex z-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 100 }}
        transition={{ duration: 0.25 }}
      >
        <div className="text-black text-base font-semibold ">SEI LABS</div>
        <div className="opacity-70 text-black text-base font-normal">
          SENIOR PRODUCT DESIGNER
        </div>
      </motion.div>
      <Image
        src={Mockup1}
        alt="Hero image"
        className={cn(
          "inset-0 object-cover z-0 scale-105 transition-all duration-500",
          {
            "scale-100": hover,
          }
        )}
      />
    </div>
  );
};
