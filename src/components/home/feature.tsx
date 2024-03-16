import { TypographyHero, TypographyP } from "../typography";

export const HomeFeature = ({ p, index }: { index: number; p: number }) => {
  const isOdd = (num: number) => num % 2 === 0;
  return (
    <div
      className={`h-screen grid place-content-center overflow-hidden ${
        isOdd(index) ? "bg-background -translate-x-20" : "bg-muted"
      }`}
      key={index}
    >
      <TypographyHero className="uppercase">
        <span className="text-[24rem] text-brand">{p}</span> years
      </TypographyHero>
      <TypographyHero className="uppercase -mt-12">
        of experience
      </TypographyHero>
      <TypographyP className="max-w-[36rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore
        magni commodi earum perferendis necessitatibus illo modi quidem dolores
        eius architecto ut quas asperiores aperiam soluta nihil, molestias odio!
        Quia!
      </TypographyP>
    </div>
  );
};
