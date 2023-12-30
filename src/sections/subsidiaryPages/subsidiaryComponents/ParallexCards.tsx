/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
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
        class: "right-72"
    }, {
        img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
        text: "Expertise and Innovation",
        desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
        link: "#",
        class: "right-52"
    },
    {
        img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
        text: "Expertise and Innovation",
        desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
        link: "#",
        class: "right-32"
    }
]

  return (
    <div className="h-[800px] pt-10 flex-col bg-black text-white w-full flex">
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
          <div className='w-[28%] text-center '>
              <h3 className=' opacity-80 tracking-wider font-semibold mb-6  '>why kelani</h3>
              <h1 className='text-5xl  font-semibold '>
              Personalized Service for You
              </h1>
          </div>
      </div>

      <div className="flex h-full mt-10 w-full ">
          <div className='w-[15%] justify-center items-center flex flex-col '>
            <div className="w-[50%] flex flex-col items-center justify-center text-center ">
                <span className='text-xl opacity-70 font-semibold '>Keep Scrolling </span>
                          <img className='my-3' src="assets/images/subsidiaryPagesImages/props/SVG.png" alt="" />
                          <span className='opacity-80 '>To Discover</span>
            </div>
          </div>

          <div className='w-[85%] relative h-full'>
              {
                contents.map((item, index)=>(
                    <div key={index} className={`${ item.class +' right bg-black  absolute py-10 px-16 flex bottom-10 border rounded-xl h-[500px] w-[1200px] '}`} >
                        <div className='w-[30%] '>
                            <h1 className='text-5xl font-semibold '>{item.text}</h1>
                            <p className='text-lg mt-6 '>{item.desc} </p>
                            <Link className='flex text-purple-200 text-xl justify-start mt-10 items-center ' to={item.link}>Lean more <IoIosArrowRoundForward  size={30} /></Link>
                        </div>
                        <div className='w-[70%] flex items-center justify-center '>
                            <img className='object-cover' src={item.img} alt="" />
                        </div>
                    </div>
                ))
              }
          </div>
      </div>
    </div>
  );
};

export default ParallaxCards;
