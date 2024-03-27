import { ReactNode } from "react";

export const SectionGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-8">
      {children}
    </div>
  );
};
