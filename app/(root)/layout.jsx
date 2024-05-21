"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        window.scrollTo(0, 0);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* HubSpot Embed Code */}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/43771754.js"
      ></script>
      
      {/* Main Content */}
      {isOpen ? null : children}
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Layout;
