"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // transition to different background based on scroll position

  return (
    <ReactLenis root>
      <div>{children}</div>
    </ReactLenis>
  );
}
