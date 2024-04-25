import { Inter, Poppins, Manrope } from "next/font/google";
import localFont from "next/font/local";

export const safiro = localFont({
  variable: "--font-safiro",
  preload: true,
  src: [
    {
      path: "./fonts/safiro/safiro-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/safiro/safiro-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/safiro/safiro-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/safiro/safiro-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/safiro/safiro-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/safiro/safiro-bolditalic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export { inter, poppins, manrope };
