"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function HomeTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <motion.div>{children}</motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
