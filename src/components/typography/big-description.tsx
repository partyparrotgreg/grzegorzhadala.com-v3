import { cn } from "@/lib/utils";

interface BigDescriptionProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const BigDescription = ({ children, ...props }: BigDescriptionProps) => {
  const mergedClasses = cn(
    "flex-col justify-center items-start text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl tracking-tighter",
    props.className
  );
  return <div className={mergedClasses}>{children}</div>;
};
