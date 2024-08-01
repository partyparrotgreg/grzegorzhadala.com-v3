"use client";

import { ReactNode } from "react";
export const BlockSectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <>
      <div className="h-24 w-full bg-background" />
      <div className="sticky top-0 md:top-12 z-[100] bg-background">
        <div className="nav-padding flex flex-row justify-between relative border-b text-sm items-center overflow-hidden">
          <div className="flex flex-row gap-4 items-center relative ">
            <div className="font-semibold uppercase tracking-widest text-brand">
              {children}
            </div>
          </div>
          {action && <div>{action}</div>}
        </div>
      </div>
    </>
  );
};
