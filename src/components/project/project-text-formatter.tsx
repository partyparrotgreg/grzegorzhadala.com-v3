import { STextDocumentType } from "@/types";
import { isCode, isHeading, isParagraph } from "datocms-structured-text-utils";
import {
  ResponsiveImageType,
  StructuredText,
  renderNodeRule,
} from "react-datocms";
import { SyntaxHighlighter } from "../shared/syntax-highlighter";
import { BeforeAfterBlockRecord, FlowBlockRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";
import { isDev } from "@/lib/utils";
import { CompareImages } from "../shared/compare-images";

export const ProjectTextFormatter = ({ body }: { body: STextDocumentType }) => {
  return (
    <>
      <StructuredText
        data={
          body as
            | Document
            | Node
            | typeof StructuredText<any, any>
            | null
            | undefined
        }
        customNodeRules={[
          renderNodeRule(isHeading, ({ children, key }) => {
            return (
              <h1 key={key} className="max-w-4xl w-full mx-auto">
                {children}
              </h1>
            );
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
            case "BeforeAfterBlockRecord":
              return <CompareImages block={record as BeforeAfterBlockRecord} />;
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
    </>
  );
};

// FlowBlockRecord
// returns id, images[], description
// MobileStackRecord
