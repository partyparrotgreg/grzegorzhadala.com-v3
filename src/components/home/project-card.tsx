import {
  DatoImage_ResponsiveImageFragment,
  ProjectRecord,
} from "@/gql/graphql";
import Link from "next/link";
import DatoImage from "../shared/dato-image";
import { RedDot } from "../shared/red-dot";

export const ProjectCard = ({ project }: { project: ProjectRecord }) => {
  const displayYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className="flex-col justify-start items-start gap-2 flex space-y-16">
          <div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-brand font-medium">
                {displayYear(project.role?.start)}
              </div>
              <RedDot />
              <div className="uppercase">{project.client?.company}</div>
            </div>
            {project.skills.length > 0 && (
              <div className="flex flex-row flex-wrap gap-1 -ml-1">
                {project.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="bg-muted px-1 text-sm text-muted-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="text-5xl uppercase tracking-tight">
            {project.projectName}
          </div>
        </div>
        <div className="bg-muted">
          <DatoImage
            fragment={
              project.cover.responsiveImage as DatoImage_ResponsiveImageFragment
            }
            pictureClassName="relative object-cover w-full h-full"
            layout="responsive"
          />
        </div>
      </div>
    </Link>
  );
};
