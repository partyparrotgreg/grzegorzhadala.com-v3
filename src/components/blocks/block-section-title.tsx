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
    <div className="content-padding flex flex-row justify-between relative border-t text-sm">
      <div className="flex flex-row gap-4 items-center relative">
        <div className="font-semibold uppercase tracking-widest text-foreground/50">
          {children}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
