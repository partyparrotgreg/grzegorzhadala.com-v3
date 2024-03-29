"use client";
import { ProjectRecord } from "@/gql/graphql";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SectionGrid } from "../shared/section-grid";
import { SkillsRender } from "../shared/skills-render";
import { UnderlineLink } from "../shared/underline-link";
import { Button } from "../ui/button";
interface ProjectPromoCardProps {
  project: ProjectRecord | undefined;
}

export const ProjectPromoCard = ({ project }: ProjectPromoCardProps) => {
  if (!project) return null;
  const { role, projectName, client, cover, slug } = project;

  //   const yearStart = new Date(role?.start).getFullYear();
  const yearEnd = role?.end ? new Date(role.end).getFullYear() : "CURRENTs";
  return (
    <div className="w-full relative rounded-3xl bg-white/80 dark:bg-black/80 flex-col flex">
      <div className="section-padding section-gap flex flex-col">
        <div className="relative flex flex-row justify-between items-center">
          <div className="text-foreground flex flex-row gap-4">
            <div className="text-5xl tracking-tighter">{yearEnd}</div>
            <div className="-space-y-1 flex flex-col justify-center">
              <div className="text-base uppercase opacity-70">
                {client?.company}
              </div>
              <UnderlineLink href={`/project/${slug}`}>
                {projectName}
              </UnderlineLink>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/project/${slug}`}>
              <Button size={"icon"} variant={"ghost"}>
                <ArrowRight size={16} />
              </Button>
            </Link>
            {project.client?.website && (
              <Link href={new URL(project.client?.website)}>
                <Button variant={"ghost"} size={"icon"}>
                  <ArrowUpRight />
                </Button>
              </Link>
            )}
          </div>
        </div>
        <SectionGrid>
          <div className="col-span-8 col-start-5 text-3xl gap-2 flex flex-col">
            <div className="max-w-[50ch]">{project.summary}</div>
            {project.skills && (
              <div className="mt-4">
                <SkillsRender skills={project.skills} />
              </div>
            )}
          </div>
        </SectionGrid>
      </div>
      {cover.responsiveImage && (
        <Link href={`/project/${slug}`}>
          <motion.div className="rounded-2xl overflow-hidden -m-3 relative">
            <ReactDatocmsImage data={cover.responsiveImage} lazyLoad />
          </motion.div>
        </Link>
      )}
    </div>
  );
};
