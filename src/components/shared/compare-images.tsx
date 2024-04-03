"use client";

import { BeforeAfterBlockRecord } from "@/gql/graphql";
import ReactCompareImage from "react-compare-image";

export const CompareImages = ({ block }: { block: BeforeAfterBlockRecord }) => {
  if (!block.left.responsiveImage || !block.right.responsiveImage) return null;

  const left = block.left.responsiveImage.src;
  const right = block.right.responsiveImage.src;

  return (
    <div className="overflow-hiddenp-4 flex gap-4 flex-col bg-card">
      <div className="overflow-hidden">
        <ReactCompareImage leftImage={left} rightImage={right} />
      </div>
      {block.title && block.description && (
        <div className="flex flex-row gap-4">
          <div className="-space-y-1 flex flex-col justify-center">
            <div className="text-base uppercase opacity-70">{block.title}</div>
            <div className="text-base">{block.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};
