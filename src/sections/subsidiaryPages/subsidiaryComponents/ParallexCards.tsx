/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface ParallexProps {
  data: {
    img: string;
    img2: string;
    img3: string;
    content: {
      head: string;
      text: string;
    };
    colors: {
      one: string;
      two: string;
    };
  }[];
}


const ParallaxCards: React.FC<{ data: ParallexProps }> = ({ data }) => {


  // const [isHovered, setIsHovered] = useState(false);

  const animated = useRef(null);

  const animateCardsIn = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-animation-container",
        scrub: 1,
        start: "center 40%",
        end: "+=1600",
        markers: false,
      },
    });
    timeline.to(".card-1", { x: 0, duration: 3 });
    timeline.to(".card-2", { x: "-200vw", duration: 100, delay: 130 });
    timeline.to(".card-3", { x: "-200vw", duration: 100, delay: 130 });

    timeline.to(
      ".card-1 .title",
      { scale: 0.35, x: "-70%", rotate: -90, duration: 100, y: "20rem" },
      5
    );
    timeline.to(".card-1 .line-extend", { y: "-100%", duration: 100 }, 6);
    timeline.to(
      ".card-1 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 170, delay: 5 },
      6
    );


    timeline.to(
      ".card-2 .title",
      { scale: 0.35, x: "-80%", rotate: -90, duration: 100, y: "20rem", delay: 280 },
      9
    );
    timeline.to(".card-2 .line-extend", { y: "-100%", duration: 230, delay: 280 }, 10);
    timeline.to(
      ".card-2 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 370 },
      10
    );

  };

  useEffect(() => {
    animateCardsIn();
  }, [animated]);


  const [hovered, setHovered] = useState(false);


  return (
    <>

      <div className="relative h-[400vh] z-30  flex-col text-white w-full flex">

        <div className="main sticky  top-0 h-[100vh]  items-center  py-10 flex-col text-white w-full flex">

          <div >
            <div className="flex flex-col  uppercase justify-center items-center">
              <div className="  w-[90%] text-center relative  ">
                <h3 className=" opacity-80 tracking-wider lg:font-semibold mb-2 lg:mb-6  ">
                  why kelani
                </h3>
                <h1 className="lg:text-5xl text-4xl text-center font-semibold ">
                  Personalized Service for You
                </h1>
              </div>
            </div>
          </div>

          <div className="flex h-full relative overflow-x-hidden mt-[20px]  w-full ">

            <div className="w-[15%] h-full justify-center items-center hidden lg:flex flex-col ">
              <div className="w-[50%] flex flex-col items-center justify-center text-center ">
                <span className="text-xl opacity-70 font-semibold ">
                  Keep Scrolling{" "}
                </span>

                <motion.div
                  className="relative  py-6 flex justify-center " >
                  <motion.img
                    className=" absolute h-[70px] opacity-80 "
                    src="assets/images/subsidiaryPagesImages/props/Vector.png"
                    alt=""
                    animate={{ y: [-10, 10, -10], transition: { duration: 2, repeat: Infinity } }}
                  />
                  <motion.img
                    className="my-3 h-[100px] "
                    src="assets/images/subsidiaryPagesImages/props/Vector (1).png"
                    alt=""
                    animate={{ scale: [1.2, 1, 1.2], transition: { duration: 3, repeat: Infinity } }}
                  />
                </motion.div>

                <span className="opacity-80 ">To Discover</span>
              </div>
            </div>

            <div className=" z-50 h-full w-[85%] relative">
              <div className=" flex ml-[4.5%]  w-full h-full ">



                <div style={{ background: `url(${data.data[0].img2})`, transform: 'rotate(180deg)', backgroundSize: 'cover', }}
                  className="w-[65%] 3xl:w-[55%] border-white border rounded-[20px] 3xl:h-[50%]  lg:h-[80%] absolute 3xl:bottom-[20%] bottom-[10%] pl-[100px] overflow-hidden card-1 ">

                  <div style={{ transform: 'rotate(-180deg)' }} className="h-full flex justify-center items-center w-full" >
                    <div className="h-[100%] pt-[15px] left-0 w-[10%]  flex flex-col items-center">
                      <div className="w-full h-[20%] flex items-center justify-center">
                        <img
                          className="w-[60px] rotate-90 relative opacity-0 top-[100px] left-[100px] top-left-image"
                          src={data.data[0].img}
                        />
                      </div>
                      <div className="h-[280px]  w-full flex justify-center overflow-hidden">
                        <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                      </div>
                    </div>

                    <div className="w-[85%] h-full flex py-[65px] ">
                      <div className=" w-[30%] ">
                        <h2 className="text-[44px]  pl-[5%] text-white leading-[50.2px] title">
                          {data.data[0].content.head}
                        </h2>
                        <p className="mt-[16px]  pl-[5%] ">
                          {data.data[0].content.text}
                        </p>
                        <a href="#" className="btn-flip mt-[40px] " data-back="Learn More" data-front="Learn More">
                      <img className="ml-2" src="/assets/images/right-arrow.svg" alt="Right Arrow" />
                      </a>
                      </div>
                      <img
                        className="w-[70%] ml-10 object-cover"
                        src={data.data[0].img3}
                      />
                    </div>
                  </div>
                </div>


                <div style={{ background: `url(${data.data[0].img2})`, transform: 'rotate(180deg)', backgroundSize: 'cover', }}
                  className="w-[65%] 3xl:w-[55%] border-white border rounded-[20px] 3xl:h-[50%]  lg:h-[80%] absolute 3xl:bottom-[20%] bottom-[10%] pl-[100px] overflow-hidden card-2 left-[calc(200vw+12.4%)] ">

                  <div style={{ transform: 'rotate(-180deg)' }} className="h-full flex justify-center items-center w-full" >
                    <div className="h-[100%] pt-[15px] left-0 w-[10%]  flex flex-col items-center">
                      <div className="w-full h-[20%] flex items-center justify-center">
                        <img
                          className="w-[60px] rotate-90 relative opacity-0 top-[100px] left-[100px] top-left-image"
                          src={data.data[1].img}
                        />
                      </div>
                      <div className="h-[280px]  w-full flex justify-center overflow-hidden">
                        <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                      </div>
                    </div>

                    <div className="w-[85%] h-full flex py-[65px] ">
                      <div className=" w-[30%] ">
                        <h2 className="text-[44px]  pl-[5%] text-white leading-[50.2px] title">
                          {data.data[1].content.head}
                        </h2>
                        <p className="mt-[16px]  pl-[5%] ">
                          {data.data[1].content.text}
                        </p>
                        <a href="#" className="btn-flip  mt-[40px] " data-back="Learn More" data-front="Learn More">
                          <img className="ml-2" src="/assets/images/right-arrow.svg" alt="Right Arrow" />
                        </a>
                      </div>
                      <img
                        className="w-[70%] ml-10 transform scale-x-[-1] object-cover"
                        src={data.data[1].img3}
                      />
                    </div>
                  </div>
                </div>


                <div style={{ background: `url(${data.data[2].img2})`, transform: 'rotate(180deg)', backgroundSize: 'cover', }}
                  className="w-[65%] 3xl:w-[55%] border-white border rounded-[20px] 3xl:h-[50%]  h-[80%] absolute 3xl:bottom-[20%] bottom-[10%] pl-[100px] py-[65px]  overflow-hidden card-3 left-[calc(200vw+20.4%)]">

                  <div style={{ transform: 'rotate(-180deg)' }} className="h-full flex justify-center pl-9 " >
                    <div className="pl-[5%] w-[30%] ">
                      <h2 className="text-[44px] text-white leading-[50.2px]">
                        {data.data[2].content.head}
                      </h2>
                      <p className="mt-[16px]">
                        {data.data[2].content.text}
                      </p>
                      <a href="#" className="btn-flip mt-[40px] " data-back="Learn More" data-front="Learn More">
                      <img className="ml-2" src="/assets/images/right-arrow.svg" alt="Right Arrow" />
                      </a>
                      {/* <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="text-white flex p-3 overflow-hidden  gap-[13px] mt-[44px] relative"
                      >
                        <div className=" relative flex flex-col ">
                          <motion.div
                            className={`absolute `}
                            initial={{ y: 0 }}
                            animate={{  y: hovered ? -20 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>Learnmmmm</p>
                          </motion.div>

                          <motion.div
                            className={`absolute `}
                            initial={{ y: -10 }}
                            animate={{  y: hovered ? 0 : -20 }}
                            transition={{ duration: 0.3, delay: hovered ? 0 : 0.3 }}
                          >
                            <p>Learn More</p>
                          </motion.div>
                        </div>
                        <div className="relative "><img src="/assets/images/right-arrow.svg" alt="Right Arrow" /></div>
                      </div> */}
                    </div>

                    <img
                      className="w-[65%] ml-14 object-cover"
                      src={data.data[2].img3}
                    />
                    {/* </figure> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-[600px] w-full bg-blue-300 "></div> */}
        {/* </div> */}
      </div>
      <div>

      </div>
    </>
  );
};

export default ParallaxCards;