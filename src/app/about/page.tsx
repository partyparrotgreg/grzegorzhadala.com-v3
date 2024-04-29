import { Hero } from "@/components/home/hero";
import { request } from "@/lib/dato";
import query from "./page.graphql";

import { SectionAbout } from "@/components/about/section-about";
import { getBlock } from "@/components/blocks/get-block";
import { Fragment } from "react";
import { toNextMetadata } from "react-datocms";

const getAboutContent = async () => await request(query);

export async function generateMetadata() {
  const response = await getAboutContent();

  return toNextMetadata([...response.site.favicon, ...response.about!.seo]);
}


export default async function AboutPage() {
  const { about } = await getAboutContent();

  return (
    <>
      <Hero text={about?.introduction} />
      <SectionAbout />
      {about?.body.map((block) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
    </>
  );
}
