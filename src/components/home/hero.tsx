"use client";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
export const Hero = () => {
  const sentence =
    "Greg's work seamlessly blends user-centric design with innovative solutions to meet complex challenges across various industries";
  const splitByFiveWords = sentence.match(/(\w+\W+){1,6}/g);

  return (
    <div className="flex flex-row gap-2">
      <div>
        <Fade triggerOnce cascade damping={0.25}>
          {splitByFiveWords?.map((c, index) => (
            <motion.div key={index} className="overflow-hidden">
              <motion.div className="flex flex-col gap-5 text-3xl">
                <Slide direction="up">
                  <motion.span>{c}</motion.span>
                </Slide>
              </motion.div>
            </motion.div>
          ))}
        </Fade>
      </div>
      <Fade triggerOnce cascade damping={0.25}>
        {Array.from({ length: 8 }).map((c, index) => (
          <div
            key={index}
            className="w-2 h-full bg-black"
            style={{
              width: `${index * 10}%`,
            }}
          />
        ))}
      </Fade>
    </div>
  );
};

// const style = {
//   fontSize: `clamp(2rem, calc(1rem + 4vw), 5rem)`,
//   lineHeight: 1.3,
// };

//xl:left-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2
//w-auto  xl:w-1/2 text-3xl md:text-5xl font-medium absolute z-20  leading-snug dark:mix-blend-normal
