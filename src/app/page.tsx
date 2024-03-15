import { ExperienceList } from "@/components/experience-list";
import { FeaturedProject } from "@/components/project/featured-project";
import { ProjectListLines } from "@/components/project/project-list-lines";
import { HeroView } from "@/views/home/hero-view";

export default function Home() {
  return (
    <div>
      <HeroView />
      <FeaturedProject />
      <ExperienceList />
      <ProjectListLines />
    </div>
  );
}
