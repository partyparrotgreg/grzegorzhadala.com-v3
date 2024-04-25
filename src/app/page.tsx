import { BlockSectionTitle } from "@/components/blocks/block-section-title";
import { Hero } from "@/components/home/hero";
import { BlockProjectList } from "@/components/project/block-project-list";
import { HeaderNav } from "@/components/shared/header-nav";
import { ProjectRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import query from "./page.graphql";
const getHomeContent = async () => await request(query);

export default async function Home() {
  const { projects, home } = await getHomeContent();

  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.role?.end).getTime() - new Date(a.role?.end).getTime();
  });

  const findEarliest = (projects: ProjectRecord[]) => {
    const endDates = projects.map((project) => project.role?.end);
    const earliest = endDates.reduce((earliest, current) => {
      return current < earliest ? current : earliest;
    });
    const latest = endDates.reduce((latest, current) => {
      return current > latest ? current : latest;
    });
    return `${new Date(earliest).getFullYear()} - ${new Date(
      latest
    ).getFullYear()}`;
  };
  return (
    <>
      <HeaderNav />
      <Hero text={home?.pageIntro} />
      <BlockSectionTitle
        action={`${findEarliest(projects as ProjectRecord[])}`}
      >
        Selected work
      </BlockSectionTitle>

      <BlockProjectList projects={sortedProjects as ProjectRecord[]} />
    </>
  );
}
