import { Hero } from "@/components/home/hero";
import { MainFooter } from "@/components/shared/main-footer";
import { request } from "@/lib/dato";
import query from "./page.graphql";
import { toNextMetadata } from "react-datocms/seo";
import { FooterRecord } from "@/gql/graphql";
const getHomeContent = async () => await request(query);

export async function generateMetadata() {
  const response = await getHomeContent();

  return toNextMetadata([...response.site.favicon, ...response.home!.seo]);
}

export default async function NotFound() {
  const homeContent = await getHomeContent();

  if (!homeContent) return <>Something went wrong</>

  const { footer } = homeContent;
  return (
    <>
      <Hero text={"404"} callout={"Could not find requested resource"} />
      <MainFooter footer={footer as FooterRecord} />
    </>
  );
}
