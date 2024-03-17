import { isDev } from "@/lib/utils";

export const useSiteNavigation = () => {
  const nav = [
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
      label: "About",
      href: "/about",
      target: undefined,
    },
    {
      label: "Sandbox",
      href: "/sandbox",
      target: undefined,
    },
  ];

  const parsedNavigation = nav.filter((item) => {
    if (isDev) {
      return true;
    }
    return item.href !== "/sandbox";
  });

  return { navItems: parsedNavigation };
};
