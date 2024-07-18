import { ProjectOverviewBlockRecord } from "@/gql/graphql";
import { ThemedImageType } from "@/types";
import Markdown from "react-markdown";
import { ThemedImage } from "../shared/themed-image";

export const BlockProjectOverview = ({
  block,
}: {
  block: ProjectOverviewBlockRecord;
}) => {
  const doesImageExist = block.client?.logo?.length;
  return (
    <div className="flex flex-col content-padding lg:grid lg:grid-cols-3 relative">
      <div className="relative">
        {doesImageExist && (
          <ThemedImage
            images={block.client?.logo as ThemedImageType[]}
            className="h-16 w-auto origin-top-left"
          />
        )}
      </div>
      <Markdown className="text-foreground/75">
        {block.projectDescription}
      </Markdown>
    </div>
  );
};
