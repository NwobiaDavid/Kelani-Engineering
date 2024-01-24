/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

// interface Contents {
//   img: string;
//   text: string;
//   desc: string;
//   link: string;
//   class: string;
// }

const ParallaxCards: React.FC = () => {

  const animated = useRef(null);

  // const contents: Contents[] = [
  //   {
  //     img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
  //     text: "Expertise and Innovation",
  //     desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
  //     link: "#",
  //     class: "lg:right-[27%] top-0",
  //   },
  //   {
  //     img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
  //     text: "Expertise and Innovation",
  //     desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
  //     link: "#",
  //     class: "lg:right-[17%] top-[25%]",
  //   },
  //   {
  //     img: "assets/images/subsidiaryPagesImages/props/Frame 29.png",
  //     text: "Expertise and Innovation",
  //     desc: "Access to a team of experts who bring a blend of industry expertise and innovative thinking.",
  //     link: "#",
  //     class: "lg:right-[7%] top-[50%]",
  //   },
  // ];

  // useGSAP(
  //   () => {
  //     // create the smooth scroller FIRST!

  //     ScrollTrigger.create({
  //       trigger: '.box-c',
  //       pin: true,
  //       start: 'center center',
  //       end: '+=300',
  //       markers: true,
  //     });
  //   },
  //   { scope: main }
  // );


// useGSAP(()=>{
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".card-animation-container",
//       scrub: true,
//       pin: true,
//       start: "center center",
//       end: "+=300vh",
//       markers: true,
//     },
//   });
//   // console.log("pin=> "+timeline.pin); 
//   timeline.to(".card-1", { x: "-100vw", duration: 3 });
//   timeline.to(".card-2", { x: "-100vw", duration: 3, delay: 1 });
//   timeline.to(".card-3", { x: "-100vw", duration: 3, delay: 2 });
//   timeline.to(
//     ".card-1 .title",
//     { scale: 0.35, x: -180, rotate: -90, duration: 2, y: 320 },
//     5
//   );
//   timeline.to(".card-1 .line-extend", { y: "-100%", duration: 1.3 }, 6);
//   timeline.to(
//     ".card-1 .top-left-image",
//     { y: -100, x: -100, opacity: 1, duration: 1.7 },
//     6
//   );
//   timeline.to(
//     ".card-2 .title",
//     { scale: 0.35, x: -180, rotate: -90, duration: 2, y: 320 },
//     9
//   );
//   timeline.to(".card-2 .line-extend", { y: "-100%", duration: 1.3 }, 10);
//   timeline.to(
//     ".card-2 .top-left-image",
//     { y: -100, x: -100, opacity: 1, duration: 1.7 },
//     10
//   );
// }, {
//   scope: animated
// })

  const animateCardsIn = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-animation-container",
        scrub: true,
        pin: ".card-animation-container",
        start: "80% center",
        end: "+=400vh",
        markers: true,
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: { min: 6, max: 10 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 5, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        // },

      },
    });
    // timeline.to(".card-1", { x: "-100vw", duration: 3 });
    timeline.to(".card-2", { x: "-200vw", duration: 3, delay: 1 });
    timeline.to(".card-3", { x: "-200vw", duration: 4, delay: 2 });

    timeline.to(
      ".card-1 .title",
      { scale: 0.35, x: -180, rotate: -90, duration: 2, y: 320 },
      5
    );
    timeline.to(".card-1 .line-extend", { y: "-100%", duration: 1.3 }, 6);
    timeline.to(
      ".card-1 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 1.7 },
      6
    );
    timeline.to(
      ".card-2 .title",
      { scale: 0.35, x: -180, rotate: -90, duration: 2, y: 320 },
      9
    );
    timeline.to(".card-2 .line-extend", { y: "-100%", duration: 1.3 }, 10);
    timeline.to(
      ".card-2 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 1.7 },
      10
    );
  };

  useEffect(() => {
    animateCardsIn();
  }, [animated]);

  return (
    <>
    {/* <div className="h-[500px] "></div> */}
    
<div className="  card-animation-container  ">
  
          <div ref={animated}  className="h-[1000px] z-50  py-10 flex-col bg-black text-white w-full flex relative ">
            <div>
              <div className="flex flex-col  uppercase justify-center items-center">
                <div className="lg:w-[28%] w-[90%] text-center relative z-50 ">
                  <h3 className=" opacity-80 tracking-wider lg:font-semibold mb-2 lg:mb-6  ">
                    why kelani
                  </h3>
                  <h1 className="lg:text-5xl text-4xl text-center font-semibold ">
                    Personalized Service for You
                  </h1>
                </div>
              </div>
            </div>
  
            <div className="flex h-full relative z-50 w-full ">
              
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
  
              <div className="absolute  lg:bottom-[20%] left-[18%] h-[500px] w-full">
                <div className="relative ">
  
  
                  <div className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 pl-[100px] bg-gradient-to-br from-[#E9B8FF] to-[#F9ECFF] overflow-hidden card-1 ">
                    <div className="h-[100%] pt-[15px] left-0 w-[100px] absolute flex flex-col items-center">
                      <div className="w-[90px] h-[90px] flex items-center justify-center">
                        <img
                          className="w-[60px] relative opacity-0 top-[100px] left-[100px] top-left-image"
                          src="/assets/images/icon-consulting-top-left-1.svg"
                        />
                      </div>
                      <div className="h-[280px]  w-full flex justify-center overflow-hidden">
                        <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                      </div>
                    </div>
                    <div className="w-full h-full flex py-[65px] ">
                      <div className="max-w-[262px]">
                        <h2 className="text-[44px] text-white leading-[50.2px] title">
                          Expertise and Innovation
                        </h2>
                        <p className="mt-[16px]">
                          Access to a team of experts who bring a blend of
                          industry expertise and innovative thinking.
                        </p>
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
  
  
                  <div className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 pl-[100px] bg-gradient-to-br from-[#E9B8FF] to-[#F9ECFF] overflow-hidden card-2 left-[calc(200vw+100px)]">
                    <div className="h-[100%] pt-[15px] left-0 w-[100px] absolute flex flex-col items-center">
                      <div className="w-[90px] h-[90px] flex items-center justify-center">
                        <img
                          className="w-[60px] relative opacity-0 top-[100px] left-[100px] top-left-image"
                          src="/assets/images/icon-consulting-top-left-1.svg"
                        />
                      </div>
                      <div className="h-[280px]  w-full flex justify-center overflow-hidden">
                        <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                      </div>
                    </div>
                    <div className="w-full h-full flex py-[65px]">
                      <div className="max-w-[262px]">
                        <h2 className="text-[44px] text-white leading-[50.2px] title">
                          Expertise and Innovation
                        </h2>
                        <p className="mt-[16px]">
                          Access to a team of experts who bring a blend of
                          industry expertise and innovative thinking.
                        </p>
                        <button className="text-white flex gap-[13px] mt-[44px] items-center">
                          Learn More
                          <img src="/assets/images/right-arrow.svg" />
                        </button>
                      </div>
                      <figure>
                        <img
                          className="w-[100%-100px]  object-cover"
                          src="/assets/images/icon-talent-card-1.svg"
                        />
                      </figure>
                    </div>
                  </div>
  
  
                  <div className="w-[calc(90%-500px)] border-white border rounded-[20px] h-[500px] absolute top-0 pl-[100px] py-[65px] bg-gradient-to-br from-[#E9B8FF] to-[#F9ECFF] overflow-hidden card-3 left-[calc(200vw+200px)]">
                    <div className="w-full h-full flex">
                      <div className="max-w-[262px]">
                        <h2 className="text-[44px] text-white leading-[50.2px]">
                          Expertise and Innovation
                        </h2>
                        <p className="mt-[16px]">
                          Access to a team of experts who bring a blend of
                          industry expertise and innovative thinking.
                        </p>
                        <button className="text-white flex gap-[13px] mt-[44px] items-center">
                          Learn More
                          <img src="/assets/images/right-arrow.svg" />
                        </button>
                      </div>
                      <figure>
                        <img
                          className="w-[100%-100px]  object-cover"
                          src="/assets/images/icon-talent-card-1.svg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>
      {/* <div className="h-[200vh]"></div> */}
    </>
  );
};

export default ParallaxCards;
