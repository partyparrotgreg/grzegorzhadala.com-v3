import { LogoNextjs } from "@/assets/logos/nextjs";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { UICard } from "@/components/shared/card";
import { TypographyDemo } from "@/components/typography";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowUpSquare } from "lucide-react";

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
      <div className="grid grid-cols-4 gap-8 content-padding">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />S NL U
      </div>
    </div>
  );
}
