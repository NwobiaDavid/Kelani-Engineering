/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);


export const One: React.FC  = () => {

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
    timeline.to(".card-2", { y: "-100vh", duration: 100, delay: 130  });
    timeline.to(".card-3", { y: "-100vh", duration: 100, delay: 130  });
  };

  useEffect(() => {
      animateCardsIn();
  }, [animated]);

  return (

    <> 
    <div ref={animated} className="relative h-[400vh] ">
      <div className="card-animation-container bg-black sticky h-[200vh] top-[10%] " >
          <div className="card-1 absolute top-[0] bg-orange-100 h-[400px] w-[400px]  " > </div>
          <div className="card-2 absolute top-[calc(100vh+150px)]  bg-green-400 h-[400px] w-[400px] " > </div>
          <div className="card-3 absolute top-[calc(100vh+300px)] bg-red-400 h-[400px] w-[400px] " > </div>
      </div>
    </div>
    </>

  )
}
