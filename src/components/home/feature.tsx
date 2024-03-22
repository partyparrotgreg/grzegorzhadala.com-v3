import { TypographyHero, TypographyP } from "../typography";

export const HomeFeature = ({}: {}) => {
  return (
    <div
      className={`min-h-[50dvh] flex flex-wrap flex-col overflow-hidden justify-end mb-20`}
    >
      <TypographyHero className="uppercase">
        <span className="text-brand relative text-4xl md:text-9xl">2200</span>
        <span className="relative z-auto">years</span>
        <span className="relative z-auto">years</span>
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
