import { ThemeProvider } from "@/components/providers/theme-provider";
import { FloatingNav } from "@/components/shared/floating-nav";
import { safiro } from "@/constants/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { SectionFooter } from "@/components/footer/section-footer";

// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
// TODO: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

export const metadata: Metadata = {
  title: "The Greg - Product Designer & Frontend Developer",
  description:
    "I am a product designer and frontend developer with a passion for creating beautiful and functional user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body className={safiro.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav />

          {children}
          <SectionFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
