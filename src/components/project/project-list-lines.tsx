"use client";

import { ProjectLineItem } from "./project-line-item";
import Link from "next/link";
import { SectionTitle } from "../typography";
import { useProjectData } from "@/api/projects";

export const ProjectListLines = () => {
  const { projects } = useProjectData();

  return (
    <div className="flex flex-col">
      <SectionTitle>Experience</SectionTitle>
      {projects.map((project) => {
        return (
          <Link href={`/projects/${project.id}`} key={project.id} passHref>
            <ProjectLineItem
              client={project.client}
              role={project.role}
              year={project.year}
            />
          </Link>
        );
      })}
    </div>
  );
};
