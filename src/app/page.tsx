import { request } from "@/lib/dato";

import query from "./page.graphql";
import { PageHero } from "@/components/shared/page-hero";
import { SectionGrid } from "@/components/shared/section-grid";
import { BigDescription } from "@/components/typography/big-description";
import { SectionTitle } from "@/components/shared/section-title";
const getHomepageContent = async () => await request(query);

export default async function Home() {
  const { projects, experiences } = await getHomepageContent();
  return (
    <div>
      <PageHero />
      <div className="rounded-b-[4rem] overflow-hidden">
        <div className="section-padding bg-stone-100 dark:bg-stone-950 section-gap flex flex-col">
          <SectionTitle>Introduction</SectionTitle>
          <SectionGrid>
            <div className="col-start-5 col-span-8">
              <BigDescription>
                A creative problem solver specializing in visual, motion and
                interaction design with experience designing for TV, web, mobile
                and tablet. Currently designing the future of live TV and
                streaming at Comcast.
              </BigDescription>
            </div>
            <div className="w-full h-auto col-span-8 col-start-5">
              <p className="columns-2 text-stone-800 dark:text-stone-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptas iusto harum necessitatibus earum aliquam
                voluptate sapiente vel totam! Dolorem magnam consequatur,
                officiis reiciendis tenetur sunt libero corporis provident
                illum!
              </p>
            </div>
          </SectionGrid>
        </div>
      </div>

      {/* <SimpleHeader />
      <HomeFeature />
      {projects.map((project) => (
        <ProjectCard project={project as ProjectRecord} key={project.id} />
      ))}
      <ProjectListLines experiences={experiences} /> */}
    </div>
  );
}
