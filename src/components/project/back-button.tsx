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
      className="absolute top-0  right-0 z-10 h-12 w-12 flex items-center justify-center bg-background/50 backdrop-blur-lg cursor-pointer"
      onClick={handleGoBack}
    >
      <X />
    </div>
  );
};
