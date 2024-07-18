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
    <div className="relative grid grid-cols-1 lg:grid-cols-3 overflow-hidden content-padding">
      {items.map(({ id, icon, title, processDescription, customIcon }) => {
        const Icon = parseIcon(icon);
        return (
          <div key={id}>
            <div className="flex flex-col gap-8">
              <div>
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
                  </>
                )}
              </div>
              <div className="space-y-4">
                <h2>{title}</h2>
                <p className="text-foreground/75">{processDescription}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
