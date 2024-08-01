"use client";

import { ProjectRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { NewPromoCard } from "../project/new-promo-card";
import { BlockSectionTitle } from "./block-section-title";

export const BlockProjectList = ({
  projects,
}: {
  projects: ProjectRecord[];
}) => {
  return (
    <div>
      <BlockSectionTitle action={<ClickableyearList projects={projects} />}>
        <span className="hidden sm:inline">Selected Work</span>
        <span className="sm:hidden">Work</span>
      </BlockSectionTitle>
      <div className="flex flex-col gap-0">
        {projects.map((project) => (
          <NewPromoCard
            project={project as ProjectRecord}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
};

const ClickableyearList = ({ projects }: { projects: ProjectRecord[] }) => {
  const selectedYear = useStore((state) => state.year);
  const uniqueYears = new Set(
    projects.map((project) => {
      const endDate = project.role?.end
        ? new Date(project.role?.end).getFullYear()
        : 2024;
      return endDate;
    })
  );

  return (
    <div className="flex flex-row gap-2">
      {Array.from(uniqueYears).map((year) => (
        <div key={year}>
          <div
            className={cn(
              "text-sm font-medium text-foreground/50",
              year === selectedYear && "text-brand"
            )}
          >
            {year}
          </div>
        </div>
      ))}
    </div>
  );
};
