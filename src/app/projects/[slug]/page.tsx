import { TypographyH3, TypographyP } from "@/components/typography";
import Image from "next/image";
export default function Project({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="bg-blue-500 sticky inset-0 content-padding pt-24">
        <div className="flex-col justify-start items-start inline-flex">
          <div className="flex flex-row gap-16">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className="flex-col justify-start items-start gap-2 flex"
                key={index}
              >
                <div className="text-primary opacity-60 text-xs font-normal">
                  INDUSTRY
                </div>
                <div className="text-primary text-xs font-normal">WEB3</div>
                <div className="text-primary text-xs font-normal">WEB3</div>
                <div className="text-primary text-xs font-normal">WEB3</div>
              </div>
            ))}
          </div>

          <div className="text-zinc-950 text-[220px] -ml-6">Rolla</div>
        </div>
      </div>
      <div className="content-padding pt-24 relative z-50 bg-background">
        <Image
          src="/images/head3.png"
          width={1603}
          height={506}
          alt=""
          className="rounded-xl relative -mt-32"
        />
        <div className="content-padding pt-24 relative z-50 bg-background">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="grid grid-cols-2 gap-24 py-8 border-b" key={index}>
              <TypographyH3>Project Title</TypographyH3>
              <TypographyP>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                ea minima dignissimos rerum dolores blanditiis. Sequi autem
                nobis rem voluptatibus totam nostrum impedit labore, ut placeat
                amet perspiciatis facilis iste!
              </TypographyP>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
