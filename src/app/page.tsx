import { ProjectListLines } from "@/components/project/project-list-lines";
import { request } from "@/lib/dato";

import { HomeFeature } from "@/components/home/feature";
import { ProjectCard } from "@/components/home/project-card";
import { SimpleHeader } from "@/components/shared/simple-header";
import { ProjectRecord } from "@/gql/graphql";
import query from "./page.graphql";
const getHomepageContent = async () => await request(query);

export default async function Home() {
  const { projects, experiences } = await getHomepageContent();
  return (
    <div className="p-6 md:p-16">
      <SimpleHeader />
      {/* <HeroView /> */}
      <div className="relative z-auto bg-background">
        {/* <InfiniteMovingCardsDemo /> */}
        <HomeFeature />
        <div className="content-padding gap-8 flex flex-col">
          {projects.map((project) => (
            <ProjectCard project={project as ProjectRecord} key={project.id} />
          ))}
        </div>
        <ProjectListLines experiences={experiences} />
      </div>
    </div>
  );
}
