"use client";

import { ClientRecord } from "@/gql/graphql";
import { motion } from "framer-motion";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { ThemedImage } from "./themed-image";

interface ClientsProps {
  clients: ClientRecord[];
}

export const ClientsOverview = ({ clients }: ClientsProps) => {
  return (
    <>
      <BlockSectionTitle>Clients</BlockSectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-5 items-start">
        {clients.map((client, index) => (
          <motion.div
            key={client.id + "reverse" + index}
            className="aspect-square flex w-full border-b items-center justify-center lg:last-of-type:border-r lg:first-of-type:col-start-2 lg:first-of-type:border-l"
          >
            <div>
              <ThemedImage images={client.logo} />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

