"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export const FooterActions = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button
        variant="filled"
        size="icon"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};
