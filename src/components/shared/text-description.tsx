import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextDescriptionProps extends Partial<HTMLDivElement> {
  label: ReactNode;
  items: ReactNode[];
}

export const TextDescription = ({
  label,
  items,
  ...props
}: TextDescriptionProps) => {
  const mergedClasses = cn(
    "flex-col justify-center items-start",
    props.className
  );
  return (
    <div className={mergedClasses}>
      <div className="text-neutral-700 opacity-70 text-base font-normal uppercase">
        {label}
      </div>
      {items.map((item, index) => (
        <div className="text-base text-neutral-700 uppercase" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
