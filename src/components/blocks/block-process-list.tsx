"use client";

import { ProcessListBlockRecord } from "@/gql/graphql";
import {
  CodeIcon,
  CompassIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  UserFocusIcon,
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
        return CodeIcon;
      case "discover":
        return CompassIcon;
      case "figma":
        return FigmaLogoIcon;
      case "notion":
        return NotionLogoIcon;
      case "user":
        return UserFocusIcon;
      default:
        return CodeIcon;
    }
  };
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3 overflow-hidden content-padding">
      {items.map(({ id, icon, title, processDescription, customIcon }) => {
        const Icon = parseIcon(icon);
        return (
          <div key={id}>
            <div className="gap-6 grid grid-rows-3" style={{ gridTemplateRows: `auto auto 1fr` }}>
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
                    <Icon size={32} weight="light" className="text-brand" />
                  </>
                )}
              </div>
              <h2 className="min-h-[2.4em]">{title}</h2>
              <p className="text-foreground/75">{processDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
