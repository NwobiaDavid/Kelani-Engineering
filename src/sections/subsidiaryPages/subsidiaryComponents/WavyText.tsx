/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.03,
  ...props
}: Props) => {
  const letters = Array.from(text);
  const words = text.split(' ');
  const splitText = text.split(" ");

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
    className="text-white text-center w-full justify-center flex-wrap font-semibold text-3xl lg:text-7xl mb-4 lg:mb-[4.7rem] "
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
       {splitText.map((word, index) => (
        <motion.span className="flex" key={index} style={{ marginRight: "0.5rem" }}>
          {word.split("").map((letter, index) => (
            <motion.span className=" " key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
          {index !== splitText.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
