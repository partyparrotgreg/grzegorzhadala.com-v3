import { request } from "@/lib/dato";
import query from "./page.graphql";
import { PageHero } from "@/components/shared/page-hero";
import { SectionGrid } from "@/components/shared/section-grid";
import { BigDescription } from "@/components/typography/big-description";
import { SectionTitle } from "@/components/shared/section-title";
import { FigmaLogo } from "@phosphor-icons/react/dist/ssr";
import { ProjectImageCard } from "@/components/project/project-image-card";
import { UISwiper } from "@/components/ui/swiper";

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
          <div className="relative negative-padding">
            <UISwiper
              options={{
                centeredSlides: true,
                slidesPerView: 1.2,
                spaceBetween: 16,
              }}
              items={[
                <ProjectImageCard key={1} />,
                <ProjectImageCard key={2} />,
                <ProjectImageCard key={3} />,
                <ProjectImageCard key={4} />,
              ]}
            />
          </div>
        </div>
        <div className="section-padding bg-[#877668] dark:bg-stone-900 text-[#EEEBE9] dark:text-stone-400 section-gap flex flex-col">
          <SectionTitle>Tools & Stack</SectionTitle>
          <SectionGrid>
            <div className="col-start-5 col-span-8">
              <BigDescription>
                A creative problem solver specializing in visual, motion and
                interaction design with experience designing for TV, web, mobile
                and tablet. Currently designing the future of live TV and
                streaming at Comcast.
              </BigDescription>
            </div>
          </SectionGrid>
          <SectionGrid>
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                className="col-span-4 flex-col justify-between items-start inline-flex gap-8"
                key={index}
              >
                <FigmaLogo size={48} />
                <div className="self-stretch">
                  Design and prototype your web and mobile app interfaces
                  collaboratively in real-time, streamlining feedback and
                  iteration processes with team members and stakeholders.
                </div>
              </div>
            ))}
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
