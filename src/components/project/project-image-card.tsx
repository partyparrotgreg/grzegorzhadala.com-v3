"use client";

import { Maybe, ResponsiveImage } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";

interface ProjectImageCardProps {
  responsiveImage: Maybe<ResponsiveImage> | undefined;
  title?: string;
  subtitle?: string;
}

export const ProjectImageCard = ({
  responsiveImage,
}: ProjectImageCardProps) => {
  return (
    <div className="isolate w-full h-auto relative overflow-hidden rounded-3xl bg-foreground/5 aspect-square md:aspect-[16/11] grid">
      {responsiveImage && <ReactDatocmsImage data={responsiveImage} />}
    </div>
  );
};
