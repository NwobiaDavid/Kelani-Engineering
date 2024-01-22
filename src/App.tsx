import Lenis from "@studio-freight/lenis";
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import "./App.css";
// import AboutCompany from './sections/AboutCompany'
// import Footer from './sections/Footer'
// import SubsidiaryShowcase from './sections/SubsidiaryShowcase'
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import SubsidiaryPageOne from "./sections/subsidiaryPages/SubsidiaryPageOne";
import ParallaxCards from "./sections/subsidiaryPages/subsidiaryComponents/ParallexCards";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home lenis={lenis} />} />
          <Route path="/subsidiary-one" element={<SubsidiaryPageOne />} />
          <Route path="/parallax" element={<ParallaxCards />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
