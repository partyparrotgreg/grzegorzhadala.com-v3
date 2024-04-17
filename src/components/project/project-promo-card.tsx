"use client";
import { ProjectRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Image as ReactDatocmsImage } from "react-datocms";
import { UnderlineLink } from "../shared/underline-link";
import { Button } from "../ui/button";

interface ProjectPromoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectRecord | undefined;
}

export const ProjectPromoCard = ({
  project,
  ...props
}: ProjectPromoCardProps) => {
  const mergedClasses = cn(
    "w-full relative flex-col flex group",
    props.className
  );
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className={mergedClasses}>
      {project?.cover.responsiveImage && (
        <motion.div className="overflow-hidden relative w-full">
          <Link href={`/project/${project?.slug}`} scroll className="w-full">
            <ReactDatocmsImage
              data={project.cover.responsiveImage}
              lazyLoad
              pictureClassName="w-full h-auto object-cover"
              className="w-full h-auto object-cover"
            />
          </Link>
        </motion.div>
      )}
      <div className="relative flex flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
          <div className="opacity-70">{project?.client?.company}</div>
          <UnderlineLink href={`/project/${project?.slug}`} scroll>
            {project?.projectName}
          </UnderlineLink>
        </div>

        <Link href={`/project/${project?.slug}`} scroll>
          <Button size={"icon"} variant={"ghost"}>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

