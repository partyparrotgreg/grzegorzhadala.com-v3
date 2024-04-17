import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export const BlogCard = ({
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
      className="transition-all flex-col justify-start items-start gap-4 inline-flex w-full group overflow-hidden"
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          className="object-cover scale-105 group-hover:scale-100 w-full h-full transition-all"
          width={800}
          height={800}
          src={cover}
          alt="Challenge Image"
        />
      </div>
      <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-muted-foreground text-sm  leading-tight">
          2 days ago
        </div>
        <div className="text-muted-foreground text-sm  leading-tight">
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </div>
      </div>
      <p className="text-xl w-full line-clamp-2  tracking-tight">{summary}</p>
    </Link>
  );
};
