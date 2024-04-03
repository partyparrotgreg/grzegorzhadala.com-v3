"use client";

import { SectionFooter } from "@/components/footer/section-footer";
import SmoothScrollLayout from "@/components/shared/smooth-scroll";
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
    <SmoothScrollLayout>
      <div className="p-6 flex flex-col gap-12 max-w-[120rem] mx-auto">
        {children}
        <SectionFooter />
      </div>
    </SmoothScrollLayout>
  );
}
