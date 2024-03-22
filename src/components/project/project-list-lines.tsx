"use client";

import { projectsMock } from "@/mocks/projects";
import Link from "next/link";
import { SectionTitle } from "../typography/section-title";
import { ProjectLineItem } from "./project-line-item";
import { AnimatePresence, motion } from "framer-motion";
import { ExperienceRecord } from "@/gql/graphql";

export const ProjectListLines = ({
  isSecondary,
  experiences,
}: {
  isSecondary?: boolean;
  experiences?: ExperienceRecord[];
}) => {
  return (
    <div className="flex flex-col">
      {!isSecondary && <SectionTitle>Experience</SectionTitle>}
      <motion.div transition={{ staggerChildren: 0.2 }}>
        <AnimatePresence>
          {experiences.map((experience, index) => {
            return (
              <MotionLink
                href={`/projects/${experience.id}`}
                key={experience.id}
                passHref
                className="flex"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectLineItem
                  client={experience.client.company}
                  role={experience.role}
                  year={experience.start}
                />
              </MotionLink>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const MotionLink = motion(Link);
