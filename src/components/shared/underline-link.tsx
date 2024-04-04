"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const linkClass = cn(
    pathname === props.href ? "opacity-100" : "opacity-50 hover:opacity-100",
    onFloatingNav ? "text-white dark:text-black" : "text-foreground",
    "transition-colors relative overflow-hidden"
  );

  return (
    <MotionLink {...props} className={linkClass}>
      {children}
    </MotionLink>
  );
};
