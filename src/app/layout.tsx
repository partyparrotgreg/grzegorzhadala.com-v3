import { ThemeProvider } from "@/components/providers/theme-provider";
import { request } from "@/lib/dato";
import { Image as ReactDatocmsImage } from "react-datocms";

import { HeaderNav } from "@/components/shared/header-nav";
import SmoothScrollLayout from "@/components/shared/smooth-scroll";
import { safiro } from "./fonts";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

import query from "./page.graphql";
const getHomeContent = async () => await request(query);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { util } = await getHomeContent();
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
              {util && (
                <>
                  <div className="fixed outline inset-0 w-dvw h-dvh z-[9000] pointer-events-none mix-blend-soft-light dark:mix-blend-overlay opacity-40">
                    <ReactDatocmsImage
                      lazyLoad
                      data={util.noiseGradient!.responsiveImage!}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </>
              )}
              <HeaderNav />
              {children}
            </SmoothScrollLayout>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
