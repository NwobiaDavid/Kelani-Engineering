import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ConnectSection: React.FC<{
  text: string;
  setCtaFormShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ text }) => {
  return (
    <div className="h-[700px]   w-full lg:h-screen relative flex flex-col justify-center items-center ">
      <div className=" mt-0 w-full z-50  bg-black h-full relative flex flex-col justify-center items-center text-white ">
        <div className="flex relative items-center justify-center flex-col h-full w-[90%] lg:w-[35%] text-center ">
          <h1 className=" text-4xl lg:text-5xl uppercase  space-grotesk-medium">
            Connect with Us Today
          </h1>
          <p className="text-xl my-10 museo-sans font-normal">{text}</p>
          <div className=" py-2 w-fit  z-[50] cursor-pointer flex justify-center items-center rounded-full px-5 bg-white text-black inter text-[14px] md:text-[16px]">
            <Link to={"#"} className="w-full">
              GET CONNECTED{" "}
            </Link>
            <span className="sm:block hidden">
              <IoIosArrowRoundForward size={30} />
            </span>
          </div>
        </div>

        <div className=" relative w-full z-[60] h-[30px]  ">
          <img
            className="absolute w-full  object-cover"
            src="/assets/images/subsidiaryPagesImages/Rectangle 1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
