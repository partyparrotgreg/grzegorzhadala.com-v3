"use client";
import { ExperienceRecord } from "@/gql/graphql";
import { ExperienceItem } from "./experience-item";
import { BlockSectionTitle } from "../blocks/block-section-title";

export const ExperienceList = ({
  experiences,
}: {
  experiences?: ExperienceRecord[];
}) => {
  return (
    <>
      <BlockSectionTitle>Experience</BlockSectionTitle>
      <div className="flex flex-col flex-wrap pb-8 relative lg:grid lg:grid-rows-5 lg:gap-x-12 grid-flow-col">
        {experiences?.map((experience, index) => {
          return (
            <ExperienceItem
              experience={experience}
              key={experience.id + "_" + index}
            />
          );
        })}
      </div>
    </>
  );
};
