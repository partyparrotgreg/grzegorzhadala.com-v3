"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from ".";

export const SectionTitle = ({
  children,
  action,
  ...props
}: TypographyProps & {
  action?: React.ReactNode;
}) => {
  return (
    <div
      className="content-padding sticky top-12 bg-background z-[200] flex flex-row justify-between items-center"
      {...props}
    >
      <h2 className="text-4xl font-medium">{children}</h2>
      {action && (
        <div className={cn`flex flex-row items-center gap-4`}>{action}</div>
      )}
    </div>
  );
};
