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
          <div
            className={`h-screen grid place-content-center ${
              isOdd(index) ? "bg-background -translate-x-20" : "bg-muted"
            }`}
            key={index}
          >
            <TypographyHero className="uppercase">
              <span className="text-[24rem] text-brand">{p}</span> years
            </TypographyHero>
            <TypographyHero className="uppercase -mt-12">
              of experience
            </TypographyHero>
            <TypographyP className="max-w-[36rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tempore magni commodi earum perferendis necessitatibus illo modi
              quidem dolores eius architecto ut quas asperiores aperiam soluta
              nihil, molestias odio! Quia!
            </TypographyP>
          </div>
        ))}
        <FeaturedProject />
        <ProcessOverview />
        <ProjectListLines />
      </div>
    </div>
  );
}
