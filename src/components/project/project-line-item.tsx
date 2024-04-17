"use client";

import { ExperienceRecord } from "@/gql/graphql";

export const ProjectLineItem = ({ experience }: { experience: ExperienceRecord }) => {
  const { start, client, role } = experience;
  const parseYear = (date: string) => {
    return new Date(date).getFullYear();
  };
  return (
    <div className="py-4 border-b border-border overflow-hidden relative flex flex-row justify-between w-full items-center">
      <div className="w-14 text-brand font-medium">{parseYear(start)}</div>
      <div className="flex-grow">{client.company}</div>
      <div className="flex text-muted-foreground">{role}</div>
    </div>
  );
};

