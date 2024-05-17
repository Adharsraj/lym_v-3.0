"use client"
import React, { useEffect, useRef, useState } from "react";
import { TimelineMax, Expo } from "gsap";
import Link from "next/link";
import gsap from "gsap";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const NavbarNew = React.memo(({ onMenuClose }) => {
  const navigationItems = [
    { path: "/", label: "Home" },
    // { path: "/about", label: "About" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    // { path: "/works", label: "Works" },
    { path: "/blog", label: "Blogs" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
    
  ];

  const menuRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [menuopen, setMenuopen] = useState(false);


  useEffect(() => {
    const t1 = new TimelineMax({ paused: true });
    gsap.from("#logo,#menu", {
      y: -100,
      duration: 0.5,
      delay: 0.5,
      scrub: true,
      pin: true,
      // pinType: isTouch ? "fixed" : "transform",
      opacity: 0,
      stagger: 0.2,
    });

    t1.to(oneRef.current, 0.05, {
      y: 6,
      rotation: 45,
      ease: Expo.easeInOut,
    });
    t1.to(
      twoRef.current,
      0.05,
      {
        y: -6,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.05,
      },
      "-=0.05"
    );

    t1.to(
      menuRef.current,
      0.15,
      {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -0.15,
      },
      "-=0.05"
    );

    t1.staggerFrom(
      ".menu ul li",
      0.15,
      { y: -200, opacity: 0, ease: Expo.easeOut },
      0.03
    );

    t1.reverse();

    const toggleAnimation = () => {
      t1.reversed(!t1.reversed());
    };

    const handleLinkClick = () => {
      t1.reversed(!t1.reversed());
    };

    document
      .querySelector(".toggle-btn")
      .addEventListener("click", toggleAnimation);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const menu = () => {
    setMenuopen(!menuopen);
  
    // Scroll down by 100 pixels relative to the current scroll position when closing the menu
    if (!menuopen) {
      setTimeout(() => {
        const currentScrollPosition = window.scrollY;
        const targetScrollPosition = currentScrollPosition + 0;
        window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
        onMenuClose(); // Call the function to trigger image appearance

      }, 800); // 1000 milliseconds (1 second)
    }
  };
  

  const navbarBgColor = !menuopen && scrolling ? "bg-transparent" : "bg-transparent";

  const handleClose = () => {
    localStorage.clear();
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumWidth, setIsMediumWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerHeight <= 615);
      setIsMediumWidth(window.innerWidth >= 1200 && window.innerWidth <= 1370);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div data-scroll-section>
      <div className="z-50 navbar">
        <div className="navbar-content">
          <h1 id="navh1 " className=""></h1>
          <div
            id="menu"
            className={`toggle-btn w-full  ${navbarBgColor}    flex items-center   justify-between px-10  align-middle`}
          >
            <div className="">
              <Link href="/">
                <img
                  id="logo"
                  className="lg:w-[106px] lg:h-[80px] md:w-16 w-24 logo"
                  src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Companylogo_lok0s3_fgcea5.svg"
                  alt="companylogo"
                />{" "}
              </Link>
            </div>

            <div className="w-full h-20">
              <Link className="cursor-default" href="#">
                <div className=" w-full h-20"></div>
              </Link>
            </div>
            <div
              onClick={menu}
              className="w-20  h-12 cursor-pointer  flex align-midde items-center  py-2 px-2 menu-toggle"
            >
              <span
                className="one px-2 mb-2 w-12   bg-gray-500"
                ref={oneRef}
              ></span>
              <span className="two w-10  bg-gray-500" ref={twoRef}></span>
            </div>
          </div>
          <div className="menu w-screen  h-screen " ref={menuRef}>
            <div className="flex justify-center items-center h-screen">
              <div className="w-screen lg:flex lg:flex-end lg:items-center   justify-around menu-items">
                {isSmallScreen && isMediumWidth ? (
                  <div className="text-white md:flex md:flex-col md:gap-6  text-4xl  px-10 md:mt-24 ">
                    <ul>
                      {navigationItems.map((item) => {
                        if (location.pathname !== item.path) {
                          const isDisabled = [].includes(item.label);
                          return (
                            <li
                              key={item.path}
                              className={`lg:mb-8 ${
                                isDisabled
                                  ? "text-gray-400"
                                  : "hover:text-cyan-400"
                              }`}
                            >
                              <Link
                                href={isDisabled ? "#" : item.path}
                                disabled={isDisabled}
                                style={{
                                  color: isDisabled ? "gray" : "inherit",
                                }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="text-white md:flex md:flex-col md:gap-6  text-3xl md:text-[45px] px-10 md:mt-24 lg:mt-10">
                    <ul>
                      {navigationItems.map((item) => {
                        if (location.pathname !== item.path) {
                          const isDisabled = [
                            // "Blogs",
                          ].includes(item.label);
                          return (
                            <li
                              key={item.path}
                              className={`lg:mb-8 ${
                                isDisabled
                                  ? "text-gray-400"
                                  : "hover:text-cyan-400"
                              }`}
                            >
                              <Link
                                href={isDisabled ? "#" : item.path}
                                disabled={isDisabled}
                                style={{
                                  color: isDisabled ? "gray" : "inherit",
                                }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                )}
                <div className="text-white md:text-2xl mt-10 px-10">
                  <ul>
                    {/* <li className="lg:mb-5 text-[#646060] hover:text-white ">
                    <Link to="/login">Login</Link>
                  </li> */}

                    {/* <li className="lg:mb-5 text-[#646060] hover:text-white ">
                    <Link to="/blog">Blogs</Link>
                  </li> */}
                    <li className="lg:mb-5 text-[#646060] hover:text-white ">
                      <Link href="/privacy">Privacy & legal</Link>
                    </li>
                    <li className="flex lg:flex-col justify-between items-center lg:items-start gap-2 text-[#646060] hover:text-white ">
                      <Link className="lg:mb-5 mb-5" href="/terms">
                        Terms & Conditions
                      </Link>
                    </li>
                    {/* <li className="flex lg:flex-col justify-between items-center lg:items-start gap-2 text-[#646060] hover:text-white " onClick={handleClose}>
                    <Link className="lg:mb-5 mb-5" to="/">
                      Close
                    </Link>
                  </li> */}
                    <li>
                      <div className="flex gap-2 lg:gap-10">
                        <span
                          onClick={() =>
                            window.open(
                              "https://www.facebook.com/lymdatalabs/",
                              "_blank"
                            )
                          }
                          className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                        >
                          <SlSocialFacebook />
                        </span>
                        <span
                          onClick={() =>
                            window.open("https://twitter.com/lymdata", "_blank")
                          }
                          className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                        >
                          <SlSocialTwitter />
                        </span>
                        <span
                          onClick={() =>
                            window.open(
                              "https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==",
                              "_blank"
                            )
                          }
                          className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                        >
                          <SlSocialInstagram />
                        </span>
                        <span
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/company/lymdata-labs",
                              "_blank"
                            )
                          }
                          className="  cursor-pointer text-[#646060] hover:text-white border border-black hover:border-white rounded-full p-2"
                        >
                          <SlSocialLinkedin />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavbarNew;
