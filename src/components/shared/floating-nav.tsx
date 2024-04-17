"use client";
import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { ArrowLeft, List } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useOnWindowScroll, useWindowScrollPosition } from "rooks";
import { ThemeToggle, spring } from "./theme-toggle";
import { UnderlineLink } from "./underline-link";
export const FloatingNav = () => {
  const [hover, setHover] = useState(false);
  const position = useWindowScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const { navItems } = useSiteNavigation();
  useOnWindowScroll(() => {
    if (position.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    if (position.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [position.scrollY]);
  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="nav"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.2,
            }}
            className="bottom-0 left-auto right-0 p-0 lg:p-6 fixed z-[999] items-center justify-end flex"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <motion.div className="bg-black/80 dark:bg-white/80 backdrop-blur-lg inline-flex h-11 px-3 overflow-hidden items-center">
              <motion.div
                onClick={() => setHover(!hover)}
                className="overflow-hidden grid ml-2 space-y-8"
                animate={{
                  y: hover ? 28 : -28,
                }}
              >
                <ArrowLeft className="w-6 h-6 text-background" />
                <List className="w-6 h-6 text-background" />
              </motion.div>
              <AnimatePresence>
                {hover && (
                  <motion.ul
                    className="flex flex-row items-center overflow-hidden"
                    initial={{
                      opacity: 0,
                      width: 0,
                    }}
                    animate={{
                      opacity: hover ? 1 : 0,
                      width: hover ? "auto" : 0,
                    }}
                    exit={{
                      opacity: 0,
                      width: 0,
                    }}
                  >
                    <AnimatePresence>
                      {navItems.map(({ label, href }, index) => (
                        <motion.li
                          key={`nav-item-${index}`}
                          className="nav-item mx-3 "
                          layout
                          initial={{
                            y: 0,
                          }}
                          animate={{
                            y: hover ? 0 : 100,
                          }}
                          transition={spring}
                        >
                          <UnderlineLink href={href} onFloatingNav>
                            {label}
                          </UnderlineLink>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </motion.ul>
                )}
              </AnimatePresence>
              <ThemeToggle isInverted />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
