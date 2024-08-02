"use client";

import { motion } from "framer-motion";

export const CoverTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <motion.div>{children}</motion.div>;
};
