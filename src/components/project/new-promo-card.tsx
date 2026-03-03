"use client";

import { ProjectRecord, SkillRecord } from "@/gql/graphql";
import { ExternalLink } from "lucide-react";
import { Image as ReactDatocmsImage } from "react-datocms";
import { SkillsRender } from "../shared/skills-render";
import { Button } from "../ui/button";

import { useStore } from "@/store";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const NewPromoCard = ({
  project,
  ...props
}: {
  project: ProjectRecord;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const setYear = useStore((state) => state.updateYear);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const endDate = project.role?.end
        ? new Date(project.role?.end).getFullYear()
        : 2024;

      setYear(endDate);
    }
  }, [isInView, project.role?.end, setYear]);

  return (
    <div className="relative bg-foreground/10" ref={ref} {...props} id={project.slug}>
      {project?.cover.responsiveImage && (
        <Link href={`/project/${project.slug}`}>
          <div
            className="col-span-4 sticky top-0 h-dvh grid place-items-center overflow-hidden bg-brand"
          >
            <div
              className="text-3xl lg:text-[7rem] font-bold leading-snug font-safiro mix-blend-multiply opacity-50"
            >
              {project.client?.company}
            </div>
          </div>
          <div className="col-span-4 sticky top-8 md:top-12 md:h-screen md:grid overflow-hidden place-content-start">
            <div className="aspect-video w-[200%] md:w-[100%] p-6 md:p-12">
              <ReactDatocmsImage
                data={project.cover.responsiveImage}
                className="md:object-contain p-6 w-[200%] h-auto filter drop-shadow-lg"
              />
            </div>
          </div>
        </Link>
      )}
      <div className="border-t grid sm:grid-cols-4 md:grid-cols-4 relative content-padding z-50 bg-background">
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
        <p className="text-xl md:text-2xl lg:text-3xl col-span-4 lg:col-span-2 leading-snug font-safiro">
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
                App <ExternalLink className="h-4 w-4 ml-2" />
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
