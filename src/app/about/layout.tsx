import { HeaderNav } from "@/components/shared/header-nav";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="section-padding">
        <HeaderNav />
      </div>
      {children}
    </>
  );
}
