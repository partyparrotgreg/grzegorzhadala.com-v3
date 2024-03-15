"use client";

import { ProjectType } from "@/types";
import { Eye } from "lucide-react";

export const ProjectLineItem = ({
  client,
  year,
  role,
}: Omit<ProjectType, "id">) => {
  return (
    <div className="border-b border-border content-padding hover:bg-foreground hover:text-background flex flex-row justify-between transition-all text-2xl">
      <div>{year}</div>
      <div>{client}</div>
      <div>{role}</div>
      <div>
        <Eye />
      </div>
    </div>
  );
};
