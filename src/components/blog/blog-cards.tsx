import { ArrowRight } from "lucide-react";
import { ChallengeCard } from "../challenges/challenge-card";
import { TypographyHero } from "../typography";
import { SectionTitle } from "../typography/section-title";
import Link from "next/link";

export const BlogCards = () => {
  return (
    <div>
      <SectionTitle>Challenges</SectionTitle>
      <div className="grid grid-cols-4 gap-8 content-padding bg-background mb-8">
        {/* <TypographyHero>Get in touch</TypographyHero> */}
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <Link
          href="/challenges"
          passHref
          className="grid place-content-center hover:bg-brand transition-all"
        >
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};
