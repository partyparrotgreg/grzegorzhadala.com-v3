import { ClientsGrid } from "@/components/clients/clients-grid";
import { HomeFeature } from "@/components/home/feature";
import { clientsLogos } from "@/constants/clients";

export default function ClientsPage() {
  return (
    <div>
      <HomeFeature index={0} p={clientsLogos.length} isOdd={false} />
      <ClientsGrid />
    </div>
  );
}
