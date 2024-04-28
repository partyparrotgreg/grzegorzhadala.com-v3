import { Hero } from "@/components/home/hero";
import { getBlock } from "@/components/project/get-block";
import { request } from "@/lib/dato";
import { Fragment } from "react";
import query from "./page.graphql";
const getHomeContent = async () => await request(query);

export default async function Home() {
  const { home } = await getHomeContent();

  return (
    <>
      <Hero text={home?.pageIntro} />
      {home?.body.map((block: any) => {
        return <Fragment key={block.id}>{getBlock(block)}</Fragment>;
      })}
    </>
  );
}
