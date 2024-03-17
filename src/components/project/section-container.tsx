import { ReactNode } from "react";

export const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="content-padding relative z-50 bg-background lg:w-2/3 mx-auto space-y-16">
      {children}
    </div>
  );
};
