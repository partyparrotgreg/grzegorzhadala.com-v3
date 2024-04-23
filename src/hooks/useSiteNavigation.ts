import { isDev } from "@/lib/utils";

export const useSiteNavigation = () => {
  const nav = [
    {
      label: "Work",
      href: "/",
      target: undefined,
    },
    {
      label: "About",
      href: "/about",
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
