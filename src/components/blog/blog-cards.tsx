import Link from "next/link";
import { SectionTitle } from "../typography/section-title";
import { Button } from "../ui/button";
import { BlogCard } from "./blog-card";

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
      <SectionTitle
        action={
          <Link href={"/blog"}>
            <Button variant={"link"}>Read all</Button>
          </Link>
        }
      >
        Challenges
      </SectionTitle>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 content-padding bg-background pb-8">
        {blogPosts.map((post, index) => (
          <BlogCard {...post} key={index} />
        ))}
      </div>
    </div>
  );
};
