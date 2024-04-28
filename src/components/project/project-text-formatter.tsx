import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";

import { cn } from "@/lib/utils";
import { isCode, isHeading, isParagraph } from "datocms-structured-text-utils";
import { createElement } from "react";
import { StructuredText, renderNodeRule } from "react-datocms";
import { SyntaxHighlighter } from "../shared/syntax-highlighter";
import { FadeContent } from "./fade-content";

export const ProjectTextFormatter = ({
  body,
}: {
  body: StructuredTextType;
}) => {
  const headingClass = (level: number) => {
    switch (level) {
      case 1:
        return "text-4xl font-bold";
      case 2:
        return "text-3xl font-bold";
      case 3:
        return "text-2xl font-bold";
      case 4:
        return "text-xl font-bold";
      case 5:
        return "text-lg font-bold";
      case 6:
        return "text-base font-bold";
      default:
        return "text-base font-bold";
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <StructuredText
        data={body as StructuredTextType}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => {
            const level = node.level;
            const renderElement = createElement(
              `h${level}`,
              {
                className: cn("max-w-4xl w-full mx-auto", headingClass(level)),
                key,
              },
              children
            );

            return renderElement;
          }),
          renderNodeRule(isParagraph, ({ children, key }) => {
            return (
              <p key={key} className="max-w-4xl w-full mx-auto">
                {children}
              </p>
            );
          }),
          renderNodeRule(isCode, ({ node, key }) => {
            return (
              <SyntaxHighlighter
                key={key}
                code={node.code}
                language={node.language || "plaintext"}
              />
            );
          }),
        ]}
        renderBlock={({ record }) => <FadeContent record={record} />}
      />
    </div>
  );
};
