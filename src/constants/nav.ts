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
    label: "Work",
    href: "/projects",
    target: undefined,
  },
  {
    label: "Challenges",
    href: "/challenges",
    target: undefined,
  },
  {
    label: "Sandbox",
    href: "/sandbox",
    target: undefined,
  },
];
