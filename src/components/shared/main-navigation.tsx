"use client";

import { FooterRecord } from "@/gql/graphql";
import { menu } from "@/lib/nav";
import {
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useOnWindowResize, useWindowSize } from "rooks";
import { BackButton } from "../project/back-button";
import { Button } from "../ui/button";
import { CustomLink } from "./custom-link";
import { TheDot } from "./the-dot";
import { ThemeToggle } from "./theme-toggle";

const icons: { [key: string]: React.ReactNode } = {
  linkedin: <LinkedinLogo className="h-4 w-4 text-foreground" weight="fill" />,
  github: <GithubLogo className="h-4 w-4 text-foreground" weight="fill" />,
  figma: <FigmaLogo className="h-4 w-4 text-foreground" weight="fill" />,
  dribbble: <DribbbleLogo className="h-4 w-4 text-foreground" weight="fill" />,
};
export const MainNavigation = ({ footer }: { footer: FooterRecord }) => {
  const pathname = usePathname();
  const [showBackButton, setShowBackButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { outerWidth } = useWindowSize();
  useOnWindowResize(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (outerWidth) {
      if (outerWidth < 760) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
  }, [outerWidth]);

  useEffect(() => {
    if (pathname.includes("/project")) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [pathname]);

  const { links } = footer;

  const extractPlatformName = (url: string): string => {
    const match = url.match(/https:\/\/(?:www\.)?([^\.]+)/i);
    return match ? match[1].toLowerCase() : "";
  };

  const getIconForUrl = (url: string) => {
    const platform = extractPlatformName(url);
    return icons[platform] || null;
  };

  return (
    <div className="fixed lg:sticky bottom-0 lg:top-0 bg-background left-0 right-0 flex flex-row gap-4 justify-between z-[800] items-center uppercase border-t lg:border-b nav-padding lg:border-t-0 overflow-hidden">
      <div className="flex flex-row gap-4 items-center">
        <TheDot />
        {menu.map((item) => (
          <CustomLink
            key={item.id}
            href={item.href}
            className="text-sm tracking-wider"
          >
            {item.label}
          </CustomLink>
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center">
        <motion.div
          className="flex flex-row gap-2 items-center"
          initial={{ opacity: 1 }}
          animate={{ x: showBackButton ? -1 : 0 }}
        >
          <div className="flex flex-row-reverse md:flex-row gap-2 items-center">
            <motion.div className="flex flex-row gap-2 items-center">
              <Button
                className="flex text-center md:hidden"
                size={"icon"}
                variant={"ghost"}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <MenuIcon className="h-4 w-4" />
                )}
              </Button>
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    className="flex md:flex-row gap-2 items-center flex-col md:static fixed md:p-0 p-2 bg-background bottom-16 right-4 rounded-full"
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.95 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {links.map((link) => (
                      <Link
                        href={link.url as string}
                        key={link.id}
                        target="_blank"
                      >
                        <Button
                          className="flex text-center"
                          size={"icon"}
                          variant={"ghost"}
                        >
                          {getIconForUrl(link.url!)}
                        </Button>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="w-px h-4 bg-border hidden md:block" />
            <ThemeToggle />
          </div>
        </motion.div>
        {showBackButton && <BackButton />}
      </div>
    </div>
  );
};
