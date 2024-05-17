"use client"
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // heading

  const [showWowText, setShowWowText] = useState(false);

  useEffect(() => {
    const checkScreenHeight = () => {
      const screenHeight = window.innerHeight;

      // Check if the screen height is greater than 1000
      if (screenHeight > 1000) {
        setShowWowText(true);
      } else {
        setShowWowText(false);
      }
    };

    // Check the screen height when the component mounts
    checkScreenHeight();

    // Add an event listener to check when the window is resized
    window.addEventListener("resize", checkScreenHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenHeight);
    };
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill;
    };
  }, []);

 

  //get mouse position
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 280 : 30;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <>
      <section className="scroll-section-outer overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scoll-section-inner h-screen w-[300vw]  flex flex-row relative"
          >
            <div className="scroll-section h-screen bg-black  w-screen flex justify-center items-center">
              <section className="h-screen relative w-screen">
                <motion.div
                  animate={{
                    WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                      mousePosition.y - size / 2
                    }px`,
                    WebkitMaskSize: `${size}px`,
                  }}
                  transition={{ type: "tween", ease: "backOut" }}
                  className="h-full w-full flex items-center justify-center text-white absolute mask"
                  style={{ zIndex: 2, pointerEvents: "all" }}
                >
                  <p
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-[800px] text-center text-white text-[64px] font-bold leading-[65px]"
                  >
                    We <span className="text-black">Create</span> extraordinary
                    digital experiences.
                  </p>
                </motion.div>
                <div id="stars"></div>
                {/* <div id="stars"></div> */}

                <div className="h-full w-full flex items-center justify-center  text-white absolute  ">
                  <p className="w-[800px] text-center font-bold text-[64px] leading-[66px]">
                    We <span className="text-[#34a4ff]">Create</span>{" "}
                    extraordinary digital experiences.
                  </p>
                </div>
              </section>
              <div className="fixed headerz top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-400 text-gray-300">
                <div className="max-w-[1340px] mx-auto overflow-hidden">
                  <div className="">
                    <div className=" hider">
                      {showWowText ? (
                        <section className="max-w-[1640px]">
                          <div className=" flex items-center text-center z-0">
                            <div className="  flex flex-col md:justify-center font-aeonic uppercase text-[134px] mx-auto">
                              <div className="col  ">
                                <h6 className="md:text-left whitespace-nowrap   xl:w-full xl:text-[134px] lg:text-[100px]  md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ">
                                  <div>Data-driven</div>
                                </h6>
                                <h6 className="md:text-left text-center whitespace-nowrap  xl:w-full xl:text-[134px] lg:text-[100px] md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0">
                                  <div>Solutions</div>
                                </h6>
                                <h6 className="md:text-left text-center whitespace-nowrap   xl:w-[1000px] xl:text-[134px] lg:text-[80px] md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0">
                                  <div> Shaping your</div>
                                </h6>
                                <h6 className="md:text-left text-center xl:w-full  whitespace-nowrap  xl:text-[134px]   lg:text-[83px] w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0">
                                  <div>digital Success</div>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </section>
                      ) : (
                        <section className="max-w-[1640px]  ">
                          <div className=" hider  flex items-center text-center z-0 md:min-h-screen  mx-auto ">
                            <div className=" flex  flex-col md:justify-center font-aeonic uppercase   mx-auto">
                              <div className=" driven">
                                <h5 className="md:text-left   xl:w-full whitespace-nowrap xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full mx-auto md:ml-0">
                                  <div>
                                    <span className="">Data-</span>
                                    <span className="">driven</span>
                                  </div>
                                </h5>
                                <h5 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
                                  <div>Solutions</div>
                                </h5>
                                <h5 className="md:text-left whitespace-nowrap text-center  xl:text-[16vh] lg:text-[8vh] md:text-7xl text-4xl md:w-full w-full md:ml-0">
                                  <div> Shaping your</div>
                                </h5>
                                <h5 className="md:text-left text-center whitespace-nowrap xl:w-full xl:text-[16vh] lg:text-[8vh] w-full mx-auto md:text-7xl text-4xl md:w-full md:ml-0">
                                  <div>
                                    {" "}
                                    <span className="">digital</span> Success
                                  </div>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </section>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-section h-screen bg-black w-screen flex justify-center items-center">
              <h3>
                section2
                <div className=" h-[600px] w-[1000px]"></div>
              </h3>
            </div>
            <div className="scroll-section h-screen bg-slate-600 w-screen flex justify-center items-center">
              <h3>section3</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;
