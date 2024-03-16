"use client";

import { ArrowUp, Linkedin, LinkedinIcon } from "lucide-react";
import { TypographyHero, TypographyP } from "../typography";
import { Button } from "../ui/button";

export const GetInTouch = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentYear = new Date().getFullYear();
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
        <div>
          <TypographyP>
            Copyright © {currentYear} Grzegorz Hadala. All assets, artworks, and
            screenshots are copyright of their respective owners.
          </TypographyP>
        </div>
      </div>
    </div>
  );
};
