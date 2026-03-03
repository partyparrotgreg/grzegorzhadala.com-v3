"use client";

import { ClientRecord } from "@/gql/graphql";
import { motion } from "framer-motion";
import { ThemedImage } from "../shared/themed-image";

interface ClientsProps {
  clients: ClientRecord[];
}

export const BlockClients = ({ clients }: ClientsProps) => {
  return (
    <div className="overflow-hidden py-12">
      <motion.div
        className="flex w-max gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={client.id + "-" + index}
            className="flex shrink-1 items-center justify-center px-4"
          >
            <ThemedImage images={client.logo} className="h-8 w-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
