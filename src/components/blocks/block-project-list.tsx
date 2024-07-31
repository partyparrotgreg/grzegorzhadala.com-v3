"use client";

import { ProjectRecord } from "@/gql/graphql";
import { NewPromoCard } from "../project/new-promo-card";

export const BlockProjectList = ({
  projects,
}: {
  projects: ProjectRecord[];
}) => {
  return (
    <div>
      <div className="flex flex-col gap-0">
        {projects.map((project) => (
          <NewPromoCard project={project as ProjectRecord} key={project.id} />
        ))}
      </div>
      {/* <div className="flex flex-col lg:grid lg:grid-cols-2 3xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPromoCard
            project={project as ProjectRecord}
            key={project.id}
            index={index}
            length={projects.length}
          />
        ))}
      </div> */}
    </div>
  );
};
