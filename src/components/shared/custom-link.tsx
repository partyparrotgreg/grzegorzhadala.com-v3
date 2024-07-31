"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomLink = ({ ...props }: any) => {
  const pathname = usePathname();
  const className = cn(
    "transition-all relative group inline-flex font-semibold",
    pathname === props.href && "text-brand pointer-events-none",
    props.className
  );
  return (
    <Link {...props} className={className}>
      {props.children}
      <span className="absolute -bottom-1 bg-border h-[2px] group-hover:w-full w-0 transition-all" />
    </Link>
  );
};
