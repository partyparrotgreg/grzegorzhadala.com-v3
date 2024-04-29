"use client";

import { ReactNode } from "react";
import { TheDot } from "../shared/the-dot";
import posthog from "posthog-js";

export const BlockSectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pt-6 flex flex-row justify-between relative mt-12">
      <div
        className="absolute right-0 -top-4 flex flex-col-reverse items-end"
        onClickCapture={() => {
          posthog.capture("section_block_thingy_clicked", {
            label: children,
            action: action,
          });
        }}
      >
        <div className="w-4 h-4 bg-foreground" />
        <div className="w-8 h-px bg-foreground" />
      </div>
      <div className="flex flex-row gap-4 items-center relative">
        <TheDot />
        <div className="font-medium uppercase text-xs tracking-wider">
          {children}
        </div>
      </div>
      {action && (
        <div className="text-muted-foreground uppercase text-xs tracking-wider">
          {action}
        </div>
      )}
    </div>
  );
};
