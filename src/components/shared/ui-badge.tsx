import { ReactNode } from "react";

export const UIBadge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-2 rounded-xl border border-stone-500/50 justify-center items-center gap-2 inline-flex">
      <div className="text-stone-500 text-xs font-normal uppercase">
        {children}
      </div>
    </div>
  );
};
