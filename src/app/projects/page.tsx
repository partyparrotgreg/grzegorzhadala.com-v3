import { TypographyH1 } from "@/components/typography";
import { request } from "@/lib/dato";
import Link from "next/link";

import query from "./page.graphql";
import DatoImage from "@/components/shared/dato-image";

const getProjectsContent = async () => await request(query);

export default async function Projects() {
  const { projects } = await getProjectsContent();
  return (
    <div className="flex flex-col gap-4 isolate">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.slug}`} passHref>
          <div>
            <div>
              {project.projectName} / {project.client?.company}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
