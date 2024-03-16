"use client";

import { ProjectLineItem } from "./project-line-item";
import Link from "next/link";
import { useProjectData } from "@/api/projects";
import { SectionTitle } from "../typography/section-title";

export const ProjectListLines = () => {
  const { projects } = useProjectData();

  return (
    <div className="flex flex-col">
      <SectionTitle>Experience</SectionTitle>
      <div>
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
    </div>
  );
};
