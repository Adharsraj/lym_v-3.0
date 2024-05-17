import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

const SmoothScroll = ({ children }) => {
  return (
    <div className="smooth-scroll">
      <nav className="fixed top-0 w-full bg-gray-800 text-white p-4">
        <div className="flex justify-center space-x-6">
          <ScrollLink to="/" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="/about" spy={true} smooth={true} duration={500} className="cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="/services" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Services
          </ScrollLink>
          <ScrollLink to="/contact" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Contact
          </ScrollLink>
          <ScrollLink to="works" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Works
          </ScrollLink>
          <ScrollLink to="blogs" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Blogs
          </ScrollLink>
          <ScrollLink to="careers" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Careers
          </ScrollLink>
        </div>
      </nav>
      <div className="scrollable-container">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
