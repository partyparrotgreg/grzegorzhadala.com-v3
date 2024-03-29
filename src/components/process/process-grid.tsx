"use client";

import { processItems } from "@/mocks/process";
import { Badge } from "../ui/badge";

export const ProcessGrid = () => {
  return (
    <div className="flex flex-row overflow-x-scroll snap-x -ml-6 -mr-6 px-6 md:px-0 md:-mr-0 md:-ml-0 m:w-full md:overflow-visible gap-2 md:grid md:grid-flow-col md:auto-cols-auto md:grid-rows-2">
      {processItems.map((process) => {
        const SVGIcon = process.icon;
        return (
          <div
            className="bg-card dark:bg-black/90 p-8 rounded-3xl snap-start scroll-m-6 md:w-auto flex flex-col gap-8 items-start min-w-[360px]"
            key={process.step}
          >
            <Badge variant={"outline"}>{process.step}</Badge>
            <SVGIcon />
            <h4 className="text-foreground dark:text-white">{process.title}</h4>
            <p className="text-foreground dark:text-white/80 text-base">
              {process.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};


