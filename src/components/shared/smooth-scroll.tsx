"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function SmoothScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // transition to different background based on scroll position

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <div>{children}</div>
    </ReactLenis>
  );
}
