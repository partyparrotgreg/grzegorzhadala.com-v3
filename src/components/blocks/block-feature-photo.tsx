import { FeaturephotoblockRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";
import { TitleDescription } from "../shared/title-description";
import { cn } from "@/lib/utils";

export const BlockFeaturePhoto = ({
  block,
}: {
  block: FeaturephotoblockRecord;
}) => {
  if (!block) return null;
  const { title, description, image, span } = block;
  return (
    <div className="gap-8 grid lg:grid-cols-3">
      <div className="flex flex-col lg:gap-2">
        <TitleDescription title={title} description={description} />
      </div>
      <div className={cn("bg-foreground/10", span)}>
        {image?.responsiveImage && (
          <ReactDatocmsImage data={image.responsiveImage} />
        )}
      </div>
    </div>
  );
};
