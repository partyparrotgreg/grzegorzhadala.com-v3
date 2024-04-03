"use client";
import { ExperienceRecord } from "@/gql/graphql";
import { ProjectLineItem } from "./project-line-item";
import { SectionTitle } from "../shared/section-title";

export const ProjectListLines = ({
  experiences,
}: {
  experiences?: ExperienceRecord[];
}) => {
  return (
    <div className="flex flex-col gap-0">
      <SectionTitle>Experience</SectionTitle>
      {experiences?.map((experience, index) => {
        return (
          <ProjectLineItem
            experience={experience}
            key={experience.id + "_" + index}
          />
        );
      })}
    </div>
  );
};
