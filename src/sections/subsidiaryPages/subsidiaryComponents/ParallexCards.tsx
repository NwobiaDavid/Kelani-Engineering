/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
// import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";

interface Contents {
  img: string;
  text: string;
  desc: string;
  link: string;
  class: string;
}

const ParallaxCards: React.FC = () => {
  //   const [stopAnimation, setStopAnimation] = useState(false);

  //   const handleReveal = () => {
  //     setStopAnimation(true);
  //   };

  const contents: Contents[] = [
    {
      img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
      text: "Expertise and Innovation",
      desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
      link: "#",
      class: "lg:right-[27%] top-0",
    },
    {
      img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
      text: "Expertise and Innovation",
      desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
      link: "#",
      class: "lg:right-[17%] top-[25%]",
    },
    {
      img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
      text: "Expertise and Innovation",
      desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
      link: "#",
      class: "lg:right-[7%] top-[50%]",
    },
  ];

  return (
    <div className=" h-[1500px] lg:h-dvh  pt-10 flex-col bg-black text-white w-full flex relative">
      {/* <motion.div className="flex">
        <ParallaxProvider>
          <Parallax
            translateX={[200, stopAnimation ? 0 : -200]} // Change translateX based on the stopAnimation state
            onReveal={()=>handleReveal} // Call handleReveal when the element is revealed
          >
            <motion.div
              className="bg-gray-200 h-[200px] w-[500px] rounded-md shadow-md m-4"
            >
              <h2 className="text-xl font-semibold">text 1 hello</h2>
            </motion.div>
          </Parallax>
        </ParallaxProvider>
      </motion.div> */}
      <div className="flex flex-col  uppercase justify-center items-center relative">
        <div className="lg:w-[28%] w-[90%] text-center ">
          <h3 className=" opacity-80 tracking-wider lg:font-semibold mb-2 lg:mb-6  ">
            why kelani
          </h3>
          <h1 className="lg:text-5xl text-4xl text-center font-semibold ">
            Personalized Service for You
          </h1>
        </div>
      </div>

      <div className="flex h-full mt-10 w-full ">
        <div className="lg:w-[15%] justify-center items-center hidden lg:flex flex-col ">
          <div className="w-[50%] flex flex-col items-center justify-center text-center ">
            <span className="text-xl opacity-70 font-semibold ">
              Keep Scrolling{" "}
            </span>
            <img
              className="my-3"
              src="assets/images/subsidiaryPagesImages/props/SVG.png"
              alt=""
            />
            <span className="opacity-80 ">To Discover</span>
          </div>
        </div>

        <div className="absolute bottom-[6px] left-[18%] h-[500px] w-full">
          <div className="relative">
            #E9B8FF, #F9ECFF
            <div className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 px-[100px] py-[65px] bg-gradient-to-br from-[#E9B8FF] to-[#F9ECFF] overflow-hidden"></div>
            <div className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 left-[100px] px-[100px] py-[65px] bg-gradient-to-br from-[#E9B8FF] to-[#F9ECFF] overflow-hidden"></div>
            <div className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 left-[200px] px-[100px] py-[65px] bg-gradient-to-br from-[#E9B8FF] to-[#F9ECFF] overflow-hidden">
              <div className="w-full h-full flex">
                <div className="min-w-[262px]">
                  <h2 className="text-[44px] text-white leading-[50.2px]">
                    Expertise and Innovation
                  </h2>
                  <p className="mt-[16px]">
                    Access to a team of experts who bring a blend of industry
                    expertise and innovative thinking.
                  </p>
                  <button className="text-white flex gap-[13px] mt-[44px] items-center">
                    Learn More
                    <img src="/assets/images/right-arrow.svg" />
                  </button>
                </div>
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/reason-for-use-image.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxCards;
