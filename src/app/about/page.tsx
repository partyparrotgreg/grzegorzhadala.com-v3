import { Hero } from "@/components/home/hero";
import { request } from "@/lib/dato";
import query from "./page.graphql";

import { getBlock } from "@/components/blocks/get-block";
import { MainFooter } from "@/components/shared/main-footer";
import { PageProgress } from "@/components/shared/page-progress";
import { FooterRecord } from "@/gql/graphql";
import { Fragment } from "react";
import { toNextMetadata } from "react-datocms";

const getAboutContent = async () => await request(query);

export async function generateMetadata() {
  const response = await getAboutContent();

  return toNextMetadata([...response.site.favicon, ...response.about!.seo]);
}

export default async function AboutPage() {
  const { about, footer } = await getAboutContent();

  return (
    <>
      <PageProgress />
      <Hero text={about?.intro as string} />
      {about?.body.map((block) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
      <MainFooter footer={footer as FooterRecord} />
    </>
  );
}
