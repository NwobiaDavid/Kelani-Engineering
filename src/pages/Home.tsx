import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingNav from "../components/FloatingNav";
import useScreenSize from "../hooks/useScreenSize";
import useScrollPosition from "../hooks/useScrollPosition";
import AboutCompany from "../sections/AboutCompany";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import SubsidiaryShowcase from "../sections/SubsidiaryShowcase";
import Lenis from "@studio-freight/lenis/types";
import axios from "axios";

const Home = ({ lenis }: { lenis: Lenis }) => {
  const { y: scrollY } = useScrollPosition();
  const { height } = useScreenSize();
  const [scrollTops, setScrollTops] = useState({
    industrials: 0,
    power: 0,
    consulting: 0,
  });
  const [engineeringLoading, setEngineeringLoading] = useState(false);
  const [engineeringData, setEngineeringData] = useState([]);
  const fetchEngineeringSpotlight = async () => {
    const options = {
      method: "GET",
      url: "https://app.nocodb.com/api/v1/db/data/noco/p9n8mov63j4aa98/mbzvs5xvoj4qobo/views/vwehcatlb9l4lsid",
      params: { offset: "0", limit: "25", where: "" },
      headers: {
        "xc-auth":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbGFuaWVuZ2luZWVyaW5nc2VydmljZXNAZ21haWwuY29tIiwiZGlzcGxheV9uYW1lIjpudWxsLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3lwdG1lcWk5eHcwa2dhIiwicm9sZXMiOiJvcmctbGV2ZWwtdmlld2VyIiwidG9rZW5fdmVyc2lvbiI6Ijg5NjJhZDI0YWUwZTYzNmJiYjY1ZGE4NjhlNzZmOGVjZjI3M2VkNjhiY2MyMjFjOTY1NTFmNDkxMGM2ZGRmNjBiNzY2ZjIxODhhMmU5MmM5IiwiaWF0IjoxNzA1OTgzNTA4LCJleHAiOjE3MDYwMTk1MDh9.iqPy5ZHY0-E3PwMghX6wme-ZYfU3McMEW7xbGyPBpYo",
      },
    };

    try {
      setEngineeringLoading(true);
      const response = await axios.request(options);
      setEngineeringData(response.data.list);
      console.log(response.data);
      console.log(engineeringData);
    } catch (err) {
      console.log(err);
    } finally {
      setEngineeringLoading(false);
    }
  };
  useEffect(() => {
    fetchEngineeringSpotlight();
  }, []);
  return (
    <>
      <motion.main
        exit={{ opacity: 0 }}
        className="bg-[#FEFEFE] shadow-lg z-[2] relative"
      >
        <Hero lenis={lenis} />
        <AboutCompany />
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
      </motion.main>
      <Footer />
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
