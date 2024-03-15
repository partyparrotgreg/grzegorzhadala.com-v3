import Image from "next/image";
import { HeroImage } from "./hero-image";

export const HeroView = () => {
  return (
    <div className="w-full items-end flex overflow-hidden flex-col h-screen justify-end isolate">
      <div
        className="flex flex-col w-full text-9xl tracking-tighter font-semibold content-padding gap-4 mb-4 z-10"
        style={{ lineHeight: 0.9 }}
      >
        <div className="-ml-2">Design</div>
        <div className="flex flex-row">
          <div className="opacity-30 font-light italic mr-6">&amp;</div>
          <div>Development</div>
        </div>
        <div className="text-4xl tracking-tight font-normal w-1/2">
          for good old <span className="text-brand">Fintech</span>, spicy new
          web3 ecosystems, blockchain and whatever the crap your want.
        </div>
      </div>
      <HeroImage />
    </div>
  );
};
