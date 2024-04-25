"use client";

import { ProjectRecord } from "@/gql/graphql";
import { Fade } from "react-awesome-reveal";
import { ProjectPromoCard } from "./project-promo-card";

export const BlockProjectList = ({
  projects,
}: {
  projects: ProjectRecord[];
}) => {
  return (
    <div className="flex flex-col gap-16">
      <Fade cascade>
        {projects.map((project) => (
          <ProjectPromoCard
            project={project as ProjectRecord}
            key={project.id}
          />
        ))}
      </Fade>
    </div>
  );
};
