import { ProcessListBlockRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import {
  Code,
  Compass,
  FigmaLogo,
  NotionLogo,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr";
import { TitleDescription } from "../shared/title-description";
import { Reveal } from "../transitions/reveal";
import Image from "next/image";

export const BlockProcessList = ({
  block,
}: {
  block: ProcessListBlockRecord;
}) => {
  const items = block.blocks;
  const parseIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return Code;
      case "discover":
        return Compass;
      case "figma":
        return FigmaLogo;
      case "notion":
        return NotionLogo;
      case "user":
        return UserFocus;
      default:
        return Code;
    }
  };
  return (
    <div className="flex flex-col gap-8">
      {items.map(({ id, icon, title, processDescription, customIcon }) => {
        const Icon = parseIcon(icon);
        return (
          <Reveal key={id}>
            <div
              className={cn(
                "flex flex-col gap-6 lg:grid lg:grid-cols-3 pb-8 relative"
              )}
            >
              <div className="absolute -top-2 right-0 lg:static lg:flex lg:justify-end lg:items-start">
                {customIcon ? (
                  <Image
                    src={customIcon?.url}
                    width={48}
                    height={48}
                    alt={title}
                    className="w-8 h-8 lg:w-16 lg:h-16"
                  />
                ) : (
                  <Icon size={32} weight="light" color="#FE390C" />
                )}
              </div>
              <div className="col-span-2 space-y-4 xl:col-span-1 xl:space-y-0">
                <TitleDescription
                  title={title}
                  description={processDescription}
                />
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

// const requirements = [
//   {
//     Icon: Compass,
//     title: "Discovery",
//     description:
//       "In the rapidly evolving world of cryptocurrency, there's a vast audience spectrum ranging from highly experienced traders to novices. While there are platforms catering to the former with intricate tools and interfaces, the latter often finds themselves overwhelmed. The challenge was to create a platform that simplifies the trading experience for those who are less crypto-savvy, without compromising on the depth and authenticity of the trading experience.",
//   },
//   {
//     Icon: NotionLogo,
//     title: "Requirements",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
//   },
//   {
//     Icon: FigmaLogo,
//     title: "Design & Prototyping",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
//   },
//   {
//     Icon: UserFocus,
//     title: "Testing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
//   },
//   {
//     Icon: Code,
//     title: "Implementation",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
//   },
// ];
