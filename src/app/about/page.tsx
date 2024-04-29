import { Hero } from "@/components/home/hero";
import { request } from "@/lib/dato";
import query from "./page.graphql";

import { SectionAbout } from "@/components/about/section-about";
import { getBlock } from "@/components/blocks/get-block";
import { Fragment } from "react";
const getAboutContent = async () => await request(query);

export default async function AboutPage() {
  const { about } = await getAboutContent();

  return (
    <>
      <Hero text={about?.introduction} />
      <SectionAbout />
      {about?.body.map((block) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
      {/* <ProjectTextFormatter body={about?.body as StructuredTextType} /> */}
      {/* <SectionAbout />
      <ExperienceList experiences={about?.body as ExperienceRecord[]} />
    <ClientsOverview clients={clients as ClientRecord[]} /> */}
    </>
  );
}
