import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const StatisticCard = ({ index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sectionDecimalScroll = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
        scale: sectionDecimalScroll.get() > 0 ? 1 : 0.75,
        transition: {
          duration: 0.5,
          delay: index * 0.15,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
      className="statistic-card py-[24px] md:py-[20px]"
    >
      <div className="div-block-6 flex justify-between items-center ">
        <div className="div-block-7 flex items-center justify-center">
          <img className="" src="/assets/images/icon-clock.svg" />
        </div>
        <div className="text-left md:hidden block">
          <p className="text-[43px] tracking-[-0.43px] text-center">3600+</p>
          <p className="paragraph-10 text-center text-[17.28px]">STATISTICS</p>
        </div>

        <p className="paragraph-8 flex md:block items-center justify-center text-[17.28px]">
          0{index}
        </p>
      </div>
      <div className="text-left hidden md:block">
        <p className="paragraph-9">3600+</p>
        <p className="paragraph-10">STATISTICS</p>
      </div>
    </motion.div>
  );
};
export default StatisticCard;
