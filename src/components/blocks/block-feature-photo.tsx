"use client";

import { FeaturephotoblockRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";
import { TitleDescription } from "../shared/title-description";
import { cn } from "@/lib/utils";
import posthog from "posthog-js";

export const BlockFeaturePhoto = ({
  block,
}: {
  block: FeaturephotoblockRecord;
}) => {
  if (!block) return null;
  const { title, description, image, span, images } = block;
  return (
    <div className="grid lg:grid-cols-3 my-8 lg:my-16">
      <div className="col-span-2 lg:col-span-1">
        <TitleDescription title={title} description={description} />
      </div>
      {image?.responsiveImage && (
        <div className={cn(span)}>
          <ReactDatocmsImage
            data={image.responsiveImage}
            className={cn(
              "flex flex-col filter drop-shadow-lg bg-slate-300 p-6"
            )}
          />
        </div>
      )}
      {images && (
        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-[4%]">
          {images.map((image, index) => (
            <div
              key={image.id + "_" + index}
              className={cn("flex flex-col filter drop-shadow-lg", span)}
              onClickCapture={() => {
                posthog.capture("feature_photo_clicked", {
                  id: image.id + "_" + index,
                  index: index,
                  image: image?.responsiveImage?.title,
                  block: title,
                });
              }}
            >
              {image.responsiveImage && (
                <ReactDatocmsImage data={image.responsiveImage} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
