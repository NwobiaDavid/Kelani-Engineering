/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const ParallaxCards: React.FC = () => {
//   const [stopAnimation, setStopAnimation] = useState(false);

//   const handleReveal = () => {
//     setStopAnimation(true);
//   };

  return (
    <div className="h-screen w-full flex">
      {/* <motion.div className="flex">
        <ParallaxProvider>
          <Parallax
            translateX={[200, stopAnimation ? 0 : -200]} // Change translateX based on the stopAnimation state
            onReveal={()=>handleReveal} // Call handleReveal when the element is revealed
          >
            <motion.div
              className="bg-gray-200 h-[200px] w-[500px] rounded-md shadow-md m-4"
            >
              <h2 className="text-xl font-semibold">text 1 hello</h2>
            </motion.div>
          </Parallax>
        </ParallaxProvider>
      </motion.div> */}
    </div>
  );
};

export default ParallaxCards;
