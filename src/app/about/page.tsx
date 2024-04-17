import { SectionAbout } from "@/components/about/section-about";
import { BlogCards } from "@/components/blog/blog-cards";
import { Hero } from "@/components/home/hero";
import { ProcessGrid } from "@/components/process/process-grid";
import { ExperienceList } from "@/components/shared/experience-list";
import { HeaderNav } from "@/components/shared/header-nav";
import { ExperienceRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import query from "./page.graphql";
const getAboutContent = async () => await request(query);

export default async function AboutPage() {
  const { experiences, about } = await getAboutContent();

  return (
    <>
      <HeaderNav />
      <Hero text={about?.introduction} />
      <SectionAbout />
      <ExperienceList experiences={experiences as ExperienceRecord[]} />
      <ProcessGrid />
      <BlogCards />
    </>
  );
}
