"use client";

import { Play, SpotifyLogo } from "@phosphor-icons/react/dist/ssr";
import AlbumCover from "@/assets/album.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
export const SpotifyWidget = () => {
  return (
    <div className="w-full py-3 pl-3 pr-3 bg-black/60 backdrop-blur-lg rounded-3xl relative overflow-hidden">
      <div className="relative z-10 justify-center items-center gap-4 flex">
        <SpotifyLogo className="text-white" size={36} weight="fill" />
        <div className="flex-col justify-center items-start flex gap-1">
          <div className="text-white text-base font-medium leading-none truncate max-w-44">
            ENTROPYYYa sdas sd asd
          </div>
          <div className="opacity-70 text-white text-base font-normal leading-none  truncate max-w-44">
            Lorn
          </div>
        </div>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <Play className="text-white" size={24} weight="fill" />
        </Button>
      </div>
      <div className="bg-black/70 absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-green-400 w-1/2 h-1" />
      </div>
      <Image
        src={AlbumCover}
        alt="Album cover"
        layout="fill"
        className="inset-0 z-0 mix-blend-darken"
      />
    </div>
  );
};
