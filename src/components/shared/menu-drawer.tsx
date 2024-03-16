import { MenuIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { nav } from "@/constants/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLinkedIn } from "../contact/button-linkedin";
import { ThemeSwitch } from "./theme-switch";
import { useState } from "react";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    cn`font-medium tracking-tight uppercase transition-opacity text-5xl justify-start text-background ${
      pathname === href ? "shadow-nav" : "opacity-50 hover:opacity-100"
    }`;

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Drawer onOpenChange={(open) => onOpenChange(open)}>
      <DrawerTrigger asChild>
        <Button variant="brand" size={"icon"}>
          {isOpen ? <X /> : <MenuIcon />}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-6 flex flex-col grow justify-between ">
          <nav className="flex flex-col gap-4 uppercase transition-opacity">
            {nav.map(({ label, href }, index) => (
              <DrawerClose asChild key={`nav-item-${index}`}>
                <Link href={href} className={linkClass(href)}>
                  {label}
                </Link>
              </DrawerClose>
            ))}
          </nav>
        </div>
        <DrawerFooter>
          {/* <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose> */}
          <div className="flex flex-row gap-6">
            <DrawerClose asChild>
              <ButtonLinkedIn />
            </DrawerClose>
            <DrawerClose asChild>
              <ThemeSwitch />
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
