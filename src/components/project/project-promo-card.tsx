"use client";
import { ProjectRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SkillsRender } from "../shared/skills-render";

interface ProjectPromoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectRecord | undefined;
  index: number;
  length: number;
}

export const ProjectPromoCard = ({
  project,
  index,
  length,
}: ProjectPromoCardProps) => {
  return (
    <Link
      scroll
      href={`/project/${project?.slug}`}
      className={cn(
        "w-full relative flex flex-col gap-8 group content-padding hover:bg-card border-r border-b transition-all",
        index == 0 && "col-span-2 border-r-0",
        index == 2 && "border-r-0",
        (index % 2) + 1 == 0 && "border-r-0",
        index == length - 1 && "border-b-0",
        index == length - 2 && "border-b-0"
      )}
      onClickCapture={() => {
        posthog.capture("project_promo_card_clicked", {
          project: project?.projectName,
        });
      }}
    >
      {project?.cover.responsiveImage && (
        <div
          className="aspect-[16/10] overflow-hidden relative rounded-2xl content-padding grid place-items-center"
          style={{
            backgroundColor: project.color?.hex,
          }}
        >
          <ReactDatocmsImage
            data={project.cover.responsiveImage}
            lazyLoad
            className="group-hover:scale-[0.95] transition-all filter drop-shadow-2xl"
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <div
            className="h-2 w-2 rounded-full bg-foreground/20"
            style={{
              backgroundColor: project?.color?.hex,
            }}
          />
          <small className="leading-none mb-0 uppercase tracking-wider">
            {project?.client?.company}
          </small>
        </div>
        <h2 className="m-0 inline-flex gap-4 overflow-hidden">
          {project?.projectName}{" "}
          <span className="group-hover:scale-100 scale-0 transition-all translate-y-24 group-hover:translate-y-0">
            <ArrowRight />
          </span>
        </h2>
        <div>
          {project?.skills && <SkillsRender skills={project?.skills} />}
        </div>
      </div>
    </Link>
  );
};

