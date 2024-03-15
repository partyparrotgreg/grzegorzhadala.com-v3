import { SectionTitle } from "../typography/section-title";
import { AspectRatio } from "../ui/aspect-ratio";

export const FeaturedProject = () => {
  return (
    <div>
      <SectionTitle>Featured Project</SectionTitle>
      <AspectRatio ratio={16 / 9}>
        <div className="bg-secondary relative w-full h-full">Project Image</div>
      </AspectRatio>
    </div>
  );
};
