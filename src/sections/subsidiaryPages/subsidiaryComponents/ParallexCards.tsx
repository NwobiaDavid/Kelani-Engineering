/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// interface Contents {
//   img: string;
//   text: string;
//   desc: string;
//   link: string;
//   class: string;
// }

// interface ContentParallex {
//   img: string;
//   content: {
//    head: string;
//    text: string;
//   }

//  }

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
      { scale: 0.35, x: -180, rotate: -90, duration: 100, y: 320 },
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
      { scale: 0.35, x: -180, rotate: -90, duration: 100, y: 320, delay: 280 },
      9
    );
    timeline.to(
      ".card-2 .line-extend",
      { y: "-100%", duration: 130, delay: 200 },
      10
    );
    timeline.to(
      ".card-2 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 370 },
      10
    );
  };

  useEffect(() => {
    animateCardsIn();
  }, [animated]);

  return (
    <>
      <div className="relative h-[400vh] z-30  flex-col text-white w-full flex">
        <div className="main sticky  top-0 h-[100vh]  items-center  py-10 flex-col text-white w-full flex">
          <div>
            <div className="flex flex-col  uppercase justify-center items-center">
              <div className="  w-[90%] text-center relative  ">
                <h3 className=" opacity-80 tracking-wider lg:font-semibold mb-2 lg:mb-6  museo-sans">
                  why kelani
                </h3>
                <h1 className="lg:text-5xl text-4xl text-center space-grotesk-medium">
                  Personalized Service for You
                </h1>
              </div>
            </div>
          </div>

          <div className="flex h-full relative overflow-x-hidden   w-full ">
            <div className="lg:w-[15%] justify-center items-center hidden lg:flex flex-col ">
              <div className="w-[50%] flex flex-col items-center justify-center text-center ">
                <span className="text-xl opacity-70 font-semibold ">
                  Keep Scrolling{" "}
                </span>

                {/* <motion.div 
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.1 }}
                    className="relative py-6 flex justify-center " >
                      <motion.img
                        className=" absolute  "
                        src="assets/images/subsidiaryPagesImages/props/Vector.png"
                        alt=""
                        animate={{ y: isHovered ? [-10, 10] : 0, transition: { duration: 1, repeat: isHovered ? Infinity : 0  } }}
                      />
                      <motion.img
                        className="my-3"
                        src="assets/images/subsidiaryPagesImages/props/Vector (1).png"
                        alt=""
                        animate={{ scale: isHovered ? [1.2, 1] : 1, transition: { duration: 1 , repeat: isHovered ? Infinity : 0 } }}
                      />
                    </motion.div> */}

                <motion.div className="relative  py-6 flex justify-center ">
                  <motion.img
                    className=" absolute h-[70px] opacity-80 "
                    src="assets/images/subsidiaryPagesImages/props/Vector.png"
                    alt=""
                    animate={{
                      y: [-10, 10, -10],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                  />
                  <motion.img
                    className="my-3 h-[100px] "
                    src="assets/images/subsidiaryPagesImages/props/Vector (1).png"
                    alt=""
                    animate={{
                      scale: [1.2, 1, 1.2],
                      transition: { duration: 3, repeat: Infinity },
                    }}
                  />
                </motion.div>

                <span className="opacity-80 ">To Discover</span>
              </div>
            </div>

            <div className="absolute z-50 lg:bottom-[9%] left-[18%] h-[500px] w-full">
              <div className=" z-50 relative museo-sans">
                <div
                  style={{
                    background: `linear-gradient(to bottom right, ${data.data[0].colors.one}, ${data.data[0].colors.two})`,
                  }}
                  className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 pl-[100px] overflow-hidden card-1 "
                >
                  <div className="h-[100%] pt-[15px] left-0 w-[100px] absolute flex flex-col items-center">
                    <div className="w-[90px] h-[90px] flex items-center justify-center">
                      <img
                        className="w-[60px] relative opacity-0 top-[100px] left-[100px] top-left-image"
                        src={data.data[0].img}
                      />
                    </div>
                    <div className="h-[280px]  w-full flex justify-center overflow-hidden">
                      <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                    </div>
                  </div>
                  <div className="w-full h-full flex py-[65px] museo-sans">
                    <div className="max-w-[262px]">
                      <h2 className="text-[44px] text-white leading-[50.2px] title museo-sans">
                        {data.data[0].content.head}
                      </h2>
                      <p className="mt-[16px]">{data.data[0].content.text}</p>
                      <button className="text-white flex gap-[13px] mt-[44px] items-center">
                        Learn More
                        <img src="/assets/images/right-arrow.svg" />
                      </button>
                    </div>
                    <img
                      className="w-[calc(100%-100px)]  object-cover"
                      src="/assets/images/icon-talent-card-1.svg"
                    />
                  </div>
                </div>

                <div
                  style={{
                    background: `linear-gradient(to bottom right, ${data.data[1].colors.one}, ${data.data[1].colors.two})`,
                  }}
                  className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 pl-[100px] overflow-hidden card-2 left-[calc(200vw+100px)]"
                >
                  <div className="h-[100%] pt-[15px] left-0 w-[100px] absolute flex flex-col items-center">
                    <div className="w-[90px] h-[90px] flex items-center justify-center">
                      <img
                        className="w-[60px] relative opacity-0 top-[100px] left-[100px] top-left-image"
                        src={data.data[1].img}
                      />
                    </div>
                    <div className="h-[280px]  w-full flex justify-center overflow-hidden">
                      <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                    </div>
                  </div>
                  <div className="w-full h-full flex py-[65px]">
                    <div className="max-w-[262px]">
                      <h2 className="text-[44px] text-white leading-[50.2px] title">
                        {data.data[1].content.head}
                      </h2>
                      <p className="mt-[16px]">{data.data[1].content.text}</p>
                      <button className="text-white flex gap-[13px] mt-[44px] items-center">
                        Learn More
                        <img src="/assets/images/right-arrow.svg" />
                      </button>
                    </div>
                    <img
                      className="w-[calc(100%-100px)]  object-cover"
                      src="/assets/images/icon-talent-card-1.svg"
                    />
                  </div>
                </div>

                <div
                  style={{
                    background: `linear-gradient(to bottom right, ${data.data[2].colors.one}, ${data.data[2].colors.two})`,
                  }}
                  className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 pl-[100px] py-[65px]  overflow-hidden card-3 left-[calc(200vw+200px)]"
                >
                  <div className="w-full h-full flex">
                    <div className="max-w-[262px]">
                      <h2 className="text-[44px] text-white leading-[50.2px]">
                        {data.data[2].content.head}
                      </h2>
                      <p className="mt-[16px]">{data.data[2].content.text}</p>
                      <button className="text-white flex gap-[13px] mt-[44px] items-center">
                        Learn More
                        <img src="/assets/images/right-arrow.svg" />
                      </button>
                    </div>
                    <figure>
                      <img
                        className="w-[calc(100%-100px)]  object-cover"
                        src={data.data[2].img}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-[600px] w-full bg-blue-300 "></div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ParallaxCards;
