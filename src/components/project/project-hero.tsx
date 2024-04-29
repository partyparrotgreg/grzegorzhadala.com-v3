"use client";

import { SkillRecord } from "@/gql/graphql";
import { ArrowUpRight, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { SkillsRender } from "../shared/skills-render";
import { Button } from "../ui/button";

export const ProjectHero = ({ project }: { project: any }) => {
  const { role, projectName, summary, client, skills } = project;
  return project ? (
    <div className="flex flex-col gap-24 relative w-full overflow-hidden mb-16">
      <div className="relative flex flex-row justify-between items-start">
        <Fade direction="down" triggerOnce>
          <div className="flex flex-col gap-1 text-xs">
            <div className="uppercase text-brand font-medium" key="year">
              {new Date(role?.start).getFullYear()} —{" "}
              {new Date(role?.end).getFullYear()}
            </div>
            <div className="uppercase" key="company">
              {client?.company}
            </div>
            <div className="uppercase" key="role">
              {role?.role}
            </div>
          </div>

          <div className="flex flex-row gap-2">
            {project.client?.website && (
              <Link href={new URL(project.client?.website)} target="_blank">
                <Button variant={"filled"} size="sm">
                  Website <ArrowUpRight className="ml-2" />
                </Button>
              </Link>
            )}
            <Link href={`/`}>
              <Button size={"icon"} variant={"ghost"}>
                <X />
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
      <div className="flex lg:grid lg:grid-cols-3">
        <div className="col-start-2 col-span-2 flex flex-col gap-4 relative">
          <div className="overflow-hidden">
            <Fade direction="down" delay={300} triggerOnce>
              <h1 className="block text-sm uppercase text-foreground/75">
                {projectName}
              </h1>
            </Fade>
          </div>
          <div className="overflow-hidden">
            <Fade direction="left" triggerOnce>
              <p className="text-3xl lg:text-5xl tracking-tight font-medium block -ml-[2px] max-w-[30ch] relative">
                {summary}
              </p>
            </Fade>
          </div>

          {skills && <SkillsRender skills={skills as SkillRecord[]} />}
        </div>
      </div>
    </div>
  ) : null;
};

