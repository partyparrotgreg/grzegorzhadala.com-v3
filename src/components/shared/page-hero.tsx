"use client";

import HeroImage from "@/assets/heroImage.jpg";
import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import Image from "next/image";
import { SpotifyWidget } from "./spotify-widget";
import { ThemeToggle } from "./theme-toggle";
import { UnderlineLink } from "./underline-link";
import { SectionGrid } from "./section-grid";
import { TextDescription } from "./text-description";
import { BigDescription } from "../typography/big-description";
export const PageHero = () => {
  const { navItems } = useSiteNavigation();
  return (
    <div className="min-h-screen lg:h-screen section-padding flex flex-col justify-between relative isolate overflow-x-hidden bg-stone-400">
      {/* <div className="w-1/4 h-auto aspect-square mix-blend-hard-light bg-brand rounded-full absolute z-20 -left-16" /> */}
      <div className="relative z-20 mix-blend-multiply h-full flex flex-col justify-between section-gap">
        <div className="flex flex-row justify-between">
          <div className="text-neutral-500 text-base font-medium">
            GREG HADALA
          </div>
          <div className="justify-start items-center gap-8 flex">
            <nav className="flex gap-8">
              {navItems.map((item) => (
                <UnderlineLink key={item.href} href={item.href}>
                  {item.label}
                </UnderlineLink>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
        <SectionGrid>
          <div className="flex-col col-span-12 -space-y-3 text-5xl font-bold text-neutral-700">
            <div className="">PRODUCT</div>
            <div className="">DESIGNER</div>
            <div>
              <span className="opacity-50 italic font-normal">&</span>
              <span className=""> UI ENGINEER</span>
            </div>
          </div>
          <BigDescription className="col-span-8 col-start-5 text-stone-700">
            A creative problem solver specializing in visual, motion and
            interaction design with experience designing for TV, web, mobile and
            tablet. Currently designing the future of live TV and streaming at
            Comcast.
          </BigDescription>
        </SectionGrid>
        <SectionGrid>
          <TextDescription
            className="col-span-4"
            label={"Current"}
            items={["Sei Labs, LLC", "Senior Product Designer"]}
          />
          <TextDescription
            className="col-span-8"
            label={"Connect"}
            items={[
              <UnderlineLink
                href="https://www.linkedin.com/in/greghadala/"
                key="email"
              >
                grzegorz.hadala@gmail.com
              </UnderlineLink>,
              <UnderlineLink
                href="https://www.linkedin.com/in/greghadala/"
                key="linkedin"
              >
                LinkedIn
              </UnderlineLink>,
            ]}
          />
        </SectionGrid>
      </div>
      <div className="absolute bottom-0 right-0 z-50 section-padding">
        <SpotifyWidget />
      </div>

      <Image
        src={HeroImage}
        layout="fill"
        alt=""
        className="inset-0 object-cover z-0 w-full h-full"
      />
    </div>
  );
};
