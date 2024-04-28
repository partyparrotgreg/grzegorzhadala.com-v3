"use client";

import { SectionFooter } from "@/components/footer/section-footer";
import { useEffect } from "react";

export default function HomeTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="p-6 flex flex-col gap-8 max-w-[96rem] mx-auto">
      {children}
      <SectionFooter />
    </div>
  );
}
