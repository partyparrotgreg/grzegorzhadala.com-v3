"use client";

import { ProjectRecord, SkillRecord } from "@/gql/graphql";
import { ExternalLink } from "lucide-react";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SkillsRender } from "../shared/skills-render";
import { Button } from "../ui/button";

import Link from "next/link";

export const NewPromoCard = ({ project }: { project: ProjectRecord }) => {
  return (
    <div className="relative">
      {project?.cover.responsiveImage && (
        <Link href={`/project/${project.slug}`}>
          <div
            className="col-span-4 cover-padding sticky top-0 md:h-screen md:grid md:place-items-center overflow-hidden"
            style={{ backgroundColor: project.color?.hex }}
          >
            <div className="absolute -left-6 top-28 text-[24rem] font-bold text-white/10">
              {project.client?.company}
            </div>
            <div className="aspect-video">
              <ReactDatocmsImage
                data={project.cover.responsiveImage}
                lazyLoad
                className="md:object-contain lg:scale-90 w-[200%] h-auto filter drop-shadow-lg"
              />
            </div>
          </div>
        </Link>
      )}
      <div className="grid sm:grid-cols-4 md:grid-cols-4 relative content-padding z-50 bg-background">
        <div className="flex flex-col md:flex-row justify-between md:items-center col-span-4 gap-4">
          <h2 className="text-lg flex items-center">{project.projectName}</h2>
          <div className="gap-4 hidden md:flex">
            {project.websiteUrl && (
              <Link href={project.websiteUrl} target="_blank">
                <Button variant={"outline"}>
                  Website <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
            {project.appUrl && (
              <Link href={project.appUrl}>
                <Button variant={"outline"}>
                  Get app <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
            <Link href={`/project/${project.slug}`}>
              <Button variant={"filled"}>Case study</Button>
            </Link>
          </div>
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl col-span-4 lg:col-span-2 leading-snug">
          {project.summary}
        </p>

        <div className="hidden lg:block col-span-2" />
        <div className="hidden lg:block col-span-2" />

        <div className="flex flex-col gap-2 col-span-2 lg:col-span-1">
          <div className="font-semibold">Role</div>
          <div className="text-foreground/75">{project.role?.role}</div>
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
        <div className="flex gap-4 col-span-4 md:hidden grow">
          <Link href={`/project/${project.slug}`} className="grow">
            <Button variant={"filled"} className="w-full">
              Case study
            </Button>
          </Link>
          {project.appUrl && (
            <Link href={project.appUrl} className="grow">
              <Button variant={"outline"} className="w-full">
                Get app <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
          {project.websiteUrl && (
            <Link href={project.websiteUrl} target="_blank" className="grow">
              <Button variant={"outline"} className="w-full">
                Website <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
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
