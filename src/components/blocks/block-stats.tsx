import { StatListRecord } from "@/gql/graphql";
import React from "react";

const dummyStats = {
  deploys: 405,
  contracts: 10,
  tokens: 20,
  holders: 100,
};

export const BlockStats = ({ block }: { block: StatListRecord }) => {
  const { blocks: items } = block;
  return (
    <div className="flex flex-col lg:flex-row content-padding bg-foreground relative items-stretch justify-stretch">
      {items.map(({ label, value, id }, index) => (
        <React.Fragment key={id}>
          <div className="w-full">
            <div className="text-muted-foreground uppercase text-sm">
              {label}
            </div>
            <div className="text-2xl lg:text-5xl xl:text-7xl text-background">
              {value}
            </div>
          </div>
          {index != Object.entries(dummyStats).length - 1 && (
            <div className="h-18 w-px bg-border/20" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
