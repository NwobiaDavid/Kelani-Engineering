import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent pt-5 lg:pt-10 p-4 z-30"
    >
      <div className="lg:container z-[60] opacity-100 relative lg:mx-auto flex justify-between items-center">
        <div className=" bg-purple-400 py-1 px-2 rounded-full ">
          <h1 className="text-xl text-transparent font-bold">Logo</h1>
        </div>

        <div className="flex items-center">
          <Link
            to="#"
            className=" border font-semibold text-purple-500 border-purple-400 rounded-full py-2 px-5 mx-2 block md:inline-block"
          >
            CTA
          </Link>
            <div className="border mx-2 h-10 opacity-50 "></div>
          <motion.button
            onClick={toggleNav}
            className="ml-4 bg-purple-300 text-purple-700 rounded-full p-2 flex items-center justify-center focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: isNavOpen ? 90 : 0 }}
              className="flex text-center flex-col justify-center items-center h-6 w-6"
            >
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16"}
                // d={isNavOpen ? "M4 12h16" : "M4 6h16M4 12h16"}
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isNavOpen ? "auto" : 0, opacity: isNavOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        
      >
        <Link
          to="#"
          className=" py-2 text-white z-30 px-4 mx-2 block md:inline-block"
        >
          Home
        </Link>
        <Link
          to="#"
          className="py-2 text-white z-30 px-4 mx-2 block md:inline-block"
        >
          About
        </Link>
        <Link
          to="#"
          className=" py-2 text-white z-30 px-4 mx-2 block md:inline-block"
        >
          Services
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
