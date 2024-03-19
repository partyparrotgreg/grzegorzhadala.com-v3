"use client";

import { ProjectType } from "@/types";
import { ArrowRight } from "lucide-react";

export const ProjectLineItem = ({
  client,
  year,
  role,
}: Omit<ProjectType, "id">) => {
  return (
    <div className="border-b border-border group lg:h-24 overflow-hidden relative">
      <div className="lg:items-center p-4 lg:px-6 lg:h-24 flex flex-col lg:flex-row justify-start md:transition-all text-2xl gap-2 lg:gap-6 lg:duration-500 lg:group-hover:-translate-y-24 lg:group-hover:delay-1000">
        <div className="text-brand">{year}</div>
        <RedDot />
        <div>{client}</div>
        <RedDot />
        <div className="flex flex-grow text-muted-foreground">{role}</div>
        <div className="absolute top-4 right-4 z-50 lg:static">
          <ArrowRight />
        </div>
      </div>
      <div className="hidden items-center px-6 h-24 bg-brand text-black lg:flex flex-row justify-start transition-all text-2xl gap-6 duration-500 lg:group-hover:delay-1000 translate-y-24 opacity-0 lg:group-hover:-translate-y-24 group-hover:opacity-100">
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
    <div className="hidden lg:inline-block w-2 h-2 rounded-full bg-brand" />
  );
};