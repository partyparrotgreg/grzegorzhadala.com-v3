"use client";

import { projectsMock } from "@/mocks/projects";
import Link from "next/link";
import { SectionTitle } from "../typography/section-title";
import { ProjectLineItem } from "./project-line-item";

export const ProjectListLines = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle>Experience</SectionTitle>
      {projectsMock.map((project) => {
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
