import Link from "next/link";
import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";

export const ButtonLinkedIn = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/grzegorzhadala/"
      passHref
      target="_blank"
    >
      <Button size={"icon"} variant={"ghost"}>
        <Linkedin />
      </Button>
    </Link>
  );
};
