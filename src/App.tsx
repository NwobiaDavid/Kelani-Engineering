import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AboutCompany from './sections/AboutCompany'
// import Footer from './sections/Footer'
// import SubsidiaryShowcase from './sections/SubsidiaryShowcase'
import SubsidiaryPageOne from './sections/subsidiaryPages/SubsidiaryPageOne';

function App() {

  return (
    <>
      {/* <AboutCompany   /> */}
      {/* <Footer /> */}
      {/* <SubsidiaryShowcase /> */}

      <Router>
      <Routes>
        <Route path="/"  element={<SubsidiaryPageOne/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
