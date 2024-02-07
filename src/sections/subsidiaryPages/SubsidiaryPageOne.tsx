/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Navbar from "./subsidiaryComponents/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomerSection from "./subsidiaryComponents/CustomerSection";
import Features from "./subsidiaryComponents/Features";
import ParallexCards from "./subsidiaryComponents/ParallexCards";
import ConnectSection from "./subsidiaryComponents/ConnectSection";
import './subsidiaryPages.css'
import SlideshowSection2 from "./subsidiaryComponents/SlideshowSection2";
import CustomScrollbar from "./subsidiaryComponents/CustomScrollbar";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import { motion, useAnimation } from "framer-motion";
import ParallexCardsMobile from "./subsidiaryComponents/ParallexCardsMobile";


interface Contents {
  img: string;
  img2: string;
  head: string;
  desc: string;
  colour: string;
}

interface Contents_Slideshow {
  img: string,
  point1: string,
  point2: string,
  point3: string,
  point4: string,
  point5?: string,
  point6?: string,
  classname: string
}

// interface Content_parallex {
//  img: string;
//  content: {
//   head: string;
//   text: string;
//  }


// }

interface Header {
  text: string
  className: string
}

// interface ColourProps {
//   color: {
//     c700: string;
//     c500: string;
//     c400: string;
//     c300: string;
//   }
// }

interface SubProps {
  hero_section: {
    sub_text: string;
    main_text: string;
    home_img: string;
    color: {
      c700: string;
      c500: string;
      c400: string;
      c300: string;
    };
  },
  features_data: {
    header: string;
    contents: Contents[];
  },

  slideshow_section: {
    dash: string;
    content: Contents_Slideshow[];
    header: Header[];
    text: {
      head: string;
      sub: string;
    }
  },
  parallex_section: {
    data: {
      img: string;
      img2: string;
      content: {
        head: string;
        text: string;
      };
      colors: {
        one: string;
        two: string;
      }
    }[];
  },
  parallex_section_mobile: {
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
      }
    }[];
  },
  connect_text: string;


}

const SubsidiaryPageOne: React.FC<{ sub: SubProps }> = ({ sub }) => {


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [lightPosition, setLightPosition] = useState({ top: 0, left: 50 });
  // const [lightPositions, setLightPositions] = useState({ top: 0, left: 50 });
  // const [lightPositionx, setLightPositionx] = useState({ top: 0, left: 50 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("hex-gridd")?.getBoundingClientRect();

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


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("hex-gridx")?.getBoundingClientRect();

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
  const lightControlss = useAnimation();
  const lightControlsx = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      // console.log("The scroll num => " + currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollReset = () => {
      // console.log(scrollPosition)
      setIsTopNear(scrollPosition > 5180);
    };

    window.addEventListener('scroll', handleScrollReset);

    return () => {
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, [scrollPosition]);

  useEffect(() => {
    controls.start({ backgroundColor: isTopNear ? 'black' : 'white' });
  }, [isTopNear, controls]);

  useEffect(() => {
    lightControls.start({
      top: `${lightPosition.top}%`,
      left: `${lightPosition.left}%`,
      opacity: [0.2],
    });
  }, [lightPosition, lightControls]);

  useEffect(() => {
    lightControlss.start({
      top: `${lightPosition.top}%`,
      left: `${lightPosition.left}%`,
      opacity: [0.2],
    });
  }, [lightPosition, lightControlss]);


  useEffect(() => {
    lightControlsx.start({
      top: `${lightPosition.top}%`,
      left: `${lightPosition.left}%`,
      opacity: [0.2],
    });
  }, [lightPosition, lightControlsx]);

  return (

    <>
      <div className=" overflow-x-clip " >
        <div id="hex-grid" className=" relative w-[100vw] h-full overflow-x-hidden "  >

          <motion.div
            animate={lightControls}
            className="light  hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
          ></motion.div>

          <div className="griddy lg:block hidden z-20 bg-transparent " > </div>
          <div className="relative overflow-x-hidden bg-black ">

            <div className="  md:h-screen h-[600px] relative" >

              <div className="absolute inset-0 bg-cover bg-center">
                <div className=" absolute w-full  z-50">
                  <img
                    className="w-full h-full opacity-50 object-cover"
                    src={sub.hero_section.home_img}
                    alt="background image"
                  />
                </div>
              </div>

              <div className="relative z-50 h-full flex flex-col">
                <img
                  className="absolute top-4 -right-10 lg:right-24 "
                  src="/assets/images/subsidiaryPagesImages/props/image.png" alt="" />

                <Navbar color={sub.hero_section.color} />

                <div className="flex h-full  flex-col justify-center items-center">
                  <div className="lg:w-[60%] z-50 w-[80%] text-center flex flex-col items-center justify-center uppercase ">
                    <p className="text-white py-3 opacity-75 ">{sub.hero_section.sub_text}</p>
                    <h1 className="text-white font-semibold text-3xl lg:text-7xl mb-4 lg:mb-[4.7rem] ">{sub.hero_section.main_text}</h1>
                    <div className=" cursor-pointer py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white ">
                      <Link to={"#"} className="" >GET CONNECTED </Link><IoIosArrowRoundForward size={30} />
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <CustomerSection />


            <div className="relative z-50 " >
              <Features data={sub.features_data} />
              <div style={{ backgroundImage: `linear-gradient(to bottom, black, ${sub.hero_section.color.c700}, black)` }} className=" absolute top-[10rem]  w-full  opacity-15 h-[800px] "> </div>
              <SlideshowSection2 colours={sub.hero_section.color} data={sub.slideshow_section} />
            </div>

          </div>
        </div>


        <div id="hex-gridd" className=" relative bg-black"  >
          <motion.div
            animate={lightControls}
            className="light hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
          ></motion.div>

          <div className="griddy lg:block hidden z-20 bg-transparent"></div>

          {isMobile ? (
        <div className="relative md:hidden z-40">
          <ParallexCardsMobile data={sub.parallex_section_mobile} />
        </div>
      ) : (
        <div className="relative hidden md:block z-40">
          <ParallexCards data={sub.parallex_section} />
        </div>
      )}

        </div>



        {/* <div id="hex-gridx" className="  md:hidden block relative bg-black"  >
          <motion.div
            animate={lightControls}
            className="light hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
          ></motion.div>

          <div className="griddy lg:block hidden z-20 bg-transparent"></div> */}

        {/* <div className=" relative"> */}
        {/* <div className="relative w-full md:block hidden z-40 ">
              <ParallexCards data={sub.parallex_section} />
            </div> */}

        {/* <div className="relative md:hidden block  z-40 ">
              <ParallexCardsMobile data={sub.parallex_section_mobile} />
            </div>

        </div> */}


        {/* <div className="  relative z-50 " > */}
        <div id="hex-gridx" className=" relative bg-black h-full  "  >




          <div className="bg-black z-10 relative ">

            <div className="griddy lg:block hidden z-20 bg-transparent "></div>

            <motion.div
              animate={lightControlsx}
              className="light hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
            ></motion.div>

            {/* <div className="mt-0  "> */}
            <ConnectSection text={sub.connect_text} />
            <img className="absolute z-50 -bottom-[0px] w-full  " src="/assets/images/subsidiaryPagesImages/Rectangle 1.svg" alt="" />
            {/* </div> */}
          </div>

        </div>




        {/* </div> */}

        <div className="z-50  " >
          <Footer />
        </div>

        <div className="bg-white hidden md:block z-50 fixed">
          <CustomScrollbar barColor="#333" ellipseColor={sub.hero_section.color.c700} ellipseColor2={sub.hero_section.color.c500} ellipseColor3={sub.hero_section.color.c400} />
        </div>

      </div>

    </>
  );
};

export default SubsidiaryPageOne;
