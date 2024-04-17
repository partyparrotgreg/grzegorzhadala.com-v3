"use client";

import { cn } from "@/lib/utils";
import { processItems } from "@/mocks/process";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { TitleDescription } from "../shared/title-description";

export const ProcessGrid = () => {
  return (
    <>
      <BlockSectionTitle>Process</BlockSectionTitle>
      {processItems.map((process) => {
        const SVGIcon = process.icon;
        return (
          <div
            className={cn(
              "flex flex-col gap-6 lg:grid lg:grid-cols-3 pb-8 relative"
            )}
            key={process.step}
          >
            <div className="flex justify-end">
              <SVGIcon />
            </div>
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


