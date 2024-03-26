import { ProjectListLines } from "@/components/project/project-list-lines";
import { request } from "@/lib/dato";

import { HomeFeature } from "@/components/home/feature";
import { ProjectCard } from "@/components/home/project-card";
import { SimpleHeader } from "@/components/shared/simple-header";
import { ProjectRecord } from "@/gql/graphql";
import query from "./page.graphql";
import { HeroView } from "@/components/home/hero-view";
import { BottomNav } from "@/components/shared/bottom-nav";
const getHomepageContent = async () => await request(query);

export default async function Home() {
  const { projects, experiences } = await getHomepageContent();
  return (
    <div data-scroll-section>
      <div className="p-6 md:p-16">
        <SimpleHeader />
        <HomeFeature />
        {projects.map((project) => (
          <ProjectCard project={project as ProjectRecord} key={project.id} />
        ))}
        <ProjectListLines experiences={experiences} />
      </div>
    </div>
  );
}
