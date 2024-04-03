import { ReactNode } from "react";

export const SectionTitle = ({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) => {
  return (
    <div className="pb-2 border-b border-border flex flex-row justify-between">
      <div>{children}</div>
      {action && <div className="opacity-60">{action}</div>}
    </div>
  );
};
