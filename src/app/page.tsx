import { HeroView } from "@/components/home/hero-view";
import { ProcessOverview } from "@/components/process/process-overview";
import { FeaturedProject } from "@/components/project/featured-project";
import { ProjectListLines } from "@/components/project/project-list-lines";

export default function Home() {
  return (
    <div>
      <HeroView />
      <div className="bg-background relative z-auto">
        <FeaturedProject />
        <ProcessOverview />
        <ProjectListLines />
      </div>
    </div>
  );
}
