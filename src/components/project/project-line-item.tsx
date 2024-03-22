"use client";

import { ProjectType } from "@/types";
import { ArrowRight } from "lucide-react";
import { RedDot } from "../shared/red-dot";

export const ProjectLineItem = ({
  client,
  year,
  role,
}: Omit<ProjectType, "id">) => {
  const parseYear = (date: string) => {
    return new Date(date).getFullYear();
  };
  return (
    <div className="border-b border-border group lg:h-24 overflow-hidden relative">
      <div className="text-brand">{parseYear(year)}</div>
      <RedDot />
      <div>{client}</div>
      <RedDot />
      <div className="flex flex-grow text-muted-foreground">{role}</div>
      <div className="absolute top-4 right-4 z-50 lg:static">
        <ArrowRight />
      </div>
    </div>
  );
};

