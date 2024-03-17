"use client";

import { scrollToTop } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { TypographyHero, TypographyP } from "../typography";
import { Button } from "../ui/button";
import { ButtonLinkedIn } from "./button-linkedin";

export const GetInTouch = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-brand text-black content-padding min-h-96 justify-between">
      <div className="flex flex-col justify-between w-full h-full outline-2">
        <div className="flex flex-row justify-between outline-1 outline-black">
          <TypographyHero>Get in touch asdas</TypographyHero>
          <div className="flex justify-end">
            <Button size={"icon"} variant={"ghost"} onClick={scrollToTop}>
              <ArrowUp />
            </Button>
          </div>
        </div>
        <ButtonLinkedIn />

        <TypographyP className="text-sm">
          Copyright © {currentYear} Grzegorz Hadala. All assets, artworks, and
          screenshots are copyright of their respective owners.
        </TypographyP>
      </div>
    </div>
  );
};
