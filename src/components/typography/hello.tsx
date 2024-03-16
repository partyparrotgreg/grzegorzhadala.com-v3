"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WordCycleAnimation = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change the word every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [words.length]);

  return (
    <div className="overflow-hidden w-28 text-brand">
      <AnimatePresence>
        <motion.div
          key={words[index]}
          initial={{ y: 48 }} // Start below the view
          animate={{ y: 0 }} // Move to view
          exit={{ y: -48 }} // Exit to the top
          transition={{ duration: 0.5, type: "spring" }} // Animation duration
          className="absolute h-12"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
