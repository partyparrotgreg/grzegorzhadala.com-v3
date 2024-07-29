"use client";

import { ProjectRecord, SkillRecord } from "@/gql/graphql";
import { ExternalLink } from "lucide-react";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SkillsRender } from "../shared/skills-render";
import { Button } from "../ui/button";

import Link from "next/link";

export const NewPromoCard = ({ project }: { project: ProjectRecord }) => {
  return (
    <div>
      {project?.cover.responsiveImage && (
        <Link href={`/project/${project.slug}`}>
          <div
            className="col-span-4 cover-padding sticky top-0 md:h-screen md:grid md:place-items-center overflow-hidden"
            style={{ backgroundColor: project.color?.hex }}
          >
            <div className="aspect-video">
              <ReactDatocmsImage
                data={project.cover.responsiveImage}
                lazyLoad
                className="md:object-contain lg:scale-90 w-[200%] h-auto"
              />
            </div>
          </div>
        </Link>
      )}
      <div className="flex flex-col sm:grid sm:grid-cols-4 md:grid-cols-4 relative content-padding z-50 bg-background">
        <div className="flex flex-col md:flex-row justify-between md:items-center col-span-4 gap-4">
          <h2 className="text-base">{project.projectName}</h2>
          <div className="flex gap-4">
            <Button variant={"outline"}>
              Web app <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
            <Link href={`/project/${project.slug}`}>
              <Button variant={"filled"}>Case study</Button>
            </Link>
          </div>
        </div>
        <p className="text-2xl md:text-4xl col-span-4 lg:col-span-2 leading-snug">
          {project.summary}
        </p>
        <div className="hidden lg:block col-span-2" />
        <div className="hidden lg:block col-span-2" />

        <div className="flex flex-col gap-2 col-span-2 lg:col-span-1">
          <div className="font-semibold" key="role">
            Role
          </div>
          <div key="role" className="text-foreground/75">
            {project.role?.role}
          </div>
          <div key="year" className="text-foreground/75">
            {new Date(project.role?.start).getFullYear()}{" "}
            {project.role?.end ? (
              <>— {new Date(project.role?.end).getFullYear()}</>
            ) : (
              <>— Current</>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 col-span-2 lg:col-span-1">
          <div className="font-semibold">Expertise</div>
          <SkillsRender skills={project.skills as SkillRecord[]} isVertical />
        </div>

        {/* <div className="col-span-4 grid sm:grid-cols-2 grid-gaps hidden">
          {images.map(({ source }, index) => (
            <div
              className={cn(
                "bg-foreground/5 aspect-square rounded-2xl overflow-hidden group"
              )}
              key={index}
            >
              <Image
                src={source}
                alt="Phone"
                width={800}
                height={800}
                className="aspect-square w-full h-full group-hover:scale-105 transition-all"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
