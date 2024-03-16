import { ArrowRight } from "lucide-react";
import { ChallengeCard } from "../challenges/challenge-card";
import { TypographyHero } from "../typography";
import { SectionTitle } from "../typography/section-title";
import Link from "next/link";

export const BlogCards = () => {
    const blogPosts = [
      {
        title: "The best blog post ever",
        summary: "This is the summary of the best blog post ever",
        cover: "/images/head4-dark.jpg",
        categories: ["React", "Next.js"],
        href: "/blog/1",
      },
      {
        title: "The second best blog post ever",
        summary: "This is the summary of the second best blog post ever",
        cover: "/images/head1.png",
        categories: ["React", "Next.js"],
        href: "/blog/2",
      },
      {
        title: "The third best blog post ever",
        summary: "This is the summary of the third best blog post ever",
        cover: "/images/0_1.webp",
        categories: ["React", "Next.js"],
        href: "/blog/3",
      },
    ];
    return (
      <div>
        <SectionTitle>Challenges</SectionTitle>
        <div className="grid grid-cols-4 gap-8 content-padding bg-background pb-8">
          {blogPosts.map((post, index) => (
            <ChallengeCard {...post} key={index} />
          ))}
          <Link
            href="/challenges"
            passHref
            className="grid place-content-center hover:bg-foreground transition-all group"
          >
            <ArrowRight className="group-hover:text-white" />
          </Link>
        </div>
      </div>
    );
};
