"use client";

import { ExperienceRecord } from "@/gql/graphql";
import { ArrowRight } from "lucide-react";
import { RedDot } from "../shared/red-dot";

export const ProjectLineItem = ({ experience }: { experience: ExperienceRecord }) => {
  const { start, client, role } = experience;
  const parseYear = (date: string) => {
    return new Date(date).getFullYear();
  };
  return (
    <div className="py-4 border-b border-border overflow-hidden relative text-2xl flex flex-col md:flex-row justify-between w-full gap-2 md:gap-6">
      <div className="text-brand">{parseYear(start)}</div>
      <RedDot />
      <div>{client.company}</div>
      <RedDot />
      <div className="flex flex-grow text-muted-foreground">{role}</div>
      <div className="hidden absolute top-4 right-4 z-50 lg:static">
        <ArrowRight />
      </div>
    </div>
  );
};

