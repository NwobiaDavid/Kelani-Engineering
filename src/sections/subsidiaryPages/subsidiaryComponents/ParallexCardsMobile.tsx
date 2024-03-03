/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

interface ParallexMobileProps {
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

const ParallexCardsMobile: React.FC<{ data: ParallexMobileProps }> = ({
  data,
}) => {
  // const animated = useRef(null);

  // const animateCardsIn = () => {
  //     const timeline = gsap.timeline({
  //         scrollTrigger: {
  //             trigger: ".card-animation-container",
  //             scrub: 1,
  //             start: "top 70%",
  //             end: "+=1000",
  //             markers: false,
  //         },
  //     });
  //     timeline.to(".card-1", { y: 0,x: "-200vw", duration: 150 });
  //     timeline.to(".card-2", { y: "-200vh", x: "-200vw", duration: 150, delay: 30 });
  //     timeline.to(".card-3", { y: "-200vh",x: "-200vw", duration: 150, delay: 30 });
  //     timeline.to(".card-1 .line-extend", { x: "-100px", duration: 3 }, 6);
  //     timeline.to(
  //         ".card-1 .top-left-image",
  //         { y: -100, x: -100, opacity: 1, duration: 100 },
  //         6
  //     );
  //     timeline.to(".card-2 .line-extend", { x: "100vw", duration: 3, delay: 3 }, 15);
  //     timeline.to(
  //         ".card-2 .top-left-image",
  //         { y: -100, x: -100, opacity: 1,delay: 10, duration: 30 },
  //         15
  //     );

  // };
  gsap.registerPlugin(ScrollTrigger);

  const card1leftSide = useRef(null);
  const card2leftSide = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-animation-container",
        scrub: 1,
        start: "top 65%",
        end: "+=1000",
        // markers: true,
      },
    });

    timeline.to(".card-1", { y: "-200vh", x: "-200vw", duration: 150 });
    timeline.to(".card-2", {
      y: "-200vh",
      x: "-200vw",
      duration: 150,
      delay: 300,
    });
    timeline.to(".card-3", {
      y: "-200vh",
      x: "-200vw",
      duration: 150,
      delay: 500,
    });

    timeline.to(".card-1 .line-extend", { x: "-200vw", duration: 350 }, 300);
    timeline.to(
      ".card-1 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 100 },
      300
    );
    timeline.to(".card-2 .line-extend", { x: "-200vw", duration: 350 }, 600);
    timeline.to(
      ".card-2 .top-left-image",
      { y: -100, x: -100, opacity: 1, delay: 20, duration: 300 },
      500
    );
  });

  return (
    <>
      <div className="relative h-[180vh] bg-black  ">
        <div className=" pb-3 h-[100vh] card-animation-container items-center  pt-10 flex-col text-white w-full flex">
          <div className=" w-[70%] text-center mb-16">
            <h3 className=" opacity-80 tracking-widest  mb-2 ">why kelani</h3>
            <h1 className=" text-2xl uppercase text-center font-semibold ">
              Personalized Service for You
            </h1>
          </div>

          <div className="w-[90%] relative top-0 card-animation-container">
            <div
              style={{
                background: `url(${data.data[0].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full z-20 left-[200vw] top-[200vh] absolute  h-[calc(100vh-140px)] border-white border rounded-[20px] card-1 "
            >
              <div
                ref={card1leftSide}
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="h-[15%] w-full relative flex  items-center">
                  <div className="w-[90px] p-2 h-full flex items-center justify-center">
                    <img
                      className="h-full opacity-0 top-[100px] left-[100px] relative top-left-image"
                      src={data.data[0].img}
                    />
                  </div>
                  <div className="h-[2px] w-full relative flex justify-center overflow-hidden ">
                    <div className="w-[95%] pr-3 bg-[#F4F4F4] h-full  absolute left-[200vw] line-extend"></div>
                  </div>
                </div>
                <div className="text-left h-[85%] p-3 flex flex-col justify-between items-center ">
                  <div className=" max-h-[15%] flex relative mb-20 flex-col px-2 items-start">
                    <h2 className="text-4xl top-10 text-white title">
                      {data.data[0].content.head}
                    </h2>
                    <p className=" mt-[16px]">{data.data[0].content.text}</p>
                    <button className="text-white items-center flex gap-[13px] mt-[44px] ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className=" max-h-[85%] w-[85%] md:w-[65%]  mb-12 object-cover"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: `url(${data.data[1].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full z-30 absolute left-[200vw] top-[calc(200vh+300px)]  h-[calc(100vh-140px)] border-white border card-2 rounded-[20px]  "
            >
              <div
                ref={card2leftSide}
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="h-[15%] w-full flex  items-center">
                  <div className="w-[90px] p-2 h-full flex items-center justify-center">
                    <img
                      className="h-full opacity-0 relative top-[100px] left-[100px] top-left-image "
                      src={data.data[1].img}
                    />
                  </div>
                  <div className=" w-full h-[2px]  pr-3 flex relative justify-center overflow-hidden ">
                    <div className="w-[95%] pr-3 bg-[#F4F4F4] absolute left-[200vw] right-[100%] h-full  line-extend"></div>
                  </div>
                </div>
                <div className="text-left h-[85%] p-3 flex flex-col justify-between items-center ">
                  <div className="max-h-[15%] flex flex-col px-2 mb-20 items-start">
                    <h2 className="text-4xl text-white title">
                      {data.data[1].content.head}
                    </h2>
                    <p className="mt-[16px]">{data.data[1].content.text}</p>
                    <button className="text-white items-center flex gap-[13px] mt-[44px] ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className=" max-h-[85%] w-[85%] md:w-[65%]  mb-12 object-cover"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: `url(${data.data[2].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full z-40 absolute left-[200vw] top-[calc(200vh+600px)]  h-[calc(100vh-140px)] border-white border card-3 rounded-[20px]  "
            >
              <div
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="text-left h-full pt-[75px] p-3 flex flex-col justify-between items-center ">
                  <div className=" max-h-[15%] flex flex-col mb-20 px-2 items-start">
                    <h2 className="text-4xl text-white title">
                      {data.data[1].content.head}
                    </h2>
                    <p className="mt-[16px]">{data.data[1].content.text}</p>
                    <button className="text-white items-center flex gap-[13px] mt-[44px] ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className=" max-h-[85%] w-[85%] md:w-[65%] mb-12 object-cover"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>
            {/* <div  style={{ background: `linear-gradient(to bottom right, ${data.data[0].colors.one}, ${data.data[0].colors.two})` }}
                        className="W-full h-[500px] -mt-[100px] border-white border rounded-[20px]  ">
                          <div className="text-center p-3 flex flex-col items-center ">
                         <h2 className="text-2xl text-white title">
                                {data.data[0].content.head }
                              </h2>
                
                              <img
                              className="w-[100px]  object-cover"
                              src="/assets/images/icon-talent-card-1.svg"
                            />
                              <p className="mt-[16px]">
                              {data.data[0].content.text }
                              </p>
                              <Link to={'#'} >  </Link>
                         </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallexCardsMobile;
