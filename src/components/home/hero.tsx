"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";

export const Hero = ({ text }: { text?: ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col my-20">
      <p
        className="text-3xl lg:text-5xl tracking-tight font-medium max-w-[40ch] relative"
        style={{ lineHeight: 1.15 }}
      >
        {text}
      </p>
      {pathname === "/" && (
        <div className="flex flex-row gap-px">
          <Badge className="mt-4">UX/UI</Badge>
          <Badge className="mt-4">Web3</Badge>
          <Badge className="mt-4">Blockchain</Badge>
          <Badge className="mt-4">Code</Badge>
          <Badge className="mt-4">FinTech</Badge>
        </div>
      )}
    </div>
  );
};
