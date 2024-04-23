"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

interface UnderlineLinkProps extends LinkProps {
  children: React.ReactNode;
  onFloatingNav?: boolean;
}

export const UnderlineLink = ({
  children,
  onFloatingNav,
  ...props
}: UnderlineLinkProps) => {
  const pathname = usePathname();

  const linkClass = cn(
    pathname === props.href ? "opacity-100" : "opacity-50 hover:opacity-100",
    onFloatingNav ? "text-white dark:text-black" : "text-foreground",
    "transition-all relative inline-flex items-center gap-1"
  );

  return (
    <Link
      {...props}
      className={linkClass}
      onClickCapture={() => {
        const parsedPath = String(props.href).split("/")[1];
        posthog.capture("navigation", {
          property: parsedPath === "" ? "home" : parsedPath,
        });
      }}
    >
      {children}
    </Link>
  );
};
