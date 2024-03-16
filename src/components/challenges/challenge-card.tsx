import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { ReactNode } from "react";

export const ChallengeCard = ({
  href,
  passHref,
  summary,
  cover,
  categories,
}: LinkProps & {
  summary: ReactNode;
  categories: ReactNode[];
  cover: string;
}) => {
  return (
    <Link
      href={href}
      passHref={passHref}
      className="transition-all flex-col justify-start items-start gap-4 inline-flex w-full hover:bg-foreground  group"
    >
      <Image
        className="relative object-cover  rounded-lg aspect-square"
        width={800}
        height={800}
        src={cover}
        alt="Challenge Image"
      />
      <div className="self-stretch justify-between items-start inline-flex group-hover:px-4  transition-all">
        <div className="text-muted-foreground text-sm font-medium leading-tight">
          2 days ago
        </div>
        <div className="text-muted-foreground text-sm font-medium leading-tight">
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </div>
      </div>
      <p className="text-2xl w-full line-clamp-2 font-normal group-hover:px-4 group-hover:-mt-2  transition-all group-hover:text-white">
        {summary}
      </p>
    </Link>
  );
};
