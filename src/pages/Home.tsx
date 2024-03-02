import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FloatingNav from "../components/FloatingNav";
import useScreenSize from "../hooks/useScreenSize";
import useScrollPosition from "../hooks/useScrollPosition";
import AboutCompany from "../sections/AboutCompany";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import SubsidiaryShowcase from "../sections/SubsidiaryShowcase";
import Lenis from "@studio-freight/lenis/types";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SpotlightCard from "../components/SpotlightCard";

const Home = ({ lenis }: { lenis: Lenis }) => {
  const { y: scrollY } = useScrollPosition();
  const { height } = useScreenSize();
  const [scrollTops, setScrollTops] = useState({
    industrials: 0,
    power: 0,
    consulting: 0,
  });

  const engineeringSpotlightRef = useRef<HTMLDivElement>(null);
  const powerSpotlightRef = useRef<HTMLDivElement>(null);
  const consultingSpotlightRef = useRef<HTMLDivElement>(null);

  const [engineeringLoading, setEngineeringLoading] = useState(false);
  const [engineeringData, setEngineeringData] = useState([]);
  const fetchEngineeringSpotlight = async () => {
    const options = {
      method: "GET",
      url: "https://app.nocodb.com/api/v1/db/data/noco/p9n8mov63j4aa98/mbzvs5xvoj4qobo/views/vwehcatlb9l4lsid",
      params: { offset: "0", limit: "25", where: "" },
      headers: {
        "xc-token": "gbtt4j9PadEtKXdYLUJrtc1vvdJz7LptQqOE1z9T",
      },
    };

    try {
      setEngineeringLoading(true);
      const response = await axios.request(options);
      setEngineeringData(response.data.list);
    } catch (err) {
      console.log(err);
    } finally {
      setEngineeringLoading(false);
    }
  };
  const { scrollYProgress: engineeringScrollYProgress } = useScroll({
    target: engineeringSpotlightRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: powerScrollYProgress } = useScroll({
    target: powerSpotlightRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: consultingScrollYProgress } = useScroll({
    target: consultingSpotlightRef,
    offset: ["start end", "end start"],
  });

  const engineeringImageScale = useTransform(
    engineeringScrollYProgress,
    [0, 1],
    [1, 1.5]
  );
  const aboutUsY = useTransform(
    engineeringScrollYProgress,
    [0, 1],
    [1, engineeringSpotlightRef?.current?.offsetHeight ?? 0]
  );
  const aboutUsOpacity = useTransform(
    engineeringScrollYProgress,
    [0, 1],
    [1, 0]
  );
  // const engineeringScale = useTransform(
  //   engineeringScrollYProgress,
  //   [0, 0.1],
  //   [0.94, 1]
  // );
  const engineeringY = useTransform(
    powerScrollYProgress,
    [0, 1],
    [0, powerSpotlightRef?.current?.offsetHeight ?? 0]
  );
  const engineeringOpacity = useTransform(powerScrollYProgress, [0, 1], [1, 0]);
  const powerImageScale = useTransform(powerScrollYProgress, [0, 1], [1, 1.5]);
  const powerY = useTransform(
    consultingScrollYProgress,
    [0, 1],
    [0, consultingSpotlightRef?.current?.offsetHeight ?? 0]
  );
  const powerOpacity = useTransform(consultingScrollYProgress, [0, 1], [1, 0]);
  useEffect(() => {
    fetchEngineeringSpotlight();
  }, []);
  const talentImageScale = useTransform(
    consultingScrollYProgress,
    [0, 1],
    [1, 1.5]
  );
  const { width } = useScreenSize();
  const SlidePrevButton = ({ themeColor }: { themeColor: string }) => {
    const swiper = useSwiper();
    return (
      <motion.div
        onClick={() => {
          swiper.slidePrev();
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
        style={{ backgroundColor: themeColor }}
        className="bg-[#E98B49] w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.2925 10.7076L9.2925 19.7076C9.48014 19.8952 9.73464 20.0006 10 20.0006C10.2654 20.0006 10.5199 19.8952 10.7075 19.7076C10.8951 19.5199 11.0006 19.2654 11.0006 19.0001C11.0006 18.7347 10.8951 18.4802 10.7075 18.2926L3.41375 11.0001H23C23.2652 11.0001 23.5196 10.8947 23.7071 10.7072C23.8946 10.5196 24 10.2653 24 10.0001C24 9.73485 23.8946 9.4805 23.7071 9.29296C23.5196 9.10542 23.2652 9.00007 23 9.00007H3.41375L10.7075 1.70757C10.8951 1.51993 11.0006 1.26543 11.0006 1.00007C11.0006 0.734704 10.8951 0.480208 10.7075 0.292568C10.5199 0.104927 10.2654 -0.000488281 10 -0.000488281C9.73464 -0.000488281 9.48014 0.104927 9.2925 0.292568L0.2925 9.29257C0.199524 9.38544 0.125763 9.49573 0.0754395 9.61713C0.025116 9.73853 -0.000785828 9.86865 -0.000785828 10.0001C-0.000785828 10.1315 0.025116 10.2616 0.0754395 10.383C0.125763 10.5044 0.199524 10.6147 0.2925 10.7076Z"
            fill="white"
          />
        </svg>
      </motion.div>
    );
  };
  const SlideNextButton = ({ themeColor }: { themeColor: string }) => {
    const swiper = useSwiper();
    return (
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        onClick={() => {
          swiper.slideNext();
        }}
        initial={{ rotateZ: 180 }}
        whileTap={{ scale: 0.98 }}
        style={{ backgroundColor: themeColor }}
        className=" w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.2925 10.7076L9.2925 19.7076C9.48014 19.8952 9.73464 20.0006 10 20.0006C10.2654 20.0006 10.5199 19.8952 10.7075 19.7076C10.8951 19.5199 11.0006 19.2654 11.0006 19.0001C11.0006 18.7347 10.8951 18.4802 10.7075 18.2926L3.41375 11.0001H23C23.2652 11.0001 23.5196 10.8947 23.7071 10.7072C23.8946 10.5196 24 10.2653 24 10.0001C24 9.73485 23.8946 9.4805 23.7071 9.29296C23.5196 9.10542 23.2652 9.00007 23 9.00007H3.41375L10.7075 1.70757C10.8951 1.51993 11.0006 1.26543 11.0006 1.00007C11.0006 0.734704 10.8951 0.480208 10.7075 0.292568C10.5199 0.104927 10.2654 -0.000488281 10 -0.000488281C9.73464 -0.000488281 9.48014 0.104927 9.2925 0.292568L0.2925 9.29257C0.199524 9.38544 0.125763 9.49573 0.0754395 9.61713C0.025116 9.73853 -0.000785828 9.86865 -0.000785828 10.0001C-0.000785828 10.1315 0.025116 10.2616 0.0754395 10.383C0.125763 10.5044 0.199524 10.6147 0.2925 10.7076Z"
            fill="white"
          />
        </svg>
      </motion.div>
    );
  };
  return (
    <>
      <motion.main
        exit={{ opacity: 0 }}
        className="bg-[#FEFEFE] shadow-lg z-[2] relative"
      >
        <Hero lenis={lenis} />
        <motion.div style={{ y: aboutUsY }} className="">
          <AboutCompany />
        </motion.div>
        <motion.div ref={engineeringSpotlightRef} style={{ y: engineeringY }}>
          <SubsidiaryShowcase
            type="engineering"
            spotlightData={engineeringData as unknown as Record<string, string>}
            leftImageScale={engineeringImageScale}
            title="Kelani Engineering"
            description="Kelani Engineering procures, facilitates and installs
            state-of-the-art machinery solutions for optimal
            performance to propel your productivity to new heights.
            Let’s engineer your path to success."
            sectionImage="/assets/images/engineering-section-image.png"
            services={[
              { title: "Sustainable Plastic Transformation" },
              { title: "Machinery & Expert Advisory Service" },
              {
                title: "Turnkey Projects Mastery",
              },
              { title: "Production and Factory Management Operations" },
            ]}
          />
        </motion.div>
        <motion.div style={{ y: powerY }} ref={powerSpotlightRef}>
          <SubsidiaryShowcase
            type="power"
            leftImageScale={powerImageScale}
            title="Kelani Power"
            description="Kelani Power enables industries and businesses with access to efficient energy solutions, cutting-edge financing options, advanced technology, and groundbreaking research"
            sectionImage="/assets/images/power-image.png"
            services={[
              { title: "Inclusive Power Financing to Power Progress" },
              { title: "Seamless Bulk Energy Trading for Sustainable Power" },
              {
                title:
                  "Proactive Collections Risk Management  for Seamless Growth",
              },
              { title: "Research Excellence in Renewable Energy Innovation" },
            ]}
          />
        </motion.div>
        <div ref={consultingSpotlightRef}>
          <SubsidiaryShowcase
            type="talent"
            leftImageScale={powerImageScale}
            title="Kelani Talent"
            description="Kelani Consulting and Talent Management is a premier engineering and industrial HR and training firm specializing in the manufacturing and engineering sectors. Our mastery entails the entire value chain from raw material extraction to manufacturing and distribution.
            With talent and experience, what cannot succeed?"
            sectionImage="/assets/images/consulting-image.png"
            services={[
              { title: "Tailored HRMS Solutions" },
              { title: "Strategic Outsourcing Solutions" },
              {
                title: "Talent Management Excellence",
              },
              { title: "Consulting Mastery" },
            ]}
          />
        </div>
        {/* <motion.div
          style={{
            // y: engineeringY,
            // opacity: engineeringOpacity,
            // scale: engineeringScale
          }}
          className="bg-[#fefefe] relative pt-[40px] rounded-t-[40px] pb-[20px] shadow-[0_0px_20px_2px_rgba(0,0,0,0.1)]"
          ref={engineeringSpotlightRef}
        >
          <SubsidiaryShowcase
            bgImage="/assets/images/kelani-industrials.jpeg"
            title="Kelani Engineering"
            description={
              "Unlocking the potential of precision engineering, our expertise propels your productivity to new heights. We procure, facilitate and install state-of-the-art machinery solutions for optimal performance. Let’s engineer your path to excellence."
            }
            setScrollTops={setScrollTops}
            type="industrials"
            spotlightLoading={engineeringLoading}
            spotlightData={engineeringData as unknown as Record<string, string>}
            services={[
              {
                title: "Cutting-Edge Machinery and Expert Advisory Services",
                paragraphs: [
                  "Specializing in high-end machinery and tools procurement, we deliver not just products but an unparalleled advisory experience. Our accessibility matches our efficiency, and your orders are merely a click away, bringing innovation to your fingertips.",
                ],
              },
              {
                title:
                  "Pioneering Plastic Transformation for a Sustainable Tomorrow",
                paragraphs: [
                  "With exceptional expertise, we unveil transformative plastic recycling and repurposing projects, crafting plastics into diesel and other petrochemical marvels. In doing so, we ignite a progressive revolution, reshaping the very fabric of the industry.",
                ],
              },
              {
                title: "Turnkey Projects Mastery",
                paragraphs: [
                  "Dreaming of starting a factory or manufacturing line? Look no further. We are your partner in turning dreams into reality. Our successful turnkey projects, from paper recycling to PET crushing and more, stand as a testament to our commitment. With a 2-year guarantee, inclusive services, and expert consulting, we not only build factories but also empower your journey to manufacturing excellence.",
                ],
              },
              {
                title:
                  "Production and Factory Management Operations to Unleash Success",
                paragraphs: [
                  "With cutting-edge facility consulting and production management services, we empower new and existing companies to soar to the highest levels of efficiency. Join us on the path to transformative success.",
                ],
              },
            ]}
          />
        </motion.div> */}
        {/* <motion.div
          // style={{ y: powerY, opacity: powerOpacity }}
          ref={powerSpotlightRef}
          className="bg-[#fefefe] relative  pt-[40px] rounded-t-[40px] shadow-[0_0px_20px_2px_rgba(0,0,0,0.1)]"
        >
          <SubsidiaryShowcase
            title="Kelani Power"
            bgImage="/assets/images/kelani-power.jpeg"
            description="Kelani Power enables industries and businesses with unrivaled access to efficient energy solutions, leveraging cutting-edge financing options, advanced technology and groundbreaking research. With our power, you’re just unstoppable!"
            setScrollTops={setScrollTops}
            type="power"
            services={[
              {
                title: "Inclusive Financing to Power Progress",
                paragraphs: [
                  "Fuel your business growth with our comprehensive credit and financing options. Collaborate seamlessly with approved partners in energy generation utilities, while we expertly manage foreign exchange flows for uninterrupted operations.",
                ],
              },
              {
                title: "Seamless Bulk Energy Trading for Sustainable Power",
                paragraphs: [
                  "We specialize in large-scale energy trading, linking end users with top-tier suppliers from private and public generation plants. Ready to elevate your energy game? Reach out, and let's discuss maximizing the impact of your green energy generation. Your power, our passion!",
                ],
              },
              {
                title:
                  "Proactive Collections Risk Management for Seamless Growth",
                paragraphs: [
                  "In the face of defaults or market shifts, we provide vital support, financing payment deficits, and facilitating the recovery of energy infrastructure. Partner with us to safeguard your operations and navigate challenges effectively.",
                ],
              },
              {
                title: "Research Excellence in Renewable Energy Innovation",
                paragraphs: [
                  "At the forefront of renewable innovation, we're committed to exploring cutting-edge methods and advanced transmission technologies for a cost-effective, sustainable energy supply. Join us in pushing boundaries for a greener, more efficient energy landscape.",
                ],
              },
            ]}
          />
        </motion.div> */}
        {/* <div
          className="bg-[#fefefe] relative  pt-[40px] rounded-t-[40px] shadow-[0_0px_20px_2px_rgba(0,0,0,0.1)]"
          ref={consultingSpotlightRef}
        >
          <SubsidiaryShowcase
            bgImage="/assets/images/kelani-consulting.jpeg"
            title="Kelani Consulting"
            description="Kelani Consulting and Talent Management is a premier engineering and industrial HR and training firm specializing in the manufacturing and engineering sectors. Our mastery entails the entire value chain from raw material extraction to manufacturing and distribution.
            With talent and experience, what cannot succeed?"
            services={[
              {
                title:
                  "Tailored HRMS and Talent Management Solutions to Elevate Your Workforce",
                paragraphs: [
                  "Unlock the full potential of your team with our comprehensive HR and talent management services, designed specifically for the unique needs of industries, factories, and engineering enterprises. Streamline your processes, enhance employee engagement, and foster growth with our specialized solutions",
                ],
              },
              {
                title: "Connecting Talent to Opportunity",
                paragraphs: [
                  "We specialize in bridging the gap between talent and opportunity, with a dedicated focus on outsourcing engineering design, industrial, and technical research tasks. Elevate your projects with our strategic outsourcing solutions.",
                ],
              },
            ]}
            setScrollTops={setScrollTops}
            type="consulting"
          />
        </div> */}
      </motion.main>
      <Footer
        contactUsUrl={
          "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
        }
      />
      <AnimatePresence>
        {scrollY > height * 0.5 &&
          scrollY < document.body.scrollHeight - window.innerHeight * 1.5 && (
            <FloatingNav
              lenis={lenis}
              scrollTops={scrollTops}
              activeNav={
                scrollY > document.body.scrollHeight - window.innerHeight * 2
                  ? ""
                  : scrollY > scrollTops.consulting
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
