"use client";

import { AboutBlockRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";
import Markdown from "react-markdown";

export const BlockAbout = ({ record }: { record: AboutBlockRecord }) => {
  const { story, photo } = record;
  return (
    <>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 relative content-padding">
        <div className="relative overflow-hidden aspect-[10/12] mix-blend-multiply dark:mix-blend-normal">
          <ReactDatocmsImage
            data={photo?.responsiveImage as ResponsiveImageType}
            lazyLoad
            layout="responsive"
            className="object-cover object-center filter grayscale contrast-200"
          />
        </div>
        <div className="col-start-2">
          <Markdown>{story}</Markdown>
        </div>
      </div>
    </>
  );
};
