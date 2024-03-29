"use client";

import { BigDescription } from "../typography/big-description";
import { HeaderNav } from "./header-nav";
import { SectionGrid } from "./section-grid";
import { TextDescription } from "./text-description";
import { UnderlineLink } from "./underline-link";

export const PageHero = () => {
  return (
    <div className="min-h-dvh md:h-screen section-padding flex flex-col justify-between relative isolate  overflow-hidden">
      <div className="relative z-20 h-full flex flex-col justify-between section-gap grow">
        <HeaderNav />
        <SectionGrid>
          <div className="flex-col col-span-12 -space-y-2 text-6xl font-bold 2xl:text-6xl 3xl:text-8xl text-foreground">
            <div className="">PRODUCT</div>
            <div className="">DESIGNER</div>
            <div>
              <span className="opacity-50 italic font-normal">&</span>
              <span className=""> UI ENGINEER</span>
            </div>
          </div>
          <BigDescription className="col-span-8 col-start-5 ">
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
            className="col-span-4"
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
    </div>
  );
};
