import { getBlock } from "@/components/blocks/get-block";
import { Hero } from "@/components/home/hero";
import { MainFooter } from "@/components/shared/main-footer";
import { PageProgress } from "@/components/shared/page-progress";
import { FooterRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import { Fragment } from "react";
import { toNextMetadata } from "react-datocms";
import query from "./page.graphql";
const getHomeContent = async () => await request(query);

export async function generateMetadata() {
  const response = await getHomeContent();

  return toNextMetadata([...response.site.favicon, ...response.home!.seo]);
}

export default async function Home() {
  const { home, footer } = await getHomeContent();

  return (
    <>
      <PageProgress />
      <Hero text={home?.pageIntro as string} />
      {home?.body.map((block: any) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
      <MainFooter footer={footer as FooterRecord} />
    </>
  );
}
