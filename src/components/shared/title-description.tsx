import { ReactNode } from "react";
import Markdown from "react-markdown";

export const TitleDescription = ({
  title,
  description,
}: {
  title: ReactNode;
  description?: any;
}) => {
  return (
    <div className="lg:max-w-[50ch] space-y-2 mb-6">
      <h3 className="font-semibold">{title}</h3>
      {description && (
        <div className="text-foreground/75 leading-normal">
          <Markdown>{description}</Markdown>
        </div>
      )}
    </div>
  );
};
