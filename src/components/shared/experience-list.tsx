"use client";
import { ExperienceRecord, Scalars } from "@/gql/graphql";
import { ExperienceItem } from "./experience-item";

export const ExperienceList = ({
  experiences,
}: {
  experiences?: ExperienceRecord[];
}) => {
  if (!experiences) return null;

  const sortedExperiencesByStartDate = experiences.sort((a, b) => {
    const startDate = a.start as Scalars["Date"]["output"];
    const endDate = b.start as Scalars["Date"]["output"];
    return new Date(endDate).getTime() - new Date(startDate).getTime();
  });

  return (
    <div className="flex flex-col flex-wrap pb-8 relative lg:grid lg:grid-rows-5 lg:gap-x-12 grid-flow-col">
      {sortedExperiencesByStartDate?.map((experience, index) => {
        return (
          <ExperienceItem
            experience={experience}
            key={experience.id + "_" + index}
          />
        );
      })}
    </div>
  );
};
