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
      <div className="bg-foreground text-background">
        <div className="flex flex-col md:grid md:grid-cols-5 flex-nowrap overflow-hidden items-start justify-start">
          {clients.map((client, index) => (
            <motion.div
              key={client.id + "reverse" + index}
              className="h-32 flex items-center justify-center w-full"
            >
              <div>
                <ThemedImage images={client.logo} inverted />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

