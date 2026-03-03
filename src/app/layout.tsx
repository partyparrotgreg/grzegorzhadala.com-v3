import { ThemeProvider } from "@/components/providers/theme-provider";
import { request } from "@/lib/dato";

import { MainNavigation } from "@/components/shared/main-navigation";
import { FooterRecord } from "@/gql/graphql";
import { inter, onest } from "./fonts";
import "./globals.css";
import query from "./page.graphql";
import { CSPostHogProvider } from "./providers";
import type { Metadata } from "next";

const getHomeContent = async () => await request(query);

export const metadata: Metadata = {
  metadataBase: new URL("https://grzegorzhadala.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { footer } = await getHomeContent();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${onest.variable}`}
    >
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
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            <div className="max-w-[80rem] mx-auto md:border-l md:border-r">
              <MainNavigation footer={footer as FooterRecord} />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
