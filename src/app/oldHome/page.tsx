import { ProcessOverview } from "@/components/process/process-overview";
import { ProjectPromoCard } from "@/components/project/project-promo-card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ProjectRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import query from "./page.graphql";
const getHomepageContent = async () => await request(query);

export default async function Home() {
  const { projects } = await getHomepageContent();
  return (
    <>
      <PageHero />
      <div className="rounded-b-[4rem] overflow-hidden">
        <ProcessOverview />
        <div
          className="section-padding section-gap flex flex-col"
          id="introduction"
        >
          <SectionTitle action={"2014 - 2024"}>Selected work</SectionTitle>
          {projects.map((project) => (
            <ProjectPromoCard
              project={project as ProjectRecord}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
