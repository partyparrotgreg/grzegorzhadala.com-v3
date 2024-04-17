"use client";

import { ReactNode } from "react";

export const Hero = ({ text }: { text?: ReactNode }) => {
  const sentence =
    text ||
    "Greg's work seamlessly blends user-centric design with innovative solutions to meet complex challenges across various industries";

  return (
    <div className="flex flex-col mt-20">
      <div className="text-3xl lg:text-5xl tracking-tight leading-relaxed font-medium max-w-[30ch]">
        {sentence}
      </div>
    </div>
  );
};
