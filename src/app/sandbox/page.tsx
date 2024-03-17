import { LogoNextjs } from "@/assets/logos/nextjs";
import { ClientsGrid } from "@/components/clients/clients-grid";
import { UICard } from "@/components/shared/card";
import { InfiniteMovingCardsDemo } from "@/components/shared/marquee-logos";
import { TypographyDemo } from "@/components/typography";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Page() {
  return (
    <div>
      <TypographyDemo />
      <SectionTitle
        action={
          <Button size="sm" variant={"link"}>
            Read all <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        }
      >
        Challenges
      </SectionTitle>
      <LogoNextjs className="h-14 w-14" />
      <UICard title="NextJS by Vercel" description="Framework">
        asdad
      </UICard>
      <InfiniteMovingCardsDemo />
      <ClientsGrid />
    </div>
  );
}
