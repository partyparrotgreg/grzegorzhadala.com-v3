export const UICard = ({
  children,
  title,
  description,
  ...props
}: React.HTMLProps<HTMLDivElement> & {
  title: string;
  description: string;
}) => {
  return (
    <div {...props} className="p-4 border">
      <div>{title}</div>
      <div>{description}</div>
      {children}
    </div>
  );
};
