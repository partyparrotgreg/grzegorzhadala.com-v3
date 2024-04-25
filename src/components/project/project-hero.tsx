"use client";

import { SkillRecord } from "@/gql/graphql";
import { ArrowUpRight, X } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import { SkillsRender } from "../shared/skills-render";
import { Reveal } from "../transitions/reveal";
import { Button } from "../ui/button";

export const ProjectHero = ({ project }: { project: any }) => {
  const { role, projectName, summary, client, skills } = project;
  return project ? (
    <motion.div className="flex flex-col gap-24 relative w-full">
      <motion.div
        className="hidden lg:block absolute w-px left-[30%] bottom-0 -top-[20rem] bg-foreground/50 z-[10] pointer-events-none"
        initial={{ bottom: 500 }}
        animate={{ bottom: 0 }}
        transition={{ duration: 1, type: "spring" }}
      />
      <motion.div
        className="relative flex flex-row justify-between items-start"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-1">
          <div className="uppercase text-brand font-medium" key="year">
            {new Date(role?.end).getFullYear()}
          </div>
          <div className="uppercase" key="company">
            {client?.company}
          </div>
          <div className="uppercase" key="role">
            {role?.role}
          </div>
        </div>

        <div className="flex flex-row gap-2">
          {project.client?.website && (
            <Link href={new URL(project.client?.website)} target="_blank">
              <Button variant={"filled"}>
                Website <ArrowUpRight className="ml-2" />
              </Button>
            </Link>
          )}
          <Link href={`/`}>
            <Button size={"icon"} variant={"ghost"}>
              <X />
            </Button>
          </Link>
        </div>
      </motion.div>
      <div className="flex lg:grid lg:grid-cols-3">
        <div className="col-start-2 col-span-2 flex flex-col gap-6 relative">
          <Reveal order={1}>
            <motion.h1 className="block">{projectName}</motion.h1>
          </Reveal>
          <Reveal order={2}>
            <motion.p className="text-3xl lg:text-5xl tracking-tight font-medium block -ml-px max-w-[30ch] relative">
              {summary}
            </motion.p>
          </Reveal>
          {skills && (
            <Reveal order={3}>
              <SkillsRender skills={skills as SkillRecord[]} />
            </Reveal>
          )}
        </div>
      </div>
    </motion.div>
  ) : null;
};

const variants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.75,
      type: "spring",
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
  },
};
