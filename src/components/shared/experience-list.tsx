"use client";
import { ExperienceRecord } from "@/gql/graphql";
import { ProjectLineItem } from "../project/project-line-item";
import { BlockSectionTitle } from "../blocks/block-section-title";

export const ExperienceList = ({
  experiences,
}: {
  experiences?: ExperienceRecord[];
}) => {
  return (
    <>
      <BlockSectionTitle>Experience</BlockSectionTitle>
      <div className="flex flex-col flex-wrap pb-8 relative">
        {experiences?.map((experience, index) => {
          return (
            <ProjectLineItem
              experience={experience}
              key={experience.id + "_" + index}
            />
          );
        })}
      </div>
    </>
  );
};
