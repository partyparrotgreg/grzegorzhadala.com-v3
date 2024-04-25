"use client";
import { ProjectRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SkillsRender } from "../shared/skills-render";
import { TitleDescription } from "../shared/title-description";
import { useIsDark } from "@/hooks/useIsDark";

interface ProjectPromoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectRecord | undefined;
}

export const ProjectPromoCard = ({ project }: ProjectPromoCardProps) => {
  const isDark = useIsDark();
  return (
    <Link
      scroll
      href={`/project/${project?.slug}`}
      className="w-full relative flex flex-col xl:grid xl:grid-cols-3 group gap-12"
    >
      <div className="flex flex-col gap-6">
        <div>{project?.client?.company}</div>
        <TitleDescription
          title={project?.projectName}
          description={project?.summary}
        />
        {project?.skills && <SkillsRender skills={project?.skills} />}
      </div>
      {project?.cover.responsiveImage && (
        <motion.div className={cn("relative w-full col-span-2")}>
          <ReactDatocmsImage
            data={project.cover.responsiveImage}
            lazyLoad
            pictureClassName="w-full h-auto object-cover"
            className={cn(
              "w-full h-auto object-cover filter grayscale  transition-all duration-300 ease-in-out",
              isDark ? "invert" : "invert-0"
            )}
          />
        </motion.div>
      )}
    </Link>
  );
};

