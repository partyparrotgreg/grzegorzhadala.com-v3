"use client";

import { ExperienceRecord } from "@/gql/graphql";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle } from "../typography/section-title";
import { ProjectLineItem } from "./project-line-item";

export const ProjectListLines = ({
  experiences,
}: {
  experiences?: ExperienceRecord[];
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle>Experience</SectionTitle>
      <motion.div transition={{ staggerChildren: 0.2 }}>
        <AnimatePresence>
          {experiences?.map((experience) => {
            return (
              <Link
                href={`/projects/${experience.id}`}
                key={experience.id}
                passHref
              >
                <ProjectLineItem experience={experience} />
              </Link>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

