import { ProjectPromoCard } from "@/components/project/project-promo-card";
import { ClientsOverview } from "@/components/shared/clients-overview";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/transitions/reveal";
import { ClientRecord, ProjectRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import query from "./page.graphql";
import { HeaderNav } from "@/components/shared/header-nav";
const getHomeContent = async () => await request(query);

export default async function Home() {
  const { projects, clients } = await getHomeContent();

  const findEarliest = (projects: ProjectRecord[]) => {
    const endDates = projects.map((project) => project.role?.end);
    const earliest = endDates.reduce((earliest, current) => {
      return current < earliest ? current : earliest;
    });
    const latest = endDates.reduce((latest, current) => {
      return current > latest ? current : latest;
    });
    return `${new Date(earliest).getFullYear()} - ${new Date(
      latest
    ).getFullYear()}`;
  };
  return (
    <>
      <HeaderNav />
      <Reveal>
        <div className="lg:w-1/2 text-3xl md:text-5xl tracking-tight my-24 font-medium font-heading">
          Greg&apos;s work seamlessly blends user-centric design with innovative
          solutions to meet complex challenges across various industries.
        </div>
      </Reveal>
      <SectionTitle action={`${findEarliest(projects as ProjectRecord[])}`}>
        Selected work
      </SectionTitle>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
        {projects.map((project) => (
          <ProjectPromoCard
            project={project as ProjectRecord}
            key={project.id}
          />
        ))}
      </div>
      <ClientsOverview clients={clients as ClientRecord[]} />
      <SectionTitle>Services</SectionTitle>
    </>
  );
}
