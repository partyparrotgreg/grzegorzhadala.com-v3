"use client";

import { ProjectRecord } from "@/gql/graphql";
import { ProjectPromoCard } from "../project/project-promo-card";

export const BlockProjectList = ({
  projects,
}: {
  projects: ProjectRecord[];
}) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 3xl:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectPromoCard
          project={project as ProjectRecord}
          key={project.id}
          index={index}
        />
      ))}
    </div>
  );
};
