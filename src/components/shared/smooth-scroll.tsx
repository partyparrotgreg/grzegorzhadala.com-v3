"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrollLayout({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
