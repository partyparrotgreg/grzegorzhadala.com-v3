"use client";

import { FeaturephotoblockRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import posthog from "posthog-js";
import { Image as ReactDatocmsImage } from "react-datocms";

export const BlockFeaturePhoto = ({
  block,
}: {
  block: FeaturephotoblockRecord;
}) => {
  if (!block) return null;
  const { title, description, image, span, images } = block;
return (
  <div className="grid lg:grid-cols-3 content-padding relative">
    <div className="col-span-2 lg:col-span-1">
      <div className="space-y-4">
        <h2>{title}</h2>
        <p className="text-foreground/75">{description}</p>
      </div>
    </div>
    {image?.responsiveImage && (
      <div className={cn(span)}>
        <ReactDatocmsImage
          data={image.responsiveImage}
          className={cn(
            "flex flex-col filter drop-shadow-2xl dark:drop-shadow-none",
            span
          )}
        />
      </div>
    )}
    {images && (
      <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 grid-gaps">
        {images.map((image, index) => (
          <div
            key={image.id + "_" + index}
            className={cn(
              "flex flex-col filter drop-shadow-2xl dark:drop-shadow-none",
              span
            )}
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
