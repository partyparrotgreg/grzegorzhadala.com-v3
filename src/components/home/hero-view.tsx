import Image from "next/image";
import { HeroImage } from "./hero-image";
import { Button } from "../ui/button";

export const HeroView = () => {
  return (
    <div className="w-full items-start flex overflow-hidden flex-col h-dvh justify-end isolate">
      <div
        className="justify-start w-full text-5xl md:text-9xl tracking-tighter font-semibold content-padding gap-4 z-20"
        style={{ lineHeight: 0.9 }}
      >
        <div className="-ml-2">Design</div>
        <div className="flex flex-row mb-6">
          <div className="opacity-30 font-light italic mr-6">&amp;</div>
          <div>Development</div>
        </div>
        <div className="text-3xl tracking-tight font-normal md:w-1/2 mb-6">
          for good old <span className="text-brand">Fintech</span>, spicy new
          web3 ecosystems, blockchain and whatever the crap your want.
        </div>
        <div className="flex flex-row gap-2">
          <Button variant={"brand"}>Begin</Button>
          <Button variant={"outline"}>Get in touch</Button>
        </div>
      </div>
      <HeroImage />
      <div className="w-full h-full absolute -bottom-6 z-[10] bg-gradient-to-t from-background to-transparent outline-2 outline-gray-300" />
    </div>
  );
};
