import { useEffect, useRef, useState } from "react";
import FloatingNav from "../components/FloatingNav";
import AboutCompany from "../sections/AboutCompany";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import SubsidiaryShowcase from "../sections/SubsidiaryShowcase";
import useScrollPosition from "../hooks/useScrollPosition";
import useScreenSize from "../hooks/useScreenSize";
import { AnimatePresence } from "framer-motion";
import ParallaxCards from "../sections/subsidiaryPages/subsidiaryComponents/ParallexCards";

const Home = ({ lenis }) => {
  const { y: scrollY } = useScrollPosition();
  const { height } = useScreenSize();
  const [scrollTops, setScrollTops] = useState({
    industrials: 0,
    power: 0,
    consulting: 0,
  });

  return (
    <>
      <main className="bg-[#FEFEFE] shadow-lg z-[2] relative">
        <Hero lenis={lenis} />
        <AboutCompany />
        <SubsidiaryShowcase setScrollTops={setScrollTops} type="industrials" />
        <SubsidiaryShowcase setScrollTops={setScrollTops} type="power" />
        <SubsidiaryShowcase setScrollTops={setScrollTops} type="consulting" />
      </main>
      <Footer />
      <AnimatePresence>
        {scrollY > height * 0.5 && (
          <FloatingNav
            lenis={lenis}
            scrollTops={scrollTops}
            activeNav={
              scrollY > scrollTops.consulting
                ? "consulting"
                : scrollY > scrollTops.power
                ? "power"
                : scrollY > scrollTops.industrials
                ? "industrials"
                : ""
            }
          />
        )}
      </AnimatePresence>
      {/* <ParallaxCards /> */}
    </>
  );
};

export default Home;
