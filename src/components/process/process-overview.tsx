import { SectionGrid } from "../shared/section-grid";
import { SectionTitle } from "../shared/section-title";
import { BigDescription } from "../typography/big-description";
import { ProcessGrid } from "./process-grid";

export const ProcessOverview = () => {
  return (
    <div className="section-padding bg-stone-100 dark:bg-gradient-to-bl dark:from-red-500 dark:to-orange-400">
      <div className="dark:mix-blend-multiply section-gap flex flex-col">
        <SectionTitle>Process</SectionTitle>
        <SectionGrid>
          <div className="col-start-5 col-span-8">
            <BigDescription className="text-stone-700">
              A creative problem solver specializing in visual, motion and
              interaction design with experience designing for TV, web, mobile
              and tablet. Currently designing the future of live TV and
              streaming at Comcast.
            </BigDescription>
          </div>
          <div className="w-full h-auto col-span-8 col-start-5 ">
            <p className="columns-2 text-stone-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptas iusto harum necessitatibus earum aliquam voluptate
              sapiente vel totam! Dolorem magnam consequatur, officiis
              reiciendis tenetur sunt libero corporis provident illum!
            </p>
          </div>
        </SectionGrid>
        <ProcessGrid />
      </div>
    </div>
  );
};
