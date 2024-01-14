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
import { Scrollbars } from 'rc-scrollbars';
import CustomScrollbar from "./subsidiaryComponents/CustomScrollbar";

const SubsidiaryPageOne = () => {
  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const mouseX = e.nativeEvent.offsetX;
  //   const mouseY = e.nativeEvent.offsetY;

  //   // Update styles to reveal grids around the mouse area
  //   const gridContainer = document.getElementById('grid-container');
  //   if (gridContainer) {
  //     gridContainer.style.backgroundPositionX = `${mouseX}px`;
  //     gridContainer.style.backgroundPositionY = `${mouseY}px`;
  //     gridContainer.style.width = '30cm';
  //     gridContainer.style.height = '30cm';
  //   }
  // };

  // const handleMouseEnter = () => {
  //   const gridContainer = document.getElementById('grid-container');
  //   if (gridContainer) {
  //     gridContainer.style.display = 'block';
  //   }
  // };

  // const handleMouseLeave = () => {
  //   const gridContainer = document.getElementById('grid-container');
  //   if (gridContainer) {
  //     gridContainer.style.display = 'none';
  //   }
  // };

  return (
    <div>

      <div className="relative overflow-x-hidden bg-black ">
      
      
           {/* <svg
            id="grid-container"
            className="absolute z-10 inset-0"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="300"
                height="300"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(90)"
              >
                <line x1="0" y1="0" x2="0" y2="300" stroke="white" strokeWidth="1" />
                <line x1="0" y1="0" x2="300" y2="0" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg> */}
          <div className=" md:h-screen h-[600px] relative" >
            <div className="absolute inset-0 bg-cover bg-center">
              <img
                className="w-full h-full object-cover"
                src="/assets/images/subsidiaryPagesImages/Frame 63.png"
                alt="background image"
              />
            </div>
            <div className="relative h-full z-10 flex flex-col">
                      <img
                      className="absolute top-4 -right-10 lg:right-24 "
                      src="/assets/images/subsidiaryPagesImages/props/image.png" alt="" />
              <Navbar />
              <div className="flex h-full  flex-col justify-center items-center">
                  <div className="lg:w-[60%] w-[80%] text-center flex flex-col items-center justify-center uppercase ">
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
          <div className="relative  " >
            <Features/>
            {/* <SlideshowSection/> */}
            <div className=" absolute top-[10rem]  w-full bg-gradient-to-b from-black via-purple-700  to-black opacity-15 h-[800px] ">
            </div>
            <SlideshowSection2/>
          </div>
          <ParallexCards />
          <div className="bg-cover bg-no-repeat " style={{ background: `url(/assets/images/subsidiaryPagesImages/props/gggrain.svg) ` }}>
      
            <ConnectSection/>
            <FooterSection />
          </div>
        </div>

        <div className="bg-white fixed">
        <CustomScrollbar />
         
      </div>
    </div>
  );
};

export default SubsidiaryPageOne;
