"use client";

import React from "react";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl font-medium content-padding sticky top-16 bg-background z-50">
      {children}
    </h2>
  );
};
