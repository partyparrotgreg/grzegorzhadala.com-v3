"use client";

import { ProjectLineItem } from "./project-line-item";
import Link from "next/link";
import { SectionTitle } from "../typography";

export const ProjectListLines = () => {
  const clients = ["Rolla, Inc.", "FreeBird", "SEI Labs, LLC", "ucreate.it"];
  const roles = ["Product Designer", "UX Designer", "UI Designer", "Developer"];
  const years = ["2019", "2020", "2021", "2022"];
  const dummyProjects = Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i,
      client: clients[Math.floor(Math.random() * clients.length)],
      role: roles[Math.floor(Math.random() * roles.length)],
      year: years[Math.floor(Math.random() * years.length)],
    };
  });
  return (
    <div className="flex flex-col">
      <SectionTitle>All Projects</SectionTitle>
      {dummyProjects.map((project) => {
        return (
          <Link href={`/projects/${project.id}`} key={project.id}>
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
