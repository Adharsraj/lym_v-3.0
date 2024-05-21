"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { gsap } from "gsap";

const Navbar = ({ isOpen, toggleMenu }) => {
  const navRef = useRef(null);
  const [tl] = useState(gsap.timeline({ paused: true }));
  const currentPath = usePathname();

  useEffect(() => {
    if (isOpen) {
      tl.clear().fromTo(
        navRef.current.querySelectorAll(".nav-item"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
        }
      ).play();
    }
  }, [isOpen, tl]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/works", label: "Works" },
  ];

  return (
    <nav ref={navRef} className="navbar fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="bg-transparent flex justify-between items-center p-4">
        <Link href="/">
          <img
            id="logo"
            className="lg:w-[106px] lg:h-[80px] md:w-16 w-24 logo"
            src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Companylogo_lok0s3_fgcea5.svg"
            alt="companylogo"
          />
        </Link>
        <div
          onClick={toggleMenu}
          className="w-20 h-12 cursor-pointer flex align-middle items-center py-2 px-2 menu-toggle"
        >
          {isOpen ? (
            <span className="close-icon text-white text-4xl">&#x2715;</span>
          ) : (
            <>
              <span className="one px-2 mb-2 w-12 bg-gray-500"></span>
              <span className="two w-10 bg-gray-500"></span>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-black w-full h-full overflow-hidden z-50">
          <div className="flex justify-between p-4">
            <Link href="/">
              <img
                id="logo"
                className="lg:w-[106px] lg:h-[80px] md:w-16 w-24 logo"
                src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Companylogo_lok0s3_fgcea5.svg"
                alt="companylogo"
              />
            </Link>
            <div
              onClick={toggleMenu}
              className="w-20 h-12 cursor-pointer flex align-middle items-center py-2 px-2 menu-toggle"
            >
              <span className="close-icon text-gray-500 text-5xl mt-4">&#x2715;</span>
            </div>
          </div>
          <div className="flex justify-around h-full">
            <div className="flex flex-col mt-3">
              {navItems.map(({ href, label }) => {
                if (currentPath !== href) {
                  return (
                    <li key={href} className="mb-4">
                      <Link href={href}>
                        <span onClick={toggleMenu} className="block text-white text-4xl nav-item">{label}</span>
                      </Link>
                    </li>
                  );
                }
                return null;
              })}
            </div>
            <div className="md:mt-[150px]">
              <li className="mb-5">
                <Link href="/privacypolicy">
                  <span onClick={toggleMenu} className="block text-[#646060] text-xl hover:text-white nav-item">Privacy & Legal</span>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/termsofuse">
                  <span onClick={toggleMenu} className="block text-[#646060] text-xl hover:text-white nav-item">Terms & Conditions</span>
                </Link>
              </li>
              <li className="flex justify-center">
                <span
                  onClick={() => window.open("https://www.facebook.com/lymdatalabs/", "_blank")}
                  className="cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                >
                  <SlSocialFacebook size={28} />
                </span>
                <span
                  onClick={() => window.open("https://twitter.com/lymdata", "_blank")}
                  className="cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                >
                  <SlSocialTwitter size={28} />
                </span>
                <span
                  onClick={() => window.open("https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==", "_blank")}
                  className="cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                >
                  <SlSocialInstagram size={28} />
                </span>
                <span
                  onClick={() => window.open("https://www.linkedin.com/company/lymdata-labs", "_blank")}
                  className="cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                >
                  <SlSocialLinkedin size={28} />
                </span>
              </li>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
