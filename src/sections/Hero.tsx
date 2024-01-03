import { useState } from "react";
import InfiniteCarousel from "../components/InfiniteCarousel";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../components/NavBar";

const Hero = () => {
  const [navShowing, setNavShowing] = useState(false);
  return (
    <>
      <AnimatePresence>
        {navShowing && <NavBar closeNav={() => setNavShowing(false)} />}
      </AnimatePresence>
      <div className="pt-[30px] px-[12px] md:px-[24px] lg:px-[32px] max-w-[1440px] mx-auto ">
        <div className="h-[60vh] md:h-[82vh] relative  rounded-[28px] overflow-hidden">
          <div className="w-full absolute top-0 p-[24px] flex justify-between z-20">
            <div className="bg-[white] w-[200px] h-[30px] rounded-full"></div>
            <motion.div
              onClick={() => setNavShowing(true)}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
              className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="/assets/images/icon-nav.svg" />
            </motion.div>
          </div>
          <img
            className="w-full h-full object-cover absolute -top-[2px] right-0 left-0 bottom-0"
            src="/assets/images/about-company.png"
          />
          <div className="flex flex-col absolute -bottom-[1px] -left-[1px]">
            <h1 className="bg-[#FEFEFE] text-[36px] md:text-[45px] lg:text-[62.4px] leading-[39px] md:leading-[52px] lg:leading-[75.5px] px-[14px] md:px-[24px] pt-[10px] md:pt-[20px] pb-[10px] lg:pb-[8px] relative rounded-br-[20px] sm:rounded-br-none rounded-tr-[20px] md:rounded-br-none lg:rounded-tr-[28px] w-fit">
              Kelani Engineering
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] lg:w-[36px] lg:h-[36px] absolute lg:top-[-35px] top-[-19px] left-[1px]"
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] hidden sm:block absolute right-[-26px] md:right-[-36px] -bottom-[1px]"
              />
            </h1>
            <h1 className="bg-[#FEFEFE] text-[36px] md:text-[45px] lg:text-[62.4px] leading-[39px] md:leading-[52px] lg:leading-[75.5px] px-[14px] pb-[10px] md:px-[24px] pt-[10px] md:pb-[14px] lg:pt-[20px] lg:pb-[24px] top-[-1px] relative sm:rounded-tr-[28px] rounded-br-[20px] md:rounded-br-[20px] sm:rounded-br-[0] w-fit">
              Creating Positive{" "}
              <span className="hidden sm:inline-block">Lasting Impact</span>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] absolute top-0 lg:top-[-36px] lg:left-0 -right-[20px] rotate-90 block sm:hidden"
              />
            </h1>
            <h1 className="bg-[#FEFEFE] text-[36px] md:text-[45px] lg:text-[62.4px] leading-[39px] md:leading-[52px] lg:leading-[75.5px] px-[14px] md:px-[24px] pt-[10px] pb-[10px] md:pb-[14px] lg:pt-[20px] lg:pb-[24px] top-[-1px] relative md:rounded-tr-[28px]  md:rounded-br-[28px] w-fit sm:hidden block">
              Lasting Impact{" "}
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] absolute rotate-90 md:rotate-0 top-0 md:top-[-36px] -right-[19px] md:left-0 "
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] absolute rotate-0 md:rotate-0 bottom-0 md:top-[-36px] -right-[19px] md:left-0 "
              />
            </h1>
            <div className="bg-[#FEFEFE] px-[24px] pt-[8px] pb-[16px] relative  w-fit bottom-[2px] hidden md:block">
              <p className="max-w-[400px] lg:max-w-[597px] text-[17.28px] leading-[26px] w-fit">
                We’re a Lorem ipsum company with a purpose – to help you dolor
                and amet carbon repis events with lasting positive impact, and
                without compromise.
              </p>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[36px] h-[36px] absolute top-0 -right-[36px] rotate-90 "
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[36px] h-[36px] absolute bottom-0 -right-[36px] "
              />
            </div>
          </div>
        </div>
        {/* <Container className="md:hidden"> */}
        <p className=" pl-[14px] text-[17.28px] leading-[26px] w-full pt-[20px] md:hidden">
          We’re a Lorem ipsum company with a purpose – to help you dolor and
          amet carbon repis events with lasting positive impact, and without
          compromise.
        </p>

        {/* </Container> */}
        <InfiniteCarousel />
      </div>
    </>
  );
};

export default Hero;
