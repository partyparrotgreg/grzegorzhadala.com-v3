"use client";

import { processItems } from "@/mocks/process";
import { Badge } from "../ui/badge";

export const ProcessGrid = () => {
  return (
    <div className="gap-2 grid grid-cols-3">
      {processItems.map((process) => {
        const SVGIcon = process.icon;
        return (
          <div
            className="bg-card p-8 flex flex-col gap-8 items-start min-w-[360px]"
            key={process.step}
          >
            <Badge variant={"outline"}>{process.step}</Badge>
            <SVGIcon />
            <h4 className="text-2xl font-medium tracking-tight">
              {process.title}
            </h4>
            <p>{process.description}</p>
          </div>
        );
      })}
    </div>
  );
};


