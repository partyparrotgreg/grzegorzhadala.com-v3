"use client";

import {
  ClientLogoLogoAdyen,
  ClientLogoLogoAllegro,
  ClientLogoLogoCambridgeSatchel,
  ClientLogoLogoCanon,
  ClientLogoLogoFounderLightning,
  ClientLogoLogoHomePhilosophy,
  ClientLogoLogoLatetrip,
  ClientLogoLogoM87,
  ClientLogoLogoOrsay,
  ClientLogoLogoPayu,
  ClientLogoLogoPepsico,
  ClientLogoLogoProdigi,
  ClientLogoLogoRolla,
  ClientLogoLogoRoyaleson,
} from "@/assets/logos/clients-generated";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTitle } from "../typography/section-title";

const clientsLogos = [
  ClientLogoLogoAdyen,
  ClientLogoLogoAllegro,
  ClientLogoLogoCambridgeSatchel,
  ClientLogoLogoHomePhilosophy,
  ClientLogoLogoCanon,
  ClientLogoLogoFounderLightning,
  ClientLogoLogoLatetrip,
  ClientLogoLogoM87,
  ClientLogoLogoOrsay,
  ClientLogoLogoPayu,
  ClientLogoLogoPepsico,
  ClientLogoLogoProdigi,
  ClientLogoLogoRolla,
  ClientLogoLogoRoyaleson,
] as const;

export const Clients = () => {
  return (
    <div>
      <SectionTitle>Clients</SectionTitle>
      <div className="overflow-hidden grid grid-cols-2 lg:grid-cols-6">
        <AnimatePresence>
          {clientsLogos.map((Logo, index) => (
            <motion.div
              className="flex items-center justify-center w-full h-48 hover:bg-brand transition-all duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                delay: index * 0.05,
              }}
              key={index}
            >
              <Logo />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};


