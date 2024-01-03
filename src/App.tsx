import "./App.css";
import NavBar from "./components/NavBar";
import AboutCompany from "./sections/AboutCompany";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import SubsidiaryShowcase from "./sections/SubsidiaryShowcase";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AboutCompany from './sections/AboutCompany'
// import Footer from './sections/Footer'
// import SubsidiaryShowcase from './sections/SubsidiaryShowcase'
import SubsidiaryPageOne from "./sections/subsidiaryPages/SubsidiaryPageOne";
import ParallaxCards from "./sections/subsidiaryPages/subsidiaryComponents/ParallexCards";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

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
          <Route path="/" element={<Hero />} />
        {/* <Route path="/"  element={<SubsidiaryPageOne/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
