import Lenis from "@studio-freight/lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import AboutCompany from './sections/AboutCompany'
// import Footer from './sections/Footer'
// import SubsidiaryShowcase from './sections/SubsidiaryShowcase'
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import SubsidiaryPageOne from "./sections/subsidiaryPages/SubsidiaryPageOne";
import {
  sub_one,
  sub_three,
  sub_two,
} from "./sections/subsidiaryPages/subConstants";
import ProductPage from "./sections/subsidiaryPages/ProductPage";
// import { One } from "./sections/subsidiaryPages/subsidiaryComponents/One";
// import One from "./components/One";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const location = useLocation();

  return (
    <div className="overflow-y-clip">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home lenis={lenis} />} />
          <Route
            path="/consulting"
            element={
              <SubsidiaryPageOne
                cta_form="consulting"
                title="Kelani Talent"
                lenis={lenis}
                sub={sub_one}
              />
            }
          />
          <Route
            path="/engineering"
            element={
              <SubsidiaryPageOne
                cta_form="engineering"
                title="Kelani Engineering"
                lenis={lenis}
                sub={sub_two}
              />
            }
          />
          <Route
            path="/power"
            element={
              <SubsidiaryPageOne
                cta_form="power"
                title="Kelani Power"
                lenis={lenis}
                sub={sub_three}
              />
            }
          />

          <Route path="/engineering/products"
            element={
              <ProductPage
                cta_form="engineering"
                title="Kelani Talent"
                lenis={lenis}
                sub={sub_three}
              />
            }
          />
          {/* <Route path="/parallax" element={<ParallaxCards />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
