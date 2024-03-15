import { SectionTitle } from "../typography";
import { AspectRatio } from "../ui/aspect-ratio";

export const FeaturedProject = () => {
  return (
    <div>
      <SectionTitle>Featured Project</SectionTitle>
      <AspectRatio ratio={16 / 9}>
        <div className="bg-gray-200 relative w-full h-full">Project Image</div>
      </AspectRatio>
    </div>
  );
};
