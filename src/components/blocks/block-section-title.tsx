import { ReactNode } from "react";

export const BlockSectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pt-6 flex flex-row justify-between relative">
      <div className="flex flex-row gap-3 items-center relative">
        <div className="w-4 h-4 bg-brand rounded-full" />
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
