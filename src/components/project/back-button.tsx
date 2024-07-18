"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };
  return (
    <div
      className="fixed bottom-0 lg:top-0  right-0 z-10 h-12 w-12 flex items-center justify-center bg-foreground cursor-pointer text-background"
      onClick={handleGoBack}
    >
      <X />
    </div>
  );
};
