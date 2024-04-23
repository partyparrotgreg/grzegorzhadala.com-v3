"use client";

import { useEffect } from "react";

export default function ProjectTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // smooth scroll top
    window.scrollTo(0, 0);
  }, []);
  return <div>{children}</div>;
}
