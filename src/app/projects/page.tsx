import { TypographyH1 } from "@/components/typography";
import { request } from "@/lib/dato";
import Link from "next/link";

import query from "./page.graphql";
import DatoImage from "@/components/shared/dato-image";

const getHomepageContent = async () => await request(query);

export default async function Projects() {
  const {
    projects,
    meta: { count },
  } = await getHomepageContent();
  return (
    <div className="content-padding mt-16">
      <TypographyH1>Projects {count}</TypographyH1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`} passHref>
            <div>
              <DatoImage
                pictureClassName="xl:w-auto xl:h-screen"
                layout="responsive"
                fragment={project.cover.responsiveImage}
              />
              <div>
                {project.projectName} / {project.client?.company}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
