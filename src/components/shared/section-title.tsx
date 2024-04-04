import { ReactNode } from "react";
import { RedDot } from "./red-dot";

export const SectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pb-2 border-b border-border flex flex-row justify-between">
      <div className="flex flex-row gap-3 items-center">
        <RedDot />
        <div className="font-medium">{children}</div>
      </div>
      {action && <div className="opacity-60">{action}</div>}
    </div>
  );
};
