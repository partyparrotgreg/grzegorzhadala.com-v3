"use client";
import { ProjectRecord } from "@/gql/graphql";
import { motion } from "framer-motion";
import Link from "next/link";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SkillsRender } from "../shared/skills-render";
import { TitleDescription } from "../shared/title-description";

interface ProjectPromoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectRecord | undefined;
}

export const ProjectPromoCard = ({ project }: ProjectPromoCardProps) => {
  return (
    <div className="py-12">
      <Link
        scroll
        href={`/project/${project?.slug}`}
        className="w-full relative flex flex-col xl:grid xl:grid-cols-3 group gap-12"
      >
        <div className="flex flex-col gap-6">
          <div>
            <TitleDescription
              title={project?.projectName}
              description={project?.summary}
            />
          </div>
          <div>
            {project?.skills && <SkillsRender skills={project?.skills} />}
          </div>
        </div>
        {project?.cover.responsiveImage && (
          <motion.div
            className="relative w-full col-span-2"
            style={{
              filter: `drop-shadow(0px 20px 20px rgba(255, 75, 20, 0.2))`,
            }}
          >
            <ReactDatocmsImage
              data={project.cover.responsiveImage}
              lazyLoad
              className="w-full h-auto object-cover relative z-10"
            />
          </motion.div>
        )}
      </Link>
    </div>
  );
};

