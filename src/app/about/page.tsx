import { request } from "@/lib/dato";
import query from "./page.graphql";

import { getBlock } from "@/components/blocks/get-block";
import { MainFooter } from "@/components/shared/main-footer";
import { PageProgress } from "@/components/shared/page-progress";
import { FooterRecord } from "@/gql/graphql";
import { Fragment } from "react";
import { toNextMetadata } from "react-datocms";
import { JsonLdScript, profilePageJsonLd } from "@/lib/json-ld";

const getAboutContent = async () => await request(query);

export async function generateMetadata() {
  const response = await getAboutContent();

  return toNextMetadata([...response.site.favicon, ...response.about!.seo]);
}

export default async function AboutPage() {
  const { about, footer } = await getAboutContent();

  const aboutBlock = about?.body.find(
    (b) => b.__typename === "AboutBlockRecord",
  ) as { story?: string; photo?: { responsiveImage?: { src: string } } } | undefined;

  const experienceBlock = about?.body.find(
    (b) => b.__typename === "ExperienceListBlockRecord",
  ) as {
    experiences?: { client: { company: string }; end?: string }[];
  } | undefined;

  const currentJob = experienceBlock?.experiences?.find((e) => !e.end);

  const jsonLd = profilePageJsonLd({
    description: aboutBlock?.story?.slice(0, 200),
    image: aboutBlock?.photo?.responsiveImage?.src,
    knowsAbout: [
      "Product Design",
      "Design Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Design Systems",
      "Fintech",
      "Web3",
      "DeFi",
    ],
    worksFor: currentJob ? { name: currentJob.client.company } : undefined,
  });

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <PageProgress />

      {about?.body.map((block) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
      <MainFooter footer={footer as FooterRecord} />
    </>
  );
}
