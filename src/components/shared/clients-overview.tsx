"use client";

import { ClientRecord } from "@/gql/graphql";
import { motion } from "framer-motion";
import { ThemedImage } from "./themed-image";
import { SectionTitle } from "./section-title";

interface ClientsProps {
  clients: ClientRecord[];
}

export const ClientsOverview = ({ clients }: ClientsProps) => {
  return (
    <div>
      <SectionTitle>Clients</SectionTitle>
      <div className="flex flex-col md:grid md:grid-cols-6 flex-nowrap overflow-hidden items-start justify-start">
        {clients.map((client, index) => (
          <motion.div
            key={client.id + "reverse" + index}
            className="h-32 flex items-center justify-center w-full"
          >
            <div>
              <ThemedImage images={client.logo} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

