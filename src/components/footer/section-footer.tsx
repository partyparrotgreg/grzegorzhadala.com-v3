"use client";

import { ArrowUp, MapPin } from "@phosphor-icons/react/dist/ssr";
import { SectionGrid } from "../shared/section-grid";
import { BigDescription } from "../typography/big-description";
import { UnderlineLink } from "../shared/underline-link";
import { Button } from "../ui/button";

export const SectionFooter = () => {
  return (
    <div className="section-padding section-gap text-[#877668] flex flex-col">
      <h2 className="text-6xl">Connect</h2>
      <SectionGrid>
        <div className="col-start-5 col-span-8">
          <BigDescription>
            A creative problem solver specializing in visual, motion and
            interaction design with experience designing for TV, web, mobile and
            tablet. Currently designing the future of live TV and streaming at
            Comcast.
          </BigDescription>
        </div>
        <div className="w-full h-auto col-span-8 col-start-5">
          <p className="columns-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptas iusto harum necessitatibus earum aliquam voluptate sapiente
            vel totam! Dolorem magnam consequatur, officiis reiciendis tenetur
            sunt libero corporis provident illum!
          </p>
        </div>
      </SectionGrid>
      <div className="h-24 flex items-end flex-row justify-between border-t border-t-[#877668]/30">
        <div className="flex items-center flex-row gap-2">
          <MapPin weight="fill" /> <span>Madeira, PT</span>
        </div>
        <UnderlineLink
          href="https://www.linkedin.com/in/greghadala/"
          key="email"
        >
          grzegorz.hadala@gmail.com
        </UnderlineLink>
        <UnderlineLink
          href="https://www.linkedin.com/in/greghadala/"
          key="linkedin"
        >
          LinkedIn
        </UnderlineLink>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
};
