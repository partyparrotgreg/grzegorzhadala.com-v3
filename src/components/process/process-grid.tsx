"use client";

import { processItems } from "@/mocks/process";

export const ProcessGrid = () => {
  return (
    <div className="flex flex-row overflow-x-scroll snap-x -ml-6 -mr-6 px-6 md:px-0 md:-mr-0 md:-ml-0 m:w-full md:overflow-visible gap-2 md:grid md:grid-flow-col md:auto-cols-auto md:grid-rows-2 relative">
      {processItems.map((process) => {
        const SVGIcon = process.icon;
        return (
          <div
            className="bg-stone-200 dark:bg-stone-900 p-8 rounded-3xl snap-start scroll-m-6 w-[90%] md:w-auto flex flex-col gap-8 items-start"
            key={process.step}
          >
            <div className="px-2 rounded-xl border border-stone-500/50 justify-start items-start gap-2 inline-flex">
              <div className="text-stone-500 text-xs font-normal uppercase">
                {process.step}
              </div>
            </div>
            <SVGIcon />
            <div className="text-stone-800 dark:text-stone-400 text-2xl">
              {process.title}
            </div>
            <p className="text-stone-800 dark:text-stone-400/80">
              {process.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
