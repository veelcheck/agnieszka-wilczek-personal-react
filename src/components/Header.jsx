import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const customClassName = ({ isActive, customStyles }) =>
  `${isActive ? customStyles.active : customStyles.inactive}`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleWindowResize = () => {
      closeDropdown();
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav role="navigation" className="text-2xl py-3 font-amatic sticky md:static top-0 left-0 lg:h-40 md:text-4xl lg:text-6xl md:flex md:justify-between md:items-center md:px-2 border-b z-10 bg-[#001524]">
      <div className="pl-3">
        <NavLink to="/" aria-label="Home" className="hover:bg-nice-green px-2 pb-1 text-4xl lg:text-6xl rounded-md">
          HI!
        </NavLink>
      </div>
      <div aria-hidden={!isOpen} className={`${isOpen ? "flex flex-col items-center gap-4" : "hidden md:flex md:gap-4"}`}>
      <NavLink
          to="/portfolio"
          className={customClassName({
            isActive: false, // Add logic for checking if it's active
            customStyles: {
              active: "bg-nice-nude px-2 pb-1 rounded-md text-nice-green",
              inactive: "hover:bg-nice-green px-2 pb-1 rounded-md",
            },
          })}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/skills"
          className={customClassName({
            isActive: false, // Add logic for checking if it's active
            customStyles: {
              active: "bg-nice-nude px-2 pb-1 rounded-md text-nice-green",
              inactive: "hover:bg-nice-green px-2 pb-1 rounded-md",
            },
          })}
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={customClassName({
            isActive: false, // Add logic for checking if it's active
            customStyles: {
              active: "bg-nice-nude px-2 pb-1 rounded-md text-nice-green",
              inactive: "hover:bg-nice-green px-2 pb-1 rounded-md",
            },
          })}
        >
          Contact
        </NavLink>
      </div>
      <Hamburger isOpen={isOpen} toggleNavbar={toggleNavbar} aria-controls="navigation-menu" aria-expanded={isOpen}/>
    </nav>
  );
}

export default Header;
