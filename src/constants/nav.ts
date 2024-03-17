import React from "react";

export type NavProps = {
  label: React.ReactNode;
  href: string;
  target?: string;
};

export const nav = [
  {
    label: "Start",
    href: "/",
    target: undefined,
  },
  {
    label: "Clients",
    href: "/clients",
    target: undefined,
  },
  {
    label: "Projects",
    href: "/projects",
    target: undefined,
  },
  {
    label: "Blog",
    href: "/blog",
    target: undefined,
  },
  {
    label: "Sandbox",
    href: "/sandbox",
    target: undefined,
  },
];
