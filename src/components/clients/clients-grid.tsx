"use client";

import { clientsLogos } from "@/constants/clients";
import { AnimatePresence, motion } from "framer-motion";

export const ClientsGrid = () => {
  return (
    <div>
      <div className="overflow-hidden grid grid-cols-2 lg:grid-cols-6">
        <AnimatePresence>
          {clientsLogos.map((Logo, index) => (
            <motion.div
              className="flex items-center justify-center w-full h-48 hover:bg-brand transition-all duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                delay: index * 0.05,
              }}
              key={index}
            >
              <Logo />
            </motion.div>
          ))}
          <motion.div
            className="text-foreground flex items-center justify-center w-full h-48 hover:bg-brand transition-all duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              delay: clientsLogos.length * 0.05,
            }}
          >
            Join the gang
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
