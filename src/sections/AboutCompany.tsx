import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/about-company.css";

const AboutCompany = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <motion.section
      ref={container}
      // initial={{ opacity: 0.5, scale: 0.8 }}
      // animate={{
      //   opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
      //   scale: sectionDecimalScroll.get() > 0 ? 1 : 0.9,
      //   y: sectionDecimalScroll.get() > 0 ? 0 : 50,
      //   transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
      // }}
      className="relative -z-10 min-h-[100vh] py-[120px] md:py-[170px] flex items-center"
    >
      <figure className="w-full overflow-hidden absolute top-0 right-0 left-0 bottom-0 z-10">
        <motion.div className="h-full w-full z-10" style={{ scale }}>
          <LazyLoadImage
            width={"100%"}
            height={"100%"}
            effect="blur"
            wrapperClassName="lazyLoadImageContainer "
            src={"/assets/images/home.jpg"}
          />
        </motion.div>
      </figure>
      <div className="w-full overflow-hidden absolute top-0 right-0 left-0 bottom-0 z-10 bg-black opacity-60"></div>
      <div className="w-full overflow-hidden absolute top-0 right-0 left-0 bottom-0 bg-gray-500"></div>
      <div className="w-full mx-[39px] md:mx-auto md:max-w-[565px] relative text-white z-20">
        <h1 className="text-[42px] md:text-[55px] leading-[1.1] md:leading-[1.254] space-grotesk-semibold">
          We Empower Your World!
        </h1>
        <p className="museo-sans  mt-[24px] md:mt-[40px] md:text-[23px] leading-[1.1]">
          Relentlessly pursuing excellence for over 20 years, we strive to
          develop and enhance African well-being through nurturing and growing
          indigenous production and providing cutting-edge technological
          solutions.{" "}
        </p>
        <p className="mt-[48px] md:mt-[75px] py-[14px] md:py-[16px] space-grotesk-semibold text-[21px] border-t border-b border-[white]">
          Kelani at a glance
        </p>
        <div>
          <div className="flex flex-col space-y-[30px] md:space-y-0 md:flex-row  justify-between mt-[26px] w-full">
            <div className="">
              <p className="text-[36px] md:text-[40px] space-grotesk-semibold">
                20+
              </p>
              <p className=" museo-sans text-[14px] leading-[1.1]">
                Years of flawless <br /> delivery
              </p>
            </div>
            <div className="">
              <p className="text-[36px] md:text-[40px] space-grotesk-semibold">
                $500+
              </p>
              <p className=" museo-sans text-[14px] leading-[1.1]">
                Million dollars in <br /> machinery
              </p>
            </div>
            <div className="">
              <p className="text-[36px] md:text-[40px] space-grotesk-semibold">
                250+
              </p>
              <p className=" museo-sans text-[14px] leading-[1.1]">
                Thrilled client <br /> businesses
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <figure className="overflow-hidden rounded-[10px]">
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
      </div> */}
    </motion.section>
  );
};

export default AboutCompany;
