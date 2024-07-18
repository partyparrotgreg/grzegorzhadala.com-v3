"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ProjectRecord } from "@/gql/graphql";
import Link from "next/link";
import { CustomLink } from "../shared/custom-link";
import { TitleDescription } from "../shared/title-description";

export const ProjectIndex = ({ projects }: { projects: ProjectRecord[] }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <CustomLink href="#">INDEX</CustomLink>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-4 gap-4 p-4">
            {projects.map((project) => (
              <Link
                href={`/project/${project.slug}`}
                key={project.id}
                className="hover:bg-foreground/5"
              >
                <div className="p-4">
                  <TitleDescription
                    title={project.client?.company}
                    description={project.projectName}
                  />
                </div>
              </Link>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
