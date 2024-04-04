"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollLayout({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
