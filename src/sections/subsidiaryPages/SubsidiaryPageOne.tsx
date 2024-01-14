import { Link } from "react-router-dom";
import Navbar from "./subsidiaryComponents/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomerSection from "./subsidiaryComponents/CustomerSection";
import Features from "./subsidiaryComponents/Features";
import SlideshowSection from "./subsidiaryComponents/SlideshowSection";
import ParallexCards from "./subsidiaryComponents/ParallexCards";
import ConnectSection from "./subsidiaryComponents/ConnectSection";
import FooterSection from "./subsidiaryComponents/FooterSection";

const SubsidiaryPageOne = () => {
  return (
    <div className="relative overflow-x-hidden bg-gray-300 ">

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

      <CustomerSection />
      <Features/>
      <SlideshowSection/>
      <ParallexCards />
      <div className="bg-cover bg-no-repeat " style={{ background: `url(/assets/images/subsidiaryPagesImages/props/gggrain.svg) ` }}>
        
        <ConnectSection/>
        <FooterSection />
      </div>

    </div>
  );
};

export default SubsidiaryPageOne;
