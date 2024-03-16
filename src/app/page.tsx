import { HomeFeature } from "@/components/home/feature";
import { HeroView } from "@/components/home/hero-view";
import { ProcessOverview } from "@/components/process/process-overview";
import { FeaturedProject } from "@/components/project/featured-project";
import { ProjectListLines } from "@/components/project/project-list-lines";
import { TypographyHero, TypographyP } from "@/components/typography";

export default function Home() {
  const isOdd = (num: number) => num % 2 === 0;
  return (
    <div>
      <HeroView />
      <div className="relative z-auto bg-background">
        {[17, 100, 400].map((p, index) => (
          <HomeFeature p={p} index={index} key={index} />
        ))}
        <FeaturedProject />
        <ProcessOverview />
        <ProjectListLines />
      </div>
    </div>
  );
}
