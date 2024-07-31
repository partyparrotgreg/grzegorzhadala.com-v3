"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };
  return (
    <motion.div
      initial={{ y: "150%" }}
      animate={{ y: 0 }}
      exit={{ y: "150%" }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Button variant={"filled"} size={"icon"} onClick={handleGoBack}>
        <X className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};
