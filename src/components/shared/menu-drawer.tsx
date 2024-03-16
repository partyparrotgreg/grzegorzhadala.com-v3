import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { nav } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ButtonLinkedIn } from "../contact/button-linkedin";

export function MobileNavigation() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    cn`font-medium tracking-tight uppercase transition-opacity text-5xl justify-start text-background ${
      pathname === href ? "shadow-nav" : "opacity-50 hover:opacity-100"
    }`;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="brand" size={"icon"}>
          <MenuIcon />
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
          <ButtonLinkedIn />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
