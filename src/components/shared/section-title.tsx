import { ReactNode } from "react";

export const SectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pb-4 border-b border-border text-foreground uppercase flex flex-row justify-between">
      <div>{children}</div>
      {action && <div>{action}</div>}
    </div>
  );
};
