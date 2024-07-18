"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function HomeTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variants = {
    initial: { opacity: 0, y: 100, scale: 0.95, x: 100 },
    animate: { opacity: 1, y: 0, scale: 1, x: 0 },
  };
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          animate={variants.animate}
          initial={variants.initial}
          exit={variants.initial}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
