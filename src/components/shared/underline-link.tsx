"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface UnderlineLinkProps extends LinkProps {
  children: React.ReactNode;
}

const MotionLink = motion(Link);

export const UnderlineLink = ({ children, ...props }: UnderlineLinkProps) => {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();

  const linkClass = cn(
    pathname === props.href ? "opacity-100" : "opacity-50 hover:opacity-100",
    "text-stone-700 uppercase transition-colors relative overflow-hidden h-6 inline-flex"
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
            className="absolute h-px bg-neutral-700 bottom-px"
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
