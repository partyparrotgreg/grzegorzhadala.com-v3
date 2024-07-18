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
    <div className="lg:max-w-[50ch]">
      <h3 className="">{title}</h3>
      {description && (
        <div className="">
          <Markdown>{description}</Markdown>
        </div>
      )}
    </div>
  );
};
