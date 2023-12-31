/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

interface Contents {
    img: string,
    text: string,
    desc: string,
    link:string,
    class:string,
  }

const ParallaxCards: React.FC = () => {
//   const [stopAnimation, setStopAnimation] = useState(false);

//   const handleReveal = () => {
//     setStopAnimation(true);
//   };

const contents:Contents[] = [
    {
        img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
        text: "Expertise and Innovation",
        desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
        link: "#",
        class: "lg:right-[27%] top-0"
    }, {
        img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
        text: "Expertise and Innovation",
        desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
        link: "#",
        class: "lg:right-[17%] top-[25%]"
    },
    {
        img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
        text: "Expertise and Innovation",
        desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
        link: "#",
        class: "lg:right-[7%] top-[50%]"
    }
]

  return (
    <div className=" h-[1500px] lg:h-[800px]  pt-10 flex-col bg-black text-white w-full flex">
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
      <div className='flex flex-col  uppercase justify-center items-center'>
          <div className='lg:w-[28%] w-[90%] text-center '>
              <h3 className=' opacity-80 tracking-wider lg:font-semibold mb-2 lg:mb-6  '>why kelani</h3>
              <h1 className='lg:text-5xl text-4xl text-center font-semibold '>
              Personalized Service for You
              </h1>
          </div>
      </div>

      <div className="flex h-full mt-10 w-full ">
          <div className='lg:w-[15%] justify-center items-center hidden lg:flex flex-col '>
            <div className="w-[50%] flex flex-col items-center justify-center text-center ">
                <span className='text-xl opacity-70 font-semibold '>Keep Scrolling </span>
                <img className='my-3' src="assets/images/subsidiaryPagesImages/props/SVG.png" alt="" />
                <span className='opacity-80 '>To Discover</span>
            </div>
          </div>

          <div className=' w-full lg:block flex justify-center items-center lg:w-[85%] relative h-full'>
              {
                contents.map((item, index)=>(
                    <div key={index} className={`${ item.class +' bg-black lg:top-0  absolute py-3 lg:py-10 px-3 lg:px-16 flex lg:flex-row flex-col lg:justify-start lg:items-start items-center justify-center bottom-10 border rounded-xl h-[530px] lg:h-[500px] w-[90%] lg:w-[1200px] '}`} >
                        <div className='w-full lg:w-[30%] '>
                            <h1 className='text-4xl lg:text-5xl font-semibold '>{item.text}</h1>
                            <p className='text-lg mt-6 '>{item.desc} </p>
                            <Link className='lg:flex hidden text-purple-200 text-xl justify-start mt-3 lg:mt-10 items-center ' to={item.link}>Lean more <IoIosArrowRoundForward  size={30} /></Link>
                        </div>
                        <div className=' w-full lg:w-[70%] my-3 flex items-center justify-center '>
                            <img className='lg:object-cover' src={item.img} alt="" />
                        </div>
                        <Link className='flex lg:hidden text-purple-200  text-xl justify-start mt-3 lg:mt-10 items-center ' to={item.link}>Lean more <IoIosArrowRoundForward  size={30} /></Link>
                    </div>
                ))
              }
          </div>
      </div>
    </div>
  );
};

export default ParallaxCards;
