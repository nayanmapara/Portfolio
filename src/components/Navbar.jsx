import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { cyan } from '@mui/material/colors';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= 80) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', changeNavBg);
    return () => window.removeEventListener('scroll', changeNavBg);
  }, []);

  return (
    <nav className="fixed w-full z-20 top-4 flex justify-center">
      <div 
        className={`${
          navBg ? 'bg-primary/80' : 'bg-primary/50'
        } transition-all duration-300 backdrop-blur-lg shadow-lg flex justify-between items-center w-[90%] sm:w-[85%] md:w-[70%] py-3 px-6 rounded-full`}
        style={{
          border: '1px solid cyan', // Solid cyan border
          background: navBg ? '#000' : 'rgba(0, 0, 0, 0.5)', // Adjust background if needed
        }}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-white text-lg font-bold">Nayan Mapara</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-md font-medium cursor-pointer transition-all duration-200 ${
                active === link.title ? "text-cyan-300" : "text-secondary"
              } hover:text-cyan-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button
          onClick={() => window.open('/Nayan-Mapara-Resume.pdf', '_blank')}
          className="hidden sm:block bg-cyan-300 text-primary font-semibold py-2 px-4 rounded-full hover:bg-cyan-400 transition-all duration-300 focus:outline-none"
        >
          Resume
        </button>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} 
          />
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`${toggle ? 'flex' : 'hidden'} p-10 absolute top-16 left-1/2 transform -translate-x-1/2 mx-4 my-4 z-10 rounded-lg bg-black/90 backdrop-blur-md`} 
          style={{ borderRadius: '10px' }}
        >
          <ul className="flex flex-col gap-4 align">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-[20px] text-center font-medium cursor-pointer ${
                  active === link.title ? "text-cyan-300" : "text-white"
                } hover:text-cyan-300 transition-all duration-200`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
