import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { scrollToTop } from "@/lib/utils";

export const ScrollTopButton = () => {
  return (
    <Button size={"icon"} variant={"ghost"} onClick={scrollToTop}>
      <ArrowUp />
    </Button>
  );
};
