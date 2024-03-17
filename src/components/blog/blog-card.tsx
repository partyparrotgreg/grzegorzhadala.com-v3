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
      className="transition-all flex-col justify-start items-start gap-4 inline-flex w-full lg:hover:bg-foreground group"
    >
      <Image
        className="relative object-cover rounded-lg xl:aspect-square aspect-square sm:aspect-video"
        width={800}
        height={800}
        src={cover}
        alt="Challenge Image"
      />
      <div className="self-stretch justify-between items-start inline-flex lg:group-hover:px-4  transition-all">
        <div className="text-muted-foreground text-sm font-medium leading-tight">
          2 days ago
        </div>
        <div className="text-muted-foreground text-sm font-medium leading-tight">
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </div>
      </div>
      <p className="text-2xl w-full line-clamp-2 font-medium tracking-tight lg:group-hover:px-4 lg:group-hover:-mt-2  transition-all lg:group-hover:text-white">
        {summary}
      </p>
    </Link>
  );
};
