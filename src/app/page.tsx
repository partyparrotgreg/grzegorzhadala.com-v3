import { HeroView } from "@/components/home/hero-view";
import { ProcessOverview } from "@/components/process/process-overview";
import { ProjectListLines } from "@/components/project/project-list-lines";
import { InfiniteMovingCardsDemo } from "@/components/shared/marquee-logos";

// const getHomepageContent = async () => await request(query);

export default async function Home() {
  // const {
  //   clients,
  //   clientsMeta: { count },
  // } = await getHomepageContent();
  return (
    <div>
      <HeroView />
      <div className="relative z-auto bg-background">
        <InfiniteMovingCardsDemo />
        <ProcessOverview />
        <ProjectListLines />
      </div>
    </div>
  );
}
