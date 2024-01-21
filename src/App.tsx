import Lenis from "@studio-freight/lenis";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import AboutCompany from './sections/AboutCompany'
// import Footer from './sections/Footer'
// import SubsidiaryShowcase from './sections/SubsidiaryShowcase'
import Home from "./pages/Home";
import SubsidiaryPageOne from "./sections/subsidiaryPages/SubsidiaryPageOne";
import ParallaxCards from "./sections/subsidiaryPages/subsidiaryComponents/ParallexCards";
import { sub_one, sub_two } from "./sections/subsidiaryPages/subConstants";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      {/* <NavBar /> */}
      {/* <AboutCompany   /> */}
      {/* <Footer /> */}
      {/* <SubsidiaryShowcase /> */}

      <Router>
        <Routes>

          <Route path="/" element={<Home lenis={lenis} />} />
          <Route path="/subsidiary-one" element={<SubsidiaryPageOne sub={sub_one} />} />
          <Route path="/subsidiary-two" element={<SubsidiaryPageOne sub={sub_two} />} />
          <Route path="/parallax" element={<ParallaxCards />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
