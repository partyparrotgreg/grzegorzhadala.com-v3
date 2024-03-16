"use client";

import { ProjectType } from "@/types";
import { ArrowRight, Eye } from "lucide-react";
import { Badge } from "../ui/badge";

export const ProjectLineItem = ({
  client,
  year,
  role,
}: Omit<ProjectType, "id">) => {
  return (
    <div className="border-b border-border group md:h-24 overflow-hidden">
      <div className="md:items-center p-4 md:px-6 md:h-24 flex flex-col md:flex-row justify-start md:transition-all text-2xl gap-2 md:gap-6 md:duration-500 md:group-hover:-translate-y-24 md:group-hover:delay-1000">
        <div className="text-brand">{year}</div>
        <RedDot />
        <div>{client}</div>
        <RedDot />
        <div className="flex flex-grow text-muted-foreground">{role}</div>
        <div className="absolute top-2 right-2 z-50 md:static">
          <ArrowRight />
        </div>
      </div>
      <div className="hidden items-center px-6 h-24 bg-foreground text-background md:flex flex-row justify-start transition-all text-2xl gap-6 duration-500 md:group-hover:delay-1000 translate-y-24 opacity-0 md:group-hover:-translate-y-24 group-hover:opacity-100">
        <div className="grow line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem cupiditate, in minima temporibus impedit, similique
          architecto.
        </div>
        <div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

const RedDot = () => {
  return (
    <div className="hidden md:inline-block w-2 h-2 rounded-full bg-brand" />
  );
};