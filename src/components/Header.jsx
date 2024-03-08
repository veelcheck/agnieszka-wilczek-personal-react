import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

// const customClassName = ({ isActive, customStyles }) =>
//   `${isActive ? customStyles.active : customStyles.inactive}`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleWindowResize = () => {
      closeDropdown();
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav
      role='navigation'
      className='text-2xl py-3 font-amatic sticky md:static top-0 left-0 lg:h-40 md:text-4xl lg:text-6xl md:flex md:justify-between md:items-center md:px-2 border-b z-10 bg-bg-colour'>
      <div className='pl-3'>
        <NavLink
          to='/'
          aria-label='Home'
          className='onHover text-4xl lg:text-6xl'>
          HI!
        </NavLink>
      </div>
      <div
        aria-hidden={!isOpen}
        className={`${isOpen ? 'flex flex-col items-center gap-4' : 'hidden md:flex md:gap-4'}`}>
        <NavLink
          to='/portfolio'
          className='onActive onHover'>
          Portfolio
        </NavLink>
        <NavLink
          to='/skills'
          className='onActive onHover'>
          Skills
        </NavLink>
        <NavLink
          to='/contact'
          className='onActive onHover'>
          Contact
        </NavLink>
      </div>
      <Hamburger
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        aria-controls='navigation-menu'
        aria-expanded={isOpen}
      />
    </nav>
  );
}

export default Header;
