import { ChallengeCard } from "@/components/challenges/challenge-card";
import { SectionTitle, TypographyDemo } from "@/components/typography";
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
      <div className="grid grid-cols-4 gap-8 content-padding">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />S
      </div>
    </div>
  );
}
