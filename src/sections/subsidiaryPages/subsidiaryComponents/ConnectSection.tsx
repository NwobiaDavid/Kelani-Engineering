import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const ConnectSection: React.FC<{
  text: string;
  setCtaFormShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ text, setCtaFormShowing }) => {
  const ctaButtonVariant = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.15 },
    },
  };
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <div className="h-screen bg-black  w-full lg:h-screen relative flex flex-col justify-center items-center ">
      <div className=" mt-0 w-full  h-full relative flex justify-center items-center text-white ">
        <div className="flex relative z-50 items-center justify-center flex-col h-full w-[90%] lg:w-[35%] text-center ">
          <h1 className=" text-4xl lg:text-5xl uppercase  space-grotesk-medium">
            Connect with Us Today
          </h1>
          <p className="text-xl opacity-85 my-10 museo-sans">{text}</p>
          <motion.div
            onClick={() => setCtaFormShowing(true)}
            variants={ctaButtonVariant}
            onMouseEnter={() => {
              setButtonHovered(true);
            }}
            onMouseLeave={() => {
              setButtonHovered(false);
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, delay: 1.4 },
            }}
            whileHover="whileHover"
            whileTap={"whileTap"}
            className=" cursor-pointer py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white inter text-[14px] md:text-[16px]"
          >
            <Link to={"#"} className="">
              GET CONNECTED{" "}
            </Link>
            <motion.span
              className="sm:block hidden"
              animate={
                buttonHovered ? { x: 10, transition: { duration: 0.3 } } : {}
              }
              whileHover={"whileHover"}
            >
              <IoIosArrowRoundForward size={30} />
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* <div className=" relative w-full z-[60] h-[30px]  ">
        <img className="absolute w-full  object-cover" src="/assets/images/subsidiaryPagesImages/Rectangle 1.svg" alt="" />
      </div> */}
    </div>
  );
};

export default ConnectSection;
