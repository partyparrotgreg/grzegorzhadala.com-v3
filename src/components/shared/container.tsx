import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const className = cn(
    "flex flex-col gap-8 max-w-[96rem] mx-auto",
    props.className
  );
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
