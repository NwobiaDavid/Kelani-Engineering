import NavSubsidiarySection from "./NavSubsidiarySection";
import { motion } from "framer-motion";

interface NavBarProps {
  closeNav: () => void;
}

const NavBar = ({ closeNav }: NavBarProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        onClick={closeNav}
        className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(34,34,34,0.5)] z-20 cursor-pointer"
      ></motion.div>
      <motion.div
        initial={{ y: -500 }}
        animate={{
          y: 0,
          transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
        }}
        className="flex flex-col w-full gap-[6.4px] fixed p-[10px] z-30 top-0 right-0  left-0"
      >
        <div className="w-full h-[460px] lg:h-[360px] bg-[#D48045] rounded-[9.6px] flex flex-col lg:flex-row overflow-hidden">
          <div
            className={`h-full lg:hidden border-[#FEFEFE]  lg:border-t-0  flex-grow flex items-center justify-center relative`}
          >
            <p className="lg:absolute bottom-[32px] left-[40px] text-white text-[21.2px] flex justify-between items-center w-[calc(100%-80px)]">
              Kelani Engineering
              <img src="/assets/images/icon-link.svg" />
            </p>
          </div>
          <NavSubsidiarySection
            icon="/assets/images/icon-industrials.svg"
            hasRightBorder
            text="Industrials"
          />
          <NavSubsidiarySection
            icon="/assets/images/icon-consulting.svg"
            hasRightBorder
            text="Consulting and Talent"
          />
          <NavSubsidiarySection
            icon="/assets/images/icon-consulting.svg"
            text="Power and Energy"
          />
          {/* <NavSubsidiarySection
            icon="/assets/images/icon-contact.svg"
            text="Contact"
          /> */}
        </div>
        <motion.div
          initial={{ y: -100 }}
          animate={{
            y: 0,
            transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          exit={{
            y: -100,
            transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="w-full h-[138px] lg:h-[69px] bg-[#D48045] rounded-[9.6px] overflow-hidden flex flex-col lg:flex-row"
        >
          <div className="lg:w-[calc(100%/3)] w-full  flex-shrink h-full border-b lg:border-b-0 lg:border-r border-[#FEFEFE]  flex items-center justify-between px-[40px]">
            <p className="text-white text-[17.28px]">Contact Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <g clip-path="url(#clip0_2383_57)">
                <path
                  d="M1.25 17L17.25 1M17.25 1H1.25M17.25 1V17"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2383_57">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="lg:w-[calc(200%/3)] w-full h-full flex">
            <div className="flex items-center justify-center flex-grow h-full">
              <img
                src="/assets/images/icon-social-youtube.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-center flex-grow h-full">
              <img
                src="/assets/images/icon-social-facebook.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-center flex-grow h-full">
              <img
                src="/assets/images/icon-social-instagram.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-center flex-grow h-full">
              <img
                src="/assets/images/icon-social-linkedin.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-center flex-grow h-full bg-[#FF9A53]">
              <img
                src="/assets/images/icon-close.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavBar;
