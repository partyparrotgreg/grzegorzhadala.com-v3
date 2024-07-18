import { ThemeProvider } from "@/components/providers/theme-provider";
import { request } from "@/lib/dato";
import { Image as ReactDatocmsImage } from "react-datocms";

import { MainFooter } from "@/components/shared/main-footer";
import { MainNavigation } from "@/components/shared/main-navigation";
import { manrope } from "./fonts";
import "./globals.css";
import query from "./page.graphql";
import { CSPostHogProvider } from "./providers";
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
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {util && (
              <>
                <div className="fixed inset-0 w-[100%] z-[9000] pointer-events-none mix-blend-soft-light dark:mix-blend-overlay opacity-40">
                  <ReactDatocmsImage
                    lazyLoad
                    data={util.noiseGradient!.responsiveImage!}
                    layout="responsive"
                    className="h-full w-full"
                    pictureClassName="object-cover"
                  />
                </div>
              </>
            )}
            <div className="3xl:max-w-[120rem] 3xl:mx-auto 3xl:border-l 3xl:border-r">
              <MainNavigation />
              {children}
              <MainFooter />
            </div>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
