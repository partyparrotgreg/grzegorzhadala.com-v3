import { FeaturephotoblockRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";
import { TitleDescription } from "../shared/title-description";

export const BlockFeaturePhoto = ({
  block,
}: {
  block: FeaturephotoblockRecord;
}) => {
  if (!block) return null;
  const { title, description, image } = block;
  return (
    <div className="gap-6 lg:grid lg:grid-cols-3">
      <div className="absolute p-2 flex flex-col lg:gap-2 lg:p-0 lg:sticky lg:top-8">
        <TitleDescription title={title} description={description} />
      </div>
      <div className="bg-foreground/10">
        {image?.responsiveImage && (
          <ReactDatocmsImage data={image.responsiveImage} />
        )}
      </div>
    </div>
  );
};
