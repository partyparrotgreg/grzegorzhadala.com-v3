import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import type { Metadata } from "next";
import { PageProgress } from "@/components/shared/page-progress";
import { JsonLdScript, profilePageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Resume — Greg Hadala",
  description:
    "Design Engineer — Fintech & Web3. Nearly 20 years of product design and front-end engineering experience.",
};

export default function ResumePage() {
  const filePath = path.join(process.cwd(), "src/md/Grzegorz_Hadala_Resume.md");
  const content = fs.readFileSync(filePath, "utf-8");

  const jsonLd = profilePageJsonLd({
    description:
      "Design Engineer — Fintech & Web3. Nearly 20 years of product design and front-end engineering experience.",
    knowsAbout: [
      "Design Systems",
      "React",
      "Next.js",
      "TypeScript",
      "Storybook",
      "Figma",
      "Product Design",
      "Fintech",
      "Web3",
      "DeFi",
      "AI Workflows",
      "MCP Integrations",
    ],
    worksFor: { name: "Douro Labs" },
    alumniOf: [
      { name: "School of Informatics and Management, Warsaw" },
      { name: "School of Informatics and Management, Rzeszow" },
      { name: "Warsaw School of Advertising" },
    ],
  });

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <PageProgress />
      <article className="content-padding max-w-4xl mx-auto">
        <Markdown
          components={{
            h1: (props) => <h1 className="mb-2" {...props} />,
            h2: (props) => <h2 className="mt-16 mb-4 pb-2 border-b text-brand" {...props} />,
            h3: (props) => <h3 className="mt-6 mb-2" {...props} />,
            ul: (props) => (
              <ul className="list-disc pl-6 space-y-1" {...props} />
            ),
            a: (props) => (
              <a className="text-brand underline underline-offset-4" {...props} />
            ),
            hr: () => <hr className="my-6 border-border" />,
            strong: (props) => <strong className="font-semibold" {...props} />,
            em: (props) => (
              <em className="text-foreground/60 not-italic" {...props} />
            ),
          }}
        >
          {content}
        </Markdown>
      </article>
    </>
  );
}
