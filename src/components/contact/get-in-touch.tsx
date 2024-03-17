"use client";

import { scrollToTop } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { TypographyHero, TypographyP } from "../typography";
import { Button } from "../ui/button";
import { ButtonLinkedIn } from "./button-linkedin";

export const GetInTouch = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="isolate">
      <div className="bg-brand text-black content-padding grid md:grid-cols-2 gap-16 items-center">
        <TypographyHero>Get in touch</TypographyHero>
        <div className="flex justify-end">
          <ButtonLinkedIn />
          <Button size={"icon"} variant={"ghost"} onClick={scrollToTop}>
            <ArrowUp />
          </Button>
        </div>
        <div>
          <TypographyP className="text-sm">
            Copyright © {currentYear} Grzegorz Hadala. All assets, artworks, and
            screenshots are copyright of their respective owners.
          </TypographyP>
        </div>
      </div>
    </div>
  );
};
