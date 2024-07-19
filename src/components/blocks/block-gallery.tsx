import { GalleryRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

export const BlockGallery = ({ record }: { record: GalleryRecord }) => {
  const { photos } = record;
  if (!photos) return null;
  return (
    <div className="content-padding grid grid-cols-1 lg:grid-cols-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="flex flex-col aspect-square overflow-hidden w-full h-full"
        >
          <ReactDatocmsImage
            data={photo?.responsiveImage as ResponsiveImageType}
            lazyLoad
            layout="responsive"
            className="object-cover filter grayscale w-auto"
          />
        </div>
      ))}
    </div>
  );
};
