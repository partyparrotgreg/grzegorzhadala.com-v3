"use client";

import { SkillRecord } from "@/gql/graphql";
import { ArrowUpRight, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { SkillsRender } from "../shared/skills-render";
import { Button } from "../ui/button";

export const ProjectHero = ({ project }: { project: any }) => {
  const { role, projectName, summary, client, skills } = project;
  return project ? (
    <div className="flex flex-col gap-24 relative w-full overflow-hidden mb-16">
      <div className="relative flex flex-row justify-between items-start">
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
      </div>
      <div className="flex lg:grid lg:grid-cols-3">
        <div className="col-start-2 col-span-2 flex flex-col gap-4 relative">
          <div className="overflow-hidden">
            <h1 className="block text-sm uppercase">{projectName}</h1>
          </div>
          <div className="overflow-hidden">
            <p className="text-xl lg:text-4xl 3xl:text-6xl tracking-tight font-medium block -ml-[2px] relative">
              {summary}
            </p>
          </div>
          {skills && <SkillsRender skills={skills as SkillRecord[]} />}
        </div>
      </div>
    </div>
  ) : null;
};

