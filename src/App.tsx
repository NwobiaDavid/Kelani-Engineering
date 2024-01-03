import "./App.css";
import NavBar from "./components/NavBar";
import AboutCompany from "./sections/AboutCompany";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import SubsidiaryShowcase from "./sections/SubsidiaryShowcase";
import Lenis from '@studio-freight/lenis'

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
      <Hero />
      <AboutCompany />
      <SubsidiaryShowcase />
      <SubsidiaryShowcase />
      <SubsidiaryShowcase />
      <Footer />
      {/* <NavBar /> */}
    </>
  );
}

export default App;
