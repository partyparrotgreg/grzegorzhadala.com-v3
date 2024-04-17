"use client";

import { ReactNode } from "react";

export const Hero = ({ text }: { text?: ReactNode }) => {
  const sentence =
    text ||
    "Greg's work seamlessly blends user-centric design with innovative solutions to meet complex challenges across various industries";

  return (
    <div className="flex flex-col my-20">
      <p
        className="text-3xl lg:text-5xl tracking-tight font-medium max-w-[40ch] relative"
        style={{ lineHeight: 1.15 }}
      >
        {sentence}
      </p>
    </div>
  );
};
