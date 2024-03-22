"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MobileNavigation } from "./menu-drawer";
import { ProjectListLines } from "../project/project-list-lines";
import { ArrowRight, MenuIcon } from "lucide-react";
import { RedDot } from "./red-dot";

export const IndexNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    /// disable body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <motion.div
      initial={{ width: 64 }}
      animate={{ width: isOpen ? "100%" : 64 }}
      exit={{ width: 64 }}
      className={cn(
        "hidden md:flex md:fixed md:left-0 md:top-0 md:bottom-0 bg-foreground z-[999]"
      )}
    >
      <motion.div className="w-16 flex justify-center">
        <button onClick={toggle} className="text-background">
          <MenuIcon size={24} />
        </button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="inset-0 overflow-y-auto bg-background w-full mr-16">
            <div className="border-b border-border group lg:h-24 overflow-hidden relative">
              <div className="lg:items-center p-4 lg:px-6 lg:h-24 flex flex-col lg:flex-row justify-start md:transition-all text-2xl gap-2 lg:gap-6 lg:duration-500 lg:group-hover:-translate-y-24 lg:group-hover:delay-1000">
                <div className="text-brand">2004</div>
                <RedDot />
                <div>ROLLA</div>
                <RedDot />
                <div className="flex flex-grow text-muted-foreground">
                  SENIOR PRODUCT DESIGNER
                </div>
                <div className="absolute top-4 right-4 z-50 lg:static">
                  <ArrowRight />
                </div>
              </div>
              <div className="hidden items-center px-6 h-24 bg-brand text-black lg:flex flex-row justify-start transition-all text-2xl gap-6 duration-500 lg:group-hover:delay-1000 translate-y-24 opacity-0 lg:group-hover:-translate-y-24 group-hover:opacity-100">
                <div className="grow line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem cupiditate, in minima temporibus impedit,
                  similique architecto.
                </div>
                <div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
