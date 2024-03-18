import { isDev } from "@/lib/utils";
import { Button } from "../ui/button";
import { HeroImage } from "./hero-image";

export const HeroView = () => {
  return (
    <div className="w-full items-start flex overflow-hidden flex-col h-dvh justify-end isolate">
      <div
        className="justify-start w-full text-7xl md:text-8xl xl:text-[10rem] tracking-tighter font-semibold p-4 sm:p-6 md:p-6 lg:p-6 gap-4 z-20"
        style={{ lineHeight: 0.9 }}
      >
        <div className="-ml-1">Design</div>
        <div className="flex flex-row mb-6">
          <div className="opacity-30 font-light italic mr-4">&amp;</div>
          <div>Dev</div>
        </div>
        <div className="text-3xl tracking-tight font-normal lg:w-1/2 mb-6">
          for good old <span className="text-brand">Fintech</span>, spicy new
          web3 ecosystems, blockchain and whatever the crap your want.
        </div>
        <div className="flex flex-row gap-2">
          <Button variant={"brand"}>Begin</Button>
          <Button variant={"outline"}>Get in touch</Button>
        </div>
      </div>
      {!isDev && <HeroImage />}
      <div className="w-full h-full absolute -bottom-6 z-[10] bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};
