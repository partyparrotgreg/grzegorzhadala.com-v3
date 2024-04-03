"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface UnderlineLinkProps extends LinkProps {
  children: React.ReactNode;
  onFloatingNav?: boolean;
}

const MotionLink = motion(Link);

export const UnderlineLink = ({
  children,
  onFloatingNav,
  ...props
}: UnderlineLinkProps) => {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();

  const linkClass = cn(
    pathname === props.href ? "opacity-100" : "opacity-50 hover:opacity-100",
    onFloatingNav ? "text-white dark:text-black" : "text-foreground",
    "transition-colors relative overflow-hidden"
  );

  return (
    <MotionLink
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      {...props}
      className={linkClass}
    >
      {children}
      <AnimatePresence mode="wait">
        {hover && (
          <motion.div
            className={cn(
              "absolute h-px bottom-px",
              onFloatingNav ? "bg-white dark:bg-black" : "bg-foreground"
            )}
            initial={{
              width: 0,
              x: 0,
              left: 0,
            }}
            animate={{
              width: "100%",
              x: 0,
              left: 0,
            }}
            exit={{
              width: "100%",
              x: "100%",
              right: 0,
            }}
          />
        )}
      </AnimatePresence>
    </MotionLink>
  );
};
