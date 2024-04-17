"use client";

import Image from "next/image";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { Fade } from "react-awesome-reveal";

export const SectionAbout = () => {
  return (
    <>
      <BlockSectionTitle>About</BlockSectionTitle>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 relative">
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={"/greg.jpg"}
            width={1000}
            height={1400}
            alt=""
            className="relative object-cover object-center filter grayscale contrast-200"
          ></Image>
        </div>
        <div className="col-span-2 space-y-8 pt-24 pb-24 col-start-2">
          <Fade cascade triggerOnce>
            <p className="text-xl lg:text-2xl max-w-[60ch] leading-8">
              I have been a multi-disciplinary designer since 2005, working on a
              wide range of digital products including social media platforms,
              payment systems, real-estate solutions, machine learning,
              blockchain, cryptocurrency, print-on-demand, and sports.
            </p>
            <p className="max-w-[60ch]">
              My skills in project management, design, and development, paired
              with my friendly nature and professional way of working with
              clients, allow me to fit into any project or work setting. Every
              new challenge is a chance for me to learn and grow.
            </p>
            <p className="max-w-[60ch]">
              I always stay updated on the latest technologies and design
              shifts. I love creative thinking and motivate my team to bring
              fresh ideas to our products and our collaboration. On top of this,
              I believe in giving back to the community. Whether it is
              contributing to open-source and Figma community projects or
              teaching through UX/Figma workshops, I am dedicated to sharing and
              growing together.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};
