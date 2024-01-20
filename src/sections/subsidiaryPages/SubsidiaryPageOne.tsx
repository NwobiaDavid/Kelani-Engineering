/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Navbar from "./subsidiaryComponents/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomerSection from "./subsidiaryComponents/CustomerSection";
import Features from "./subsidiaryComponents/Features";
// import SlideshowSection from "./subsidiaryComponents/SlideshowSection";
import ParallexCards from "./subsidiaryComponents/ParallexCards";
import ConnectSection from "./subsidiaryComponents/ConnectSection";
import FooterSection from "./subsidiaryComponents/FooterSection";
import './subsidiaryPages.css'
import SlideshowSection2 from "./subsidiaryComponents/SlideshowSection2";
// import { Scrollbars } from 'rc-scrollbars';
import CustomScrollbar from "./subsidiaryComponents/CustomScrollbar";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import { motion, useAnimation } from "framer-motion";

const SubsidiaryPageOne = () => {

  const [lightPosition, setLightPosition] = useState({ top: 0, left: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("hex-grid")?.getBoundingClientRect();

      if (rect) {
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        setLightPosition({
          top: (offsetY / rect.height) * 100,
          left: (offsetX / rect.width) * 100,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTopNear, setIsTopNear] = useState(false);
  const controls = useAnimation();
  const lightControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      console.log("The scroll num => " + currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollReset = () => {
      setIsTopNear(scrollPosition > 4600);
    };

    window.addEventListener('scroll', handleScrollReset);

    return () => {
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, [scrollPosition]); // Include scrollPosition as a dependency

  useEffect(() => {
    controls.start({ backgroundColor: isTopNear ? 'black' : 'white' });
  }, [isTopNear, controls]);

  useEffect(() => {
    lightControls.start({
      top: `${lightPosition.top}%`,
      left: `${lightPosition.left}%`,
      transition: { ease: 'easeInOut' },
      opacity: [0.5, 0.7],
    });
  }, [lightPosition, lightControls]);

  return (

    <div >

      {/* <div className="containerr z-50 "> */}
      <div id="hex-grid" className=" relative w-[100vw] h-full overflow-x-hidden "  >

      <motion.div
        animate={lightControls}
        className="light opacity-20 z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
      ></motion.div>

        <div className="griddy z-20 bg-transparent " > </div>
        <div className="relative overflow-x-hidden bg-black ">

          <div className="  md:h-screen h-[600px] relative" >
            <div className="absolute inset-0 bg-cover bg-center">
              <div className=" absolute w-full  z-50">
                <img
                  className="w-full h-full opacity-50 object-cover"
                  // src="/assets/images/subsidiaryPagesImages/Rectangle 266 (2).png"
                  // className="w-full h-full object-cover"
                  src="/assets/images/subsidiaryPagesImages/Frame 63.png"

                  alt="background image"
                />
              </div>

              {/* <div className="absolute inset-0 bg-black "></div>
                      <div className="absolute inset-0"> */}
              {/* <div className=" rounded-full h-40 w-40 overflow-hidden"> */}
              {/* <img className="absolute inset-0" src="/assets/images/subsidiaryPagesImages/Ellipse 46.png" alt="" />
                          <img className="absolute inset-0" src="/assets/images/subsidiaryPagesImages/Ellipse 46-3.png" alt="" />
                          <img className="absolute inset-0" src="/assets/images/subsidiaryPagesImages/Ellipse 46-5.png" alt="" />
                          <img className="absolute inset-0" src="/assets/images/subsidiaryPagesImages/Ellipse 46-1.png" alt="" />
                          <img className="absolute inset-0" src="/assets/images/subsidiaryPagesImages/Ellipse 46-6.png" alt="" /> */}
              {/* </div> */}
              {/* </div> */}

            </div>
            <div className="relative z-50 h-full flex flex-col">
              <img
                className="absolute top-4 -right-10 lg:right-24 "
                src="/assets/images/subsidiaryPagesImages/props/image.png" alt="" />
              <Navbar />
              <div className="flex h-full  flex-col justify-center items-center">
                <div className="lg:w-[60%] z-50 w-[80%] text-center flex flex-col items-center justify-center uppercase ">
                  <p className="text-white py-3 opacity-75 ">Kelani Consulting and Talent Management</p>
                  <h1 className="text-white font-semibold text-3xl lg:text-7xl mb-4 lg:mb-[4.7rem] ">enhance organizational performance </h1>
                  <div className=" cursor-pointer py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white ">
                    <Link to={"#"} className="" >GET CONNECTED </Link><IoIosArrowRoundForward size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CustomerSection />
          <div className="relative z-50 " >
            <Features />
            {/* <SlideshowSection/> */}
            <div className=" absolute top-[10rem]  w-full bg-gradient-to-b from-black via-purple-700  to-black opacity-15 h-[800px] ">
            </div>
            <SlideshowSection2 />
          </div>
          <ParallexCards />

          <div className="bg-cover bg-no-repeat relative  bg-black " >
            <div className="relative rounded-b-full ">
              <ConnectSection />
              <motion.div
                className="z-30 h-[2rem] relative"
                animate={controls}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className=" bottom-0 h-[2rem] w-full absolute rounded-b-full  bg-black " >

                </div>
              </motion.div>
            </div>
            <div className="bg-cover bg-no-repeat relative z-30  " >
              {/* <FooterSection /> */}
              <Footer />
            </div>
          </div>


        </div>

      </div>
      {/* </div> */}

      <div className="bg-white hidden md:block z-50 fixed">
        <CustomScrollbar />
      </div>

    </div>
  );
};

export default SubsidiaryPageOne;
