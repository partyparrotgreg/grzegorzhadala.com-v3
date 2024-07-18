"use client";

import { ExperienceRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";

export const ExperienceItem = ({
  experience,
  isLast,
}: {
  experience: ExperienceRecord;
  isLast: boolean;
}) => {
  const { start, client, role } = experience;
  const parseYear = (date: string) => {
    return new Date(date).getFullYear();
  };
  return (
    <div
      className={cn(
        "section-padding overflow-hidden relative flex flex-row justify-between w-full items-center",
        !isLast && "border-b"
      )}
    >
      <div className="w-1/6 text-brand font-medium">{parseYear(start)}</div>
      <div className="flex-grow">{client.company}</div>
      <div className="flex text-muted-foreground">{role}</div>
    </div>
  );
};

