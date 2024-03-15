"use client";

import { ProjectType } from "@/types";
import { ArrowRight, Eye } from "lucide-react";

export const ProjectLineItem = ({
  client,
  year,
  role,
}: Omit<ProjectType, "id">) => {
  return (
    <div className="border-b border-border items-center content-padding hover:bg-foreground hover:text-background flex flex-row justify-start transition-all text-2xl gap-6 duration-300 hover:delay-500">
      <div>{year}</div>
      <div className="w-2 h-2 rounded-full bg-brand" />
      <div>{client}</div>
      <div className="w-2 h-2 rounded-full bg-brand" />
      <div className="flex flex-grow text-muted-foreground">{role}</div>
      <div>
        <ArrowRight />
      </div>
    </div>
  );
};
