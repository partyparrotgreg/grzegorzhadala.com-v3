"use client";
import { ExperienceRecord } from "@/gql/graphql";
import { ProjectLineItem } from "./project-line-item";
import { BlockSectionTitle } from "../blocks/block-section-title";

export const ProjectListLines = ({
  experiences,
}: {
  experiences?: ExperienceRecord[];
}) => {
  return (
    <div className="flex flex-col gap-0">
      <BlockSectionTitle>Experience</BlockSectionTitle>
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
