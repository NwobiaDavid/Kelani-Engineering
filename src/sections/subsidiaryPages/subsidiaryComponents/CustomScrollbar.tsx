import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function CustomScrollbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const yRange = useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 400]);

  return (
    <motion.div
      className="h-full flex justify-center items-center px-8"
      style={{ position: "fixed", top: 0, right: 0 }}
    >
      <motion.div
        className="scroll-bar"
        style={{
          width: "1px",
          height: "400px",
          backgroundColor: "#333",
          borderRadius: "4px",
          boxShadow: "black 2px 0 4px"

        }}
      >
        
        <motion.div
          style={{
            width: "100%",
            height: yRange,
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
