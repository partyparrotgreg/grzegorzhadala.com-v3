export default function ProjectTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-white/80 dark:bg-black/80">{children}</div>;
}
