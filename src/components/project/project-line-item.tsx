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
    <div className="border-b border-border group h-24 overflow-hidden">
      <div className="items-center px-6 h-24 flex flex-row justify-start transition-all text-2xl gap-6 duration-300 group-hover:-translate-y-24 group-hover:delay-500">
        <div>{year}</div>
        <div className="w-2 h-2 rounded-full bg-brand" />
        <div>{client}</div>
        <div className="w-2 h-2 rounded-full bg-brand" />
        <div className="flex flex-grow text-muted-foreground">{role}</div>
        <div className="flex flex-grow justify-end">
          <Badge>UX/UI</Badge>
        </div>
        <div>
          <ArrowRight />
        </div>
      </div>
      <div className="items-center px-6 h-24 bg-foreground text-background flex flex-row justify-start transition-all text-2xl gap-6 duration-300 group-hover:delay-500 translate-y-24 opacity-0 group-hover:-translate-y-24 group-hover:opacity-100 group-hover:">
        <div className="grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem cupiditate, in minima temporibus impedit, similique
          architecto, reiciendis qui fuga sunt ab nulla ex debitis beatae harum
          commodi consequatur blanditiis esse.
        </div>
        <div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};
