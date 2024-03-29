import { ClientsOverview } from "@/components/shared/clients-overview";
import { HeaderNav } from "@/components/shared/header-nav";
import { SectionGrid } from "@/components/shared/section-grid";
import { BigDescription } from "@/components/typography/big-description";

import { ProjectListLines } from "@/components/project/project-list-lines";
import { ProjectPromoCard } from "@/components/project/project-promo-card";
import { SectionTitle } from "@/components/shared/section-title";
import { ClientRecord, ExperienceRecord, ProjectRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import query from "./page.graphql";
const getTestContent = async () => await request(query);

export default async function Home() {
  const { clients, projects, experiences } = await getTestContent();
  return (
    <div className="section-padding flex flex-col justify-between relative isolate overflow-hidden">
      <div className="relative z-20 h-full flex flex-col justify-between section-gap grow">
        <HeaderNav />
        <SectionGrid>
          <div className="flex-col col-span-12 -space-y-2 text-6xl font-bold 2xl:text-6xl 3xl:text-8xl text-foreground">
            <div className="">PRODUCT</div>
            <div className="">DESIGNER</div>
            <div>
              <span className="opacity-50 italic font-normal">&</span>
              <span className=""> UI ENGINEER</span>
            </div>
          </div>
          <BigDescription className="col-span-8 col-start-5 ">
            A creative problem solver specializing in visual, motion and
            interaction design with experience designing for TV, web, mobile and
            tablet. Currently designing the future of live TV and streaming at
            Comcast.
          </BigDescription>
        </SectionGrid>
        {projects.map((project) => (
          <ProjectPromoCard
            project={project as ProjectRecord}
            key={project.id}
          />
        ))}
        <ProjectListLines experiences={experiences as ExperienceRecord[]} />
        <SectionTitle>Clients</SectionTitle>
        <SectionGrid>
          <div className="flex-col col-span-12 -space-y-2 text-6xl font-bold 2xl:text-6xl 3xl:text-8xl text-foreground">
            <div className="">Worked with {clients.length} clients.</div>
          </div>
          <BigDescription className="col-span-8 col-start-5 ">
            A creative problem solver specializing in visual, motion and
            interaction design with experience designing for TV, web, mobile and
            tablet. Currently designing the future of live TV and streaming at
            Comcast.
          </BigDescription>
        </SectionGrid>
        <ClientsOverview clients={clients as ClientRecord[]} />
      </div>
    </div>
  );
}
