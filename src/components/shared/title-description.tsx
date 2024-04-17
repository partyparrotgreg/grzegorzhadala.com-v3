import { ReactNode } from "react";

export const TitleDescription = ({
  title,
  description,
}: {
  title: ReactNode;
  description?: ReactNode;
}) => {
  return (
    <div className="max-w-[50ch] text-xl space-y-4">
      <h3 className="font-semibold">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
};
