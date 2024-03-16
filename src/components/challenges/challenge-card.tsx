import Image from "next/image";

export const ChallengeCard = () => {
  return (
    <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
      <Image
        className="relative"
        objectFit="cover"
        width={600}
        height={477}
        src="/images/0_1.webp"
        alt="Challenge Image"
      />
      <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-muted-foreground text-sm font-medium leading-tight">
          05.09.2022
        </div>
        <div className="text-muted-foreground text-sm font-medium leading-tight">
          Gaming
        </div>
      </div>
      <p className="text-xl w-full line-clamp-2 font-normal">
        Design a game that is fun to play max two lines of text and truncate
      </p>
    </div>
  );
};
