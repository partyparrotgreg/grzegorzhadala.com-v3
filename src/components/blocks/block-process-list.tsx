"use client";

import { ProcessListBlockRecord } from "@/gql/graphql";
import {
  Code,
  Compass,
  FigmaLogo,
  NotionLogo,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { TitleDescription } from "../shared/title-description";

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
    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-24">
      <Fade direction="up" cascade triggerOnce>
        {items.map(({ id, icon, title, processDescription, customIcon }) => {
          const Icon = parseIcon(icon);
          return (
            <div key={id} className="lg:my-24">
              <div className="flex flex-row gap-6">
                <div className="absolute -top-4 right-0 lg:static lg:flex">
                  {customIcon ? (
                    <Image
                      src={customIcon?.url}
                      width={48}
                      height={48}
                      alt={title}
                      className="w-8 h-8 lg:w-16 lg:h-16"
                    />
                  ) : (
                    <>
                      <Icon size={32} weight="light" color="#FF5D17" />
                      <Icon
                        size={32}
                        weight="fill"
                        color="#FE390C"
                        className="filter blur-xl absolute"
                      />
                    </>
                  )}
                </div>
                <div className="">
                  <TitleDescription
                    title={title}
                    description={processDescription}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};
