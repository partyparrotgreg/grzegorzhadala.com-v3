import { ReactNode } from "react";

export const TitleDescription = ({
  title,
  description,
}: {
  title: ReactNode;
  description?: ReactNode;
}) => {
  return (
    <div className="lg:max-w-[50ch] text-md lg:text-xl space-y-3">
      <h3 className="font-semibold">{title}</h3>
      {description && (
        <p className="text-muted-foreground leading-normal">{description}</p>
      )}
    </div>
  );
};
