import { ReactNode } from "react";
import { TheDot } from "../shared/the-dot";

export const BlockSectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pt-6 flex flex-row justify-between relative mt-12">
      <div className="w-4 h-4 bg-foreground absolute right-0 -top-4" />
      <div className="w-8 h-px bg-foreground absolute right-0 -top-4" />
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
