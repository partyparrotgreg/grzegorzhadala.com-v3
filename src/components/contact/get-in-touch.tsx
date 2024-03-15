"use client";

import { ArrowUp, Linkedin, LinkedinIcon } from "lucide-react";
import { TypographyHero } from "../typography";
import { Button } from "../ui/button";

export const GetInTouch = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="isolate">
      <div className="bg-brand text-black content-padding grid grid-cols-2 gap-16 items-center">
        <TypographyHero>Get in touch</TypographyHero>
        <div className="flex justify-end">
          <Button size={"icon"} variant={"ghost"}>
            <Linkedin />
          </Button>
          <Button size={"icon"} variant={"ghost"}></Button>
          <Button size={"icon"} variant={"ghost"} onClick={handleScrollUp}>
            <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
};
