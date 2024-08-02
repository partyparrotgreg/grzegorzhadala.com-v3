"use client";

import { LayoutTransition } from "@/components/shared/layout-transition";

export default function HomeTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutTransition
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      {children}
    </LayoutTransition>
  );
}
