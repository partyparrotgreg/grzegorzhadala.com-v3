"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export const Hero = ({ text }: { text?: ReactNode }) => {
  return (
    <div className="flex flex-col my-32 relative isolate">
      <div className="absolute right-12 -top-[350px] lg:-top-[300px] lg:w-1/3 aspect-square z-10">
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
              <stop stop-color="#FE3A0B" />
              <stop offset="0.49943" stop-color="#FE330A" />
              <stop offset="0.875525" stop-color="#FF7A27" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_382_14111"
              x1="-112.093"
              y1="395.243"
              x2="404"
              y2="78.815"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FE3A0B" />
              <stop offset="0.49943" stop-color="#FE330A" />
              <stop offset="0.875525" stop-color="#FF7A27" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute right-12 -top-[350px] lg:-top-[300px] lg:w-1/3 aspect-square filter blur-3xl z-0">
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
              <stop stop-color="#FE3A0B" />
              <stop offset="0.49943" stop-color="#FE330A" />
              <stop offset="0.875525" stop-color="#FF7A27" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_382_14111"
              x1="-112.093"
              y1="395.243"
              x2="404"
              y2="78.815"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FE3A0B" />
              <stop offset="0.49943" stop-color="#FE330A" />
              <stop offset="0.875525" stop-color="#FF7A27" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p
        className="text-3xl lg:text-5xl tracking-tight leading-none font-medium max-w-[30ch] relative z-50"
        style={{ lineHeight: 1.15 }}
      >
        {text}
      </p>
    </div>
  );
};
