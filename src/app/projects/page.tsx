import { TypographyH1 } from "@/components/typography";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="content-padding mt-16">
      <TypographyH1>Projects</TypographyH1>
      <div>
        <Link href="/projects/1" passHref>
          project 1
        </Link>
      </div>
    </div>
  );
}
