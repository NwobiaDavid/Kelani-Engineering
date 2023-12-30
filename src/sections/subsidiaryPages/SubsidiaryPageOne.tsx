import { Link } from "react-router-dom";
import Navbar from "./subsidiaryComponents/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomerSection from "./subsidiaryComponents/CustomerSection";
import Features from "./subsidiaryComponents/Features";
import SlideshowSection from "./subsidiaryComponents/SlideshowSection";

const SubsidiaryPageOne = () => {
  return (
    <div className="relative bg-gray-300 h-screen">

      <div className="absolute inset-0 bg-cover bg-center">
        <img
          className="w-full h-full object-cover"
          src="/assets/images/subsidiaryPagesImages/Frame 63.png"
          alt="background image"
        />
      </div>

      <div className="relative h-full z-10 flex flex-col">
                <img
                className="absolute top-4 right-24 "
                src="/assets/images/subsidiaryPagesImages/props/image.png" alt="" />

        <Navbar />
        <div className="flex h-full  flex-col justify-center items-center">
            <div className="w-[60%] text-center flex flex-col items-center justify-center uppercase ">
                <p className="text-white py-3 opacity-75 ">Kelani Consulting and Talent Management</p>
                <h1 className="text-white font-semibold text-7xl mb-[4.7rem] ">enhance organizational performance </h1>
                <div className=" py-2 w-fit flex justify-center items-center rounded-full px-5 bg-purple-300 ">
                    <Link to={"#"} className="" >GET CONNECTED </Link><IoIosArrowRoundForward size={30} />
                </div>
            </div>
        </div>
      </div>

      <CustomerSection />
      <Features/>
      <SlideshowSection/>

    </div>
  );
};

export default SubsidiaryPageOne;
