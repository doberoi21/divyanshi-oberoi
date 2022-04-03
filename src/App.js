import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarF from "./Navbar/NavbarF";
import Home from "./PortfolioComponents/Home/Home";
import About from "./PortfolioComponents/Aboutme/About";
import Project from "./PortfolioComponents/Projects/Project";
import Resume from "./PortfolioComponents/Resume/Resume";
import Contact from "./PortfolioComponents/Contact-Us/Contact";
import { ProjectList } from "./PortfolioComponents/Projects/ProjectList";
import Experience from "./PortfolioComponents/Experience/Experience";
import { ExperienceList } from "./PortfolioComponents/Experience/ExperienceList";
import Footer from "./PortfolioComponents/Footer/Footer";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavbarF />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={<Project projects={ProjectList} />}
          />
          <Route
            path="/experiences"
            element={<Experience experiences={ExperienceList} />}
          />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
