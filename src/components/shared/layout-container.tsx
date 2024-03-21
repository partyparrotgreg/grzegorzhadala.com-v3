import { ReactNode } from "react";

export const LayoutContainer = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const mergedClassName = `2xl:max-w-7xl mx-auto ${className}`;
  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
};
