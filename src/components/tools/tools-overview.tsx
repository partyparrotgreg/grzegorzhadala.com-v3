import { FigmaLogo } from "@phosphor-icons/react/dist/ssr";
import { SectionGrid } from "../shared/section-grid";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { BigDescription } from "../typography/big-description";

export const ToolsOverview = () => {
  return (
    <div className="section-padding section-gap flex flex-col ">
      <BlockSectionTitle>Tools & Stack</BlockSectionTitle>
      <SectionGrid>
        <div className="col-start-5 col-span-8">
          <BigDescription>
            A creative problem solver specializing in visual, motion and
            interaction design with experience designing for TV, web, mobile and
            tablet. Currently designing the future of live TV and streaming at
            Comcast.
          </BigDescription>
        </div>
      </SectionGrid>
      <SectionGrid>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            className="col-span-4 flex-col justify-between items-start inline-flex gap-8 text-foreground"
            key={index}
          >
            <FigmaLogo size={48} />
            <div className="self-stretch">
              Design and prototype your web and mobile app interfaces
              collaboratively in real-time, streamlining feedback and iteration
              processes with team members and stakeholders.
            </div>
          </div>
        ))}
      </SectionGrid>
    </div>
  );
};
