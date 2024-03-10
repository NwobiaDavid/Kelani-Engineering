import { useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  image: string;
  description: string;
  link?: string;
  themeColor: string;
}

const SpotlightCard = ({ image, description, link, themeColor }: SpotlightCardProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={link}
      target="_blank"
      className="w-full rounded-[9.6px] overflow-hidden border-[#D2DADF] flex flex-col cursor-pointer relative h-[60dvh] min-h-[300px] max-h-[600px] lg:min-h-[600px]"
    >
      <figure className="w-full h-full absolute">
        <img src={image} className="w-full h-full object-cover" />
      </figure>
      <div
        style={{ backgroundColor: themeColor, opacity: 0.4 }}
        className="w-full h-full top-0 bottom-0 left-0 z-[1] absolute"
      ></div>
      <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0  bg-opacity-[0.4] px-[26px] lg:px-[48px] flex flex-col justify-end pb-[64px] ">
        <h4 className="space-grotesk-semibold text-[26px] md:text-[28px] lg:text-[40px] text-white z-10">
          {description}
        </h4>
        {/* <h5 className=" leading-[1.1875] mt-[4px] text-white museo-sans font-medium">
          Lorem ipsum dolor sit amet consectetur. Risus risus nisl sit malesuada
          faucibus. Habitant risus tortor sem diam augue sit. Ut metus dictumst
          bibendum.
        </h5> */}
      </div>
      {/* <p className="px-[24px] py-[40px] text-[17.28px] leading-[25.9px] h-[140px] z-10">
        {description}
      </p> */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-opacity-70 bg-black flex text-white items-center justify-center z-20"
      >
        <p className="flex space-x-[8px] items-center">
          <span className="inline-block">Read More </span>
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M18.0773 10.9834L12.4523 16.6084C12.2762 16.7845 12.0374 16.8834 11.7883 16.8834C11.5392 16.8834 11.3003 16.7845 11.1242 16.6084C10.9481 16.4322 10.8492 16.1934 10.8492 15.9443C10.8492 15.6952 10.9481 15.4564 11.1242 15.2802L15.1484 11.2576H3.66406C3.41542 11.2576 3.17697 11.1588 3.00115 10.983C2.82533 10.8072 2.72656 10.5687 2.72656 10.3201C2.72656 10.0714 2.82533 9.83299 3.00115 9.65717C3.17697 9.48135 3.41542 9.38258 3.66406 9.38258H15.1484L11.1258 5.35758C10.9497 5.18146 10.8507 4.94259 10.8507 4.69352C10.8507 4.44445 10.9497 4.20558 11.1258 4.02946C11.3019 3.85334 11.5408 3.75439 11.7898 3.75439C12.0389 3.75439 12.2778 3.85334 12.4539 4.02946L18.0789 9.65446C18.1663 9.74167 18.2356 9.8453 18.2829 9.95938C18.3302 10.0735 18.3544 10.1958 18.3543 10.3192C18.3541 10.4427 18.3296 10.565 18.2821 10.6789C18.2345 10.7929 18.165 10.8964 18.0773 10.9834Z"
                fill="#FF9A53"
              />
            </svg>
          </span>
        </p>
      </motion.div>
    </a>
  );
};

export default SpotlightCard;
