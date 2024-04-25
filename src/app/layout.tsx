import { ThemeProvider } from "@/components/providers/theme-provider";

import { FloatingNav } from "@/components/shared/floating-nav";
import SmoothScrollLayout from "@/components/shared/smooth-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-marquee";
import type { Metadata } from "next";
import "./globals.css";
import { CSPostHogProvider } from "./providers";
import { safiro } from "./fonts";

// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
// TODO: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

export const metadata: Metadata = {
  title: "Greg Hadala - Product Designer & Frontend Developer",
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
      <CSPostHogProvider>
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
            <SmoothScrollLayout>
              <div className="fixed bottom-0 left-0 right-0 text-xs bg-brand z-10 flex items-center justify-center">
                <InfiniteMovingCards
                  items={[
                    "WORK IN PROGRESS",
                    "•••",
                    "COME BACK SOON",
                    "•••",
                    "WORK IN PROGRESS",
                    "•••",
                    "COME BACK SOON",
                    "•••",
                  ]}
                  direction="left"
                  speed="slow"
                />
              </div>
              <FloatingNav />
              {children}
            </SmoothScrollLayout>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
