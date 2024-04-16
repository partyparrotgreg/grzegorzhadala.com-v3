import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";

import {
  BeforeAfterBlockRecord,
  FlowBlockRecord,
  ProcessListBlockRecord,
  ProjectOverviewBlockRecord,
  SectionBlockRecord,
  SliderShowcaseBlockRecord,
} from "@/gql/graphql";
import { cn, isDev } from "@/lib/utils";
import { isCode, isHeading, isParagraph } from "datocms-structured-text-utils";
import {
  Image as ReactDatocmsImage,
  ResponsiveImageType,
  StructuredText,
  renderNodeRule,
} from "react-datocms";
import { BlockBeforeAfter } from "../blocks/block-before-after";
import { SyntaxHighlighter } from "../shared/syntax-highlighter";
import { createElement } from "react";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { BlockProjectSlider } from "../blocks/block-project-slider";
import { BlockProcessList } from "../blocks/block-process-list";
import { BlockProjectOverview } from "../blocks/block-project-overview";

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
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case "ProjectOverviewBlockRecord":
              const projectOverview = record as ProjectOverviewBlockRecord;
              return <BlockProjectOverview block={projectOverview} />
            case "ProcessListBlockRecord":
              const processList = record as ProcessListBlockRecord;
              return <BlockProcessList block={processList} />;
            case "SliderShowcaseBlockRecord":
              const slider = record as SliderShowcaseBlockRecord;
              return <BlockProjectSlider blocks={slider.blocks} />;
            case "SectionBlockRecord":
              const entry = record as SectionBlockRecord;
              return (
                <BlockSectionTitle action={entry.subtitle}>
                  {entry.sectionTitle}
                </BlockSectionTitle>
              );
            case "BeforeAfterBlockRecord":
              return (
                <BlockBeforeAfter block={record as BeforeAfterBlockRecord} />
              );
            case "FlowBlockRecord":
              const description =
                record.description as FlowBlockRecord["description"];
              const images = record.images as FlowBlockRecord["images"];

              return (
                <div className="flex flex-col overflow-hidden">
                  <div className="p-8">{description}</div>
                  <div className="grid md:grid-cols-3">
                    {images.map((image, index) => (
                      <div
                        key={image.id + "_" + index}
                        className="flex flex-col"
                      >
                        <div>{image.title}</div>
                        <ReactDatocmsImage
                          data={image.responsiveImage as ResponsiveImageType}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            default:
              return null;
          }
        }}
      />
      {isDev && (
        <SyntaxHighlighter
          code={JSON.stringify(body, null, 2)}
          language="json"
        />
      )}
    </div>
  );
};

// FlowBlockRecord
// returns id, images[], description
// MobileStackRecord
