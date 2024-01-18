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

  return (
    <div >

      {/* <div className="containerr z-50 "> */}
        <div id="hex-grid" className=" relative w-[100vw] h-full overflow-x-hidden "  >
        <div  style={{ top: `${lightPosition.top}%`, left: `${lightPosition.left}%`,}} className="light opacity-20 z-10 top-[50%] left-[50%] rounded-full  bg-white w-[20rem] h-[20rem]  " > </div>
        <div className="griddy z-20 bg-transparent " > </div>
            <div className="relative overflow-x-hidden bg-black ">
        
                <div className="  md:h-screen h-[600px] relative" >
                  <div className="absolute inset-0 bg-cover bg-center">
                    <div className=" absolute  z-50">
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
                  <Features/>
                  {/* <SlideshowSection/> */}
                  <div className=" absolute top-[10rem]  w-full bg-gradient-to-b from-black via-purple-700  to-black opacity-15 h-[800px] ">
                  </div>
                  <SlideshowSection2/>
                </div>
                <ParallexCards />
                <div className="bg-cover bg-no-repeat z-50 relative " >
                    <ConnectSection/>
                  <div className="bg-cover bg-no-repeat " style={{ background: `url(/assets/images/subsidiaryPagesImages/props/gggrain.svg) ` }}>
                    <FooterSection />
                  </div>
                </div>
              </div>
             
        </div>
      {/* </div> */}

      <div className="bg-white z-50 fixed">
        <CustomScrollbar />
      </div>

    </div>
  );
};

export default SubsidiaryPageOne;
