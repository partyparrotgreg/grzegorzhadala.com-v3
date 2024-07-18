import { Hero } from "@/components/home/hero";
import { request } from "@/lib/dato";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { cn } from "@/lib/utils";
import query from "./page.graphql";
const getLabsContent = async () => await request(query);

export default async function LabsPage() {
  const { allLabs } = await getLabsContent();
  return (
    <div>
      <Hero text="Fun projects" />
      <div className="flex flex-col lg:grid lg:grid-cols-2 3xl:grid-cols-2">
        {allLabs.map((lab, index) => (
          <div
            key={lab.id}
            className={cn(
              "w-full relative flex flex-col gap-8 group content-padding hover:bg-card border-r border-b",
              "last-of-type:border-b-0",
              index == 0 && "col-span-2 border-r-0",
              index == 2 && "border-r-0",
              (index % 2) + 1 == 0 && "border-r-0"
            )}
          >
            <h1>{lab.title}</h1>
            <p>{lab.description}</p>
            <div>
              {lab.images.map((image) => (
                <ReactDatocmsImage
                  key={image.id}
                  data={image.responsiveImage as ResponsiveImageType}
                  lazyLoad
                  className="rounded-xl overflow-hidden"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>{JSON.stringify(allLabs)}</div>
    </div>
  );
}
