import { ProjectOverviewBlockRecord } from "@/gql/graphql";
import { ThemedImageType } from "@/types";
import { ThemedImage } from "../shared/themed-image";
import { Reveal } from "../transitions/reveal";

export const BlockProjectOverview = ({
  block,
}: {
  block: ProjectOverviewBlockRecord;
}) => {
  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 relative">
      <div className="relative">
        <Reveal>
          <ThemedImage
            images={block.client?.logo as ThemedImageType[]}
            className="h-16 w-auto mt-9 origin-top-left"
          />
        </Reveal>
      </div>
      <div className="col-span-2 space-y-8 pt-24 pb-24 col-start-2">
        <Reveal>
          <p className="text-xl lg:text-2xl max-w-[60ch]  leading-8">
            {block.projectDescription}
          </p>
        </Reveal>
      </div>
    </div>
  );
};
