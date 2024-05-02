"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { useWindowSize } from "rooks";

export const Hero = ({ text }: { text?: ReactNode }) => {
  const { innerWidth } = useWindowSize();
  const scaleValues = useMemo(
    () => Array.from({ length: 10 }, () => 1 + (Math.random() - 0.5) * 0.1),
    []
  );

  return (
    <div className="flex flex-col-reverse lg:flex-col relative isolate">
      <motion.div
        className="z-10 relative aspect-square w-full lg:w-[50%] h-auto mx-auto xl:translate-x-[24rem] xl:-translate-y-[12rem]"
        animate={{
          scale: [1, 0.98],
          x: [-200, (innerWidth && innerWidth - 200) || 200],
          y: [-200, 200],
        }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 10,
        }}
      >
        <div className="absolute aspect-square w-full h-auto">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 838 838"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="419"
              cy="419"
              r="419"
              fill="url(#paint0_linear_382_14111)"
            />

            <defs>
              <linearGradient
                id="paint0_linear_382_14111"
                x1="-232.509"
                y1="819.835"
                x2="838"
                y2="163.483"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FE3A0B" />
                <stop offset="0.49943" stopColor="#FE330A" />
                <stop offset="0.875525" stopColor="#FF7A27" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_382_14111"
                x1="-112.093"
                y1="395.243"
                x2="404"
                y2="78.815"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FE3A0B" />
                <stop offset="0.49943" stopColor="#FE330A" />
                <stop offset="0.875525" stopColor="#FF7A27" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.div
          className="absolute filter blur-3xl z-0 aspect-square w-full h-auto"
          animate={{
            scale: scaleValues,
          }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 838 838"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="419"
              cy="419"
              r="419"
              fill="url(#paint0_linear_382_14111)"
            />
            <circle
              cx="202"
              cy="202"
              r="202"
              transform="matrix(-1 0 0 1 621 217)"
              fill="url(#paint1_linear_382_14111)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_382_14111"
                x1="-232.509"
                y1="819.835"
                x2="838"
                y2="163.483"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FE3A0B" />
                <stop offset="0.49943" stopColor="#FE330A" />
                <stop offset="0.875525" stopColor="#FF7A27" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_382_14111"
                x1="-112.093"
                y1="395.243"
                x2="404"
                y2="78.815"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FE3A0B" />
                <stop offset="0.49943" stopColor="#FE330A" />
                <stop offset="0.875525" stopColor="#FF7A27" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
      <p
        className="my-32 text-3xl lg:text-5xl xl:text-7xl tracking-tight leading-none font-medium max-w-[30ch] lg:absolute z-[999] "
        style={{ lineHeight: 1.15 }}
      >
        {text}
      </p>
    </div>
  );
};
