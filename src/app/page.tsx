import { ExperienceList } from "@/components/experience-list";
import { FeaturedProject } from "@/components/project/featured-project";
import { ProjectListLines } from "@/components/project/project-list-lines";
import { TypographyDemo } from "@/components/typography";
import { HeroView } from "@/components/hero-view";

export default function Home() {
  return (
    <div>
      <HeroView />
      <FeaturedProject />
      <ProjectListLines />
    </div>
  );
}
