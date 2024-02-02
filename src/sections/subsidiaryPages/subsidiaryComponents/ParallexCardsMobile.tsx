/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

interface ParallexProps {
    data: {
        img: string;
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


const ParallexCardsMobile: React.FC<{ data: ParallexProps }> = ({ data }) => {

    const animated = useRef(null);

    const animateCardsIn = () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".card-animation-container",
                scrub: 1,
                start: "20% 40%",
                end: "+=1600",
                markers: true,
            },
        });
        timeline.to(".card-1", { y: 0, duration: 3 });
        timeline.to(".card-2", { y: "-100vh", duration: 20, delay: 30 });
        timeline.to(".card-3", { y: "-200vh", duration: 30, delay: 40 });

        // timeline.to(
        //     ".card-1 .title",
        //     { scale: 0.35, y: -180, duration: 100, },
        //     5
        // );
        timeline.to(".card-1 .line-extend", { x: "-200%", duration: 100 }, 6);
        // timeline.to(
        //     ".card-1 .top-left-image",
        //     { y: -100, x: -100, opacity: 1, duration: 170 },
        //     6
        // );


        timeline.to(
            ".card-2 .title",
            { scale: 0.35, x: -180, rotate: -90, duration: 100, y: 320, delay: 240 },
            9
        );
        timeline.to(".card-2 .line-extend", { y: "-100%", duration: 130, delay: 240 }, 10);
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
            <div className="relative h-[400vh] z-30">
                <div className="main h-[100vh] sticky top-0 items-center  py-0 flex-col text-white w-full flex" >
                    <div className=" w-[70%] text-center mb-20 "  >
                        <h3 className=" opacity-80 tracking-widest  mb-2 " >why kelani</h3>
                        <h1 className=" text-2xl uppercase text-center font-semibold " >Personalized Service for You</h1>
                    </div>

                    <div className="w-[90%] relative card-animation-container" >
                        <div style={{ background: `linear-gradient(to bottom right, ${data.data[0].colors.one}, ${data.data[0].colors.two})` }}
                            className="w-full  h-[700px] border-white border rounded-[20px] card-1 ">
                            <div className="h-[10%] w-full relative flex justify-center items-center">
                                <div className="w-[90px] p-2 h-full flex items-center justify-center">
                                    <img className="h-full relative"
                                        src={data.data[0].img}
                                    />
                                </div>
                                <div className="h-[3px]  pr-3 relative w-full flex justify-center ">
                                    <div className="w-full bg-[#F4F4F4] absolute -right-[200%] h-full  line-extend"></div>
                                </div>
                            </div>
                            <div className="text-left h-[90%] p-3 flex flex-col justify-between items-center ">
                                <div className="flex relative flex-col px-2 items-start">
                                    <h2 className="text-4xl top-10 text-white title">
                                        {data.data[0].content.head}
                                    </h2>
                                    <p className=" mt-[16px]">
                                        {data.data[0].content.text}
                                    </p>
                                    <button className="text-white items-center flex gap-[13px] mt-[44px] " >
                                        Learn More
                                        <img src="/assets/images/right-arrow.svg" />
                                    </button>
                                </div>
                                <img
                                    className="w-[95%] mb-12 object-cover"
                                    src="/assets/images/icon-talent-card-1.svg"
                                />
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(to bottom right, ${data.data[1].colors.one}, ${data.data[1].colors.two})` }}
                            className="w-full absolute  h-[700px] border-white border card-2 rounded-[20px]  ">
                            <div className="h-[10%] w-full flex justify-center items-center">
                                <div className="w-[90px] p-2 h-full flex items-center justify-center">
                                    <img className="h-full relative"
                                        src={data.data[1].img}
                                    />
                                </div>
                                <div className="h-[3px] pr-3  w-full flex justify-center ">
                                    <div className="w-full bg-[#F4F4F4] h-full  line-extend"></div>
                                </div>
                            </div>
                            <div className="text-left h-[90%] p-3 flex flex-col justify-between items-center ">
                                <div className="flex flex-col px-2 items-start">
                                    <h2 className="text-4xl text-white title">
                                        {data.data[1].content.head}
                                    </h2>
                                    <p className="mt-[16px]">
                                        {data.data[1].content.text}
                                    </p>
                                    <button className="text-white items-center flex gap-[13px] mt-[44px] " >
                                        Learn More
                                        <img src="/assets/images/right-arrow.svg" />
                                    </button>
                                </div>
                                <img
                                    className="w-[95%] mb-12 object-cover"
                                    src="/assets/images/icon-talent-card-1.svg"
                                />
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(to bottom right, ${data.data[1].colors.one}, ${data.data[1].colors.two})` }}
                            className="w-full absolute top-[calc(200vw+200px)] h-[700px] border-white border card-3 rounded-[20px]  ">

                            <div className="text-left h-full pt-16 p-3 flex flex-col justify-between items-center ">
                                <div className="flex flex-col px-2 items-start">
                                    <h2 className="text-4xl text-white title">
                                        {data.data[1].content.head}
                                    </h2>
                                    <p className="mt-[16px]">
                                        {data.data[1].content.text}
                                    </p>
                                    <button className="text-white items-center flex gap-[13px] mt-[44px] " >
                                        Learn More
                                        <img src="/assets/images/right-arrow.svg" />
                                    </button>
                                </div>
                                <img
                                    className="w-[95%] mb-12 object-cover"
                                    src="/assets/images/icon-talent-card-1.svg"
                                />
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
    )
}

export default ParallexCardsMobile