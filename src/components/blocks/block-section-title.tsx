import { ReactNode } from "react";
import { RedDot } from "../shared/red-dot";

export const BlockSectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pt-2 border-t flex flex-row justify-between">
      <div className="flex flex-row gap-6 items-center">
        <RedDot />
        <div className="font-medium">{children}</div>
      </div>
      {action && <div className="opacity-60">{action}</div>}
    </div>
  );
};
