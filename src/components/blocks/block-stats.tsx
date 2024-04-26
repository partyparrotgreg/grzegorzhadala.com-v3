import React from "react";

const dummyStats = {
  deploys: 405,
  contracts: 10,
  tokens: 20,
  holders: 100,
};

export const BlockStats = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-foreground p-6 relative items-stretch justify-stretch">
      {Object.entries(dummyStats).map(([key, value], index) => (
        <React.Fragment key={key}>
          <div className="w-full">
            <div className="text-muted-foreground uppercase text-sm">{key}</div>
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
