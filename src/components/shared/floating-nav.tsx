"use client";
import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { List } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useOnWindowScroll, useWindowScrollPosition } from "rooks";
import { ThemeToggle, spring } from "./theme-toggle";
export const FloatingNav = () => {
  const [hover, isHover] = useState(false);
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
            className="bottom-0 left-0 right-0 p-6 fixed z-[999] items-center justify-center flex"
            onMouseEnter={() => isHover(true)}
            onMouseLeave={() => isHover(false)}
          >
            <motion.div className="bg-neutral-700/50 backdrop-blur-lg rounded-full inline-flex h-14 px-3 overflow-hidden items-center">
              <List className="text-white ml-2" size={22} />
              <AnimatePresence>
                {hover && (
                  <motion.ul
                    className="flex flex-row items-center gap-4"
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
                          className="nav-item mx-3"
                          layout
                          initial={{
                            y: 0,
                          }}
                          animate={{
                            y: hover ? 0 : 100,
                          }}
                          transition={spring}
                        >
                          <Link
                            href={href}
                            className="font-normal tracking-tight uppercase transition-opacity opacity-50 hover:opacity-100"
                          >
                            {label}
                          </Link>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </motion.ul>
                )}
              </AnimatePresence>
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
