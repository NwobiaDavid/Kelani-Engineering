import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StatisticCard from "../components/StatisticCard";
import "../styles/about-company.css";

const AboutCompany = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sectionDecimalScroll = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <motion.section
      ref={container}
      // initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{
        opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
        scale: sectionDecimalScroll.get() > 0 ? 1 : 0.9,
        y: sectionDecimalScroll.get() > 0 ? 0 : 50,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
      }}
      className="statistics pt-[40px] lg:pt-[96px] page-container relative -z-10"
    >
      <figure className="overflow-hidden rounded-[10px]">
        <motion.img
          style={{ scale }}
          src="/assets/images/about-us.jpeg"
          loading="lazy"
          id="w-node-_5d22fc73-eda1-0598-2d4b-c941630b3825-3378c76e"
          alt=""
          className=" statistics-image object-cover"
        />
      </figure>
      <div
        id="w-node-_6779c508-7cdc-c836-8a25-982507e523f5-3378c76e"
        className="statistics-text-and-figures"
      >
        <div className="statistics-text">
          <p
            id="w-node-_03c4cf8f-14b2-c4b7-c070-5ac51836c5fd-3378c76e"
            className="text-[14px] text-[#272928] leading-[1.3] text-left mb-[16px] lg:mb-[16px] museo-sans font-bold"
          >
            WE EMPOWER YOUR WORLD!
          </p>
          <p className="paragraph-6 text-left space-grotesk-medium">
            Relentlessly pursuing{" "}
            <span className="statistics-colored-text">excellence</span> for over
            20 years, we strive to{" "}
            <span className="statistics-colored-text">develop</span> and enhance
            African well-being through the nurturing and growth of indigenous
            production and the provision of cutting-edge technological
            solutions.
          </p>
        </div>
        <div className="flex flex-col space-y-[23px]">
          <StatisticCard
            index={1}
            icon="clock"
            text="20+ Years of infallible service delivery"
          />
          <StatisticCard
            index={2}
            icon="cash"
            text="$500+ Million dollars in machinery and parts"
          />
          <StatisticCard
            index={3}
            icon="people"
            text="250+ Thrilled client businesses"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCompany;
