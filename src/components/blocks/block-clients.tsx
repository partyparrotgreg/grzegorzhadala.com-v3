"use client";

import { ClientRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { ThemedImage } from "../shared/themed-image";

interface ClientsProps {
  clients: ClientRecord[];
}

export const BlockClients = ({ clients }: ClientsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 min-h-dvh">
      {clients.map((client, index) => (
        <div
          key={client.id + "reverse" + index}
          className={cn(
            "flex w-full items-center justify-center ",
            (index + 1) % 5 == 0 && "border-r-0"
          )}
        >
          <ThemedImage images={client.logo} />
        </div>
      ))}
    </div>
  );
};
