"use client";

import { TypographyHero, TypographyP } from "../typography";
import { ButtonLinkedIn } from "./button-linkedin";

export const GetInTouch = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-6 md:p-16 bg-brand text-black content-padding min-h-96 justify-between">
      <div className="flex flex-col justify-between w-full h-full outline-2">
        <div className="flex flex-row justify-between">
          <TypographyHero>Get in touch</TypographyHero>
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
