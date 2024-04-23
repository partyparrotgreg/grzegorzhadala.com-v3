import { cn } from "@/lib/utils";

interface BigDescriptionProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const BigDescription = ({ children, ...props }: BigDescriptionProps) => {
  const mergedClasses = cn(
    "justify-center items-start text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl tracking-tighter text-foreground",
    props.className
  );
  return (
    <p className={mergedClasses} style={{ lineHeight: 1.2 }}>
      {children}
    </p>
  );
};
