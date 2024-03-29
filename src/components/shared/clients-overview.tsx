"use client";

import { ClientRecord } from "@/gql/graphql";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ThemedImage } from "./themed-image";

interface ClientsProps {
  clients: ClientRecord[];
}

export const ClientsOverview = ({ clients }: ClientsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="w-dvw negative-padding flex flex-col gap-2 flex-nowrap overflow-hidden items-center justify-center">
      <div className="flex min-w-full shrink-0 gap-2 w-max flex-nowrap items-center justify-center">
        {clients.concat(clients).map((client) => (
          <motion.div
            key={client.id}
            className="bg-foreground/5 rounded-3xl h-32 w-[280px] flex items-center justify-center flex-grow"
            style={{ x }}
          >
            <div>
              <ThemedImage images={client.logo} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex min-w-full shrink-0 gap-2 w-max flex-nowrap items-center justify-center">
        {clients
          .concat(clients)
          .reverse()
          .map((client, index) => (
            <motion.div
              key={client.id + "reverse" + index}
              className="bg-foreground/5 rounded-3xl h-32 w-[280px] flex items-center justify-center flex-grow"
              style={{ x: x2 }}
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

{
  /* <div className="text-foreground text-2xl font-semibold">
              {client.company}
            </div>
            <div className="text-foreground text-base">
              {client.description}
            </div> */
}
