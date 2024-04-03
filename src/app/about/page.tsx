import { ProcessGrid } from "@/components/process/process-grid";
import { ProjectListLines } from "@/components/project/project-list-lines";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/transitions/reveal";
import { ExperienceRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import query from "./page.graphql";
import { HeaderNav } from "@/components/shared/header-nav";
const getAboutContent = async () => await request(query);

export default async function AboutPage() {
  const { experiences } = await getAboutContent();

  return (
    <>
      <HeaderNav />
      <Reveal>
        <div className="lg:w-1/2 text-3xl md:text-5xl tracking-tight my-24 font-medium font-heading">
          Greg&apos;s work seamlessly blends user-centric design with innovative
          solutions to meet complex challenges across various industries.
        </div>
      </Reveal>
      <SectionTitle>Process</SectionTitle>
      <ProcessGrid />
      <div className="grid grid-cols-2 gap-24">
        <div className="gap-4 flex flex-col">
          <SectionTitle>Process</SectionTitle>
          <div>
            Greg&apos;s work seamlessly blends user-centric design with
            innovative solutions to meet complex challenges across various
            industries.
          </div>
        </div>
        <ProjectListLines experiences={experiences as ExperienceRecord[]} />
      </div>
    </>
  );
}
