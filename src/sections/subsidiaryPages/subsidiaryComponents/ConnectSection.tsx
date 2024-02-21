import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ConnectSection: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className=" mt-0 w-full h-[650px] lg:h-screen relative flex justify-center items-center text-white ">
      <img
        className="absolute text-center  z-[100] "
        src="/assets/images/subsidiaryPagesImages/props/Circles2.svg"
        alt=""
      />

      <div className="flex z-50 relative items-center justify-center flex-col h-full w-[90%] lg:w-[35%] text-center ">
        <h1 className=" text-4xl lg:text-5xl uppercase  space-grotesk-medium">
          Connect with Us Today
        </h1>
        <p className="text-xl opacity-85 my-10 museo-sans">{text}</p>
        <div className=" py-2 w-fit  z-10 cursor-pointer flex justify-center items-center rounded-full px-5 bg-white text-black inter">
          <Link to={"#"} className="w-full">
            GET CONNECTED{" "}
          </Link>
          <IoIosArrowRoundForward size={30} />
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
