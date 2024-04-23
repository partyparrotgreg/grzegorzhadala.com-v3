"use client";

import Image from "next/image";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { Fade } from "react-awesome-reveal";

export const SectionAbout = () => {
  return (
    <>
      <BlockSectionTitle>About</BlockSectionTitle>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 relative">
        <div className="relative overflow-hidden aspect-square lg:aspect-[10/14] mix-blend-multiply dark:mix-blend-normal">
          <Image
            src={"/greg.jpg"}
            width={1000}
            height={1400}
            alt=""
            className="relative object-cover object-center filter grayscale contrast-200"
          ></Image>
        </div>
        <div className="col-span-2 space-y-8 pt-14 pb-24 col-start-2">
          <Fade cascade triggerOnce>
            <p className="text-xl lg:text-2xl max-w-[60ch] leading-8">
              Since 2005, I’ve been a multidisciplinary designer, tackling a
              diverse range of digital projects from social media platforms and
              payment systems to cutting-edge technologies like blockchain and
              Web3. My work spans numerous sectors including real estate
              solutions, machine learning, cryptocurrency, sports applications,
              and print-on-demand services.
            </p>
            <p className="text-xl lg:text-2xl max-w-[60ch]">
              My background in project management, design, and development,
              paired with a friendly and professional demeanor, makes it easy
              for me to fit into various project teams. I see every new
              challenge as a chance to learn and grow. I’m especially passionate
              about the potential of blockchain and Web3 technologies to
              revolutionize how we interact with digital platforms.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};
