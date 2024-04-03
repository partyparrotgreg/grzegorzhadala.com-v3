"use client";
import { ProjectRecord } from "@/gql/graphql";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Image as ReactDatocmsImage } from "react-datocms";
import { UnderlineLink } from "../shared/underline-link";
import { Button } from "../ui/button";

interface ProjectPromoCardProps {
  project: ProjectRecord | undefined;
}

export const ProjectPromoCard = ({ project }: ProjectPromoCardProps) => {
  // const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  // const animation = useAnimation();

  // const handleAnimation = () => {
  //   animation
  //     .start({
  //       opacity: 1,
  //       width: "100%",
  //       transition: {
  //         duration: 0.5,
  //       },
  //     })
  //     .then(() => {
  //       router.push(`/project/${project?.slug}`);
  //     });
  // };

  return (
    <motion.div ref={ref} className="w-full relative flex-col flex gap-4">
      {project?.cover.responsiveImage && (
        <motion.div className="overflow-hidden relative">
          <Link href={`/project/${project?.slug}`} scroll>
            <ReactDatocmsImage
              data={project.cover.responsiveImage}
              lazyLoad
              className="scale-105"
            />
          </Link>
        </motion.div>
      )}
      <div className="relative flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
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

