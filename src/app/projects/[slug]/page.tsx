import { HomeFeature } from "@/components/home/feature";
import { FlowGrid } from "@/components/project/flow-grid";

import { SectionContainer } from "@/components/project/section-container";
import {
  TypographyH3,
  TypographyHero,
  TypographyP,
} from "@/components/typography";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import { clientsLogos } from "@/constants/clients";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// TODO: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

const content = {
  process: [
    {
      title: "Discovery",
      description:
        "We start by understanding your business, your customers, and your goals. We then define the project scope, timeline, and resources required.",
    },
    {
      title: "Design",
      description:
        "We create a visual representation of your product, including wireframes and mockups. This stage helps us understand the user experience and the user interface.",
    },
    {
      title: "Development",
      description:
        "We bring the designs to life. Our team of developers and engineers work together to build the product and ensure it meets your business needs.",
    },
    {
      title: "Testing",
      description:
        "We test the product to ensure it meets the requirements and is free of bugs. We also test the product with real users to gather feedback.",
    },
    {
      title: "Launch",
      description:
        "We deploy the product to production and ensure it is ready for your customers. We also provide support and maintenance after the launch.",
    },
  ],
};

export default function Project({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <div>
      <div className="z-0 w-full aspect-video fixed top-0 left-0 right-0 h-1/2">
        <Image
          src="/images/head3.png"
          width={1603}
          height={506}
          alt=""
          className="relative object-cover w-full h-full transition-all duration-300"
        />
      </div>
      <SectionTitle
        action={
          <Link href={"https://rolla.fi"} target="_blank">
            <Button size={"sm"} variant={"outline"}>
              Website <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </Link>
        }
      >
        <Link href={"/projects"}>
          <Button size={"icon"} variant={"ghost"}>
            <ArrowLeft />
          </Button>
        </Link>{" "}
        Rolla
      </SectionTitle>

      <div className="relative z-50 bg-background">
        <div className="content-padding space-y-12">
          <TypographyHero>Options Trading Platform</TypographyHero>
          <div className="grid sm:grid-cols-4 gap-8">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-brand font-normal uppercase">Expertise</div>
              <TypographyP>Product Design</TypographyP>
              <TypographyP>Brand Design</TypographyP>
              <TypographyP>Frontend Development</TypographyP>
              <TypographyP>React Native</TypographyP>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-brand font-normal uppercase">Industry</div>
              <TypographyP>Web3</TypographyP>
              <TypographyP>DeFi</TypographyP>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex col-span-2">
              <div className="text-brand font-normal uppercase">About</div>
              <TypographyP className="">
                My role was to create branding, design system, web & mobile app
                designs and also help with marketing: landing page and social
                media. After setting up foundations (tokens, design system,
                patterns) my design work was reduced to minimum and I started to
                help with implementing the UI in ReactJS/Native apps.
              </TypographyP>
            </div>
          </div>
        </div>
        <div className="z-0 w-full aspect-square lg:aspect-video h-full">
          <Image
            src="/images/head3.png"
            width={1603}
            height={506}
            alt=""
            className="relative object-cover w-full h-full transition-all duration-300"
          />
        </div>
        <HomeFeature index={0} p={clientsLogos.length} isOdd={false} />

        <SectionContainer>
          <div>
            {content.process.map(({ title, description }, index) => (
              <div
                className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-24 py-8 border-b"
                key={index}
              >
                <TypographyH3>{title}</TypographyH3>
                <TypographyP>{description}</TypographyP>
              </div>
            ))}
          </div>
        </SectionContainer>

        <FlowGrid />
      </div>
    </div>
  );
}
