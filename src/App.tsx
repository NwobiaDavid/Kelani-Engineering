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
import { sub_one, sub_three, sub_two } from "./sections/subsidiaryPages/subConstants";
import { One } from "./sections/subsidiaryPages/subsidiaryComponents/One";
import Footer from "./sections/Footer";


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
          <Route path="/subsidiary-one" element={<SubsidiaryPageOne sub={sub_one} />} />
          <Route path="/subsidiary-two" element={<SubsidiaryPageOne sub={sub_two} />} />
          <Route path="/subsidiary-three" element={<SubsidiaryPageOne sub={sub_three} />} />
          <Route path="/one" element={<Footer />} />
          {/* <Route path="/parallax" element={<ParallaxCards />} /> */}
        </Routes>
      </AnimatePresence>

    </>
  );
}

export default App;
