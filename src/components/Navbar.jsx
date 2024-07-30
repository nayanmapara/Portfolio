import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, socialLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-05 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
        </Link>

        <div className="sm:flex items-center gap-4">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.open('https://resume.nayanm.me', '_blank')}
            className="hidden sm:block border-2 border-cyan-300 text-secondary font-medium py-2 px-4 rounded-md hover:bg-tertiary hover:text-cyan-100 hover:border-cyan-100 focus:outline-none"
          >
            Resume
          </button>

          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer sm:hidden" 
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2
            min-w-[240px] z-10 rounded-xl border-2 border-cyan-500`}>
              
              <div className="flex flex-col">
                <div>
                  <ul className="list-none flex items-start flex-col gap-4">
                    {navLinks.map((link) => (
                      <li
                        key={link.id}
                        className={`${
                          active === link.title ? "text-white" : "text-secondary"
                        } font-poppins text-[16px] font-medium cursor-pointer`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(link.title);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              
                <div className="mt-5">
                  <ul className="list-none flex items-start flex-row gap-3">
                    {socialLinks.map((socialLink, index) => (
                      <React.Fragment key={socialLink.name}>
                        <li className="flex items-center">
                          <a href={socialLink.url} className="text-white hover:text-secondary">
                            <img src={socialLink.icon} alt={socialLink.name} className="w-6 h-6" />
                          </a>
                        </li>
                        {index < socialLinks.length - 1 && (
                          <li className="text-white">|</li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
