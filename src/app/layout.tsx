import { GetInTouch } from "@/components/contact/get-in-touch";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeSwitch } from "@/components/shared/theme-switch";
import { safiro } from "@/constants/fonts";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
          <div className="fixed bg-brand left-0 right-0 bottom-0 w-full h-16 z-[999]">
            <div className="flex flex-row justify-between p-2 items-center">
              <nav role="navigation" className="pl-4">
                <ul className="list-none flex flex-row gap-4">
                  {["start", "work", "about"].map((item, index) => (
                    <li className="inline-flex" key={index}>
                      <Link
                        href={`/${item}`}
                        className="text-xl font-medium text-white uppercase opacity-50  hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeSwitch />
            </div>
          </div>
          <main className="">{children}</main>
          <div className="relative z-[100]">
            <GetInTouch />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
