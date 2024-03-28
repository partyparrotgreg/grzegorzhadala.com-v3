import EmpahtizeSVG from "@/assets/process/emphatize.svg";
import DefineSVG from "@/assets/process/define.svg";
import IdeateSVG from "@/assets/process/ideate.svg";
import PrototypeSVG from "@/assets/process/prototype.svg";
import TestSVG from "@/assets/process/test.svg";
// import Image from "next/image";

export type ProcessType = {
  step: string;
  title: string;
  description: string;
  icon: any;
  // className: string;
};

// const svgImage = (step: string) => {
//   return (
//     <Image
//       src={step}
//       alt={step}
//       className="w-full h-auto aspect-square md:w-[200px]"
//     />
//   );
// };

export const processItems: ProcessType[] = [
  {
    icon: EmpahtizeSVG,
    step: "Empathize",
    title: "Understanding Your Users",
    description:
      "The first step is all about gaining an empathetic understanding of the problem you're trying to solve, primarily from the perspective of those experiencing the issue. This involves engaging with users, observing their behaviors, and immersing yourself in their environment to gather deep insights.",
  },
  {
    icon: DefineSVG,
    step: "Define",
    title: "Clarifying the Problem",
    description:
      "After gathering insights, the next step is to synthesize this information to define the core problems you have identified. This stage involves framing the problem in a user-centered manner, which guides the design team’s focus and fosters a clear understanding of the users’ needs and challenges.",
  },
  {
    icon: IdeateSVG,
    step: "Ideate",
    title: "Exploring Solutions",
    description:
      "With a clear problem definition in hand, you now explore a wide array of possible solutions by generating a large volume of ideas. This phase encourages thinking outside the box to identify new solutions to the problem statement you've defined and begins to shape the path forward.",
  },
  {
    icon: PrototypeSVG,
    step: "Prototype",
    title: "Bringing Ideas to Life",
    description:
      "The fourth step involves producing scaled-down versions of the product or specific features found within the product, to investigate the problem solutions generated in the previous stage. Prototypes may be shared and tested within the team itself, in other departments, or on a small group of people outside the design team.",
  },
  {
    icon: TestSVG,
    step: "Test",
    title: "Refining the Solution",
    description:
      "Finally, the rigorous testing phase, where solutions are tested with users to gain feedback. This feedback may reveal unforeseen insights about the user or the problem, leading back to previous steps in a cyclic manner. This iterative process is crucial for refining and making improvements to the solution, ensuring that the final product truly meets the users’ needs.",
  },
];
