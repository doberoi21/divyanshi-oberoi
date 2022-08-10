import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const NavbarF = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <nav className="navbar  sticky-top">
        <Link to="/" >
          <span className="logo-head"> Divyanshi Oberoi </span>
        </Link>
        <ul
          className={isMobile ? "nav-links-mobile" : " navlinks"}
          onClick={() => setIsMobile(true)}
        >
          <Link to="/" className="home hovEff">
            Home
          </Link>
          <Link to="/about" className="about hovEff">
            About
          </Link>
          <Link to="/projects" className="projects hovEff">
            Projects
          </Link>
          <Link to="/experiences" className="projects hovEff">
            Experiences
          </Link>
          <Link to="/contact-me" className="resume hovEff">
            Contact
          </Link>
        </ul>
        <button
          className="mobile-menu-option"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineMenuUnfold size={20} />
          ) : (
            <AiOutlineMenuFold size={20} />
          )}
        </button>
      </nav>
    </>
  );
};

export default NavbarF;
