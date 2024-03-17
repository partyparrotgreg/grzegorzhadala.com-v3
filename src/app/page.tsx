import { HomeFeature } from "@/components/home/feature";
import { HeroView } from "@/components/home/hero-view";
import { ProcessOverview } from "@/components/process/process-overview";
import { FeaturedProject } from "@/components/project/featured-project";
import { ProjectListLines } from "@/components/project/project-list-lines";

export default function Home() {
  return (
    <div>
      <HeroView />
      <div className="relative z-auto bg-background">
        {[17, 100, 400].map((p, index) => (
          <HomeFeature
            p={p}
            index={index}
            key={index}
            isOdd={index % 2 === 0}
          />
        ))}
        <FeaturedProject />
        <ProcessOverview />
        <ProjectListLines />
      </div>
    </div>
  );
}
