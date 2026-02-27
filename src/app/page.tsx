import { getBlock } from "@/components/blocks/get-block";
import { MainFooter } from "@/components/shared/main-footer";
import { PageProgress } from "@/components/shared/page-progress";
import { FooterRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import { Fragment } from "react";
import { toNextMetadata } from "react-datocms";
import query from "./page.graphql";
import { Hero } from "@/components/home/hero";
const getHomeContent = async () => await request(query);

export async function generateMetadata() {
  const response = await getHomeContent();

  return toNextMetadata([...response.site.favicon, ...response.home!.seo]);
}

export default async function Home() {
  const homeContent = await getHomeContent();

  if (!homeContent) return <>Something went wrong</>

  const { home, footer } = homeContent;

  return (
    <>
      <PageProgress />
      <Hero
        text={home?.pageIntro}
      />
      {/* <div className="flex flex-col relative isolate content-padding">
        <h1 className="text-lg">Greg Hadala</h1>
        <Markdown
          components={{
            p: (props) => (
              <p
                {...props}
                className="relative z-50 text-3xl lg:text-[3em] leading-[1.25em] lg:leading-[1.15em] tracking-tight font-safiro"
              />
            ),
            strong: (props) => (
              <strong {...props} className="text-brand font-normal" />
            ),
            a: (props) => (
              <CustomLink {...props} target="_blank" className="text-blue-600" />
            ),
          }}
        >
          {home?.pageIntro}
        </Markdown>
      </div> */}
      {home?.body.map((block: any) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
      <MainFooter footer={footer as FooterRecord} />
    </>
  );
}
