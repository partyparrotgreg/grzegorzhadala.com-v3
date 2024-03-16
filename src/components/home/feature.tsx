import { TypographyHero, TypographyP } from "../typography";

export const HomeFeature = ({ p, index }: { index: number; p: number }) => {
  const isOdd = (num: number) => num % 2 === 0;
  return (
    <div
      className={`h-screen grid place-content-center overflow-hidden p-4 md:p-0 ${
        isOdd(index) ? "bg-background" : "bg-muted"
      }`}
      key={index}
    >
      <TypographyHero className="uppercase">
        <span className="text-9xl md:text-[24rem] text-brand -translate-x-16 relative">
          {p}
        </span>
        <span className="text-4xl md:text-9xl relative z-auto md:-translate-x-16 inline-block">
          years
        </span>
      </TypographyHero>
      <TypographyHero className="uppercase text-4xl md:-mt-12">
        of experience
      </TypographyHero>
      <TypographyP className="md:max-w-[36rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore
        magni commodi earum perferendis necessitatibus illo modi quidem dolores
        eius architecto ut quas asperiores aperiam soluta nihil, molestias odio!
        Quia!
      </TypographyP>
    </div>
  );
};
