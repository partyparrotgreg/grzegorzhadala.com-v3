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
  const { title, description, image, span, images } = block;
  return (
    <div className="gap-6 grid lg:grid-cols-3 lg:gap-12">
      <div className="col-span-2 lg:col-span-1">
        <TitleDescription title={title} description={description} />
      </div>
      {image?.responsiveImage && (
        <div className={cn("bg-foreground/5", span)}>
          <ReactDatocmsImage data={image.responsiveImage} />
        </div>
      )}
      {images && (
        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-2">
          {images.map((image, index) => (
            <div
              key={image.id + "_" + index}
              className="flex flex-col bg-foreground/5"
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
