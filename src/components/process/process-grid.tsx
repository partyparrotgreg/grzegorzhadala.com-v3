"use client";

import { cn } from "@/lib/utils";
import { processItems } from "@/mocks/process";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { TitleDescription } from "../shared/title-description";

export const ProcessGrid = () => {
  return (
    <>
      <BlockSectionTitle>Process</BlockSectionTitle>
      {processItems.map((process, index) => {
        const SVGIcon = process.icon;
        const isLastItem = index === processItems.length - 1;
        return (
          <div
            className={cn(
              isLastItem ? "" : "border-b",
              "flex flex-col gap-6 lg:grid lg:grid-cols-3 pb-8 relative"
            )}
            key={process.step}
          >
            <div className="bg-foreground p-4 text-xl text-background">
              {process.step}
            </div>
            <SVGIcon />
            <TitleDescription
              title={process.title}
              description={process.description}
            />
          </div>
        );
      })}
    </>
  );
};


